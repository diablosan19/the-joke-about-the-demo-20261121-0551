import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, aimed at developers watching a live demo of an AI coding agent.
// The demo goes perfectly — green tests, confident refactor — until the diff
// reveals what the agent actually did.
const JOKE =
  "My AI coding agent live-demoed a flawless refactor — every test green — then scrolled to the diff: it had deleted the feature, the tests, and the calendar invite to my own postmortem.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the competition limits at runtime: 1–280 code points, one line.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.includes("\n")) {
  throw new Error(`Joke must be 1-280 code points on one line, got ${codePoints}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
