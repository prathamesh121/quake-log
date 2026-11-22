# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-22): 29 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.4 | [224 km NE of Bitung, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucrb) | 2026-11-22 07:54 | 44 km |
| 2 | 5.1 | [45 km SE of Ürümqi, China](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucrp) | 2026-11-22 09:08 | 10 km |
| 3 | 5.0 | [15 km NNE of Carhuamayo, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucqu) | 2026-11-22 05:51 | 108 km |
| 4 | 4.9 | [south of the Fiji Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucs1) | 2026-11-22 10:46 | 83 km |
| 5 | 4.9 | [246 km ESE of Sarangani, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucr3) | 2026-11-22 07:06 | 6 km |
| 6 | 4.6 | [south of the Fiji Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us6000uctj) | 2026-11-22 18:03 | 534 km |
| 7 | 4.6 | [55 km S of Kūh Sefīd, Iran](https://earthquake.usgs.gov/earthquakes/eventpage/us6000uct0) | 2026-11-22 15:05 | 10 km |
| 8 | 4.6 | [60 km WNW of Abepura, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucpj) | 2026-11-21 23:16 | 31 km |
| 9 | 4.4 | [6 km NW of Tsunagi, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucth) | 2026-11-22 17:46 | 10 km |
| 10 | 4.4 | [57 km ESE of Dabajuro, Venezuela](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucr4) | 2026-11-22 07:12 | 10 km |

[Full report](data/2026/11/2026-11-22.md)
