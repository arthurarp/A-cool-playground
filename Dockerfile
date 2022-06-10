FROM node:16

WORKDIR /app

COPY . .

RUN npm install -g npm@8.12.1

ENTRYPOINT ["npm", "run", "dev"]