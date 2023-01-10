import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { UserContext } from './context';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NavigationBar from './pages/navbar/NavigationBar';
import Register from './pages/register/Register';
import Bars from './pages/venue/Bars';

function App() {
	const [userLogged, setUserLogged] = useState(false);

	return (
		<>
			<NavigationBar />

			<UserContext.Provider value={{ userLogged, setUserLogged }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/bars' element={<Bars />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
}

export default App;
