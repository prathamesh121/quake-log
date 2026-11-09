# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-09): 48 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 6.4 | [30 km WSW of Lata, Solomon Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx16) | 2026-11-09 03:34 | 17 km |
| 2 | 5.7 | [106 km ENE of Hasaki, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx1f) | 2026-11-09 04:52 | 24 km |
| 3 | 5.4 | [160 km E of Masohi, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx32) | 2026-11-09 09:48 | 10 km |
| 4 | 5.3 | [80 km ENE of Lagunas, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx38) | 2026-11-09 10:23 | 11 km |
| 5 | 5.1 | [south of the Fiji Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx0f) | 2026-11-09 00:46 | 535 km |
| 6 | 4.9 | [Mid-Indian Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx47) | 2026-11-09 15:04 | 10 km |
| 7 | 4.9 | [south of the Fiji Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx0x) | 2026-11-09 02:21 | 136 km |
| 8 | 4.8 | [149 km NW of Port-Olry, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx6m) | 2026-11-09 19:27 | 10 km |
| 9 | 4.8 | [183 km E of Masohi, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx34) | 2026-11-09 09:53 | 10 km |
| 10 | 4.8 | [26 km SW of Lata, Solomon Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx1p) | 2026-11-09 05:16 | 10 km |

[Full report](data/2026/11/2026-11-09.md)
