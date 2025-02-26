# PA COMPILAR

`go build ./cmd/api_data_ingestor`

# PA EJECUTAR

`./api_data_ingestor 'album_season_of_weaving.csv'`

# PA DESAROLLAR

COMPILÁ
`go build -o ./api_data_ingestor ./cmd/api_data_ingestor`
GENERÁ EL api_data.json
`./bin/api_data_ingestor album_season_of_weaving`

CORRÉ ENTORNO

`docker compose up -d --wait`

```bash
localhost:4000 # firebase emulator ui
localhost:8000 # servidor
```

# FINPUNTOS (endpoints)

```
/cards # todas las cartas
```

## FILTROS

- limit (default 10) int > 0
- offset int > 0

