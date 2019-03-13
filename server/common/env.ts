import * as dotenv from 'dotenv';
// Load environment based on profile
// Will check for .<NODE_ENV>.env file

export const configureEnv = () => {
	console.log(`Configuring environment: ${process.env.NODE_ENV}`);
	dotenv.config({ path: `.${process.env.NODE_ENV}.env` });
};
