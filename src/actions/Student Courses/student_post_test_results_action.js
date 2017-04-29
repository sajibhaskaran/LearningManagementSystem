import axios from 'axios';

export const POST_TEST_RESULT = "POST_TEST_RESULT";

// Takes a student's test submission and posts it
export function postStudentTest(jsonAnswersArray, pageId, status) {

    // url
    const url = "/SPA/PostStudentTest";

    // Make post request
    const request = axios.post(url, { json: jsonAnswersArray, pageId: pageId, status: status });

    return {
        type: POST_TEST_RESULT,
        payload: request
    }
}