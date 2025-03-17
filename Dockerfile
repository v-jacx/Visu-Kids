# Build the frontend
FROM node:latest AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/. ./
EXPOSE 19000
CMD ["npm", "start"]

#Build the backend