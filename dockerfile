# Use an official Node.js runtime as the base image
FROM node:18 as builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the production-ready React build files into the container
COPY ./ /app/

# Build your React app (this assumes you've already run 'npm run build')
RUN npm run build

# Use an official Nginx image as the final base image
FROM nginx:alpine

# Copy the React app build files from the previous stage to the Nginx directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 (default Nginx port)
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]