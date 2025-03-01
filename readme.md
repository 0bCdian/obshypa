# LOS COMANDOS COMANDEROS

## PA COMPILAR

`go build -o ./bin/api_data_ingestor ./cmd/api_data_ingestor`

## PA EJECUTAR

`./bin/api_data_ingestor 'album_season_of_weaving.csv'`

## PA DESAROLLAR

COMPILÁ Y GENERÁ EL `api_data.json` SI NO LO TENÉS YA.

CORRÉ ENTORNO.

`docker compose up -d --wait`

### PA FORZAR CAMBIOS EN DOCKER

SI SE ESTÁN EJECUTANDO LOS CONTENEDORES, PARARLOS.

`sudo docker compose down`

PODAR ELEMENTOS SIN USO EN DOCKER.

`sudo docker system prune`

SI CON ESO NO BASTA, FORZAR ELIMINACIÓN DE IMÁGENES DE DOCKER.

`sudo docker rmi $(sudo docker image ls -q)`

COMPROBAR QUE NO QUEDAN IMÁGENES.

`sudo docker image ls`

### URLS

```bash
localhost:4000 # firebase emulator ui
localhost:8000 # servidor
```

## FINPUNTOS (endpoints)

```bash
/cards # todas las cartas
```

### FILTROS

- limit (default 10) int > 0
- offset int > 0

```bash
curl -s "localhost:8000/cards?limit=50&offset=50"
```
