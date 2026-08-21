#!/usr/bin/env python3
"""Dependency-free checks for the healthcare portal deployment contract."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PACKAGE = ROOT / "package.json"
LOCKFILE = ROOT / "pnpm-lock.yaml"
VERCEL = ROOT / "vercel.json"
VITE = ROOT / "vite.config.ts"
SERVER = ROOT / "server/index.ts"
HTML = ROOT / "client/index.html"
README = ROOT / "README.md"


def main() -> int:
    required = (PACKAGE, LOCKFILE, VERCEL, VITE, SERVER, HTML, README)
    for path in required:
        if not path.is_file():
            raise SystemExit(f"Missing required deployment file: {path.relative_to(ROOT)}")

    package = json.loads(PACKAGE.read_text(encoding="utf-8"))
    vercel = json.loads(VERCEL.read_text(encoding="utf-8"))
    vite = VITE.read_text(encoding="utf-8")
    server = SERVER.read_text(encoding="utf-8")
    html = HTML.read_text(encoding="utf-8")
    readme = README.read_text(encoding="utf-8")

    scripts = package.get("scripts", {})
    if scripts.get("check") != "tsc --noEmit":
        raise SystemExit("package.json must retain the TypeScript check script")
    if scripts.get("build") != "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist":
        raise SystemExit("package.json build script changed from the documented Vercel pipeline")
    if package.get("packageManager", "").startswith("pnpm@") is False:
        raise SystemExit("package.json must declare pnpm as its package manager")

    if vercel.get("buildCommand") != "pnpm run build":
        raise SystemExit("vercel.json must use pnpm run build")
    if vercel.get("installCommand") != "pnpm install":
        raise SystemExit("vercel.json must use pnpm install")
    if vercel.get("outputDirectory") != "dist/public":
        raise SystemExit("vercel.json outputDirectory must remain dist/public")
    if 'outDir: path.resolve(import.meta.dirname, "dist/public")' not in vite:
        raise SystemExit("Vite output must remain dist/public")
    if 'path.join(process.cwd(), "dist/public")' not in server and 'dist/public' not in server:
        raise SystemExit("Production server must continue serving dist/public")

    if "chat-messenger" not in html or "deployment" not in html:
        raise SystemExit("Embedded Google Chat Messenger deployment configuration is missing")

    icon_section = readme.split("### Stack at a glance", 1)[-1].split("| Area |", 1)[0]
    badges = re.findall(r"\[!\[([^]]+)\]\(([^)]+)\)\]", icon_section)
    if len(badges) < 10:
        raise SystemExit(f"Expected at least 10 technology badges, found {len(badges)}")
    if "1.26043595e+08+Samarssj@users.noreply.github.com" in readme:
        raise SystemExit("README contains malformed generated GitHub email metadata")

    print("Smoke checks passed: pnpm/Vite/Vercel contract, chat integration, and README assets.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
