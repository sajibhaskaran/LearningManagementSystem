import { LOADED_FALSE } from '../../actions/Loader/loaded_false_action';
import { FETCH_COURSES } from '../../actions/Course Designer/course_dashboard_action';
import { FETCH_STUDENT_COURSE_VIEW } from "../../actions/fetch_student_course_view";


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
    }

    return state;
}