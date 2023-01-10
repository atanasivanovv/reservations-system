import React from 'react';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

function Canvas(props) {
	const navigate = useNavigate();

	return (
		<div className='flex justify-center items-center w-full h-96 text-white center bg-canvas-background bg-center bg-cover text-center'>
			<div>
				<h1 className='text-3xl'>
					Your reservation is one click away!
				</h1>
				<p className=''>Reserve now. Fast. Easy. Reliable.</p>
				<p className='mt-10'>
					You want to list your restaurant? Let's work together!
				</p>
				<Button
					type='submit'
					className='mt-3 mx-auto'
					onClick={() => navigate('/business-register')}
				>
					Register Business
				</Button>
			</div>
		</div>
	);
}

Canvas.propTypes = {};

export default Canvas;
