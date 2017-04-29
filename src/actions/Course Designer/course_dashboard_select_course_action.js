export const SELECT_COURSE = "SELECT_COURSE";

export function selectedCourse(course) {

    return {
        type: SELECT_COURSE,
        payload: course
    }
}