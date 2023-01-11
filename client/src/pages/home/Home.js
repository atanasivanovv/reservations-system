import React from 'react';
import { Outlet } from 'react-router-dom';

import Canvas from './Canvas';
import VenueSearchFilter from './VenueSearchFilter';
import DownloadCard from '../mobile-download/DownloadCard';
import VenueTypeFilter from './VenueTypeFilter';

function Home(props) {
	return (
		<>
			<Canvas />
			<VenueSearchFilter />
			<VenueTypeFilter />

			<div className='px-6'>
				<Outlet />
			</div>

			<DownloadCard />
		</>
	);
}

export default Home;
