#Build the backend
FROM node:latest
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/. ./
EXPOSE 3000