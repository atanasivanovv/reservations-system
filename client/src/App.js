import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { UserContext } from './context';
import AboutUs from './pages/about-us/AboutUs';
import BusinessRegistration from './pages/business/BusinessRegistration';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NavigationBar from './pages/navbar/NavigationBar';
import NotFound from './pages/NotFound';
import Register from './pages/register/Register';
import Bars from './pages/venue/Bars';
import Restaurants from './pages/venue/Restaurants';
import Clubs from './pages/venue/Clubs';
import AllVenues from './pages/venue/AllVenues';
import RestaurantDetails from './pages/venue-details/RestaurantDetails';

function App() {
	const [userLogged, setUserLogged] = useState(false);

	return (
		<>
			<NavigationBar />

			<UserContext.Provider value={{ userLogged, setUserLogged }}>
				<Routes>
					{/* Home */}
					<Route path='/' element={<Home />}>
						<Route path='' element={<AllVenues />} />
						<Route
							path='restaurants'
							element={<Restaurants />}
						></Route>

						<Route path='bars' element={<Bars />} />
						<Route path='clubs' element={<Clubs />} />
					</Route>

					{/* Details */}
					<Route
						path='/restaurants/:restaurantId'
						element={<RestaurantDetails />}
					/>

					{/* Login/Register */}
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route
						path='/business-register'
						element={<BusinessRegistration />}
					/>

					<Route path='/about-us' element={<AboutUs />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
}

export default App;
