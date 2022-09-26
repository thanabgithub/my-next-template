FROM node:16.17.0-bullseye
RUN npm install -g npm@8.19.2
EXPOSE 3000

WORKDIR /usr/src/app

COPY . .

# RUN yarn install
# && yarn cache clean && bash -c "tail -f /dev/null"

