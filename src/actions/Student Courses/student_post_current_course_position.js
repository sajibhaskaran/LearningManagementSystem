import axios from 'axios';

export const POST_CURRENT_POSITION = "POST_CURRENT_POSITION";

// Takes a student's current position and posts it
export function postCurrentPosition(courseID, pageNum) {
    console.log(courseID, pageNum);
    // url
    const url = `/SPA/CurrentStudentCourse?courseId=${courseID}&pageNumber=${pageNum}`;

    // Make post request
    const request = axios.post(url);

    return {
        type: POST_CURRENT_POSITION,
        payload: request
    }
}