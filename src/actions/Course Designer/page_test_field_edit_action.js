import axios from 'axios';

export const EDIT_TEST_FIELD = "EDIT_TEST_FIELD";

export function editTestField(testField) {

    // url to post to
    const url = "/SPA/EditTestField";

    // Parse page number into number
    testField.QuestionNumber = parseInt(testField.QuestionNumber);

    // Post to action
    const request = axios.post(url, { json: JSON.stringify(testField) });

    return {
        type: EDIT_TEST_FIELD,
        payload: request
    }
}