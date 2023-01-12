import React from 'react';
import VenueCard from './VenueCard';

const clubs = [
	{
		id: 1,
		name: 'PM Club',
		location: 'Pozitano, Sofia',
		stars: 4,
		img: require('../../assets/images/clubs/pm.jpg'),
	},
	{
		id: 2,
		name: 'Mulatta Club',
		location: 'Port Varna',
		stars: 5,
		img: require('../../assets/images/clubs/mullata.jpg'),
	},
	{
		id: 3,
		name: 'Carrusel Club',
		location: 'Georgi S. Rakovski 108, Sofia',
		stars: 4,
		img: require('../../assets/images/clubs/carrusel.jpg'),
	},
	{
		id: 4,
		name: 'Koppa Club',
		location: 'Knyaz Boris 1',
		stars: 4,
		img: require('../../assets/images/clubs/koppa.jpg'),
	},
	{
		id: 5,
		name: 'Doker Club',
		location: 'Port Varna',
		stars: 3,
		img: require('../../assets/images/clubs/doker.jpg'),
	},
	{
		id: 6,
		name: 'Plaza',
		location: 'Studentska 1',
		stars: 4,
		img: require('../../assets/images/clubs/33.jpg'),
	},

	{
		id: 7,
		name: 'W Club',
		location: 'Hristo Botev 84, Plovdiv',
		stars: 4,
		img: require('../../assets/images/clubs/wclub.jpg'),
	},
];

function Clubs() {
	return (
		<div className='flex colum flex-wrap justify-center'>
			{clubs.map((club) => (
				<div key={club.id} className='w-1/4 mt-10 space-x-5'>
					<VenueCard
						id={club.id}
						name={club.name}
						location={club.location}
						stars={club.stars}
						img={club.img}
					/>
				</div>
			))}
		</div>
	);
}

Clubs.propTypes = {};

export default Clubs;
