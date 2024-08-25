FROM node:7.8

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies and rebuild bcrypt
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]