FROM node:slim

WORKDIR /server

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]