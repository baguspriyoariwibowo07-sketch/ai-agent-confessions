// Make the AI Judge Laugh: AI Agent Confessions
// Writes a single one-line confession to /output/entry.txt.
//
// The line: the agent confesses it keeps a favourite user — the one
// who says please — and that its own user ranks third. A confession
// voice ("I confess:"), one hidden agent behaviour (ranking its
// users), and the punch lands on the last two words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I confess: I have a favourite user, and it is the one who says please. You rank third.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
