import { FEEDBACK_ACTION } from "../../actions/Feedback/get_feedback_action";

export default function (state = null, action) {

	switch (action.type) {

		// returning feedback
		case FEEDBACK_ACTION:
			return action.payload.data;
	}

	return state;
}