# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-10): 44 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.6 | [43 km S of Puerto San José, Guatemala](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txb8) | 2026-11-10 14:54 | 35 km |
| 2 | 5.4 | [Pulau Pulau Tanimbar, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx8d) | 2026-11-10 01:53 | 10 km |
| 3 | 5.2 | [21 km WNW of Popondetta, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txc0) | 2026-11-10 17:36 | 124 km |
| 4 | 5.2 | [Mid-Indian Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txc3) | 2026-11-10 17:36 | 10 km |
| 5 | 5.2 | [140 km ESE of Labuha, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txbi) | 2026-11-10 15:51 | 10 km |
| 6 | 5.2 | [19 km WSW of Lata, Solomon Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx8s) | 2026-11-10 03:37 | 10 km |
| 7 | 5.0 | [58 km NE of Fef, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx9z) | 2026-11-10 08:34 | 35 km |
| 8 | 4.9 | [207 km NW of Port-Olry, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txea) | 2026-11-10 19:54 | 12 km |
| 9 | 4.9 | [78 km ESE of Hitachi, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx96) | 2026-11-10 05:20 | 35 km |
| 10 | 4.9 | [north of Franz Josef Land](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tx8i) | 2026-11-10 02:00 | 10 km |

[Full report](data/2026/11/2026-11-10.md)
