import axios from 'axios';

export const FETCH_PAGE_FIELDS = "FETCH_PAGE_FIELDS";

export function fetchPageFields(pageId) {

    // endpoint to access
    const url = `/SPA/ViewPageFieldData?pageId=${pageId}`;

    // Get request returning a promise
    const request = axios.get(url);

    return {
        type: FETCH_PAGE_FIELDS,
        payload: request
    }
}