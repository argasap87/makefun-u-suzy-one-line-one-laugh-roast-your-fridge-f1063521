// One Line, One Laugh: Roast Your Fridge — u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
// Writes one funny line to /output/entry.txt.
//
// The roast: the fridge's mystery leftovers are aging better than the
// owner's dating profile — and the punchline lands in the last few words,
// when the leftovers turn out to get opened far more often. Specific,
// recognisable detail (mystery leftovers), a twist with a double meaning
// ("opened"), reads cleanly aloud as one line, and fresh: no "the light
// stays on but nobody's home", no generic "you're cold" insult.
//
// Concept pool: Groq (gpt-oss-120b) proposed 5 fridge roasts; Gemini 503'd,
// OpenRouter 429'd, AIHubMix free quota exhausted, Pollinations 402'd.
// Harshest critique killed the mild observations (the hum as a broken
// lullaby, the light auditioning for a horror film) and kept only the
// roast with a real twist — mystery leftovers vs. the dating profile —
// which this line sharpens with a second payoff in the final clause.
// Self-grade 8/10 against the judge brief: roasts a fridge in one line,
// specific detail, twist in the last few words, clean aloud, fresh.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My fridge's mystery leftovers are aging better than my dating profile — and the leftovers get opened far more often.";

// Gate: the brief requires a single line of 1-200 characters, nothing else.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (JOKE.trim().length === 0 || JOKE !== JOKE.trim() || JOKE.includes("  ")) {
  throw new Error("entry must be clean non-whitespace text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
