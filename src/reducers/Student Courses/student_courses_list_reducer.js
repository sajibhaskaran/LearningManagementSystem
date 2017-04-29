import { FETCH_STUDENT_COURSES } from '../../actions/Student Courses/fetch_courses';

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_STUDENT_COURSES:
            return action.payload.data;
    }

    return state;
}