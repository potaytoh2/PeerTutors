FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./ 
COPY test-9b595-firebase-adminsdk-7ymkd-ecb373ac69.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 3001
CMD [ "node", "index.js" ]

# docker build -t foo . && docker run -p 3001:3001 foo