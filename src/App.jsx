import { Outlet, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { getUser } from './api/auth';
import { useDispatch } from 'react-redux';
import { login } from './store/features/auth/authSlice';
import { Footer, Navbar } from './components';
import { getMess, getMessMembers } from './api/mess';
import { addMess } from './store/features/mess/messSlice';
import { addMessMembers } from './store/features/mess/messMembersSlice';

export default function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		getUser()
			.then((userData) => {
				if (userData) {
					dispatch(login(userData));
					getMess()
						.then((messData) => {
							dispatch(addMess(messData));
							messData.data.forEach((mess) => {
								getMessMembers(mess._id)
									.then((messMembers) => {
										dispatch(addMessMembers(messMembers));
									})
									.catch((error) => {
										console.log(
											'An error occurred while fetching mess members data:',
											error
										);
									});
							});
						})
						.catch((error) => {
							console.log('An error occurred while fetching mess data:', error);
						});
				} else {
					dispatch(login());
				}
			})
			.catch(() => {
				// navigate('/login');
			})
			.finally(() => {});
	}, []);
	return (
		<>
			<Toaster />
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}
