const bcrypt = require('bcrypt');
const User = require('../db/models/User');
const Venue = require('../db/models/Venue');

const saltRounds = 10;

const registerUser = async (req, res, next) => {
	const { name, email, password, phone, city } = req.body;

	try {
		const hashedPass = bcrypt.hashSync(password, saltRounds);

		await User.query().insert({
			name,
			email,
			password: hashedPass,
			phone: phone ?? '',
			city,
		});

		res.status(200).send('Logged successfully!');
	} catch (err) {
		res
			.status(500)
			.send('Something went wrong when registering user');
		next(err);
	}
};

const registerBusiness = async (req, res, next) => {
	const { name, email, phone, password } = req.body;
	const { venueName, venuePhone, type, city, address, capacity } =
		req.body;

	try {
		const hashedPass = await bcrypt.hash(password, saltRounds);

		await User.query().insert({
			name,
			email,
			city,
			phone,
			password: hashedPass,
			hasBusiness: true,
		});

		await Venue.query().insert({
			name: venueName,
			type,
			city,
			phone: venuePhone,
			capacity,
			address,
		});

		res.status(200).send('Business registered successfully!');
	} catch (err) {
		res.status(500).send({
			msg: 'Something went wrong when creating business',
			err,
		});
		next(err);
	}
};

module.exports = { registerUser, registerBusiness };
