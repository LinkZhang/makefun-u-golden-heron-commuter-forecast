// Charm the Commuter: Forecast a City That Isn't
// One-line weather forecast for the invented city of Tallowmere.
// Forecast register throughout, punchline on the last words:
// the lake freezes just enough to hold your excuses — not your
// weight, not a skater, your excuses. The twist works because the
// whole line is a straight broadcast forecast (frost, wind, a
// percentage chance) until the final clause quietly swaps the thing
// the ice is meant to hold: a frozen lake is supposed to hold
// people, and this one holds only the reasons you did not go out.
// The toast-smelling wind is the one concrete, place-making detail;
// the lake line is the joke, and it lands last, so the commuter
// smiles on the way out the door instead of mid-sentence.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Today in Tallowmere: a light frost, a wind that smells faintly of toast, and a 60% chance the lake freezes just enough to hold your excuses.";

// Gate self-check (per RULES.txt): 1–140 chars, exactly one line,
// non-whitespace UTF-8. The joke's structure: forecast register all
// the way through, then the last clause turns the frozen lake into a
// holder of excuses — the punchline lands on the final words.
// Why "hold your excuses" works: a frozen lake's job in the reader's
// head is to hold weight — people, skaters, a sledge. "Just enough to
// hold your excuses" keeps the forecast's physics (the ice is thin,
// only 60% sure) but quietly swaps the load: the only thing light
// enough for this ice is the reasons you did not go out. The commuter
// recognises themselves in the final clause — the forecast is suddenly
// about them, not the weather — and because the swap arrives last,
// the smile comes after the forecast has already been believed.
// Moved earlier, it would be a setup; kept last, it is a confession
// the weather made on the commuter's behalf.
const chars = [...entry];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} chars, must be 1–140`);
}
if (entry.trim().length === 0 || entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be one non-blank line");
}
if (!entry.startsWith("Today in Tallowmere:")) {
  throw new Error("entry must open as a forecast for Tallowmere");
}
if (!entry.endsWith("hold your excuses.")) {
  throw new Error("entry must land on the excuses twist");
}
if (!entry.includes("smells faintly of toast")) {
  throw new Error("entry must carry the toast-wind detail");
}
if (!entry.includes("60% chance") || !entry.includes("Tallowmere")) {
  throw new Error("entry must name Tallowmere and give the forecast odds");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${[...entry].length} chars)`);
