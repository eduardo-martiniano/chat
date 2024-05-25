FROM node:14.21.3 as node
WORKDIR /app
COPY chat-app/package.json ./
RUN npm install
COPY chat-app ./
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist/chat-app /usr/share/nginx/html
