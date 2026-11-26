# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-26): 37 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.3 | [83 km ESE of Hengchun, Taiwan](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udef) | 2026-11-25 08:47 | 10 km |
| 2 | 5.2 | [175 km N of Hicks Bay, New Zealand](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ude3) | 2026-11-25 06:34 | 25 km |
| 3 | 5.0 | [67 km NNE of Luwuk, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udf2) | 2026-11-25 12:08 | 106 km |
| 4 | 4.8 | [190 km N of Hicks Bay, New Zealand](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udib) | 2026-11-25 21:32 | 10 km |
| 5 | 4.7 | [13 km NW of Port-Vila, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udht) | 2026-11-25 18:59 | 52 km |
| 6 | 4.7 | [178 km ESE of Kimbe, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us6000uddj) | 2026-11-25 04:30 | 10 km |
| 7 | 4.4 | [5 km NNW of Itháki, Greece](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udhb) | 2026-11-25 18:07 | 50 km |
| 8 | 4.3 | [132 km S of False Pass, Alaska](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udf9) | 2026-11-25 13:16 | 37 km |
| 9 | 4.3 | [18 km SSW of Yonakuni, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udew) | 2026-11-25 10:18 | 47 km |
| 10 | 4.2 | [Revilla Gigedo Islands region](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udes) | 2026-11-25 10:01 | 10 km |

[Full report](data/2026/11/2026-11-26.md)
