FROM node:16

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]