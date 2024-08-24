FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

# Install build essentials for bcrypt
RUN apt-get update && apt-get install -y build-essential python

# Install dependencies and rebuild bcrypt
RUN npm install
RUN npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 3000

CMD ["npm", "start"]