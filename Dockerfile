# Use a recent Node.js version that supports globalThis
FROM node:18-alpine

# Install dependencies
COPY package.json /www/package.json
WORKDIR /www
RUN npm install --legacy-peer-deps

# Copy the application source
COPY . /www

# Build the application
RUN yarn build
