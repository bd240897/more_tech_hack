FROM node:16.17.0

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .
