FROM node:12.0-alpine

ENV  pwd =  /home/application
ENV NODE_ENV=DEVELOPMENT
COPY .  ${pwd}
WORKDIR  ${pwd}

RUN npm install

ENTRYPOINT [ "npm","start" ]

EXPOSE 3000