# Portfolio preview
Approved content: PRODUCT.md. Original index.html remains unchanged. No commit, push or public deployment is authorized or performed.

## Run locally
Run `node tests/serve.cjs` from this repository, then open http://127.0.0.1:4174/preview.html. The preview server binds only to loopback and serves an allowlist of web assets; it does not serve project notes or source films.

## Review flows
- Work: log up to two sample videos, watch the amount change, reset.
- Review panel: simulate a connection error, retry; local approve/revise/reject buttons do not send a decision or publish.
- Smithstem: switch NorthQuest, CashDrive and AURA; content stays business-specific and labelled illustrative.
- Case-study links: hash-routed readable pages, return links and browser back.
- Films: click to load a watermarked film, native controls; another film pauses the first. Originals untouched.
- Contact: email and LinkedIn. CV intentionally omitted pending approval.

## Verification
`node tests/preview.test.cjs` checks approved content. `node --check preview.js` checks syntax. `PORTFOLIO_NODE_MODULES` points to the supplied node_modules directory for `node tests/browser.cjs`; browser tests use installed Chrome. Media evidence in preview-media/provenance.json includes unchanged source hashes, full decode, dimensions, codec and faststart verification.

## Review boundary
Latest independent review: inset focus ring and small-label corrections confirmed. Film controls have explicit keyboard screenshots at 1440 and390 widths. Use `node tests/focus.cjs` with the same runtime environment to repeat. Desktop/mobile tests are browser emulation, not physical-device or full screen-reader certification.

Portfolio demonstrations are fictional, not production integrations. Historical claims were approved by the user, not independently audited. Screenshots have date/state differences and are captioned as historical. No payment processing, messages, business writes, or analytics are invoked. This is a review route, not the final public homepage. Publishing and replacing index.html remain approval-gated.
