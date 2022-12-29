/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Truncate all existing table
	await knex.raw('TRUNCATE TABLE "user" CASCADE');
	await knex.raw('TRUNCATE TABLE "venue" CASCADE');
	await knex.raw('TRUNCATE TABLE "reservation" CASCADE');

	await knex('user').insert([
		{
			id: 1,
			name: 'Atanas Ivanov',
			email: 'nasko@gmail.com',
			password: '123456',
			phone: '0896323312',
			city: 'Varna',
		},
		{
			id: 2,
			name: 'Mark Smith',
			email: 'smithhh@gmail.com',
			password: 'lalala',
			phone: '0895331233',
			city: 'Sofia',
		},
		{
			id: 3,
			name: 'Ivan Ivanov',
			email: 'ivanivanov@gmail.com',
			password: 'qwerty123',
			phone: '0893353535',
			city: 'Sofia',
		},
	]);

	await knex('venue').insert([
		{
			id: 1,
			name: 'Small City Cafe',
			type: 'Lounge',
			city: 'Varna',
			address: 'St. Konstanstin and Elena 12',
			phone: '0888123456',
			capacity: 40,
		},
		{
			id: 2,
			name: 'Happy Bar & Grill',
			type: 'Restaurant',
			city: 'Sofia',
			address: 'ul. Rakovksa 25',
			phone: '0888000123',
			capacity: 120,
		},
		{
			id: 3,
			name: 'Megami Club',
			type: 'Night Club',
			city: 'Sofia',
			address: 'ul. James Baucher 100',
			phone: '0897000000',
			capacity: 100,
		},
	]);

	await knex('reservation').insert([
		{
			id: 1,
			user_id: 1,
			venue_id: 1,
			num_of_people: 3,
			date_reserved: new Date('2022-12-17T16:00:00'),
		},
		{
			id: 2,
			user_id: 2,
			venue_id: 2,
			num_of_people: 5,
			date_reserved: new Date('2022-12-20T19:00:00'),
		},
		{
			id: 3,
			user_id: 2,
			venue_id: 3,
			num_of_people: 6,
			date_reserved: new Date('2022-12-17T23:30:00'),
		},
	]);
};
