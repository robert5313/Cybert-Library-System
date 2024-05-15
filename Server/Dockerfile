FROM node:20-alpine

WORKDIR /Server

COPY package.json ./
RUN npm install --frozen-lockfile

CMD ["node", "/index.js"]