# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-07): 33 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.5 | [74 km NE of Hasaki, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twrq) | 2026-11-07 11:07 | 32 km |
| 2 | 4.9 | [southern Mid-Atlantic Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twrt) | 2026-11-07 11:35 | 10 km |
| 3 | 4.8 | [36 km WNW of Poso, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twmr) | 2026-11-06 19:07 | 10 km |
| 4 | 4.7 | [156 km ESE of Modisi, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twrh) | 2026-11-07 09:47 | 39 km |
| 5 | 4.6 | [South Sandwich Islands region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twqw) | 2026-11-07 07:14 | 104 km |
| 6 | 4.6 | [11 km ENE of Yigo Village, Guam](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twqm) | 2026-11-06 22:37 | 113 km |
| 7 | 4.5 | [57 km SW of Ollagüe, Chile](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twrp) | 2026-11-07 10:53 | 111 km |
| 8 | 4.5 | [101 km SSE of Palekastro, Greece](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twhq) | 2026-11-06 15:26 | 41 km |
| 9 | 4.4 | [92 km W of Meulaboh, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twqr) | 2026-11-07 06:53 | 50 km |
| 10 | 4.4 | [75 km SSE of Kuril’sk, Russia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twp3) | 2026-11-06 23:15 | 79 km |

[Full report](data/2026/11/2026-11-07.md)
