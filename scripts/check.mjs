import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
const sources = readdirSync("src", { recursive: true }).filter((path) => path.endsWith(".astro"));
if (sources.length === 0) throw new Error("No Astro sources found; refusing a vacuous type check.");
const cli = fileURLToPath(new URL("../node_modules/astro/bin/astro.mjs", import.meta.url));
const result = spawnSync(process.execPath, [cli, "check"], { encoding: "utf8" });
process.stdout.write(result.stdout ?? "");
process.stderr.write(result.stderr ?? "");
if (result.error) throw result.error;
const report = (result.stdout ?? "").replace(/\u001b\[[0-9;]*m/g, "");
const count = /Result \((\d+) files?\)/.exec(report);
if (!count || Number(count[1]) < sources.length) {
  console.error("Type checking did not cover all Astro sources. Check tsconfig include paths and TypeScript compatibility.");
  process.exit(1);
}
process.exit(result.status ?? 1);
