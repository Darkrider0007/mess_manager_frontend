import axios from 'axios';

export const getTransactions = async (limit = 5) => {
	try {
		const response = await axios.get(
			`/api/v1/users/getPaymentList?limit=${limit}`,
			{
				withCredentials: true,
			}
		);
		return response.data.data;
	} catch (error) {
		return error.response.data;
	}
};

export const getTransactionsByUserIdInMess = async (messID, userID) => {
	try {
		const response = await axios.get(
			`/api/v1/incomingAmount/get-transactions-by-member/${messID}/${userID}`,
			{
				withCredentials: true,
			}
		);
		return response.data.data;
	} catch (error) {
		return error.response.data;
	}
};

export const addTransaction = async (messId, memberId, amount, description) => {
	try {
		const response = await axios.patch(
			`/api/v1/incomingAmount/add-amount/${messId}`,
			{
				memberId,
				amount,
				description,
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

export const getTransactionsByMessId = async (messId, currentPage) => {
	try {
		const limit = Math.max(10, currentPage * 2 + 2);
		const response = await axios.get(
			`https://mess-manager-backend-1.onrender.com/api/v1/incomingAmount/get-incoming-transactions/${messId}?limit=${limit}`,
			{
				withCredentials: true,
			}
		);
		return response.data.data;
	} catch (error) {
		return error.response.data;
	}
};

export const updateTransaction = async (
	transactionId,
	memberId,
	amount,
	description
) => {
	try {
		const response = await axios.patch(
			`https://mess-manager-backend-1.onrender.com/api/v1/incomingAmount/update-amount/${transactionId}`,
			{
				memberId,
				amount,
				description,
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

export const deleteTransactionById = async (transactionId) => {
	try {
		const response = await axios.delete(
			`https://mess-manager-backend-1.onrender.com/api/v1/incomingAmount/delete-amount/${transactionId}`,
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
