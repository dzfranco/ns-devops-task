import { GraphQLScalarType, Kind } from 'graphql';

import { ObjectID } from 'mongodb';

export const ObjectIdScalar = new GraphQLScalarType({
	name: 'ObjectId',
	description: 'Mongo object id scalar type',
	parseValue(value: string) {
		return new ObjectID(value); // value from the client input variables
	},
	serialize(value: ObjectID) {
		return value.toString(); // value sent to the client
	},
	parseLiteral(ast) {
		if (ast.kind === Kind.STRING) {
			return new ObjectID(ast.value); // value from the client query
		}
		return null;
	},
});
