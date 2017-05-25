import axios from 'axios';

export const SUBMIT_WEEKLYSURVEY = 'SUBMIT_WEEKLYSURVEY';

export function submitWeeklySurvey(values) {
    const url = "/SPA/WeeklySurvey";

    const request = axios.post(url, { form: JSON.stringify(values) })
        .then(function (response) {
        })
        .catch(function (error) {
        });

    window.location.hash = "#/";

    return {
        type: SUBMIT_WEEKLYSURVEY,
        payload: request
    };
}