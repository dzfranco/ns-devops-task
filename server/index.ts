import * as ProgressBar from 'progress';

import { Server } from './common/server';

const setupServer = async () => {
	// create server
	const bar = new ProgressBar('Server Startup [:bar] :percent :elapseds', {
		total: 2,
	});
	console.log('Configuring server');
	const server = new Server();
	bar.tick();
	await server.connectToDatabase();
	console.log('Running migrations');
	await server.runTask();
	bar.tick();
	process.exit();
};

// Run in cluster mode
setupServer();
