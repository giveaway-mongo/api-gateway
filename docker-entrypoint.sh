#!/bin/sh

set -e

cd /app

echo "Database: ""$DATABASE_HOST":"$DATABASE_PORT"

ls -la


# shellcheck disable=SC2039
if [[ $RUN == "production" ]]; then
  echo -e "\nRun app"

  touch .env
  echo "DATABASE_URL=$DATABASE_URL" >> ./.env

  export NODE_ENV='production'

  pm2-runtime
fi

# shellcheck disable=SC2039
if [[ $RUN == "test" ]]; then
  echo -e "\nRun tests"
  export NODE_ENV='test'

  npm run test:docker-e2e
  exit
fi

