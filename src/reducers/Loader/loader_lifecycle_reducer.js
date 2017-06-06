import { LOADED_FALSE } from '../../actions/Loader/loaded_false_action';
import { FETCH_COURSES } from '../../actions/Course Designer/course_dashboard_action';
import { FETCH_STUDENT_COURSE_VIEW } from "../../actions/fetch_student_course_view";
import { FETCH_PROGRESS } from "../../actions/Progress/progress_action";
import { FEEDBACK_ACTION } from "../../actions/Feedback/get_feedback_action";
import { RESULTS_INSTRUCTOR_VIEW_ACTION } from "../../actions/Results/results_instructor_view_action";


// Keeps track of when the loader should be in a loading state
// Initial state is loaded: false
export default function (state = false, action) {

    switch (action.type) {

        // The loader will render its loading state
        case LOADED_FALSE:            
            return false;

        case FETCH_STUDENT_COURSE_VIEW:
            return true;

        // Loader will render its loaded state
        case FETCH_COURSES:
			return true;

		case FETCH_PROGRESS:
			return true;

		case FEEDBACK_ACTION:
			return true;

		case RESULTS_INSTRUCTOR_VIEW_ACTION:
			return true;
    }

    return state;
}