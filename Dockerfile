FROM node:16

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3001

CMD ["npm", "start"]