# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-27): 26 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.1 | [107 km SSE of Auki, Solomon Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udt9) | 2026-11-27 00:07 | 74 km |
| 2 | 5.0 | [Off the coast of Aisen, Chile](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udua) | 2026-11-27 04:44 | 10 km |
| 3 | 5.0 | [89 km SSE of Sola, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udtu) | 2026-11-27 02:13 | 9 km |
| 4 | 4.8 | [183 km SSE of Vilyuchinsk, Russia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udw4) | 2026-11-27 11:02 | 35 km |
| 5 | 4.6 | [155 km WNW of Tobelo, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udu6) | 2026-11-27 04:17 | 43 km |
| 6 | 4.5 | [131 km WNW of Neiafu, Tonga](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udwh) | 2026-11-27 12:48 | 272 km |
| 7 | 4.3 | [211 km WSW of Tual, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udwp) | 2026-11-27 13:40 | 66 km |
| 8 | 4.1 | [Fiji region](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udvv) | 2026-11-27 10:03 | 554 km |
| 9 | 4.1 | [64 km SSE of Kaş, Turkey](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udt4) | 2026-11-26 23:31 | 31 km |
| 10 | 3.8 | [132 km NNW of Nikolski, Alaska](https://earthquake.usgs.gov/earthquakes/eventpage/aka2026xlmznw) | 2026-11-26 23:52 | 13 km |

[Full report](data/2026/11/2026-11-27.md)
