import React from 'react';
import Canvas from './Canvas';

function Home(props) {
	return (
		<>
			<Canvas />
			<p>Filters</p>
			<h1>All</h1>
			<h1>Restaurants</h1>
			<h1>Bars</h1>
			<h1>Clubs</h1>
		</>
	);
}

Home.propTypes = {};

export default Home;
