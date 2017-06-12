import axios from 'axios';

export const SEND_WEEKLY_FEEDBACK_MESSAGE = 'SEND_WEEKLY_FEEDBACK_MESSAGE';

export function sendFeedbackWeeklyMessage(values) {
	const url = "/SPA/WeeklyReportFeedback";

	const request = axios.post(url, { form: JSON.stringify(values) })
		.then(function (response) {
		})
		.catch(function (error) {
		});

	

	return {
	    type: SEND_WEEKLY_FEEDBACK_MESSAGE,
		payload: request
	};
}