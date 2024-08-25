FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies and rebuild bcrypt
RUN npm Install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]