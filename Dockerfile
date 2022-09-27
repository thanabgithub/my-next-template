FROM node:16.17.0-bullseye

# workdir will jump to the directory (will create the directory if it is not there)
WORKDIR /usr/src/app

COPY . .

RUN yarn install && yarn cache clean 
# && bash -c "tail -f /dev/null"

