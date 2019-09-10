# Devops task

We welcome you to the Devops Task for Docker. We wish you the best of luck on this excercise.


## About this repo

This repo is a fork of [nxprloresjs-microservice starter](https://github.com/ERS-HCL/nxplorerjs-microservice-starter). For any documentation regarding the general repo, visit their homepage.

The repo has been stripped down to the very basics; Express and Iridium.

## What do you have to do with this?

This project needs to run via docker-compose. The requirements are as follows:

This project depends on MongoDB to work and developers need their own local copy to do their daily job. Your **job** is to make this work with docker-compose

* There is a dependency between the backend and MongoDB so Mongo must run first
  * The base image should be `node:carbon`
  * If you get stuck use the the special branch we made out for you
* The API must run in a port as defined on the .env file and developers must be able to access it from their local machines
* Development mode on this server depends directly on the file saved on the disk. You must find a way to use those files in docker-compose
  * Beware if you use Mac, as there is a bottleneck and a special option needed to map the local system to the docker filesystem


## Bonus Points

* Change the URL to respond to a DocumentDB database in AWS
* Make the backend scale by 3 replicas and run behind [HAProxy](https://hub.docker.com/r/eeacms/haproxy/)
  * Extra bonus if you can explain the architecture and what HAProxy is doing
* Build your own production Docker image that uses only the compiled code.
  * The script to build the code is `npm compile-native:prod`
  * The script creates a code to the `build` folder
