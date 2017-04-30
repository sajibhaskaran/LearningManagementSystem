
import axios from 'axios';

export const PROFILE_ACCESS = 'PROFILE_ACCESS';

// Accessing user information
export function profileAccess() {
	//console.log("test");
	// url of the end point
	const url = "/SPA/getProfile";

	// axios call to get info.
	const request =axios.get(url)
	
	
	return {
		type: PROFILE_ACCESS,
		payload: request
	}
	
}