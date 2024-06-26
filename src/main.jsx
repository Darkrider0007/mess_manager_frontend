import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import DashBoard from './Pages/DashBoard.jsx';
import User from './Pages/User.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import UserById from './Pages/UserById.jsx';
import CreateNewMess from './Pages/CreateNewMess.jsx';
import MessByID from './Pages/MessByID.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<App />}
		>
			<Route
				path=''
				element={<DashBoard />}
			/>
			<Route
				path='registration'
				element={<Registration />}
			/>
			<Route
				path='login'
				element={<Login />}
			/>
			<Route
				path='user'
				element={<User />}
			/>
			<Route
				path='user/:id'
				element={<UserById />}
			/>
			<Route
				path='mess/:id'
				element={<MessByID />}
			/>
			<Route
				path='create-new-mess'
				element={<CreateNewMess />}
			/>
			<Route
				path='*'
				element={<NotFoundPage />}
			/>
		</Route>
	)
);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
