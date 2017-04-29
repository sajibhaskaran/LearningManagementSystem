import axios from 'axios';

export const STUDENT_POST_DRILL = "STUDENT_POST_DRILL";

export function studentPostDrill(drill) {

    // drill is an object submitted by the user
    const jsonDrill = JSON.stringify(drill);

    // url to post to
    const url = "SPA/PostStudentDrill";

    // Axios post request
    const request = axios.post(url, { json: jsonDrill });

    return {
        type: STUDENT_POST_DRILL,
        payload: ""
    }
}