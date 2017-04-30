 //action.type variable
import { SUBMIT_PROFILE } from "../actions/profile_submit_action";
import { IMAGE_ACCESS_CALLBACK } from "../actions/Callback/image_access_callback_action";


export default function (state = null, action) {
	switch (action.type) {
		case SUBMIT_PROFILE:
			console.log(action.type, action.payload)
			if(action.payload = "success") return true;

		case IMAGE_ACCESS_CALLBACK:
			console.log(action.type)
			return false;
		
	}

	return state;
}