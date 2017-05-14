// importing axios library
import axios from 'axios';

export const FETCH_PROGRESS = "FETCH_PROGRESS";

export function fetchProgress() {
    // end point to hit.
    const url = '/SPA/FetchProgress';
    const request = axios.get(url);
    return {
        type: FETCH_PROGRESS,
        payload: request
    }
}