# Quake Log

A daily archive of every magnitude 2.5+ earthquake worldwide, from the [USGS real-time feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). USGS feeds only keep recent events, so this repo keeps a permanent day-by-day record in `data/YYYY/MM/YYYY-MM-DD.md`.

## How it works

A GitHub Actions workflow (`.github/workflows/update.yml`) runs `scripts/update.mjs` once a day and commits the new data. The script is plain Node.js 22 with no dependencies.

```bash
node scripts/update.mjs
```

<!-- latest -->
## Last 24 hours (2026-11-02): 51 quakes

| # | Mag | Location | Time (UTC) | Depth |
|---|---|---|---|---|
| 1 | 6.0 | [165 km NW of Port-Olry, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tupl) | 2026-11-01 11:47 | 10 km |
| 2 | 5.1 | [19 km WNW of Tomohon, Indonesia](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tuuy) | 2026-11-02 08:13 | 197 km |
| 3 | 5.1 | [Kermadec Islands region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tut4) | 2026-11-02 01:18 | 10 km |
| 4 | 5.1 | [Banda Sea](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tusv) | 2026-11-02 00:53 | 94 km |
| 5 | 5.1 | [South Sandwich Islands region](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tuqk) | 2026-11-01 17:11 | 108 km |
| 6 | 5.0 | [Mid-Indian Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tuqx) | 2026-11-01 18:34 | 10 km |
| 7 | 4.9 | [175 km WNW of Panguna, Papua New Guinea](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tuu0) | 2026-11-02 05:19 | 88 km |
| 8 | 4.8 | [Mid-Indian Ridge](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tur0) | 2026-11-01 18:53 | 10 km |
| 9 | 4.8 | [203 km NW of Port-Olry, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tupq) | 2026-11-01 12:08 | 10 km |
| 10 | 4.8 | [176 km NW of Port-Olry, Vanuatu](https://earthquake.usgs.gov/earthquakes/eventpage/us7000tupp) | 2026-11-01 11:56 | 10 km |

[Full report](data/2026/11/2026-11-02.md)
