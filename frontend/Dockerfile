# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code
COPY . .

# Build the React application
RUN npm run build

# Install a lightweight web server to serve the build
RUN npm install -g serve

# Expose the frontend port (e.g., 80)
EXPOSE 80

# Serve the frontend application
CMD ["serve", "-s", "build"]
