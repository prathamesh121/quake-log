# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-26): 36 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.7 | [Revilla Gigedo Islands region](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udq5) | 2026-11-26 15:26 | 10 km |
| 2 | 5.5 | [204 km S of Taliwang, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udm8) | 2026-11-26 09:08 | 15 km |
| 3 | 5.2 | [265 km WNW of Houma, Tonga](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udmc) | 2026-11-26 09:22 | 494 km |
| 4 | 5.2 | [183 km N of Hicks Bay, New Zealand](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udjx) | 2026-11-26 01:48 | 13 km |
| 5 | 5.0 | [184 km N of Hicks Bay, New Zealand](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udjz) | 2026-11-26 02:09 | 10 km |
| 6 | 4.8 | [225 km S of Taliwang, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udm5) | 2026-11-26 09:00 | 10 km |
| 7 | 4.8 | [190 km N of Hicks Bay, New Zealand](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udib) | 2026-11-25 21:32 | 10 km |
| 8 | 4.7 | [13 km NW of Port-Vila, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udht) | 2026-11-25 18:59 | 52 km |
| 9 | 4.6 | [97 km SW of Puerto Madero, Mexico](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udki) | 2026-11-26 03:30 | 10 km |
| 10 | 4.5 | [95 km SSE of Sarangani, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us6000udqa) | 2026-11-26 16:18 | 173 km |

[Full report](data/2026/11/2026-11-26.md)
