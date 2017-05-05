import axios from 'axios';

export const EDIT_PAGE_FIELD = "EDIT_PAGE_FIELD";

export function postPageEditField(field) {

    // object conversion to json
    const json = JSON.stringify(field);

    // url
    const url = "/SPA/PageFieldEdit";

    // Post request
    const request = axios.post(url, { json: json });

    return {
        type: EDIT_PAGE_FIELD,
        payload: request
    }

}