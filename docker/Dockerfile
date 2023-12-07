FROM node

WORKDIR /app

# context path aligned
COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]