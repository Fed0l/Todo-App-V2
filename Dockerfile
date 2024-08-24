FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies and rebuild bcrypt
RUN npm install
RUN npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 3001

CMD ["npm", "start"]