#!/usr/bin/env bash
set -e
while getopts cm:p option; do
  case "${option}" in
  p) PUSH=${OPTARG} ;;
  c) NO_CACHE=${OPTARG} ;;
  *) INVALID=${OPTARG} ;;
  esac
done

HOST="eu.gcr.io/dle-dev"
NAME=$(node -e "console.log(require('./package.json').name);")
VERSION=$(node -e "console.log(require('./package.json').version);")

TAG=${HOST}/${NAME}
TAG_VERSION=${TAG}:${VERSION}
TAG_LATEST=${TAG}:latest

echo "$TAG_VERSION"

if [[ -v NO_CACHE ]]; then
  echo "***************************************************"
  echo "****************** CLEAN BUILD ********************"
  echo "***************************************************"
  docker build --no-cache . -t "${TAG_LATEST}" -f ./Dockerfile --network="host"
else
  echo "***************************************************"
  echo "***************** CACHED BUILD ********************"
  echo "***************************************************"
  docker build . -t "${TAG_LATEST}" -f ./Dockerfile --network="host"
fi

docker tag "${TAG_LATEST}" "${TAG_VERSION}"

if [[ -v PUSH ]]; then
  echo "***************************************************"
  echo "************* PUSHING TO REPOSITORY ***************"
  echo "***************************************************"
  if [[ $(git rev-parse --abbrev-ref HEAD) == master ]]; then
    docker push "${TAG_VERSION}"
    docker push "${TAG_LATEST}"
  else
    docker push "${TAG_LATEST}"
  fi
fi
