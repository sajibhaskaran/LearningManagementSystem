import axios from 'axios';

export const WEEKLY_FEEDBACK_ACTION = "WEEKLY_FEEDBACK_ACTION";

export function weeklyFeedbackAction() {
	// endpoint to hit.
	const url = '/SPA/GetWeeklyFeedback';

	// Request
	const request = axios.get(url);

	return {
	    type: WEEKLY_FEEDBACK_ACTION,
		payload: request
	}
}