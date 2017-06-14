import { STUDENT_SEARCH_ACTION } from "../../actions/Student Search/student_search_action";
import { STUDENT_SEARCH_WEEKLY_ACTION } from "../../actions/Student Search/student_search_weekly_action";
import { STUDENT_SEARCH_DRILL_ACTION } from "../../actions/Student Search/student_search_drill_action";

export default function (state = null, action) {
	
	switch (action.type) {
	
		// triggers when a user is selected and clears our message state
		case STUDENT_SEARCH_ACTION:
		    return action.payload.data;

	    case STUDENT_SEARCH_WEEKLY_ACTION:
			return action.payload.data;

		case STUDENT_SEARCH_DRILL_ACTION:
			return action.payload.data;
	}

	return state;
}