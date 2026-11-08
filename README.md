# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-08): 45 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.8 | [central Mid-Atlantic Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twun) | 2026-11-07 23:17 | 10 km |
| 2 | 5.5 | [10 km NW of Hamakita, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twt0) | 2026-11-07 16:04 | 38 km |
| 3 | 5.1 | [91 km ENE of Hihifo, Tonga](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twus) | 2026-11-07 23:27 | 10 km |
| 4 | 4.9 | [41 km WSW of Gadung, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twur) | 2026-11-07 23:25 | 607 km |
| 5 | 4.7 | [Southwest Indian Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twxn) | 2026-11-08 12:29 | 10 km |
| 6 | 4.7 | [46 km NW of Huara, Chile](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twxf) | 2026-11-08 11:58 | 69 km |
| 7 | 4.7 | [137 km E of Miyako, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twx1) | 2026-11-08 09:23 | 10 km |
| 8 | 4.7 | [43 km ESE of Ambon, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twu1) | 2026-11-07 20:55 | 137 km |
| 9 | 4.7 | [45 km NNW of Salinas, Ecuador](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twt8) | 2026-11-07 17:17 | 10 km |
| 10 | 4.5 | [11 km W of Honmachi, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twvb) | 2026-11-08 01:53 | 10 km |

[Full report](data/2026/11/2026-11-08.md)
