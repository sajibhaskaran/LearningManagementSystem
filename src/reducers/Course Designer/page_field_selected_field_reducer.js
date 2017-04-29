import { SELECT_PAGE_FIELD } from '../../actions/Course Designer/page_field_edit_select_action';

export default function (state = null, action) {

    switch (action.type) {
        case SELECT_PAGE_FIELD:
            return action.payload;
    }

    return state;
}