// Dad Joke Showdown — make.fun entry.
// The program writes a single dad joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I always carry a pencil in case I need to draw the line — my daughter says that's exactly the point, Dad.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
