import React from 'react';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

function VenueTypeFilter() {
	const navigate = useNavigate();

	return (
		<div className='flex justify-center space-x-10 mt-10 px-5 py-7 bg-gray-400'>
			<h2 className='mb-2 text-3xl font-bold text-white w-1/4'>
				Choose venue category:
			</h2>

			<Button
				type='submit'
				onClick={() => navigate('/restaurants')}
				color='light'
				className='w-1/5'
			>
				Restaurants
			</Button>
			<Button
				type='submit'
				onClick={() => navigate('/bars')}
				color='light'
				className='w-1/5'
			>
				Bars
			</Button>
			<Button
				type='submit'
				onClick={() => navigate('/clubs')}
				color='light'
				className='w-1/5'
			>
				Clubs
			</Button>
		</div>
	);
}

export default VenueTypeFilter;
