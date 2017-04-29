import axios from 'axios';

export const EDIT_COURSE_DATA = "EDIT_COURSE_DATA";

export function editCourseData(object) {

    // Create url for request
    const url = "/SPA/EditCourseData";

    // Make post request
    const request = axios.post(url, { json: JSON.stringify(object) });

    return {
        type: EDIT_COURSE_DATA,
        payload: request
    };
}