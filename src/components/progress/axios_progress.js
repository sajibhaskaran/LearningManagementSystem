import axios from 'axios';

export const FETCH_PROGRESS = 'FETCH_PROGRESS';

export function fetchProgress(progress) {
    const url = '/SPA/GetStudentProgress';
    const request = axios.get(url);

    return {
        type: FETCH_PROGRESS,
        payload: 
    };
}