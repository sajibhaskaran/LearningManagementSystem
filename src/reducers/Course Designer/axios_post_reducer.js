import { POST_CREATE_COURSE } from '../../actions/Course Designer/course_creation_form_submit_action';
import { CREATE_TEST_FIELD } from '../../actions/Course Designer/page_test_field_create_action';
import { EDIT_TEST_FIELD } from '../../actions/Course Designer/page_test_field_edit_action';

export default function (state = null, action) {
    
    switch (action.type) {

        case CREATE_TEST_FIELD:
            window.location.hash = "#/PageEdit";
            return state;

        case EDIT_TEST_FIELD:
            if (window.location.hash.toLowerCase() === "#/testfieldedit") {
                window.location.hash = "#/PageEdit";
            }
            return state;

        case POST_CREATE_COURSE:

            if (window.location.hash.toLowerCase() === "#/coursecreate") {
                window.location.hash = "#/CourseDesigner";
            }

            return state;
    }

    return state;
}