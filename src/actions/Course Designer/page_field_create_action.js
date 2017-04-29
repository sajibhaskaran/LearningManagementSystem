import axios from 'axios';

export const PAGE_CREATE_FIELD = "PAGE_CREATE_FIELD";

export function postPageCreateField(field) {

    // object conversion to json
    const json = JSON.stringify(field);

    const url = "/SPA/PageFieldCreate";

    // Post request
    const request = axios.post(url, { json: json });

    return {
        type: PAGE_CREATE_FIELD,
        payload: request
    }
}