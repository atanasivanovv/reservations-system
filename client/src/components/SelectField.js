import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { Select, Label } from 'flowbite-react';

const FormSelect = ({ label, disabled, ...props }) => {
	const { name, children, className } = props;
	const [field] = useField(props);
	return (
		<>
			<div className='mb-1 block'>
				<Label htmlFor={name} value={label} {...className} />
			</div>
			<Select
				id={name}
				data-testid={name}
				disabled={disabled}
				sizing='sm'
				{...field}
				{...props}
			>
				{children}
			</Select>
		</>
	);
};

export default FormSelect;

FormSelect.propTypes = {
	label: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	name: PropTypes.string.isRequired,
	children: PropTypes.node,
};

FormSelect.defaultProps = {
	disabled: false,
	children: null,
};
