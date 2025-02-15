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
LAST_SUCCESSFUL_RUN=$(
  echo "$ALL_RUNS" | jq '[.workflow_runs[] | select(.conclusion == "success") ] | first'
)
if [[ "$LAST_SUCCESSFUL_RUN" == "null" ]]; then
  echo "No successful run found"
  exit 1
fi

echo "--------------------------"
echo "Getting last successful run artifact information"
LAST_ARTIFACT=$(
  curl -s "$(echo "$LAST_SUCCESSFUL_RUN" | jq -r .artifacts_url)"
)
echo "$LAST_ARTIFACT" >last_artifact.json
echo "--------------------------"
echo "Finished script, latest artifact information saved to last_artifact.json"
