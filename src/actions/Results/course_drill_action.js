import axios from 'axios';

export const COURSE_DRILL_ACTION = "COURSE_DRILL_ACTION";

export function courseDrillAction(url) {

	// Request
	const request = axios.get(url);

	return {
		type: COURSE_DRILL_ACTION,
		payload: request
	}
}