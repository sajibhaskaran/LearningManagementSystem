import axios from 'axios';

export const CREATE_TEST_FIELD = "CREATE_TEST_FIELD";

export function createTestField(testField) {

    // url to post to
    const url = "/SPA/CreateTestField";

    // Parse page number into number
    testField.QuestionNumber = parseInt(testField.QuestionNumber);

    // Post to action
    const request = axios.post(url, { json: JSON.stringify(testField) });

    return {
        type: CREATE_TEST_FIELD,
        payload: request
    }
}