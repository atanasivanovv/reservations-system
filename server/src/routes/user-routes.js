const express = require('express');
const User = require('../db/models/User');

const router = express.Router();

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const user = await User.query().findById(id);
	return res.json(user);
});

module.exports = router;
