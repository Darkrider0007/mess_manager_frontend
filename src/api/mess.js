import axios from 'axios';

export const getMessesById = async (userId) => {
	try {
		const response = await axios.get(`/api/v1/users/getMessById/${userId}`, {
			withCredentials: true,
		});
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};

export const getMess = async () => {
	try {
		const response = await axios.get(
			'https://mess-manager-backend-1.onrender.com/api/v1/users/getEnrolledMesses',
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		console.log('An error occurred while fetching mess data:', error);
		try {
			const refreshTokenResponse = await axios.get(
				'/api/v1/users/newRefreshToken',
				{
					withCredentials: true,
				}
			);
			console.log('New refresh token:', refreshTokenResponse.data);
			return getMess();
		} catch (refreshTokenError) {
			console.log(
				'An error occurred while fetching new refresh token:',
				refreshTokenError
			);
			throw refreshTokenError;
		}
	}
};

export const getMessMembers = async (messId) => {
	try {
		const response = await axios.get(
			`https://mess-manager-backend-1.onrender.com/api/v1/mess/get-mess-members-info/${messId}`,
			{
				withCredentials: true,
			}
		);
		return response.data.data;
	} catch (error) {
		return error.response.data;
	}
};

export const updateMessLogo = async (messId, data) => {
	try {
		const formData = new FormData();
		formData.append('messLogo', data, data.name);
		const response = await axios.patch(
			`https://mess-manager-backend-1.onrender.com/api/v1/mess/update-mess-logo/${messId}`,
			formData,
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};

export const updateMessInfo = async (messId, data) => {
	try {
		const response = await axios.patch(
			`https://mess-manager-backend-1.onrender.com/api/v1/mess/update-mess-info/${messId}`,
			data,
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};

export const changeMessAdmin = async (messId, data) => {
	try {
		const response = await axios.patch(
			`https://mess-manager-backend-1.onrender.com/api/v1/mess/update-mess-admin/${messId}`,
			{
				newAdminId: data.value,
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

export const addNewMember = async (messId, data) => {
	try {
		const response = await axios.post(
			`https://mess-manager-backend-1.onrender.com/api/v1/mess/add-member-to-mess/${messId}`,
			{ email: data.email },
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};

export const removeMember = async (messId, data) => {
	try {
		const memberId = data.value.toString();
		const response = await axios.patch(
			`https://mess-manager-backend-1.onrender.com/api/v1/mess/remove-member-from-mess/${messId}`,
			{ memberId },
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};

export const addMessItem = async (messId, data) => {
	try {
		const response = await axios.patch(
			`https://mess-manager-backend-1.onrender.com/api/v1/mess/add-mess-menu/${messId}`,
			{ menu: data.newMenu },
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};

export const removeMessItem = async (messId, data) => {
	try {
		const response = await axios.patch(
			`https://mess-manager-backend-1.onrender.com/api/v1/mess/remove-mess-menu/${messId}`,
			{ menu: data.toString() },
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
