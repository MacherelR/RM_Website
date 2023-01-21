# # Use a Node.js base image
# FROM node:14-alpine

# # Set the working directory
# WORKDIR /app

# # Copy the package.json and package-lock.json files
# COPY package*.json ./

# # Install the application's dependencies
# RUN npm install

# # Copy the rest of the application's files
# COPY . .

# # Build the application for production
# RUN npm run build

# # Expose the port that the application will run on
# EXPOSE 4200

# # Start the application
# CMD ["npm","run","start"]

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/web-site usr/share/nginx/html
