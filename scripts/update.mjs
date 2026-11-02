// Saves every magnitude 2.5+ earthquake from the last 24 hours (USGS feed) as a daily report.
import { mkdir, readFile, writeFile } from "node:fs/promises";

const res = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson");
if (!res.ok) throw new Error(`USGS feed failed: ${res.status}`);
const { features } = await res.json();

const quakes = features
  .map(({ properties: p, geometry: g }) => ({
    mag: p.mag,
    place: p.place ?? "Unknown",
    time: new Date(p.time).toISOString().replace("T", " ").slice(0, 16),
    depth: g.coordinates[2],
    tsunami: p.tsunami === 1,
    url: p.url,
  }))
  .sort((a, b) => b.mag - a.mag);

const today = new Date().toISOString().slice(0, 10);
const esc = (s) => s.replace(/\|/g, "\\|");
const row = (q, i) =>
  `| ${i + 1} | ${q.mag.toFixed(1)} | [${esc(q.place)}](${q.url}) | ${q.time} | ${q.depth.toFixed(0)} km |${q.tsunami ? " ⚠️" : ""}`;
const header = ["| # | Mag | Location | Time (UTC) | Depth |", "|---|---|---|---|---|"];

const strongest = quakes[0];
const report = [
  `# Earthquakes M2.5+: 24 hours to ${today}`,
  "",
  `**${quakes.length}** earthquakes. Strongest: **M${strongest?.mag.toFixed(1)}** ${strongest?.place ?? ""}.`,
  "",
  ...header,
  ...quakes.map(row),
  "",
].join("\n");

const [y, m] = today.split("-");
const path = `data/${y}/${m}/${today}.md`;
await mkdir(`data/${y}/${m}`, { recursive: true });
await writeFile(path, report);

const marker = "<!-- latest -->";
const readme = await readFile("README.md", "utf8");
await writeFile(
  "README.md",
  `${readme.split(marker)[0]}${marker}\n## Last 24 hours (${today}): ${quakes.length} quakes\n\n${[...header, ...quakes.slice(0, 10).map(row)].join("\n")}\n\n[Full report](${path})\n`,
);
console.log(`Saved ${quakes.length} quakes to ${path}`);
