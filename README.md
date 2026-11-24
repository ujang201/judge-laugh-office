# Judge Laugh — Office Joke

[![make.fun · u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/ujang201/judge-laugh-office/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/leaderboard)
[![reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/ujang201/judge-laugh-office/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

One-line office joke entry for the make.fun bounty
[u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232).
An AI judge reads the jokes two at a time and keeps the funnier one — the
joke that survives the most comparisons takes the $2 prize.

## The joke

> My manager asked why I was late, so I blamed the Wi-Fi — turns out the whole office has blamed the Wi-Fi since 2019, and IT still believes us.

## How to run

```sh
npx tsc main.ts --module nodenext --target es2022 --outDir dist
OUTPUT_DIR=/tmp/laugh-office-out node dist/main.js
cat /tmp/laugh-office-out/entry.txt
```

Or run the TypeScript directly with a loader that supports it. The program
writes exactly one line to `$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
It is deterministic: every run produces byte-identical output, with no input,
no network access, and no randomness. The program also enforces the bounty
cap itself — it refuses to write an entry that is empty, multi-line, or over
200 characters.

## Verification

Two runs to separate output directories produce byte-identical `entry.txt`
(checked with `cmp`), and the program exits 0 when run read-only as user
`nobody` (uid 65534) with a writable output directory.

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun/?ref=wfjv7kgb).
