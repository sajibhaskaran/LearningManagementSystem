import axios from 'axios';

export const IMAGE_UPDATE = 'IMAGE_UPDATE';

// Accessing user image information
export function imageUpdate() {
	
	// url of the end point
	const url = "/SPA/getImageFile";

	// axios call to get info.
	const request =axios.get(url)
	//console.log(request);
	
	return {
		type: IMAGE_UPDATE,
		payload: request
	}
	
}