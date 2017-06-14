import { DRILLS_FEEDBACK_ACTION } from "../../actions/Feedback/get_drills_feedback_action";

export default function (state = null, action) {

	switch (action.type) {

		// returning feedback
		case DRILLS_FEEDBACK_ACTION:
			return action.payload.data;
	}

	return state;
}