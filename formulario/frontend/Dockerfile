FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm i
COPY . .
ENV VITE_API_URL=http://backend:5000
EXPOSE 3000
CMD ["npm", "run", "dev"]
