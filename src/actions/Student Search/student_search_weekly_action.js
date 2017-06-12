import axios from 'axios';

export const STUDENT_SEARCH_WEEKLY_ACTION = "STUDENT_SEARCH_WEEKLY_ACTION";

export function studentSearchWeeklyAction() {

	// endpoint to hit
	const url = "/SPA/GetWeeklyStudentOnly";

	// Request
	const request = axios.get(url);

	return {
		type: STUDENT_SEARCH_WEEKLY_ACTION,
		payload: request
	}
}