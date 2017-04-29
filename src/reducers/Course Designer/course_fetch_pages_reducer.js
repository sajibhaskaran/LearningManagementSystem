import { FETCH_COURSE_PAGES } from "../../actions/Course Designer/fetch_course_pages";

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_COURSE_PAGES:
            return action.payload.data;
    }

    return state;
}