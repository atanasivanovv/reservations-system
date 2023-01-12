import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Rating } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { range } from 'lodash';
import { UserContext } from '../../context';

function VenueCard({ id, name, img, location, stars }) {
	const navigate = useNavigate();
	const { userLogged } = useContext(UserContext);

	return (
		<div className='max-w-sm'>
			<Card imgSrc={img}>
				<h5 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{name}
					<Rating className='mt-1'>
						{range(stars).map((_, idx) => (
							<Rating.Star key={`string-${idx}`} />
						))}
					</Rating>
				</h5>

				<Button
					onClick={() => navigate(userLogged ? `/restaurants/${id}` : '/login')}
					type='submit w-1/3 justify-end'
				>
					Reserve
				</Button>

				<p className='font-normal text-gray-700 dark:text-gray-400'>
					<FontAwesomeIcon icon={faLocationDot} /> {location}
				</p>
			</Card>
		</div>
	);
}

VenueCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stars: PropTypes.number.isRequired,
};

export default VenueCard;
