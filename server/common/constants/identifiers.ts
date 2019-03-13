export const SERVICE_IDENTIFIER = {
	AWS: Symbol.for('AWS'),
	ACTIVITY: Symbol.for('Activity'),
	BOOK: Symbol.for('Book'),
	CATEGORY: Symbol.for('Category'),
	CUSTOM_CATEGORY: Symbol.for('CustomCategory'),
	CUSTOM_SUBCATEGORY: Symbol.for('CustomSubCategory'),
	DATES_HELPER: Symbol.for('DatesHelper'),
	DAILY_TRANSACTION: Symbol.for('DailyTransaction'),
	EXAMPLE: Symbol.for('Example'),
	FRIEND: Symbol.for('Friend'),
	INCOME_SOURCE: Symbol.for('IncomeSurce'),
	LOGGER: Symbol.for('Logger'),
	LOGGER_MIDDLEWARE: Symbol.for('LoggerMiddleware'),
	METRICS: Symbol.for('Metrics'),
	MONTHLY_EXPENSE: Symbol.for('MonthlyExpense'),
	OCCUPATION: Symbol.for('Occupation'),
	REDACT: Symbol.for('Redact'),
	REPORTS: Symbol.for('Reports'),
	SECURITY: Symbol.for('Security'),
	USER: Symbol.for('User'),
};

export const DATABASE_IDENTIFIER = {
	MYDATABASE: Symbol.for('MyDatabase'),
};

export const PERSISTENCE_IDENTIFIERS = {
	ACTIVITY: Symbol.for('ActivityPersistence'),
	BOOK: Symbol.for('BookPersistence'),
	CATEGORY: Symbol.for('CategoryPersistence'),
	CUSTOM_CATEGORY: Symbol.for('CustomCategoryPersistence'),
	CUSTOM_SUBCATEGORY: Symbol.for('CustomSubCategoryPersistence'),
	DAILY_TRANSACTION: Symbol.for('DailyTransactionPersistence'),
	FRIEND: Symbol.for('FriendPersistence'),
	INCOME_SOURCE: Symbol.for('IncomeSourcePersistence'),
	MONTHLY_EXPENSE: Symbol.for('MonthlyExpensePersistence'),
	OCCUPATION: Symbol.for('OccupationPersistence'),
	USER: Symbol.for('UserPersistence'),
};

export const CRON_TASK_IDENTIFIERS = {
	INCOME_SOURCE: Symbol.for('IncomeSourceCronTasks'),
	MONTHLY_EXPENSE: Symbol.for('MonthlyExpenseCronTasks'),
};

export const RESOLVER_IDENTIFIERS = {
	USER: Symbol.for('UserResolver'),
};

export const CONSTANT_IDENTIFIERS = {
	GRAPHQL_CONTEXT: Symbol.for('GraphQLContext'),
	GRAPHQL_CONFIG: Symbol.for('GraphQLConfig'),
};
