import React from 'react';
import PropTypes from 'prop-types';
import VenueCard from './VenueCard';
import { Outlet } from 'react-router-dom';

const restaurants = [
	{
		id: 1,
		name: 'Largo Bar & Dinner',
		location: 'Pl. Nezavisimost, Sofia',
		stars: 4,
		img: require('../../assets/images/restaurants/largo.jpg'),
	},
	{
		id: 2,
		name: 'Djanam Steakhouse',
		location: 'Pirinski Prohod 61a, Sofia',
		stars: 5,
		img: require('../../assets/images/restaurants/djanam.jpg'),
	},
	{
		id: 3,
		name: 'Raffy Plovdiv',
		location: 'Patriarh Evtimii, Plovdiv',
		stars: 4,
		img: require('../../assets/images/restaurants/raffy_plovdiv.jpg'),
	},
	{
		id: 4,
		name: 'The Bay',
		location: 'St. Konstantin & Elena, Varna',
		stars: 3,
		img: require('../../assets/images/restaurants/the_bay.jpg'),
	},
	{
		id: 5,
		name: 'Doker Club',
		location: 'Port Varna',
		stars: 3,
		img: require('../../assets/images/restaurants/djanam.jpg'),
	},
	{
		id: 6,
		name: 'Largo Bar & Dinner',
		location: 'Pl. Nezavisimost, Sofia',
		stars: 4,
		img: require('../../assets/images/restaurants/largo.jpg'),
	},

	{
		id: 7,
		name: 'Raffy Plovdiv',
		location: 'Patriarh Evtimii, Plovdiv',
		stars: 4,
		img: require('../../assets/images/restaurants/raffy_plovdiv.jpg'),
	},

	{
		id: 8,
		name: 'Djanam Steakhouse',
		location: 'Pirinski Prohod 61a, Sofia',
		stars: 5,
		img: require('../../assets/images/restaurants/djanam.jpg'),
	},
	{
		id: 9,
		name: 'Doker Club',
		location: 'Port Varna',
		stars: 3,
		img: require('../../assets/images/restaurants/djanam.jpg'),
	},
	{
		id: 10,
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
				<div key={rest.id} className='w-1/5 mt-10 space-x-5'>
					<VenueCard
						id={rest.id}
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
