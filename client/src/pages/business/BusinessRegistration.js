import React, { useState } from 'react';
import { ButtonGroup, Heading, VStack } from '@chakra-ui/react';
import { Button } from 'flowbite-react';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

import TextField from '../../components/TextField';
import FormSelect from '../../components/FormSelect';
import SuccessToast from '../../components/SuccessToast';

const VenueTypes = {
	RESTAURANT: 'Restaurant',
	BAR: 'Bar',
	CLUB: 'Club',
};

const initialValues = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
	venueName: '',
	type: VenueTypes.RESTAURANT,
	city: '',
	address: '',
};

const validationSchema = Yup.object({
	name: Yup.string()
		.required('Username required!')
		.min(6, 'Username too short!')
		.max(28, 'Username too long!'),
	email: Yup.string().required('Email required!'),
	password: Yup.string()
		.required('Password required!')
		.min(6, 'Password too short!')
		.max(28, 'Password too long!'),
	confirmPassword: Yup.string()
		.required('Password required!')
		.min(6, 'Password too short!')
		.max(28, 'Password too long!'),
	venueName: Yup.string().required('Venue name required!'),
	type: Yup.string().required('Venue type required!'),
	city: Yup.string().required('Venue city required!'),
	address: Yup.string().required('Venue address required!'),
});

function BusinessRegistration(props) {
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);

	const handleSubmit = async (values) => {
		console.log(values);
		const { confirmPassword, ...data } = values;

		const response = await axios
			.post('http://localhost:3000/register', data)
			.catch((err) => {
				if (err && err.response) setError(err.response.data.message);
				setSuccess(null);
			});

		if (response && response.data) {
			setError(null);
			setSuccess(response.data.message);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => handleSubmit(values)}
		>
			<VStack
				as={Form}
				w={{ base: '90%', md: '500px' }}
				m='auto'
				justify='center'
				h='70vh'
				spacing='1rem'
			>
				{!error && success && <SuccessToast msg={success} />}
				<Heading className='text-2xl'>Venue Registration</Heading>
				<Heading>Register your business - get more clients</Heading>

				<div className='flex'>
					<div className='space-y-3'>
						<h1 className='text-xl text-center'>
							Personal information
						</h1>
						<TextField
							name='name'
							placeholder='Enter your name'
							autoComplete='off'
							label=''
							className='w-80 border-2 p-2 border-black rounded-md'
						/>

						<TextField
							name='email'
							placeholder='Enter email address'
							autoComplete='off'
							label=''
							className='w-80 border-2 p-2 border-black rounded-md'
						/>

						<TextField
							name='password'
							type='password'
							placeholder='Enter password'
							autoComplete='off'
							label=''
							className='w-80 border-2 p-2 border-black rounded-md'
						/>

						<TextField
							name='confirmPassword'
							type='password'
							placeholder='Confirm Password'
							autoComplete='off'
							label=''
							className='w-80 border-2 p-2 border-black rounded-md'
						/>
					</div>

					<div className='space-y-3 ml-5'>
						<h1 className='text-xl text-center'>Venue information</h1>
						<TextField
							name='venueName'
							placeholder='Venue name'
							autoComplete='off'
							label=''
							className='w-80 border-2 p-2 border-black rounded-md'
						/>

						<div className='border-2 border-black rounded-md'>
							<FormSelect
								name='type'
								type='text'
								placeholder='Venue type'
								label=''
								required
							>
								<option>{VenueTypes.RESTAURANT}</option>
								<option>{VenueTypes.BAR}</option>
								<option>{VenueTypes.CLUB}</option>
							</FormSelect>
						</div>

						<TextField
							name='city'
							placeholder='Venue city'
							autoComplete='off'
							label=''
							className='w-80 border-2 p-2 border-black rounded-md'
						/>

						<TextField
							name='address'
							placeholder='Venue address'
							autoComplete='off'
							label=''
							className='w-80 border-2 p-2 border-black rounded-md'
						/>
					</div>
				</div>

				<ButtonGroup pt='1rem'>
					<Button type='submit'>Register</Button>
				</ButtonGroup>

				<Link to={'/register'}>Register as a client?</Link>
			</VStack>
		</Formik>
	);
}

BusinessRegistration.propTypes = {};

export default BusinessRegistration;
