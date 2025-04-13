#!/usr/bin/env bash
set -euo
TAG="$(git rev-parse --short HEAD)"
REGISTRY="$REGISTRY_NAME"
WEBSITE_IMAGE="$REGISTRY/obshypa-$ENV:$TAG"
docker build --file "$PWD/Dockerfile" -t "$WEBSITE_IMAGE" .
echo "$WEBSITE_IMAGE" >server-docker-image.txt
