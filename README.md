# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-21): 44 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 6.8 | [105 km NE of Lospalos, Timor Leste](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucij) | 2026-11-21 09:42 | 132 km |
| 2 | 6.7 | [9 km NE of Carhuamayo, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucfm) | 2026-11-21 00:09 | 108 km | ⚠️
| 3 | 5.9 | [238 km SW of Yanglong, China](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucly) | 2026-11-21 10:45 | 10 km |
| 4 | 5.2 | [112 km SSE of Tateyama, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucky) | 2026-11-21 10:09 | 10 km |
| 5 | 5.1 | [32 km NE of Port-Olry, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucd6) | 2026-11-20 17:53 | 95 km |
| 6 | 5.0 | [0 km NE of Carhuamayo, Peru](https://earthquake.usgs.gov/earthquakes/eventpage/us6000uchd) | 2026-11-21 05:12 | 111 km |
| 7 | 4.9 | [65 km NNW of Port-Vila, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us6000uci2) | 2026-11-21 07:20 | 43 km |
| 8 | 4.9 | [Reykjanes Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucgj) | 2026-11-21 02:24 | 10 km |
| 9 | 4.9 | [Reykjanes Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucga) | 2026-11-21 01:26 | 10 km |
| 10 | 4.9 | [113 km ESE of Pangai, Tonga](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucf0) | 2026-11-20 22:34 | 10 km |

[Full report](data/2026/11/2026-11-21.md)
