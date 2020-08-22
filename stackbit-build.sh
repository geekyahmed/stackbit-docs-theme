#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5f41a2bd7b60760022f3ad58/webhook/build/ssgbuild > /dev/null

next build && next export

curl -s -X POST https://api.stackbit.com/project/5f41a2bd7b60760022f3ad58/webhook/build/publish > /dev/null