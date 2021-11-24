FROM node:16.13

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN nest build

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]