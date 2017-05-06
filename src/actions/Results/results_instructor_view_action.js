import axios from 'axios';

export const RESULTS_INSTRUCTOR_VIEW_ACTION = "RESULTS_INSTRUCTOR_VIEW_ACTION";

export function resultsInstructorViewAction(url) {

	// Request
	const request = axios.get(url);

	return {
		type: RESULTS_INSTRUCTOR_VIEW_ACTION,
		payload: request
	}
}