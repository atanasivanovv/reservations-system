const { knexSnakeCaseMappers } = require('objection');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: 'postgresql',
		connection: {
			database: 'reservations_system',
			user: 'postgres',
			password: 'phonebook123',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
		seeds: {
			directory: './seeds',
		},
		...knexSnakeCaseMappers,
	},
};
