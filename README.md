# HeyFinance Migrations

- [HeyFinance Migrations](#heyfinance-migrations)
	- [About this repo](#about-this-repo)
	- [Technologies used for this project](#technologies-used-for-this-project)
	- [Starting this project](#starting-this-project)
	- [Next Steps](#next-steps)

## About this repo

This repo is a fork of [nxprloresjs-microservice starter](https://github.com/ERS-HCL/nxplorerjs-microservice-starter). For any documentation regarding the general repo, visit their homepage.

The repo has been stripped down to the very basics. Removing express, graphql, etc.

## Technologies used for this project

-   [TypeScript](https://github.com/Microsoft/TypeScript) - Main Language
-   [Backpack](https://github.com/jaredpalmer/backpack) - Building Tooling based on Webpack
-   [InversifyJS](https://github.com/inversify/InversifyJS) - Inversion of Control
-   [Iridium](https://github.com/sierrasoftworks/iridium) - ODM
-   [Jest](jestjs.io) - Testing utils
-   [Docker](https://www.docker.com) - Containerization platform

## Starting this project

To develop this project you can use Docker Compose and run the following command:

```bash
$ docker-compose up
```

That should start the Mongo DB server and the project.

If you want to debug, you can use the following configuration (for VS Code, but should have the info for other IDEs)

```json
{
	"name": "Attach to Docker",
	"type": "node",
	"request": "attach",
	"port": 5858,
	"address": "127.0.0.1",
	"protocol": "inspector",
	"restart": true,
	"sourceMaps": true,
	"sourceMapPathOverrides": {
		"webpack:///./*": "${workspaceRoot}/*",
		"webpack:///*": "*"
	},
	"outFiles": ["${workspaceRoot}/build/main.js"],
	"localRoot": "${workspaceRoot}/build/",
	"remoteRoot": "/var/www/build"
}
```

## Next Steps

-   Further cleanup, remove non-desired dependencies
