/// <reference path="navigation_bar_role_action.js" />
import axios from 'axios';

export const FETCH_ROLE = "FETCH_ROLE";

export function fetchRole() {
    // Fetches a users role
    const url = "/SPA/fetchRole";

    const request = axios.get(url);

    return {
        type: FETCH_ROLE,
        payload: request
    }
}