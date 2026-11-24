# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-24): 47 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 6.5 | [Vanuatu region](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucvm) | 2026-11-23 02:40 | 598 km | ⚠️
| 2 | 5.5 | [west of Macquarie Island](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucxi) | 2026-11-23 08:01 | 10 km |
| 3 | 5.4 | [181 km NE of Lospalos, Timor Leste](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucx6) | 2026-11-23 07:36 | 119 km |
| 4 | 5.0 | [159 km ESE of Kokopo, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucwd) | 2026-11-23 04:18 | 99 km |
| 5 | 4.9 | [Vanuatu region](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucw1) | 2026-11-23 03:07 | 596 km |
| 6 | 4.9 | [39 km NW of Kuqa, China](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucvh) | 2026-11-23 02:14 | 10 km |
| 7 | 4.8 | [209 km SSE of Tobi Village, Palau](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucyd) | 2026-11-23 11:24 | 10 km |
| 8 | 4.7 | [South Sandwich Islands region](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucz2) | 2026-11-23 15:10 | 103 km |
| 9 | 4.7 | [52 km SW of Tyrma, Russia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucy6) | 2026-11-23 10:39 | 15 km |
| 10 | 4.7 | [109 km E of Bitung, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000ucws) | 2026-11-23 06:28 | 69 km |

[Full report](data/2026/11/2026-11-24.md)
