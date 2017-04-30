import axios from 'axios';

export const IMAGE_ACCESS = 'IMAGE_ACCESS';

// Accessing user image information
export function imageAccess() {
	
	// url of the end point
	const url = "/SPA/getImageFile";

	// axios call to get info.
	const request =axios.get(url)
	
	
	return {
		type: IMAGE_ACCESS,
		payload: request
	}
	
}