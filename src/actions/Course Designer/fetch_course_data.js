import axios from 'axios';

export const FETCH_COURSE_DATA = "FETCH_COURSE_DATA";

export function fetchCourseData(courseID, pageNumber) {
    const url = `/SPA/ViewCourseData?courseId=${courseID}&pageNumber=${pageNumber}`;
    const request = axios.get(url);

    return {
        type: FETCH_COURSE_DATA,
        payload: request
    };
}