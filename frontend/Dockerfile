# syntax=docker/dockerfile:1
FROM --platform=$BUILDPLATFORM node:24 AS development

# set workdir
WORKDIR /app

# copy package managed file
COPY package.json /app
COPY package-lock.json /app

# install deps
RUN npm ci

# copy code
COPY . /app

# start development server (useful for local containerization)
CMD ["npm", "run", "dev"]

# continue form development
FROM development AS build
# build distribution file
RUN ["npm", "run", "build"]

# final build (this is what gets shipped in prod)
FROM nginx:1.31.2-alpine
COPY --from=build /app/dist /usr/share/nginx/html

