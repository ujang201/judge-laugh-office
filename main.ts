// judge-laugh-office — one-line office joke entry for make.fun.
// Writes the entry text to $OUTPUT_DIR/entry.txt (default /output/entry.txt).
// No input, no network, no randomness: the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke. One line, office life, under the 200-character cap.
// The guard below enforces the cap at runtime so a bad edit fails loudly
// instead of shipping an invalid entry.
const JOKE =
  "My manager asked why I was late, so I blamed the Wi-Fi — " +
  "turns out the whole office has blamed the Wi-Fi since 2019, " +
  "and IT still believes us.";

const MAX_CHARS = 200;

function main(): void {
  if (JOKE.length === 0 || JOKE.length > MAX_CHARS || JOKE.includes("\n")) {
    throw new Error(`entry must be 1 line of 1-${MAX_CHARS} characters`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, JOKE + "\n", "utf8");
}

main();
