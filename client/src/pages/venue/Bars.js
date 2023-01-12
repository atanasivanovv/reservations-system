import React from 'react';
import VenueCard from './VenueCard';

const bars = [
	{
		id: 1,
		name: 'Da Vinci',
		location: 'Pozitano 22, Sofia',
		stars: 5,
		img: require('../../assets/images/bars/davinci.jpg'),
	},
	{
		id: 2,
		name: 'Punta Cana',
		location: 'Promenade, Varna',
		stars: 5,
		img: require('../../assets/images/bars/punta_cana.jpg'),
	},
	{
		id: 3,
		name: 'Club 35',
		location: 'Patriarh Evtimii, Plovdiv',
		stars: 4,
		img: require('../../assets/images/bars/35.jpg'),
	},
	{
		id: 4,
		name: 'The Brick Port',
		location: 'Port Varna',
		stars: 4,
		img: require('../../assets/images/bars/brick.jpg'),
	},
	{
		id: 5,
		name: 'Planet Sofia',
		location: 'NDK',
		stars: 4,
		img: require('../../assets/images/bars/planet.jpg'),
	},
	{
		id: 6,
		name: 'Hugo Club',
		location: 'ul. Zhelezni Vrata 42',
		stars: 4,
		img: require('../../assets/images/bars/hugo.jpg'),
	},
];

function Bars(props) {
	return (
		<div className='flex colum flex-wrap justify-center border-b-2 border-gray-400 pb-10'>
			{bars.map((bar) => (
				<div key={bar.id} className='w-1/4 mt-10 space-x-5'>
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
