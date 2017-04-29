// action.type variable
import { SUBMIT_PROFILE } from "../actions/profile_submit_action";
import { PROFILE_ACCESS } from "../actions/profile_access_action";

export default function (state = null, action) {
	switch (action.type) {
		case SUBMIT_PROFILE:
			return action.payload.data;
		case PROFILE_ACCESS:
			return action.payload.request
	}

	return state;
}