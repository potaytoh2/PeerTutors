FROM node:16-bullseye
WORKDIR /app

# Install MySQL client
RUN apt-get update && apt-get install -y default-mysql-client


COPY ./src /app/src
COPY ./ormconfig.ts /app/ormconfig.ts
COPY ./tsconfig.json /app/tsconfig.json
COPY ./package.json /app/package.json

RUN npm install

# Copy the entrypoint script and SQL file
COPY ./init.sh /app/init.sh
COPY ./init-db.sql /app/init-db.sql

# Make the entrypoint script executable
RUN chmod +x /app/init.sh

# Define the entry point
CMD ["/app/init.sh"]
