# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-19): 36 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.3 | [South Georgia Island region](https://earthquake.usgs.gov/earthquakes/eventpage/us6000uc2q) | 2026-11-19 20:07 | 10 km |
| 2 | 5.2 | [130 km W of Teluk Dalam, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ubxb) | 2026-11-19 01:34 | 10 km |
| 3 | 5.2 | [169 km S of Attu Station, Alaska](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ubw3) | 2026-11-18 21:28 | 10 km |
| 4 | 5.1 | [99 km WSW of Illapel, Chile](https://earthquake.usgs.gov/earthquakes/eventpage/us6000uc1x) | 2026-11-19 18:09 | 10 km |
| 5 | 5.0 | [central East Pacific Rise](https://earthquake.usgs.gov/earthquakes/eventpage/us6000uc2t) | 2026-11-19 20:07 | 10 km |
| 6 | 5.0 | [31 km WSW of Rabaul, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ubz1) | 2026-11-19 10:53 | 195 km |
| 7 | 4.9 | [13 km WNW of Xichang, China](https://earthquake.usgs.gov/earthquakes/eventpage/us6000uc26) | 2026-11-19 18:41 | 10 km |
| 8 | 4.9 | [65 km SSW of Atka, Alaska](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ubzm) | 2026-11-19 13:05 | 46 km |
| 9 | 4.9 | [36 km NNE of Kilimatinde, Tanzania](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ubxg) | 2026-11-19 02:11 | 10 km |
| 10 | 4.8 | [23 km SSE of Guayaquil, Ecuador](https://earthquake.usgs.gov/earthquakes/eventpage/us6000uby4) | 2026-11-19 05:49 | 69 km |

[Full report](data/2026/11/2026-11-19.md)
