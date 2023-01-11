import React from 'react';
import VenueCard from './VenueCard';

const bars = [
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
];

function Bars(props) {
	return (
		<div className='flex colum flex-wrap justify-center border-b-2 border-gray-400 pb-10'>
			{bars.map((bar) => (
				<div key={bar.id} className='w-1/5 mt-10 space-x-5'>
					<VenueCard
						id={bar.id}
						name={bar.name}
						location={bar.location}
						stars={bar.stars}
						img={bar.img}
					/>
				</div>
			))}
		</div>
	);
}

Bars.propTypes = {};

export default Bars;
