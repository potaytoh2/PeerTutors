FROM node:14.19.0-alpine3.14
RUN apk update
RUN apk add \
        git \
        curl
COPY ./src /app/src
COPY ./package.json /app/package.json

COPY ./package-lock.json /app/package-lock.json
COPY ./nest-cli.json /app/nest-cli.json
COPY ./tsconfig.json /app/tsconfig.json
COPY ./tsconfig.build.json /app/tsconfig.build.json
WORKDIR /app
RUN npm install glob rimraf -dd && npm i -g @nestjs/cli
RUN npm install
RUN npm run build
CMD npm run start:prod
