# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-06): 29 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 6.1 | [144 km SE of Hasaki, Japan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twg9) | 2026-11-06 10:39 | 29 km |
| 2 | 4.9 | [41 km SW of Balangonan, Philippines](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twfk) | 2026-11-06 06:28 | 35 km |
| 3 | 4.7 | [139 km SSE of False Pass, Alaska](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tweq) | 2026-11-06 02:35 | 28 km |
| 4 | 4.6 | [58 km WNW of Isangel, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tweb) | 2026-11-06 01:37 | 83 km |
| 5 | 4.6 | [96 km NNW of Lae, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twdd) | 2026-11-06 00:02 | 98 km |
| 6 | 4.6 | [147 km SSE of False Pass, Alaska](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twd4) | 2026-11-05 23:04 | 16 km |
| 7 | 4.6 | [south of the Fiji Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twcy) | 2026-11-05 22:34 | 523 km |
| 8 | 4.5 | [101 km SSE of Palekastro, Greece](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twhq) | 2026-11-06 15:26 | 41 km |
| 9 | 4.5 | [87 km N of Isangel, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twfu) | 2026-11-06 08:14 | 247 km |
| 10 | 4.4 | [185 km NNW of Gorontalo, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000twf2) | 2026-11-06 04:13 | 510 km |

[Full report](data/2026/11/2026-11-06.md)
