// action.type variable

import { PROFILE_ACCESS } from "../actions/profile_access_action";

export default function (state = null, action) {
	
	switch(action.type){
		case PROFILE_ACCESS:
			return action.payload.data
	}

	return state;
}