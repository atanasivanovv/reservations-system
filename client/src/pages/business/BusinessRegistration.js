import React, { useState } from 'react';
import { ButtonGroup, Heading, VStack } from '@chakra-ui/react';
import { Button, Spinner } from 'flowbite-react';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { range } from 'lodash';

import TextField from '../../components/TextField';
import FormSelect from '../../components/FormSelect';
import SuccessToast from '../../components/SuccessToast';
import GooglePay from '../payment/GooglePay';

const VenueTypes = {
	RESTAURANT: 'Restaurant',
	BAR: 'Bar',
	CLUB: 'Club',
};

const initialValues = {
	name: '',
	email: '',
	password: '',
	phone: '',
	confirmPassword: '',
	venueName: '',
	venuePhone: '',
	capacity: 1,
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
	phone: Yup.string()
		.required('Phone required!')
		.max(12, 'Phone too long!'),
	password: Yup.string()
		.required('Password required!')
		.min(6, 'Password too short!')
		.max(28, 'Password too long!'),
	confirmPassword: Yup.string()
		.required('Password required!')
		.min(6, 'Password too short!')
		.max(28, 'Password too long!'),
	venueName: Yup.string().required('Venue name required!'),
	venuePhone: Yup.string()
		.required('Phone required!')
		.max(12, 'Phone too long!'),
	capacity: Yup.number().required('Capacity required!'),
	type: Yup.string().required('Venue type required!'),
	city: Yup.string().required('Venue city required!'),
	address: Yup.string().required('Venue address required!'),
});

function BusinessRegistration(props) {
	const [registrationSuccess, setRegistrationSuccess] =
		useState(null);
	const [error, setError] = useState(null);
	const [processingPayment, setProcessingPayment] = useState(false);

	const handleSubmit = async (values) => {
		const { confirmPassword, ...data } = values;

		const response = await axios
			.post('http://localhost:3000/business-register', data)
			.catch((err) => {
				if (err && err.response) setError(err.response.data.message);
				setRegistrationSuccess(null);
			});

		if (response && response.data) {
			setError(null);
			setRegistrationSuccess(response.data);
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
				{processingPayment ? (
					<>
						<Heading className='text-2xl'>
							Your payment is being processed...
						</Heading>
						<Spinner
							aria-label='Extra large spinner example'
							size='xl'
						/>
					</>
				) : (
					<>
						{!error && registrationSuccess && (
							<SuccessToast msg={registrationSuccess} />
						)}
						<Heading className='text-2xl'>Venue Registration</Heading>
						<Heading>
							Register your business - get more clients
						</Heading>

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
									name='phone'
									placeholder='Enter phone number'
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
								<h1 className='text-xl text-center'>
									Venue information
								</h1>
								<TextField
									name='venueName'
									placeholder='Venue name'
									autoComplete='off'
									label=''
									className='w-80 border-2 p-2 border-black rounded-md'
								/>

								<div className='flex border-2 space-x-1 border-black rounded-md'>
									<p className='text-sm mt-2 px-2'>Type:</p>
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

									<p className='text-sm mt-2 px-2'>Capacity:</p>
									<FormSelect
										name='capacity'
										type='text'
										placeholder='Capacity'
										label=''
										required
									>
										{range(10, 210, 10).map((i) => (
											<option key={`key-${i}`}>{i}</option>
										))}
									</FormSelect>
								</div>

								<TextField
									name='venuePhone'
									placeholder='Venue contact phone'
									autoComplete='off'
									label=''
									className='w-80 border-2 p-2 border-black rounded-md'
								/>

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
							<Button type='submit'>Register Business</Button>
						</ButtonGroup>

						<Link to={'/register'}>
							Make a registration as a client
						</Link>

						{registrationSuccess && (
							<>
								<p className='text-xl'>
									You have registered your business profile. In order
									for us to list your venue, you need create a payment
									profile through GPay.{' '}
								</p>
								<GooglePay
									setProcessingPayment={setProcessingPayment}
								/>
							</>
						)}
					</>
				)}
			</VStack>
		</Formik>
	);
}

BusinessRegistration.propTypes = {};

export default BusinessRegistration;
