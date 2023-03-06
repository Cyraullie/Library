FROM node:17-alpine as builder
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

#install npm and react versions.
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

#install nodemon to provide hot-reloading functionality.
RUN npm install nodemon --save-dev
COPY . ./

#use nodemon to run the react application using npm.
CMD ["nodemon", "--exec", "npm", "start"]