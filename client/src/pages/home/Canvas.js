import React from 'react';

function Canvas(props) {
	return (
		<div className='flex justify-center items-center w-full h-96 text-white center bg-canvas-background bg-center bg-cover'>
			<div>
				<h1 className='text-3xl'>
					Your reservation is one click away!
				</h1>
				<p className='text-center'>
					Reserve now. Fast. Easy. Reliable.
				</p>
			</div>
		</div>
	);
}

Canvas.propTypes = {};

export default Canvas;
