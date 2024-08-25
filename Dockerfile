# FROM node:21  

# # Set the working directory  
# WORKDIR /usr/src/app  

# # Copy only package.json and package-lock.json  
# COPY package*.json ./  

# # Install build tools and dependencies  
# RUN apt-get update && apt-get install -y --no-install-recommends \
#     build-essential python3 && \
#     npm install && \
#     npm rebuild bcrypt --build-from-source && \
#     apt-get remove --purge -y build-essential python3 && \
#     apt-get autoremove -y && \
#     apt-get clean  

# # Copy the rest of the application code  
# COPY . .  

# # Expose the application port  
# EXPOSE 3001  

# # Start the application  
# CMD ["npm", "start"]

FROM node:14

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