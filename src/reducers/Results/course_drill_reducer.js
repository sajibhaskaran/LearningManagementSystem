import { COURSE_DRILL_ACTION } from "../../actions/Results/course_drill_action";

export default function (state = null, action) {
	
	switch (action.type) {
	
		// triggers when a user is selected and clears our message state
		case COURSE_DRILL_ACTION:
			return action.payload.data;
	}

	return state;
}