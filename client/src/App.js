import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import NavigationBar from './pages/navbar/NavigationBar';
import Register from './pages/register/Register';
import Bars from './pages/venue/Bars';

function App() {
	return (
		<>
			<NavigationBar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/bars' element={<Bars />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
