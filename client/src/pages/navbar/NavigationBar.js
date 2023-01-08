import React from 'react';
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

function NavigationBar() {
	return (
		<Navbar fluid={true} rounded={true}>
			<Navbar.Brand href='/'>
				<FontAwesomeIcon icon={faMartiniGlass} />
				<span className='self-center mx-2 text-main whitespace-nowrap text-xl font-semibold dark:text-white'>
					Res. System
				</span>
				<FontAwesomeIcon icon={faUtensils} />
			</Navbar.Brand>

			<UserDropdown />
			<Navbar.Toggle />

			<Navbar.Collapse>
				<div className='mt-2'>
					<Link to='/login'>
						<div className='text-main'>
							<FontAwesomeIcon icon={faUser} /> Login
						</div>
					</Link>
				</div>
				<div className='mt-2'>
					<Link to='/'>Home</Link>
				</div>
				<LocationDropdown />
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;
