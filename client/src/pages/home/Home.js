import React from 'react';
import Canvas from './Canvas';
import VenueSearchFilter from './VenueSearchFilter';

function Home(props) {
	return (
		<>
			<Canvas />
			<VenueSearchFilter />
			<h1>All</h1>
			<h1>Restaurants</h1>
			<h1>Bars</h1>
			<h1>Clubs</h1>
		</>
	);
}

Home.propTypes = {};

export default Home;
