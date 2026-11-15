# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-15): 49 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.5 | [9 km E of Union, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyek) | 2026-11-15 13:41 | 10 km |
| 2 | 5.5 | [Fiji region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyca) | 2026-11-15 05:15 | 470 km |
| 3 | 5.1 | [169 km NW of Gorontalo, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyf4) | 2026-11-15 15:41 | 487 km |
| 4 | 5.0 | [256 km SSE of Ambon, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyg6) | 2026-11-15 20:51 | 306 km |
| 5 | 5.0 | [74 km N of Pārūn, Afghanistan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyfh) | 2026-11-15 17:48 | 101 km |
| 6 | 4.9 | [44 km S of Jurm, Afghanistan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyga) | 2026-11-15 21:37 | 191 km |
| 7 | 4.8 | [141 km ESE of Petropavlovsk-Kamchatsky, Russia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tygk) | 2026-11-15 22:38 | 10 km |
| 8 | 4.8 | [19 km NW of Albardón, Argentina](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tybx) | 2026-11-15 03:59 | 109 km |
| 9 | 4.7 | [92 km NW of Houma, Tonga](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyd3) | 2026-11-15 07:36 | 178 km |
| 10 | 4.6 | [27 km ESE of Union, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyes) | 2026-11-15 14:17 | 10 km |

[Full report](data/2026/11/2026-11-15.md)
