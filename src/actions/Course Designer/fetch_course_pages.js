import axios from 'axios';

export const FETCH_COURSE_PAGES = 'FETCH_COURSE_PAGES';

export function fetchCoursePages(courseId) {

    // url
    const url = `/SPA/CoursePages?courseId=${courseId}`;

    // Get request
    const request = axios.get(url);

    return {
        type: FETCH_COURSE_PAGES,
        payload: request
    }
}