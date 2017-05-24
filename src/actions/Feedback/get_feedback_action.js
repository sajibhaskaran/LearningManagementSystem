import axios from 'axios';

export const FEEDBACK_ACTION = "FEEDBACK_ACTION";

export function feedbackAction() {
	// endpoint to hit.
	const url = '/SPA/GetFeedback';

	// Request
	const request = axios.get(url);

	return {
		type: FEEDBACK_ACTION,
		payload: request
	}
}