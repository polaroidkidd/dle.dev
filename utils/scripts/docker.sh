#!/usr/bin/env bash
set -e

while getopts e:pr option; do
  case "${option}" in
    e) ENVIRONMENT=${OPTARG};;
    p) PUSH=${OPTARG};;
    r) RUN=${OPTARG};;
    *) INVALID=${OPTARG};;
  esac
done


HOST="eu.gcr.io/dle-dev"
NAME=$(npx -c 'echo "$npm_package_name"')
VERSION=$(npx -c 'echo "$npm_package_version"')

TAG=${HOST}/${NAME}
TAG_VERSION=${TAG}:${VERSION}
TAG_LATEST=${TAG}:latest
TAG_STAGING=${TAG}:staging


if  [[ -v INVALID ]]; then
  printf "Invalid options have been used"
  exit 1
fi

if ! [[ -v ENVIRONMENT ]]; then
  printf "Please specify the environment (production or development)."
  exit 1
fi



if [[ $(git rev-parse --abbrev-ref HEAD) == master ]]; then
  #  We are on master, only prod releases are possible here. Only the -p flag will be respected here.

  echo "$TAG_LATEST"
  echo "$TAG_VERSION"

  rm -rf ./dist
  echo "***************************************************"
  echo "************** BUILDING PROD RELEASE **************"
  echo "***************************************************"
  yarn run prod:build

  echo "***************************************************"
  echo "************ BUILDING DOCKER CONTAINER ************"
  echo "***************************************************"
  docker build --no-cache . -t "${TAG_LATEST}" -f ./utils/docker/Dockerfile
  docker tag "${TAG_LATEST}" "${TAG_VERSION}"

  if [[ -v PUSH ]]; then
    echo "***************************************************"
    echo "**************** PUSHING TO REMOTE ****************"
    echo "***************************************************"
    docker push "${TAG_LATEST}"
    docker push "${TAG_VERSION}"
  fi

else
  #  We are on on a development branch. Commandline options -e and -r will be respected.

  # rm -rf ./dist
  # if [[ "${ENVIRONMENT}" == "prod" ]]; then
  #   echo "***************************************************"
  #   echo "************** BUILDING PROD RELEASE **************"
  #   echo "***************************************************"
  #   yarn run prod:build
  # else
  #   echo "***************************************************"
  #   echo "************** BUILDING DEV RELEASE ***************"
  #   echo "***************************************************"
  #   yarn run dev:build
  # fi


  echo "***************************************************"
  echo "************ BUILDING DOCKER CONTAINER ************"
  echo "***************************************************"
  docker build --no-cache . -t "${TAG_LATEST}"  -f ./utils/docker/Dockerfile


  if [[ -v PUSH ]]; then
    echo "***************************************************"
    echo "**************** PUSHING TO REMOTE ****************"
    echo "***************************************************"
    echo "Image: ${TAG_STAGING}"
    echo "***************************************************"
    docker tag "${TAG_LATEST}" "${TAG_STAGING}"
    docker push "${TAG_STAGING}"
  fi

  if [[ -v RUN ]]; then
    echo "***************************************************"
    echo "************ STARTING LOCAL CONTAINER *************"
    echo "***************************************************"
    docker run --rm -p 8080:80 "${TAG_LATEST}"
  fi
fi
