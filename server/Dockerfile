FROM node:18

WORKDIR /server

COPY server/package*.json ./

RUN npm install

COPY server/ .

EXPOSE 5500

CMD ["node", "index.js"]
