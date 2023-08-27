#!/bin/bash

# Run typeorm:run command
npm run typeorm:run

# Run SQL script
mysql -h mysqldb -P 3306 -u root -proot  < /app/init-db.sql