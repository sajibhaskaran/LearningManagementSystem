import axios from 'axios';

export const POST_CREATE_COURSE = 'POST_CREATE_COURSE';

// Selects the clicked on list item
export function SubmitCourseCreation(object) {

    // url to make request
    const url = "/SPA/CourseCreate";

    // Submit post request
    const request = axios.post(url, { course: JSON.stringify(object) });


    // Return directed to reducer
    return {
        type: POST_CREATE_COURSE,
        payload: request
    }
}