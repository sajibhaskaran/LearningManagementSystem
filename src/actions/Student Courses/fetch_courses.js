import axios from 'axios';

export const FETCH_STUDENT_COURSES = "FETCH_STUDENT_COURSES";

// Make a get request to get all of this user's course information
export function fetchStudentCourses() {

    // url
    const url = "/SPA/StudentCourseDashboard";

    // Make axios get request
    const request = axios.get(url);

    return {
        type: FETCH_STUDENT_COURSES,
        payload: request
    }
}