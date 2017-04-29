
import axios from 'axios';

export const PROFILE_ACCESS = 'PROFILE_ACCESS';

// Gets the most important role of the user
export function profileAccess() {
	console.log("test");
	// End point to hit
	const url = "/SPA/getProfile";

	// AJAX call using axios library
	const request =axios.get(url)
	
	
	return {
		type: PROFILE_ACCESS,
		payload: request.data
	}
	
}