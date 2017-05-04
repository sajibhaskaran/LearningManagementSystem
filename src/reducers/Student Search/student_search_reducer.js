import { STUDENT_SEARCH_ACTION } from "../../actions/Student Search/student_search_action";

export default function (state = null, action) {
	
	switch (action.type) {
	
		// triggers when a user is selected and clears our message state
		case STUDENT_SEARCH_ACTION:
			return action.payload.data;
	}

	return state;
}