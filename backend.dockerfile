# syntax=docker/dockerfile:experimental
# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /base
COPY package.json .
COPY yarn.lock ./
COPY ./packages/backend/package.json packages/backend/
RUN yarn install --frozen-lockfile


# Rebuild the source code only when needed
FROM node:16-alpine AS builder

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /base
COPY --from=deps ./base/node_modules node_modules
COPY --from=deps ./base/packages/backend/node_modules packages/backend/node_modules
COPY --from=deps ./base/package.json .
COPY --from=deps ./base/packages/backend/package.json packages/backend/package.json
COPY ./packages/backend packages/backend
COPY ./tsconfig.base.json .

RUN yarn workspace backend build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
RUN apk update && apk add  build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
WORKDIR /base

ARG APP_ENV=production
ARG NODE_ENV=production
ARG PORT=1337

ENV APP_ENV=${APP_ENV}
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
# This allows to access Graphql Playground
ENV APOLLO_PRODUCTION_INTROSPECTION=false


# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder ./base/packages/backend ./packages/backend


USER nodejs

EXPOSE ${PORT}

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.

CMD yarn workspace backend start
# https://dev.to/siddharthvenkatesh/docker-setup-for-yarn-workspaces-4pnj
