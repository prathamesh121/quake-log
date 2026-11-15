# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-15): 42 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.5 | [9 km E of Union, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyek) | 2026-11-15 13:41 | 10 km |
| 2 | 5.5 | [Fiji region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyca) | 2026-11-15 05:15 | 470 km |
| 3 | 4.9 | [7 km SE of Tagbina, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty9l) | 2026-11-14 16:04 | 154 km |
| 4 | 4.8 | [19 km NW of Albardón, Argentina](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tybx) | 2026-11-15 03:59 | 109 km |
| 5 | 4.7 | [92 km NW of Houma, Tonga](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyd3) | 2026-11-15 07:36 | 178 km |
| 6 | 4.7 | [east central Pacific Ocean](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyay) | 2026-11-14 22:23 | 10 km |
| 7 | 4.7 | [24 km S of Yacuiba, Bolivia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty9z) | 2026-11-14 18:04 | 506 km |
| 8 | 4.6 | [96 km SSE of Pondaguitan, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty9v) | 2026-11-14 16:56 | 65 km |
| 9 | 4.6 | [62 km WNW of San Antonio de los Cobres, Argentina](https://earthquake.usgs.gov/earthquakes/eventpage/us7000ty9n) | 2026-11-14 16:36 | 198 km |
| 10 | 4.5 | [25 km N of Ruteng, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyan) | 2026-11-14 21:24 | 10 km |

[Full report](data/2026/11/2026-11-15.md)
