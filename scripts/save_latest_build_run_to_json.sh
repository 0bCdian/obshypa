#!/bin/env bash

set -euo pipefail

# old url
#WORKFLOW_URL="/repos/0bCdian/obshypa/actions/workflows/Build%20cmd%20project.yml/runs"
WORKFLOW_URL="/repos/0bCdian/obshypa/actions/workflows/build-cmd-project.yml/runs"

# get all the runs with github cli
ALL_RUNS=$(
  gh api \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "$WORKFLOW_URL"
)

# get status and artifacts url, also transform to bash array
LAST_SUCCESSFUL_RUN=$(
  echo "$ALL_RUNS" | jq '[.workflow_runs[] | select(.conclusion == "success") ] | first'
)
if [[ "$LAST_SUCCESSFUL_RUN" == "null" ]]; then
  echo "No successful run found"
  exit 1
fi
echo "$LAST_SUCCESSFUL_RUN" >last_run.json
