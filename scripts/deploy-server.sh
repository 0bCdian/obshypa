#!/usr/bin/env bash
set -euo

IMAGE="$(cat "$PWD/server-docker-image.txt")"
SERVICE="obshypa-$ENV"
VARS="GCLOUD_PROJECT=$GCLOUD_PROJECT,DB_ID=default"
if [[ -z "$IMAGE" ]]; then
  echo "no image found"
  exit 1
fi

gcloud config set project "$GCLOUD_PROJECT"

SERVICE_URL=$(
  gcloud run deploy "$SERVICE" \
    --image "$IMAGE" \
    --set-env-vars "$VARS" \
    --service-account "$WEBSITE_SA" \
    --platform managed \
    --allow-unauthenticated \
    --format='value(status.url)'
)

echo "$SERVICE_URL" >server-url.txt
echo "$SERVICE_URL"
