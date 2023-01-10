import React, { useState } from 'react';

import { ButtonGroup, Heading, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { TextInput, Button } from 'flowbite-react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import axios from 'axios';

import TextField from '../../components/TextField';

const Login = () => {
	const navigate = useNavigate();
	const [error, setError] = useState();

	const handleOnSubmit = async (values, actions) => {
		setError(null);
		const response = await axios
			.post('http://localhost:3000/api/login', values)
			.catch((err) => {
				if (err && err.response) setError(err.response.data.message);
			});

		if (response) {
			alert('Welcome back in. Authenticating...');
		}
	};

	return (
		<Formik
			initialValues={{ name: '', password: '' }}
			validationSchema={Yup.object({
				name: Yup.string()
					.required('Name required!')
					.min(6, 'Name too short!')
					.max(28, 'Name too long!'),
				password: Yup.string()
					.required('Password required!')
					.min(6, 'Password too short!')
					.max(28, 'Password too long!'),
			})}
			onSubmit={(values, actions) => handleOnSubmit(values, actions)}
		>
			<VStack
				as={Form}
				w={{ base: '90%', md: '500px' }}
				m='auto'
				justify='center'
				h='50vh'
				spacing='1rem'
			>
				<Heading className='text-2xl'>Log In</Heading>
				<Heading>
					Login for clients into the reservation system
				</Heading>
				<TextField
					name='name'
					placeholder='Enter name'
					autoComplete='off'
					label=''
					className='w-80 border-2 p-2 border-black rounded-md'
				/>

				<TextField
					name='password'
					placeholder='Enter password'
					autoComplete='off'
					label=''
					className='w-80 border-2 p-2 border-black rounded-md'
				/>

				<ButtonGroup pt='1rem'>
					<Button type='submit'>Log In</Button>
					<Button onClick={() => navigate('/register')}>
						Create Account
					</Button>
				</ButtonGroup>
			</VStack>
		</Formik>
	);
};

export default Login;
