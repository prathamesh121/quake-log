# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-12): 43 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 5.1 | [80 km W of Panguna, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txm8) | 2026-11-11 17:38 | 59 km |
| 2 | 5.1 | [South Sandwich Islands region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txjg) | 2026-11-11 15:39 | 105 km |
| 3 | 5.1 | [27 km WSW of Calama, Chile](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txis) | 2026-11-11 11:36 | 91 km |
| 4 | 5.1 | [Pulau Pulau Tanimbar, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txir) | 2026-11-11 11:32 | 15 km |
| 5 | 5.1 | [Balleny Islands region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txhi) | 2026-11-11 06:21 | 10 km |
| 6 | 5.0 | [48 km NW of Ancud, Chile](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txmq) | 2026-11-11 19:21 | 35 km |
| 7 | 5.0 | [152 km SE of Kuril’sk, Russia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txgv) | 2026-11-11 05:26 | 30 km |
| 8 | 4.9 | [110 km E of Georgetown, Saint Helena](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txpa) | 2026-11-11 22:03 | 10 km |
| 9 | 4.7 | [152 km WSW of Merizo Village, Guam](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txi0) | 2026-11-11 08:37 | 137 km |
| 10 | 4.7 | [130 km W of Tofino, Canada](https://earthquake.usgs.gov/earthquakes/eventpage/us7000txfz) | 2026-11-11 01:45 | 10 km | ⚠️

[Full report](data/2026/11/2026-11-12.md)
