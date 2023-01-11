import React from 'react';
import Restaurants from './Restaurants';
import Bars from './Bars';
import Clubs from './Clubs';

function AllVenues() {
	return (
		<>
			<Restaurants />
			<Bars />
			<Clubs />
		</>
	);
}

AllVenues.propTypes = {};

export default AllVenues;
