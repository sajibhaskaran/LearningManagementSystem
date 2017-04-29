import { SELECT_STUDENT_COURSE_ID } from '../../actions/Student Courses/select_student_course_id_action';

export default function (state = null, action) {

    switch (action.type) {
        case SELECT_STUDENT_COURSE_ID:
            //if (window.location.hash === "#/") {
            //    window.location.hash = "#/CourseView";
            //}

            return action.payload;
    }

    return state;
}