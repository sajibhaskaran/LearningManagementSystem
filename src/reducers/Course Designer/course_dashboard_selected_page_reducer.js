import { COURSE_SELECT_PAGE } from "../../actions/Course Designer/course_dashboard_select_page_action";


export default function (state = null, action) {

    switch (action.type) {
        case COURSE_SELECT_PAGE:
            return action.payload;
    }

    return state;
}