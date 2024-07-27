import axios from 'axios';
import FormData from 'form-data';

export const userSignup = async (user) => {
	const { username, fullName, email, password, confirmPassword, avatar } = user;

	if (password !== confirmPassword) {
		console.log('Passwords do not match');
		return {
			status: 'fail',
			message: 'Passwords do not match',
		};
	}

	const form = new FormData();
	form.append('userName', username);
	form.append('fullName', fullName);
	form.append('email', email);
	form.append('password', password);
	form.append('avatar', avatar[0], avatar[0].name);

	// await axios
	// 	.post('/api/v1/users/registration', form)
	// 	.then((response) => {
	// 		console.log('Response:', response?.data);
	// 		return response.data;
	// 	})
	// 	.catch((error) => {
	// 		console.log('Error:', error.response?.data);
	// 		return error;
	// 	});

	try {
		const response = await axios.post('/api/v1/users/registration', form);
		console.log('Response:', response?.data);
		return response.data; // Return the response data
	} catch (error) {
		console.log('Error:', error.response?.data);
		return error?.response?.data;
	}
};

export const userLogin = async (email, password) => {
	try {
		const response = await axios.post(
			'https://mess-manager-backend-1.onrender.com/api/v1/users/login',
			{
				email,
				password,
			},
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};

export const getUser = async () => {
	try {
		const response = await axios.get(
			'https://mess-manager-backend-1.onrender.com/api/v1/users/getCurrentUser',
			{
				withCredentials: true,
			}
		);
		return response.data.data;
	} catch (error) {
		console.log('An error occurred while fetching user data:', error);
		try {
			const refreshTokenResponse = await axios.get(
				'/api/v1/users/newRefreshToken',
				{
					withCredentials: true,
				}
			);
			console.log('New refresh token:', refreshTokenResponse.data);
			return getUser();
		} catch (refreshTokenError) {
			console.log(
				'An error occurred while fetching new refresh token:',
				refreshTokenError
			);
			throw refreshTokenError;
		}
	}
};

export const getUserById = async (userId) => {
	try {
		const response = await axios.get(
			`https://mess-manager-backend-1.onrender.com/api/v1/users/getUserById/${userId}`,
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
