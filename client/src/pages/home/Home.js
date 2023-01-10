import React from 'react';
import Canvas from './Canvas';
import VenueSearchFilter from './VenueSearchFilter';
import Restaurants from '../venue/Restaurants';
import Bars from '../venue/Bars';
import Clubs from '../venue/Clubs';

function Home(props) {
	return (
		<>
			<Canvas />
			<VenueSearchFilter />

			<div className='px-6'>
				<Restaurants />
				<Bars />
				<Clubs />
			</div>
		</>
	);
}

Home.propTypes = {};

export default Home;
