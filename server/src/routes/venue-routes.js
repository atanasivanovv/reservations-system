const express = require('express');
const Venue = require('../db/models/Venue');

const router = express.Router();

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const venue = await Venue.query().findById(id);
	return res.json(venue);
});

module.exports = router;
