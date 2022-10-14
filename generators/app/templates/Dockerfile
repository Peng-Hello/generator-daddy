FROM node
WORKDIR /app
COPY ["package.json", "./"]
RUN npm install --registry=https://registry.npm.taobao.org && npm install
COPY . .
CMD node app.mjs