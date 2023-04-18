
FROM node:16-alpine as DEPENDENCY

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm@7.32.0;
RUN pnpm install --frozen-lockfile

FROM node:16-alpine as BUILDER
WORKDIR /app
COPY --from=DEPENDENCY /app/node_modules ./node_modules
COPY . .
RUN npm run build


FROM node:16-alpine as RUNNER
WORKDIR /app
COPY --from=DEPENDENCY /app/node_modules ./node_modules
COPY --from=DEPENDENCY ./app/package.json /app/build/package.json
COPY --from=BUILDER /app/build ./build
EXPOSE 3000
WORKDIR /app/build

CMD ["node", "index.js"]

