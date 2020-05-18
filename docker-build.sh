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

if [[ $(git rev-parse --abbrev-ref HEAD) == master ]]; then

  echo "***************************************************"
  echo "************* BUILD AND DEPLOY PROD ***************"
  echo "***************************************************"

  HOST="eu.gcr.io/dle-dev"
  NAME=$(npmName)
  VERSION=$(npmVersion)

  TAG=${HOST}/${NAME}
  TAG_LATEST=${TAG}:latest
  TAG_VERSION=${TAG}:${VERSION}

  echo "$TAG_LATEST"
  echo "$TAG_VERSION"


  docker build . -t "${TAG_LATEST}"
  docker tag "${TAG_LATEST}" "${TAG_VERSION}"


else
  echo "***************************************************"
  echo "************ BUILD AND DEPLOY STAGING *************"
  echo "***************************************************"

  HOST="eu.gcr.io/dle-dev"
  NAME=$(npmName)
  VERSION=$(npmVersion)

  TAG=${HOST}/${NAME}
  TAG_LATEST=${TAG}:staging

  docker build . --no-cache -t "${TAG_LATEST}"
fi
