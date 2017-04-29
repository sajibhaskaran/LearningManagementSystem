export const COURSE_SELECT_PAGE = "COURSE_SELECT_PAGE";

export function CourseSelectPage(page) {
    return {
        type: COURSE_SELECT_PAGE,
        payload: page
    }
}