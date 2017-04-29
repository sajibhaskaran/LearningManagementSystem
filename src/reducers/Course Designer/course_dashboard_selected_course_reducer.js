import { SELECT_COURSE } from '../../actions/Course Designer/course_dashboard_select_course_action';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_COURSE:            
            return action.payload;
    }

    return state;
}