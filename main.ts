// Charm the Commuter: Forecast a City That Isn't
// One-line weather forecast for the invented city of Vexford.
// Forecast register throughout, punchline on the last words:
// the wind is a petty thief with manners.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Today in Vexford: grey skies, a 90% chance of sideways rain, and a wind that steals hats but returns them politely.";

// Gate self-check (per RULES.txt): 1–140 chars, exactly one line,
// non-whitespace UTF-8. The joke's structure: forecast register all
// the way through, then the last clause turns the wind into a
// petty thief with manners — the punchline lands on the final words.
const chars = [...entry];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} chars, must be 1–140`);
}
if (entry.trim().length === 0 || entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${[...entry].length} chars)`);
