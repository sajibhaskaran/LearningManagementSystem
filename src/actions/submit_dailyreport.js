import axios from 'axios';

export const SUBMIT_DAILYREPORT = 'SUBMIT_DAILYREPORT';

export function submitDailyReport(values) {
    const url = "/SPA/DailyReport";

    const request = axios.post(url, { form: JSON.stringify(values) })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    window.location.hash = "#/";

    return {
        type: SUBMIT_DAILYREPORT,
        payload: request
    };
}