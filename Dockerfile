FROM node

# You need to create the /var/www dir
# and set it as the workdir

RUN npm install -g yarn
RUN yarn install

# Expose the ports

CMD [ "node", "main" ]