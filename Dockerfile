# syntax=docker/dockerfile:experimental
# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /base
COPY package.json .
COPY yarn.lock ./
RUN yarn install --frozen-lockfile


# Rebuild the source code only when needed
FROM node:16-alpine AS builder

ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /base
COPY --from=deps ./base/node_modules node_modules
COPY --from=deps ./base/package.json .
COPY ./src ./src
COPY ./public ./public
COPY ./.env.production .
COPY ./.eslintignore .
COPY ./.eslintrc.js .
COPY ./.prettierignore .
COPY ./.prettierrc.js .
COPY ./next.config.js .
COPY ./next-env.d.ts .
COPY ./postcss.config.js .
COPY ./tailwind.config.js .
COPY ./tsconfig.json .


RUN yarn  build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /base

ARG APP_ENV=production
ARG NODE_ENV=production
ARG PORT=3000

ENV APP_ENV=${APP_ENV}
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
# This allows to access Graphql Playground
ENV APOLLO_PRODUCTION_INTROSPECTION=false

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001


# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder ./base/next.config.js ./next.config.js
COPY --from=builder ./base/.env.production ./.env.production
COPY --from=builder ./base/public ./public
COPY --from=builder --chown=nextjs:nodejs ./base/.next ./.next
COPY --from=builder ./base/node_modules node_modules
COPY --from=builder ./base/package.json .


USER nextjs

EXPOSE ${PORT}

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD yarn start
# https://dev.to/siddharthvenkatesh/docker-setup-for-yarn-workspaces-4pnj
