import axios from 'axios';

export const DRILLS_FEEDBACK_ACTION = "DRILLS_FEEDBACK_ACTION";

export function drillsFeedbackAction() {
	// endpoint to hit.
	const url = '/SPA/GetDrillsInstructorView';

	// Request
	const request = axios.get(url);

	return {
		type: DRILLS_FEEDBACK_ACTION,
		payload: request
	}
}