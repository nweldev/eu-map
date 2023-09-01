#!/bin/sh

# -e Exit immediately when a command returns a non-zero status.

# -x Print commands before they are executed

set -ex

ROOT=$(dirname "$0")

source "${ROOT}/../.env.local"

# Seeding command
psql "postgres://default:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DATABASE}" < "${ROOT}/seed.sql"