# Smith Portfolio Codex Guide

This repository contains Smith Timileyin Onyekwereh's portfolio and an unfinished preview carried over from earlier work.

## Start here

Before changing anything, read:

1. `PRODUCT.md`
2. `DESIGN.md`
3. `PREVIEW_HANDOFF.md`
4. `BUILD_STATE.json`

Inspect the current Git status before editing. Preserve all untracked preview files and evidence.

## Working rules

- Treat the facts in `PRODUCT.md` as the approved source for Smith's identity, experience, and project descriptions.
- Keep the preview separate from the original site until Smith approves a replacement.
- Show and verify prominent visual changes before treating them as approved.
- Do not publish, deploy, replace the original `index.html`, commit, or push without Smith's explicit approval.
- Do not expose private contact details or information that is not already approved for the public portfolio.

## Validation

The current preview uses the scripts in `package.json`:

- `npm run preview`
- `npm test`
- `npm run check`
- `npm run test:browser`

Use the checks relevant to the change and inspect the visible result before reporting completion.
