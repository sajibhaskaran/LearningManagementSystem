import axios from 'axios';

export const PAGE_EDIT_DATA = "PAGE_EDIT_DATA";

export function pageEditData(page) {

    // Url to post to
    const url = "/SPA/EditPageData";

    page.IsTest = page.IsTest === "false" ? false : true;

    // Post and stringify page
    const request = axios.post(url, { json: JSON.stringify(page) });

    // Returns update page information after the page posts
    return {
        type: PAGE_EDIT_DATA,
        payload: request
    }
}