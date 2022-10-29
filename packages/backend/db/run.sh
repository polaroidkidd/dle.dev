#!/bin/bash

source /home/dle/.envs/.dle.dev.sh

if [ "$(docker ps -aq -f status=running -f name=strapi-db)" ]; then
  # cleanup
  echo "killing container"
  docker kill strapi-db
  wait
fi

if [ "$(docker ps -aq -f status=exited -f name=strapi-db)" ]; then
  # cleanup
  echo "removing exited container"
  docker rm strapi-db
fi

# rm image if exists
if docker images | grep -q dle-dev/strapi/database; then
  echo "removing existing image"
  docker image rm eu.gcr.io/dle-dev/backend-db:latest
fi
if [ ! "$(docker ps -q -f name=strapi-db)" ]; then

  # run your container
  echo "building new image"
  docker build . -t eu.gcr.io/dle-dev/backend-db:latest
  wait
  docker run --name strapi-db -e POSTGRES_PASSWORD="${STRAPI_POSTGRES_PASSWORD}" --rm -p 5432:5432 eu.gcr.io/dle-dev/backend-db:latest &
  disown
fi
