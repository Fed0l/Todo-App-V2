FROM node:21  

# Set the working directory  
WORKDIR /usr/src/app  

# Copy only package.json and package-lock.json (if available)  
COPY package*.json ./  

# Install build tools and dependencies  
RUN apk add --no-cache make gcc g++ python && \
    npm install && \
    npm rebuild bcrypt --build-from-source && \
    apk del make gcc g++ python  

# Copy the rest of the application code  
COPY . .  

# Expose the application port  
EXPOSE 3001  

# Start the application  
CMD ["npm", "start"]