# Docker Devops task

We welcome you to the Devops Task for Docker. We wish you the best of luck on this excercise.

## What do you have to do with this?

There is a base Dockerfile that has the language specific commands to run, but your job is to adjust it as follows.

1. The image should be based on `node:carbon`
2. The working directory for the image we are gonna be creating is `/var/www`
3. The container should expose the port 3000 to other containers

Once you have the correct Dockerfile, you need to make the project run on docker-compose. There are a couple of requirements for this project to run.

1. The project relies on MongoDB. So we need a MongoDB container to be orchestrated alongside the API
   * The API is dependent on the mongo container, so we need to reflect that dependency on the docker-compose file. 
2. There are multiple environment variables that the docker-compose file must have for the API to run.
 *  `PORT` - The port that the API will use as an output.
 *  `MONGO_URL` -  The URL of the mongo host, as specified on the docker network
 *  `MONGO_PORT` - The port exposed by mongo, as specified on the docker network
3. The root of this project must be mapped to the `/var/www` directory that we defined on the original Dockerfile


If you get stuck use the the special branch we made out for you (`dockerfile-base`)


## Bonus Points

### Path 1: Creating a production image using building layers

Build your own production Docker image that uses only the compiled code. The script to build the code is `npm compile-native:prod`, which generates compiled code on the `build` folder.

There is a file called `production.dockerfile` under the `Docker` folder that you can use as a starting base. It has all of the language-specific code and two layers, one for building and the other one to expose the compiled code.

1. You must name the first layer and copy the files from the first layer as specified in the file's comments
2. Change the URL to respond to a DocumentDB database in AWS, by setting an environment variable called FULL_MONGO_URL


### Path 2: Making the containers scale locally.

1. The backend run behind [HAProxy](https://hub.docker.com/r/eeacms/haproxy/)
2. Scale the backend using docker-compose. Let it have 4 replicas
3. Extra bonus if you can explain the architecture and what HAProxy is doing
