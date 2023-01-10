import React from 'react';
import PropTypes from 'prop-types';
import FormSelect from '../../components/SelectField';

function VenueSearchFilter(props) {
	return (
		<Formik
			initialValues={{
				[fieldNames.name]: '',
				[fieldNames.email]: '',
				[fieldNames.password]: '',
				[fieldNames.notifyForAllTickets]: true,
				[fieldNames.role]: rolesMapper[roles.admin],
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => handleSubmit(values)}
		>
			{() => (
				<Form>
					<div className='space-y-3 px-2 pb-2 sm:pb-6 lg:px-6 xl:pb-6'>
						<h3 className='text-xl font-medium text-gray-900 dark:text-white'>
							Add Team Member
						</h3>

						<FormSelect
							name={fieldNames.name}
							type='text'
							label='Name'
							placeholder='Name'
							required
						/>

						<FormSelect
							name={fieldNames.email}
							type='email'
							label='Email'
							placeholder='email@macstadium.com'
							required
						/>
						<FormSelect
							name={fieldNames.password}
							type='password'
							label='Password'
							placeholder='******'
							required
						/>

						<FormSelect name={fieldNames.role} label='Team Member Role' required>
							{Object.values(roles).map((role) => (
								<option key={rolesMapper[role]} value={rolesMapper[role]}>
									{role}
								</option>
							))}
						</FormSelect>

						<div className='w-full mt-3'>
							<Button type='submit' disabled={loading}>
								Submit
							</Button>
						</div>

						{addTeamMemberError && (
							<div className='mb-2' data-testid={testIds.addTeamMemberError}>
								<ErrorInfo
									error={addTeamMemberError}
									onDismiss={() => setAddTeamMemberError(null)}
								/>
							</div>
						)}
					</div>
				</Form>
			)}
		</Formik>
	);
}

VenueSearchFilter.propTypes = {};

export default VenueSearchFilter;
