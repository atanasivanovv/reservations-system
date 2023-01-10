import React from 'react';
import PropTypes from 'prop-types';
import VenueCard from './VenueCard';

const restaurants = [
	{
		name: 'Largo Bar & Dinner',
		location: 'Pl. Nezavisimost, Sofia',
		stars: 4,
		img: require('../../assets/images/restaurants/largo.jpg'),
	},
	{
		name: 'Djanam Steakhouse',
		location: 'Pirinski Prohod 61a, Sofia',
		stars: 5,
		img: require('../../assets/images/restaurants/djanam.jpg'),
	},
	{
		name: 'Raffy Plovdiv',
		location: 'Patriarh Evtimii, Plovdiv',
		stars: 4,
		img: require('../../assets/images/restaurants/raffy_plovdiv.jpg'),
	},
	{
		name: 'The Bay',
		location: 'St. Konstantin & Elena, Varna',
		stars: 3,
		img: require('../../assets/images/restaurants/the_bay.jpg'),
	},
	{
		name: 'Doker Club',
		location: 'Port Varna',
		stars: 3,
		img: require('../../assets/images/restaurants/djanam.jpg'),
	},
	{
		name: 'Largo Bar & Dinner',
		location: 'Pl. Nezavisimost, Sofia',
		stars: 4,
		img: require('../../assets/images/restaurants/largo.jpg'),
	},

	{
		name: 'Raffy Plovdiv',
		location: 'Patriarh Evtimii, Plovdiv',
		stars: 4,
		img: require('../../assets/images/restaurants/raffy_plovdiv.jpg'),
	},

	{
		name: 'Djanam Steakhouse',
		location: 'Pirinski Prohod 61a, Sofia',
		stars: 5,
		img: require('../../assets/images/restaurants/djanam.jpg'),
	},
	{
		name: 'Doker Club',
		location: 'Port Varna',
		stars: 3,
		img: require('../../assets/images/restaurants/djanam.jpg'),
	},
	{
		name: 'The Bay',
		location: 'St. Konstantin & Elena, Varna',
		stars: 3,
		img: require('../../assets/images/restaurants/the_bay.jpg'),
	},
];

function Restaurants(props) {
	return (
		<div className='flex colum flex-wrap justify-center'>
			{restaurants.map((rest) => (
				<div className='w-1/5 mt-10 space-x-5'>
					<VenueCard
						name={rest.name}
						location={rest.location}
						stars={rest.stars}
						img={rest.img}
					/>
				</div>
			))}
		</div>
	);
}

Restaurants.propTypes = {};

export default Restaurants;
