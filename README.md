# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-16): 32 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.4 | [95 km WSW of Changuillo, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tykh) | 2026-11-16 16:16 | 10 km |
| 2 | 5.4 | [20 km NW of Anamizu, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyhr) | 2026-11-16 04:24 | 274 km |
| 3 | 5.0 | [68 km S of Sarangani, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyil) | 2026-11-16 07:14 | 10 km |
| 4 | 5.0 | [256 km SSE of Ambon, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyg6) | 2026-11-15 20:51 | 306 km |
| 5 | 4.9 | [44 km S of Jurm, Afghanistan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyga) | 2026-11-15 21:37 | 191 km |
| 6 | 4.8 | [28 km SW of Changuillo, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tykk) | 2026-11-16 16:23 | 39 km |
| 7 | 4.8 | [166 km N of Caluula, Somalia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyjy) | 2026-11-16 13:30 | 10 km |
| 8 | 4.8 | [141 km ESE of Petropavlovsk-Kamchatsky, Russia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tygk) | 2026-11-15 22:38 | 10 km |
| 9 | 4.6 | [113 km ESE of Wadomari, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyjz) | 2026-11-16 13:32 | 10 km |
| 10 | 4.5 | [78 km S of Severo-Kuril’sk, Russia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyjx) | 2026-11-16 13:25 | 85 km |

[Full report](data/2026/11/2026-11-16.md)
