FROM node:9.4.0-alpine
COPY . /service1
WORKDIR /service1
RUN  npm install
CMD ["npm","start"]
