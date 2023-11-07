FROM node:lts-slim as build

WORKDIR /app

COPY package*.json ./
RUN rm -rf node_modules
RUN rm -rf build
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-slim as run

WORKDIR /app
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/build ./build
RUN npm install --production

# Local OIDC for testing... must be replaced later
ENV OIDC_PROVIDER_URL=http://localhost:9000/application/o
ENV OIDC_CLIENT_ID=tzwQZwY1fJJ8DWQAZwngk60ar20sNnAQzJYOTraK
ENV OIDC_CLIENT_SECRET=tF5PlOjxuswC8f0FlHm68fX75tqC5jgsuJjFrYJHtGKayBtJKegEE9M2eqMnZYEgAHT6zpgDyLFpkxjsDP30hXsJkaL8GYRtur5AOJFDDcMH9f57IMKsGfSuvHDlRx6T

EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]
