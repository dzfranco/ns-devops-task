declare module 'graphql-upload' {
	import { IncomingMessage, ServerResponse } from 'http';
	import { GraphQLScalarType } from 'graphql';
	import { RequestHandler } from 'express';
	import { Readable } from 'stream';

	export interface UploadMiddlewareOptions {
		maxFieldSize?: number;
		maxFileSize?: number;
		maxFiles?: number;
	}

	export interface Upload {
		createReadStream(): Readable;
		filename: string;
		mimetype: string;
		encoding: string;
	}

	export function processRequest(
		request: IncomingMessage,
		response: ServerResponse,
		options: UploadMiddlewareOptions
	): Promise<any>;

	export const GraphQLUpload: GraphQLScalarType;

	export function graphqlUploadExpress(options?: UploadMiddlewareOptions): RequestHandler;
}
