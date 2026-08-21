#!/usr/bin/env python3
"""Reject commits that cannot be attributed to the repository owner on GitHub."""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from dataclasses import dataclass

CANONICAL_EMAIL = "126043595+Samarssj@users.noreply.github.com"
GITHUB_COMMITTER_EMAIL = "noreply@github.com"
CANONICAL_RE = re.compile(re.escape(CANONICAL_EMAIL) + r"$", re.IGNORECASE)


@dataclass(frozen=True)
class CommitIdentity:
    sha: str
    author_email: str
    committer_email: str
    subject: str


def read_commits(revision: str) -> list[CommitIdentity]:
    output = subprocess.check_output(
        ["git", "log", "--format=%H%x09%ae%x09%ce%x09%s", revision],
        text=True,
    )
    commits: list[CommitIdentity] = []
    for line in output.splitlines():
        sha, author_email, committer_email, subject = line.split("\t", 3)
        commits.append(CommitIdentity(sha, author_email, committer_email, subject))
    return commits


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--range", default="HEAD", dest="revision")
    args = parser.parse_args()

    try:
        commits = read_commits(args.revision)
    except (subprocess.CalledProcessError, ValueError) as exc:
        print(f"Unable to inspect commit identities: {exc}", file=sys.stderr)
        return 2

    violations = [
        f"{commit.sha[:12]} {commit.subject!r}: author={commit.author_email!r}, "
        f"committer={commit.committer_email!r}"
        for commit in commits
        if not CANONICAL_RE.fullmatch(commit.author_email)
        or not (
            CANONICAL_RE.fullmatch(commit.committer_email)
            or commit.committer_email.lower() == GITHUB_COMMITTER_EMAIL
        )
    ]

    if violations:
        print("Commit identity policy violation(s):", file=sys.stderr)
        print("\n".join(violations), file=sys.stderr)
        print(
            f"Use {CANONICAL_EMAIL} for local author and committer metadata. "
            f"GitHub-generated commits may use {GITHUB_COMMITTER_EMAIL} as committer.",
            file=sys.stderr,
        )
        return 1

    print(f"Validated {len(commits)} commit identity record(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
