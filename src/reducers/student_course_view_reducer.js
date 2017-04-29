import { FETCH_STUDENT_COURSE_VIEW } from "../actions/fetch_student_course_view";

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_STUDENT_COURSE_VIEW:
            return action.payload.data;
    }

    return state;
}