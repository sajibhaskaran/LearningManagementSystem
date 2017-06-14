import axios from 'axios';

export const STUDENT_SEARCH_DRILL_ACTION = "STUDENT_SEARCH_DRILL_ACTION";

export function studentSearchDrillAction() {

	// endpoint to hit
	const url = "/SPA/GetDrillsStudentOnly";

	// Request
	const request = axios.get(url);

	return {
		type: STUDENT_SEARCH_DRILL_ACTION,
		payload: request
	}
}