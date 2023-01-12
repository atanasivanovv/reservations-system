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
			table.integer('business_user_id').nullable();
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
			table.integer('business_user_id').nullable();
			table.integer('num_of_people').notNullable();
			table.dateTime('date_reserved').notNullable();
			table.timestamps(true, true);
		})
		.createTable('review', function (table) {
			table.increments();
			table.integer('user_id').references('id').inTable('user');
			table.integer('venue_id').references('id').inTable('venue');
			table.integer('stars').notNullable();
			table.string('description').notNullable();
			table.timestamps(true, true);
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	await knex.raw('DROP TABLE if exists "user" CASCADE');
	await knex.raw('DROP TABLE if exists "venue" CASCADE');
	await knex.raw('DROP TABLE if exists "reservation" CASCADE');
};
