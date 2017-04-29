import axios from 'axios';

export const FETCH_COURSES = 'FETCH_COURSES';

// Gets the most important role of the user
export function fetchCourses() {

    // Url get request
    const url = "/SPA/CourseDashboard";

    // Get list of courses
    const request = axios.get(url);

    // Return directed to reducer
    return {
        type: 'FETCH_COURSES',
        payload: request
    }
}