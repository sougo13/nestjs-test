FROM node:16.13

WORKDIR /app

COPY package*.json ./

RUN nest build

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]