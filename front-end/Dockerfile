FROM node:22-alpine AS base
WORKDIR /app
COPY package.json /app/
EXPOSE 3000

FROM base AS dependencies
RUN npm install && cp -R node_modules /prod_node_modules

FROM base AS builder
COPY --from=dependencies /app/node_modules /app/node_modules
COPY . /app
RUN npm run build && rm -rf node_modules

FROM base AS production
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.next /app/.next
COPY --from=dependencies /prod_node_modules /app/node_modules

CMD ["npm", "start"]