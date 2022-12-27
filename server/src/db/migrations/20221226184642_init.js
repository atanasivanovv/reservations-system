/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable('venue', (table) => {
			table.increments();
			table.string('name').notNullable();
			table.string('type').notNullable();
			table.string('city').notNullable();
			table.string('address').notNullable();
			table.string('phone').notNullable();
			table.integer('capacity').notNullable();
			table.timestamps(true, true);
		})
		.createTable('user', (table) => {
			table.increments();
			table.string('name').notNullable();
			table.string('email').notNullable().unique();
			table.string('password').notNullable();
			table.string('phone').notNullable();
			table.string('city').notNullable();
			table.boolean('has_business');
			table.timestamps(true, true);
		})
		.createTable('reservation', (table) => {
			table.increments();
			table.integer('user_id').references('id').inTable('user');
			table.integer('venue_id').references('id').inTable('venue');
			table.dateTime('num_of_people').notNullable();
			table.dateTime('date_reserved').notNullable();
			table.timestamps(true, true);
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('user')
		.dropTableIfExists('venue')
		.dropTableIfExists('reservation');
};
