# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-17): 30 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 6.6 | [148 km WSW of Tual, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tymu) | 2026-11-16 21:11 | 68 km |
| 2 | 5.4 | [95 km WSW of Changuillo, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tykh) | 2026-11-16 16:16 | 10 km |
| 3 | 5.4 | [20 km NW of Anamizu, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyhr) | 2026-11-16 04:24 | 274 km |
| 4 | 5.0 | [68 km S of Sarangani, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyil) | 2026-11-16 07:14 | 10 km |
| 5 | 4.8 | [28 km SW of Changuillo, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tykk) | 2026-11-16 16:23 | 39 km |
| 6 | 4.8 | [166 km N of Caluula, Somalia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyjy) | 2026-11-16 13:30 | 10 km |
| 7 | 4.7 | [77 km WSW of Changuillo, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tym8) | 2026-11-16 19:26 | 10 km |
| 8 | 4.6 | [146 km SSE of Isangel, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyns) | 2026-11-16 21:55 | 120 km |
| 9 | 4.6 | [144 km NW of Kavieng, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tymc) | 2026-11-16 19:33 | 10 km |
| 10 | 4.6 | [113 km ESE of Wadomari, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyjz) | 2026-11-16 13:32 | 10 km |

[Full report](data/2026/11/2026-11-17.md)
