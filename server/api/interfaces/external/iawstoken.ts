export interface IAWSIdentityToken {
	at_hash: string;
	sub: string;
	'cognito:groups'?: (string)[] | null;
	iss: string;
	'cognito:username': string;
	aud: string;
	identities?: (IIdentitiesEntity)[] | null;
	token_use: string;
	auth_time: number;
	name: string;
	exp: number;
	iat: number;
	email: string;
}
export interface IIdentitiesEntity {
	userId: string;
	providerName: string;
	providerType: string;
	issuer?: null;
	primary: string;
	dateCreated: string;
}
