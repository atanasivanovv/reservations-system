import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'flowbite-react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { range } from 'lodash';

import FormSelect from '../../components/SelectField';

function VenueSearchFilter(props) {
	const [defaultDate, setDefaultDate] = useState(new Date());
	const handleSubmit = (values) => {};

	return (
		<Formik
			initialValues={{
				venueType: '',
				reservationDate: '',
				numOfPeople: '',
			}}
			onSubmit={(values) => handleSubmit(values)}
		>
			{() => (
				<Form>
					<div className='flex row w-full mt-5 justify-center space-x-3 px-2 pb-2 sm:pb-6 lg:px-6 xl:pb-6'>
						<div className='w-1/3'>
							<p>Venue Type</p>
							<FormSelect
								name='venueType'
								type='text'
								label=''
								placeholder='Restaurant'
								required
							>
								<option>Restaurant</option>
								<option>Club</option>
								<option>Bar</option>
							</FormSelect>
						</div>
						<div className='w-1/3'>
							<p>How Many People</p>
							<FormSelect
								name='numOfPeople'
								type='text'
								label=''
								placeholder='People'
								required
							>
								{range(14).map((i) => (
									<option key={`key-${i}`}>{i + 1}</option>
								))}
							</FormSelect>
						</div>
						<div className='w-1/3'>
							<p>Reservation Date</p>
							<div className='border-black border-2 p-1'>
								<SingleDatepicker
									name='date-input'
									date={defaultDate}
									onDateChange={setDefaultDate}
								/>
							</div>
						</div>
						<Button type='submit' className='mt-4'>
							Search
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

VenueSearchFilter.propTypes = {};

export default VenueSearchFilter;
