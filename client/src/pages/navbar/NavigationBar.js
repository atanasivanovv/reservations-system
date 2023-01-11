import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import LocationDropdown from './dropdown/LocationDropdown';
import UserDropdown from './dropdown/UserDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faMartiniGlass,
	faUtensils,
} from '@fortawesome/free-solid-svg-icons';

function NavigationBar({ userLogged }) {
	return (
		<Navbar fluid={true} rounded={true}>
			<Navbar.Brand href='/'>
				<FontAwesomeIcon icon={faMartiniGlass} />
				<span className='self-center mx-2 whitespace-nowrap text-xl font-semibold dark:text-white'>
					Reservation System
				</span>
				<FontAwesomeIcon icon={faUtensils} />
			</Navbar.Brand>

			{userLogged && <UserDropdown />}
			<Navbar.Toggle />

			<Navbar.Collapse>
				<div className='mt-2'>
					<Link to='/login'>
						<div className='text-main'>
							{!userLogged && (
								<>
									<FontAwesomeIcon icon={faUser} /> Login
								</>
							)}
						</div>
					</Link>
				</div>
				<div className='mt-2'>
					<Link to='/'>Home</Link>
				</div>
				<div className='mt-2'>
					<Link to='/'>About Us</Link>
				</div>
				<LocationDropdown />
			</Navbar.Collapse>
		</Navbar>
	);
}

NavigationBar.propTypes = {
	userLogged: PropTypes.bool.isRequired,
};

export default NavigationBar;
