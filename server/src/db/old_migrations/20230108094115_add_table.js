/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('review', function (table) {
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
	await knex.raw('DROP TABLE if exists "review" CASCADE');
};
