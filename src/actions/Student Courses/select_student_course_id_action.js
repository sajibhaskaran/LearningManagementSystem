export const SELECT_STUDENT_COURSE_ID = "SELECT_STUDENT_COURSE_ID";

// Selects the courseId the student would like to navigate to
export function selectStudentCourseId(courseId) {
    return {
        type: SELECT_STUDENT_COURSE_ID,
        payload: courseId
    }
}