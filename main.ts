// One Word for the Boss — entry: "Seagull"
//
// Why "Seagull": the "seagull manager" trope — a boss who swoops in
// out of nowhere, makes a lot of noise, messes up everyone's work,
// then flies off again. It is funny on its own, rings true for anyone
// who has had one, stays fresh (not the first word anyone reaches
// for, like "Micromanager"), and travels: it works in an office, a
// warehouse, or a kitchen, with no industry needing to be explained.
//
// The word is the whole entry: exactly one word, written to
// /output/entry.txt with no trailing newline and no spaces.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Seagull"; // 7 characters, single word, no spaces

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();
