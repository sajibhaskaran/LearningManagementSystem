import { WEEKLY_FEEDBACK_ACTION } from "../../actions/Feedback/get_weekly_feedback_action";

export default function (state = null, action) {

	switch (action.type) {

		// returning feedback
	    case WEEKLY_FEEDBACK_ACTION:
			return action.payload.data;
	}

	return state;
}