const express = require('express');
const passport = require('passport');

const userRoutes = require('./user-routes');
const venueRoutes = require('./venue-routes');
const successfulPayment = require('../controllers/paymentController');
const login = require('../controllers/loginController');
const {
	registerUser,
	registerBusiness,
} = require('../controllers/registerController');

const router = express.Router();

router.use('/users', userRoutes);

router.use('/venues', venueRoutes);

router.post('/login', login);

router.post('/register', registerUser);
router.post('/business-register', registerBusiness);

router.get(
	'/payment',
	passport.authenticate('jwt', { session: false }),
	successfulPayment
);

module.exports = router;
