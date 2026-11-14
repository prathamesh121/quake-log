# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-14): 47 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.5 | [northern Mid-Atlantic Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty84) | 2026-11-14 09:26 | 10 km |
| 2 | 5.2 | [State of Yap, Federated States of Micronesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty7d) | 2026-11-14 06:52 | 10 km |
| 3 | 5.2 | [off the west coast of northern Sumatra](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty6n) | 2026-11-14 02:59 | 10 km |
| 4 | 5.1 | [153 km NW of Kavieng, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty56) | 2026-11-13 23:30 | 10 km |
| 5 | 4.9 | [7 km SE of Tagbina, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty9l) | 2026-11-14 16:04 | 154 km |
| 6 | 4.9 | [south of the Kermadec Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty90) | 2026-11-14 13:17 | 12 km |
| 7 | 4.8 | [West Chile Rise](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty7b) | 2026-11-14 06:33 | 10 km |
| 8 | 4.7 | [24 km S of Yacuiba, Bolivia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty9z) | 2026-11-14 18:04 | 506 km |
| 9 | 4.7 | [54 km NW of San Antonio de los Cobres, Argentina](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty6p) | 2026-11-14 03:18 | 216 km |
| 10 | 4.6 | [96 km SSE of Pondaguitan, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty9v) | 2026-11-14 16:56 | 65 km |

[Full report](data/2026/11/2026-11-14.md)
