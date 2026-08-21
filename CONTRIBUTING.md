# Contributing to Healthcare Card Portal

## Commit identity

GitHub uses commit author and committer metadata when rendering the commit timeline. Configure local commits with the repository owner’s canonical GitHub no-reply address so each change resolves to one account and one avatar:

```bash
git config user.name "Samarssj"
git config user.email "126043595+Samarssj@users.noreply.github.com"
```

Do not copy an email address displayed in scientific notation. That form is malformed metadata and can make GitHub render separate author and committer avatars.

GitHub-generated commits may use `noreply@github.com` as the committer address; the authored change must still use the canonical address above.

## Before opening a pull request

Run the same repository checks used for the Vercel delivery path:

```bash
pnpm install
pnpm run check
pnpm run build
python3 scripts/smoke_test.py
python3 scripts/check_commit_identities.py --range HEAD
```

Keep changes focused, preserve the `dist/public` output contract, and do not commit environment variables or deployment credentials.
