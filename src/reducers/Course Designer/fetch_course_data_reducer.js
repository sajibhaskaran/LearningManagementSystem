import { FETCH_COURSE_DATA } from '../../actions/Course Designer/fetch_course_data';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_COURSE_DATA:
            return action.payload;
    }

    return state;
}