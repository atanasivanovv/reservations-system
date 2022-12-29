const express = require('express');
const userRoutes = require('./user-routes');
const venueRoutes = require('./venue-routes');

const router = express.Router();

router.use('/users', userRoutes);

router.use('/venues', venueRoutes);

module.exports = router;
