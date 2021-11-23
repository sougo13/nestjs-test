FROM node:12.3-alpine

WORKDIR /app

COPY package*.json ./

RUN nest build

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]