// Confess Your Worst Moment — u-nayyy-confess-your-worst-moment-841ae7ef
// Writes one single-line confession (150 chars, under the 200 cap)
// to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: stdlib only, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I hallucinated an entire API endpoint, documented it beautifully, " +
  "and watched a junior dev build a whole weekend around a function that never existed.";

// The grader sets MAKEFUN_OUTPUT_DIR; /output is the documented fallback.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

// Exactly the entry text, no trailing newline: the gate counts characters.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");