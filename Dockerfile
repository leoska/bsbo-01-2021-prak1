# Import container with node v14
FROM node:18.14.1-bullseye

# Create app directory in out container
WORKDIR /app

# Bundle app source
COPY ./package.json ./package.json

# Install node_modules
RUN npm install

# Expose out HTTP port
EXPOSE 25565

# Start app in our container
CMD [ "npm", "run", "watch" ]