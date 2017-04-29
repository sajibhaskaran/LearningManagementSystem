import { FETCH_COURSES } from '../../actions/Course Designer/course_dashboard_action';
import { EDIT_COURSE_DATA } from '../../actions/Course Designer/course_edit_data_action';

export default function (state = null, action) {
    
    switch (action.type) {

        case FETCH_COURSES:            
            return action.payload.data;

        case EDIT_COURSE_DATA:

            // Change url
            window.location.hash = "#/CourseDesigner";

            return state;
    }

    return state;
}