FROM node:16-bullseye
WORKDIR /app

COPY ./src /app/src

COPY ./ormconfig.ts /app/ormconfig.ts

COPY ./tsconfig.json /app/tsconfig.json

COPY ./package.json /app/package.json
RUN npm install
CMD npm run typeorm:run
