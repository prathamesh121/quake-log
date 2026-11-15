# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-15): 41 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.5 | [9 km E of Union, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyek) | 2026-11-15 13:41 | 10 km |
| 2 | 5.5 | [Fiji region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyca) | 2026-11-15 05:15 | 470 km |
| 3 | 5.1 | [169 km NW of Gorontalo, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyf4) | 2026-11-15 15:41 | 487 km |
| 4 | 5.0 | [74 km N of Pārūn, Afghanistan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyfh) | 2026-11-15 17:48 | 101 km |
| 5 | 4.8 | [19 km NW of Albardón, Argentina](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tybx) | 2026-11-15 03:59 | 109 km |
| 6 | 4.7 | [92 km NW of Houma, Tonga](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyd3) | 2026-11-15 07:36 | 178 km |
| 7 | 4.7 | [east central Pacific Ocean](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyay) | 2026-11-14 22:23 | 10 km |
| 8 | 4.5 | [25 km N of Ruteng, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyan) | 2026-11-14 21:24 | 10 km |
| 9 | 4.4 | [22 km ESE of Ruteng, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tydm) | 2026-11-15 09:24 | 10 km |
| 10 | 4.4 | [south of the Fiji Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyde) | 2026-11-15 08:50 | 545 km |

[Full report](data/2026/11/2026-11-15.md)
