import axios from 'axios';

export const SEND_FEEDBACK_MESSAGE = 'SEND_FEEDBACK_MESSAGE';

export function sendFeedbackMessage(values) {
	const url = "/SPA/DailyReportFeedback";

	const request = axios.post(url, { form: JSON.stringify(values) })
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});

	

	return {
		type: SEND_FEEDBACK_MESSAGE,
		payload: request
	};
}