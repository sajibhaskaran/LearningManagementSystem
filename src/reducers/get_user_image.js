// actions

import {IMAGE_ACCESS} from '../actions/profile_image_access_action';
import {IMAGE_UPDATE} from '../actions/Callback/image_update_action';

export default function (state = [], action) {
	
	switch (action.type) {
		// initial image load
		case IMAGE_ACCESS:
			return action.payload;
		// after updatin the image
		case IMAGE_UPDATE:
			return action.payload;

	}

	return state;
}