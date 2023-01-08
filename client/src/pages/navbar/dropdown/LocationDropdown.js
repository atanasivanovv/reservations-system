import React from 'react';
import { Dropdown } from 'flowbite-react';

function LocationDropdown(props) {
	return (
		<Dropdown
			label='Location'
			size='sm'
			dismissOnClick={false}
			className='max-h-48 overflow-x-hidden overflow-y-scroll'
		>
			<Dropdown.Item>Loop (map)</Dropdown.Item>
			<Dropdown.Item>over every</Dropdown.Item>
			<Dropdown.Item>possible</Dropdown.Item>
			<Dropdown.Item>BG location</Dropdown.Item>
			<Dropdown.Item>BG location</Dropdown.Item>
			<Dropdown.Item>BG location</Dropdown.Item>
			<Dropdown.Item>BG location</Dropdown.Item>
			<Dropdown.Item>BG location</Dropdown.Item>
		</Dropdown>
	);
}

LocationDropdown.propTypes = {};

export default LocationDropdown;
