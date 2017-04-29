import { FETCH_PAGE_FIELDS } from "../../actions/Course Designer/fetch_page_fields_action";
import { EDIT_PAGE_FIELD } from "../../actions/Course Designer/page_field_edit_post_action";
import { PAGE_EDIT_DATA } from "../../actions/Course Designer/page_edit_data_action";

export default function (state = null, action) {

    switch (action.type) {

        case FETCH_PAGE_FIELDS:
            return action.payload.data;

        case EDIT_PAGE_FIELD:
            window.location.hash = "#/PageEdit";
            return action.payload.data;

        case PAGE_EDIT_DATA:
            // Must go back to course edit.  Otherwise things get buggy
            window.location.hash = "#/CourseEdit";
    }

    return state;
}