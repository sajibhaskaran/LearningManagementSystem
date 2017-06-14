import axios from 'axios';

export const SEND_DRILLS_FEEDBACK_MESSAGE = 'SEND_DRILLS_FEEDBACK_MESSAGE';

export function sendFeedbackDrillsMessage(values) {
	const url = "/SPA/DrillsReportFeedback";

	const request = axios.post(url, { form: JSON.stringify(values) })
		.then(function (response) {
		})
		.catch(function (error) {
		});



	return {
		type: SEND_DRILLS_FEEDBACK_MESSAGE,
		payload: request
	};
}