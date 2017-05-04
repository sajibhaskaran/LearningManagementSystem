import axios from 'axios';

export const STUDENT_SEARCH_ACTION = "STUDENT_SEARCH_ACTION";

export function studentSearchAction() {

	// endpoint to hit
	const url = "/SPA/GetStudentOnly";

	// Request
	const request = axios.get(url);

	return {
		type: STUDENT_SEARCH_ACTION,
		payload: request
	}
}