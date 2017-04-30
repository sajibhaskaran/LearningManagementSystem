import axios from 'axios';

export const COURSE_DRILL_ACTION = "COURSE_DRILL_ACTION";

export function courseDrillAction(courseId) {
  console.log("action hit")
	// url
  const url = `/SPA/getDrills?courseId=${courseId}`;

	// Request
	const request = axios.get(url);

	return {
		type: COURSE_DRILL_ACTION,
		payload: request
	}
}