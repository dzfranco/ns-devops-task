FROM node:carbon

RUN mkdir -p /var/www
RUN mkdir -p /var/www/logs
RUN mkdir -p /var/www/tmp
WORKDIR /var/www
RUN npm install -g yarn

COPY ./ /var/www/
RUN yarn install --pure-lockfile
RUN yarn compile-native:prod
COPY package.json var/www/build


# YOU MUST ADAPT A SECOND LAYER called build_layer and do the following
# copy /var/www/build from the previous layer to /var/www/ on the new layer 
# copy /var/www/node_modules from the previous layer to /var/www/node_modules on the new layer
# set WORKDIR /var/www





#SET VARIABLES
ENV NODE_ENV=production
ENV FULL_MONGO_URL=
RUN npm install -g pm2

EXPOSE 3000 3001
CMD ["node", "server/index.js" ]