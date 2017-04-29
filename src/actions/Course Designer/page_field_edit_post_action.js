import axios from 'axios';

export const EDIT_PAGE_FIELD = "EDIT_PAGE_FIELD";

export function postPageEditField(field) {

    const json = JSON.stringify(field);

    const url = "/SPA/PageFieldEdit";

    const request = axios.post(url, { json: json });

    return {
        type: EDIT_PAGE_FIELD,
        payload: request
    }

}