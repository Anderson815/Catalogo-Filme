FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN yarn

COPY . .

CMD ["yarn", "start:dev"]