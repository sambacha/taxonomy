#!/bin/bash
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
git diff HEAD^ HEAD --quiet .

pnpm install
pnpm run postinstall
pnpm run build


echo "VERCEL_ENV: $VERCEL_ENV"

if [[ "$VERCEL_ENV" == "production" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
