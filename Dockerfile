FROM node:20

RUN mkdir -p /home/node/app/client/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app/client

COPY package.json .

USER node

COPY --chown=node:node . . 

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev","--","--host", "0.0.0.0"]
