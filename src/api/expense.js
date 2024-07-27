import axios from 'axios';

export const getExpensesByMessId = async (messId, limit) => {
	try {
		const response = await axios.get(
			`/api/v1/expanses/get-expanses/${messId}/?limit=${limit}`,
			{
				withCredentials: true,
			}
		);
		return response.data.data;
	} catch (error) {
		return error.response.data;
	}
};

export const addExpense = async (messId, expenseFor, amount, description) => {
	try {
		const response = await axios.patch(
			`/api/v1/expanses/add-expanse/${messId}`,
			{
				expanseFor: expenseFor,
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

export const updateTransaction = async (
	transactionId,
	expanseFor,
	amount,
	description
) => {
	try {
		const response = await axios.patch(
			`https://mess-manager-backend-1.onrender.com/api/v1/expanses/update-expanse/${transactionId}`,
			{
				expanseFor,
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

export const deleteExpenseById = async (transactionId) => {
	try {
		const response = await axios.delete(
			`https://mess-manager-backend-1.onrender.com/api/v1/expanses/delete-expanse/${transactionId}`,
			{
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
