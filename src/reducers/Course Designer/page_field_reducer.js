import { PAGE_CREATE_FIELD } from "../../actions/Course Designer/page_field_create_action";

export default function (state = null, action) {

    switch (action.type) {
        case PAGE_CREATE_FIELD:
            window.location.hash = "#/PageEdit";
            return action.payload;
    }

    return state;
}