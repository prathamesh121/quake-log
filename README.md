# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-05): 29 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.1 | [19 km NNW of Masumbwe, Tanzania](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tw76) | 2026-11-05 09:22 | 10 km |
| 2 | 5.0 | [111 km W of Petrolia, CA](https://earthquake.usgs.gov/earthquakes/eventpage/nc75462637) | 2026-11-05 04:56 | 10 km |
| 3 | 4.8 | [Sea of Okhotsk](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tw7b) | 2026-11-05 10:09 | 554 km |
| 4 | 4.6 | [south of the Fiji Islands](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tw43) | 2026-11-04 21:24 | 502 km |
| 5 | 4.5 | [South Indian Ocean](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tw3n) | 2026-11-04 20:06 | 10 km |
| 6 | 4.5 | [2 km W of Chinandega, Nicaragua](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tw3k) | 2026-11-04 19:55 | 159 km |
| 7 | 4.2 | [100 km NNE of Punta Cana, Dominican Republic](https://earthquake.usgs.gov/earthquakes/eventpage/pr2026308001) | 2026-11-04 16:59 | 11 km |
| 8 | 4.2 | [30 km S of Adak, Alaska](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tw4w) | 2026-11-04 19:22 | 75 km |
| 9 | 4.2 | [47 km SSW of Jurm, Afghanistan](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tw2x) | 2026-11-04 18:54 | 199 km |
| 10 | 4.1 | [226 km ENE of Nagqu, China](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tw53) | 2026-11-05 00:49 | 10 km |

[Full report](data/2026/11/2026-11-05.md)
