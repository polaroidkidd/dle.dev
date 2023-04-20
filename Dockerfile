
FROM node:16-alpine as DEPENDENCY

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
FROM node:16-alpine as BUILDER
WORKDIR /app
COPY --from=DEPENDENCY /app/node_modules ./node_modules
COPY . .
RUN yarn run build


FROM node:16-alpine as RUNNER
WORKDIR /app
COPY --from=DEPENDENCY /app/node_modules ./node_modules
COPY --from=DEPENDENCY ./app/package.json /app/build/package.json
COPY --from=BUILDER /app/build ./build
EXPOSE 3000
WORKDIR /app/build

CMD ["node", "index.js"]

