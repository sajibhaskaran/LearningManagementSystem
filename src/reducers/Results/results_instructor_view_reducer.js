import { RESULTS_INSTRUCTOR_VIEW_ACTION } from "../../actions/Results/results_instructor_view_action";

export default function (state = null, action) {

	switch (action.type) {

		// triggers when a user is selected and clears our message state
		case RESULTS_INSTRUCTOR_VIEW_ACTION:
			return action.payload.data;
	}

	return state;
}