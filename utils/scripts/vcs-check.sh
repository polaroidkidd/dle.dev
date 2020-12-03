#!/usr/bin/env bash

if [[ $(git rev-parse --abbrev-ref HEAD) == master ]]; then commitlint --config ./utils/config/commitlint.config.js -E HUSKY_GIT_PARAMS; fi
