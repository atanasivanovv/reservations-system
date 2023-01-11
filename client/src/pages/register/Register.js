import React from 'react';
import { ButtonGroup, Heading, VStack } from '@chakra-ui/react';
import TextField from '../../components/TextField';
import { Button } from 'flowbite-react';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function Register(props) {
	return (
		<Formik
			initialValues={{ name: '', email: '', password: '' }}
			validationSchema={Yup.object({
				name: Yup.string()
					.required('Username required!')
					.min(6, 'Username too short!')
					.max(28, 'Username too long!'),
				email: Yup.string().required('Email required!'),
				password: Yup.string()
					.required('Password required!')
					.min(6, 'Password too short!')
					.max(28, 'Password too long!'),
			})}
			onSubmit={(values, actions) => {
				alert(JSON.stringify(values, null, 2));
				actions.resetForm();
			}}
		>
			<VStack
				as={Form}
				w={{ base: '90%', md: '500px' }}
				m='auto'
				justify='center'
				h='70vh'
				spacing='1rem'
			>
				<Heading className='text-2xl'>Register</Heading>
				<Heading>
					Registration form for new clients to the system
				</Heading>
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
					placeholder='Enter password'
					autoComplete='off'
					label=''
					className='w-80 border-2 p-2 border-black rounded-md'
				/>

				<TextField
					name='password'
					placeholder='Confirm Password'
					autoComplete='off'
					label=''
					className='w-80 border-2 p-2 border-black rounded-md'
				/>

				<ButtonGroup pt='1rem'>
					<Button type='submit'>Registration</Button>
				</ButtonGroup>

				<Link to={'/login'}>Already have an account?</Link>
				<Link to={'/business-register'}>Register as a business?</Link>
			</VStack>
		</Formik>
	);
}

Register.propTypes = {};

export default Register;
