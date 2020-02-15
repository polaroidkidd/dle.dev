#!/usr/bin/env bash
set -e

function npmVersion() {
  node <<EOJS
  var pjson = require('./package.json');
  console.log(pjson.version);
EOJS
}

function npmName() {
  node <<EOJS
  var pjson = require('./package.json');
  console.log(pjson.name);
EOJS
}

HOST="eu.gcr.io/dle-dev"
NAME=$(npmName)
VERSION=$(npmVersion)

TAG=${HOST}/${NAME}
TAG_LATEST=${TAG}:latest
TAG_VERSION=${TAG}:${VERSION}

echo "$TAG_LATEST"
echo "$TAG_VERSION"

rm -rf ./build
yarn run build

docker build . --no-cache -t "${TAG_LATEST}"
docker tag "${TAG_LATEST}" "${TAG_VERSION}"

docker push "${TAG_LATEST}"
docker push "${TAG_VERSION}"

rm -rf ./build

ssh -i ~/.ssh/dle@ebikon -p 7898 dle@144.2.104.52 "/home/dle/services/vps/update-frontend.sh"
