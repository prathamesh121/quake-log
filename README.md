# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-13): 45 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.8 | [79 km WSW of Changuillo, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty1a) | 2026-11-13 16:43 | 10 km |
| 2 | 5.2 | [79 km NE of Kuqa, China](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty14) | 2026-11-13 16:17 | 10 km |
| 3 | 5.2 | [West Chile Rise](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty0s) | 2026-11-13 14:12 | 10 km |
| 4 | 5.1 | [South Sandwich Islands region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty3q) | 2026-11-13 19:04 | 64 km |
| 5 | 5.1 | [39 km S of Moíres, Greece](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txx9) | 2026-11-13 00:05 | 43 km |
| 6 | 5.0 | [85 km W of Mwene-Ditu, Democratic Republic of the Congo](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txxl) | 2026-11-13 01:12 | 10 km |
| 7 | 4.9 | [south of the Kermadec Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty4w) | 2026-11-13 22:10 | 37 km |
| 8 | 4.9 | [south of the Fiji Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty3g) | 2026-11-13 18:55 | 563 km |
| 9 | 4.9 | [southeast of the Loyalty Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txz3) | 2026-11-13 09:55 | 10 km |
| 10 | 4.9 | [Pagan region, Northern Mariana Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txxy) | 2026-11-13 02:55 | 220 km |

[Full report](data/2026/11/2026-11-13.md)
