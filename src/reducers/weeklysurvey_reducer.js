// action.type variable
import { SUBMIT_WEEKLYSURVEY } from "../actions/submit_weeklysurvey";

export default function (state = null, action) {
    switch (action.type) {
        case SUBMIT_WEEKLYSURVEY:
            return action.payload.data;
    }
    return state;
}