# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-04): 41 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.2 | [91 km ESE of Kyzyl-Eshme, Kyrgyzstan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tvtj) | 2026-11-03 21:34 | 10 km |
| 2 | 5.2 | [Mid-Indian Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tvs3) | 2026-11-03 18:21 | 10 km |
| 3 | 5.2 | [Volcano Islands, Japan region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tvie) | 2026-11-03 16:48 | 139 km |
| 4 | 5.0 | [207 km ESE of Sarangani, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tvwj) | 2026-11-04 07:40 | 49 km |
| 5 | 4.9 | [9 km N of Delta, B.C., MX](https://earthquake.usgs.gov/earthquakes/eventpage/ci41572064) | 2026-11-03 18:27 | 16 km |
| 6 | 4.6 | [Fiji region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tvuv) | 2026-11-04 00:32 | 556 km |
| 7 | 4.5 | [99 km ESE of Kyzyl-Eshme, Kyrgyzstan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tvu9) | 2026-11-03 22:50 | 10 km |
| 8 | 4.4 | [252 km ENE of Levuka, Fiji](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tvu2) | 2026-11-03 22:27 | 542 km |
| 9 | 4.3 | [127 km SSW of Kokopo, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tvxj) | 2026-11-04 12:14 | 10 km |
| 10 | 4.2 | [Bonin Islands, Japan region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tvvc) | 2026-11-04 02:40 | 429 km |

[Full report](data/2026/11/2026-11-04.md)
