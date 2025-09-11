FROM node:18-alpine
WORKDIR /app

# Dependências de build para sqlite3
RUN apk add --no-cache python3 make g++

COPY package.json package-lock.json* ./
RUN npm ci || npm i
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
