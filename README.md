# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-18): 38 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.9 | [85 km WNW of San Juan, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyy8) | 2026-11-18 06:07 | 22 km |
| 2 | 5.8 | [40 km N of Ruteng, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyxi) | 2026-11-18 04:41 | 10 km |
| 3 | 5.8 | [99 km ESE of Madang, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyx2) | 2026-11-18 03:42 | 52 km |
| 4 | 5.8 | [150 km SW of Merizo Village, Guam](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tywi) | 2026-11-18 02:22 | 10 km |
| 5 | 5.3 | [149 km SSW of Merizo Village, Guam](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tz1a) | 2026-11-18 16:06 | 10 km |
| 6 | 5.3 | [16 km ESE of Comandău, Romania](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyw8) | 2026-11-18 00:48 | 130 km |
| 7 | 5.3 | [7 km SE of Karakenja, Tajikistan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyw6) | 2026-11-18 00:46 | 10 km |
| 8 | 5.2 | [86 km NW of Ryōtsu-minato, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyyw) | 2026-11-18 09:37 | 10 km |
| 9 | 5.2 | [Galapagos Triple Junction region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyxz) | 2026-11-18 05:25 | 10 km |
| 10 | 5.2 | [54 km NNE of Ruteng, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tyxc) | 2026-11-18 04:21 | 10 km |

[Full report](data/2026/11/2026-11-18.md)
