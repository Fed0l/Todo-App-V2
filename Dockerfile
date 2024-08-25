FROM node:21

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add --no-cache make gcc g++ python && npm install && npm rebuild bcrypt --build-from-source && apk del make gcc g++ python

# Install dependencies and rebuild bcrypt
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]