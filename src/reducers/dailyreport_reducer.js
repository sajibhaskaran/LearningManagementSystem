// action.type variable
import { SUBMIT_DAILYREPORT } from "../actions/submit_dailyreport";

export default function (state = null, action) {
    
    switch (action.type) {
        case SUBMIT_DAILYREPORT:
            return action.payload.data;
    }
    return state;
}