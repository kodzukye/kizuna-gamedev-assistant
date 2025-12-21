# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install frontend deps
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend source
COPY . .

# Expose the port and run the application
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
