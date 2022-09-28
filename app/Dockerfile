# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

# >>> DEPS
FROM node:16.17.0-bullseye as deps
LABEL stage deps
# workdir will jump to the directory (will create the directory if it is not there)
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
# don't generate a lockfile and fail if an update is needed
RUN yarn --frozen-lockfile


# >>> builder
FROM node:16.17.0-bullseye as builder
LABEL stage builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn run build

# >>> runner
FROM node:16.17.0-bullseye as runner
LABEL stage runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
# RUN ./node_modules/.bin/next build



# ENV NODE_ENV=development

# CMD ["echo", "hello"]
# RUN bash -c "tail -f /dev/null"
