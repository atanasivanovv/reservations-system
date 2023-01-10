import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Rating } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { range } from 'lodash';

function VenueCard({ name, img, location, stars }) {
	return (
		<div className='max-w-sm'>
			<Card imgSrc={img}>
				<h5 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{name}
					<Rating className='mt-1'>
						{range(stars).map((_) => (
							<Rating.Star />
						))}
					</Rating>
				</h5>

				<Button type='submit w-1/3 justify-end'>Reserve</Button>

				<p className='font-normal text-gray-700 dark:text-gray-400'>
					<FontAwesomeIcon icon={faLocationDot} /> {location}
				</p>
			</Card>
		</div>
	);
}

VenueCard.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stars: PropTypes.number.isRequired,
};

export default VenueCard;