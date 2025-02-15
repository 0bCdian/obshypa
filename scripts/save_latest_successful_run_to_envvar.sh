#!/bin/env bash

set -euo pipefail

# old url
#WORKFLOW_URL="/repos/0bCdian/obshypa/actions/workflows/Build%20cmd%20project.yml/runs"
WORKFLOW_URL="/repos/0bCdian/obshypa/actions/workflows/build-cmd-project.yml/runs"

# get all the runs with github cli
echo "Getting all the worflow runs"
ALL_RUNS=$(
  gh api \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "$WORKFLOW_URL"
)

echo "--------------------------"
echo "Getting last successful run"
# get first successful run
LAST_SUCCESSFUL_RUN_ID=$(
  echo "$ALL_RUNS" | jq '[.workflow_runs[] | select(.conclusion == "success") ] | first | .id'
)
if [[ "$LAST_SUCCESSFUL_RUN_ID" == "null" ]]; then
  echo "No successful run found"
  exit 1
fi
echo "--------------"
echo "Saving RUN_ID to github env"
# saves an envvar called RUN_ID to GITHUB_ENV variable
echo "RUN_ID=$LAST_SUCCESSFUL_RUN_ID" >>"$GITHUB_ENV"
