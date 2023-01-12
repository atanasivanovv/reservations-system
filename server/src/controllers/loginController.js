const User = require('../db/models/User');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
	const { name, password } = req.body;

	if (!name || !password) {
		return res.status(500).send({ msg: 'Invalid username or password!' });
	}

	// const dbUser = await User.query().where('name', '=', name);

	// await bcrypt.compare(password, dbUser.password);

	return res.status(200).send('Logged in successfully!');
};

module.exports = login;
