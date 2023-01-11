import React from 'react';
import { Dropdown } from 'flowbite-react';

export const Locations = {
	SOFIA: 'Sofia',
	VARNA: 'Varna',
	PLOVDIV: 'Plovdiv',
	BURGAS: 'Burgas',
};

function LocationDropdown(props) {
	return (
		<Dropdown
			label='Location'
			size='sm'
			dismissOnClick={false}
			className='max-h-48 overflow-x-hidden overflow-y-scroll'
		>
			{Object.values(Locations).map((location, idx) => (
				<Dropdown.Item key={`${location}-${idx}`}>
					{location}
				</Dropdown.Item>
			))}
		</Dropdown>
	);
}

LocationDropdown.propTypes = {};

export default LocationDropdown;
