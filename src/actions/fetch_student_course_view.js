import axios from 'axios';

export const FETCH_STUDENT_COURSE_VIEW = 'FETCH_STUDENT_COURSE_VIEW';

export function fetchStudentCourseView(courseId, pageNumber) {
    if (pageNumber === ":") {
        pageNumber = "1";
    }

    const url = `/SPA/ViewCourseData?courseId=${courseId}&pageNumber=${pageNumber}`;
    const request = axios.get(url);
    return {
        type: FETCH_STUDENT_COURSE_VIEW,
        payload: request
    }
}
