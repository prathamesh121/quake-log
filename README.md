# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-24): 55 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 6.4 | [Mauritius - Reunion region](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ud6h) | 2026-11-24 11:06 | 10 km |
| 2 | 5.3 | [67 km WNW of Mangan, India](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ud3i) | 2026-11-24 01:32 | 10 km |
| 3 | 5.2 | [93 km WSW of Puerto Madero, Mexico](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ud6z) | 2026-11-24 11:51 | 35 km |
| 4 | 5.0 | [209 km SE of Kokopo, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udbn) | 2026-11-24 21:11 | 10 km |
| 5 | 5.0 | [24 km WNW of Piti Village, Guam](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ud73) | 2026-11-24 11:55 | 108 km |
| 6 | 4.8 | [71 km W of Vallenar, Chile](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ud7h) | 2026-11-24 13:22 | 33 km |
| 7 | 4.7 | [18 km ESE of Güvercinlik, Turkey](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ud7z) | 2026-11-24 15:39 | 10 km |
| 8 | 4.6 | [49 km SW of Ovalle, Chile](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udb8) | 2026-11-24 20:27 | 51 km |
| 9 | 4.5 | [9 km NNW of La Tronosa, Panama](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ud3m) | 2026-11-24 01:55 | 16 km |
| 10 | 4.4 | [15 km SW of Kobayashi, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ud9h) | 2026-11-24 16:41 | 136 km |

[Full report](data/2026/11/2026-11-24.md)
