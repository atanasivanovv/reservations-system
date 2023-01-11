import React from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function SuccessToast({ msg }) {
	return (
		<div className='flex flex-col gap-4'>
			<Toast>
				<div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200'>
					<FontAwesomeIcon className='h-5 w-5' icon={faCheck} />
				</div>
				<div className='ml-3 text-sm font-normal'>{msg}</div>
				<Toast.Toggle />
			</Toast>
		</div>
	);
}

SuccessToast.propTypes = {
	msg: PropTypes.string.isRequired,
};

export default SuccessToast;
