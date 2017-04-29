import { EDIT_PAGE_FIELD } from '../../actions/Course Designer/page_field_edit_post_action';

export default function (state = null, action) {

    switch (action.type) {
        case EDIT_PAGE_FIELD:
            window.location.hash = "#/PageEdit";
            return action.payload;
    }

    return state;
}