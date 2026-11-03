# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-03): 31 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.4 | [24 km NNW of Rioblanco, Colombia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tv4i) | 2026-11-03 09:13 | 10 km |
| 2 | 5.3 | [81 km SSE of Palekastro, Greece](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tuxy) | 2026-11-02 16:49 | 49 km |
| 3 | 4.9 | [South Sandwich Islands region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tv5i) | 2026-11-03 13:34 | 144 km |
| 4 | 4.9 | [101 km SSE of Palekastro, Greece](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tv51) | 2026-11-03 11:03 | 46 km |
| 5 | 4.8 | [6 km S of Asahi, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tv3q) | 2026-11-03 05:40 | 52 km |
| 6 | 4.7 | [74 km E of Petropavlovsk-Kamchatsky, Russia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tv2p) | 2026-11-03 03:13 | 76 km |
| 7 | 4.6 | [226 km NW of Port-Olry, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tv03) | 2026-11-02 20:54 | 10 km |
| 8 | 4.5 | [31 km E of Mawlaik, Burma (Myanmar)](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tv3l) | 2026-11-03 05:23 | 116 km |
| 9 | 4.5 | [168 km SE of San Jose Village, Northern Mariana Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tuzd) | 2026-11-02 19:59 | 10 km |
| 10 | 4.3 | [25 km NNE of Camiña, Chile](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tv27) | 2026-11-03 01:41 | 107 km |

[Full report](data/2026/11/2026-11-03.md)
