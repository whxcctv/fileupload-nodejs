FROM node:latest

RUN mkdir /app
RUN git clone https://github.com/whxcctv/fileupload-nodejs.git /app
WORKDIR /app
EXPOSE 80
RUN npm install
CMD ["node","app.js"]
