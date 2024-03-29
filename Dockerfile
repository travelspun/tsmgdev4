# syntax = docker/dockerfile:1

ARG NODE_VERSION=18.14.2

FROM node:${NODE_VERSION}-slim as base

ARG PORT=4000

ENV NODE_ENV=production

WORKDIR /src

# Build
FROM base as build

RUN npm install -g pnpm

COPY --link package.json pnpm-lock.yaml .
RUN pnpm install --production=false

COPY --link . .

RUN pnpm run build
RUN pnpm prune

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]