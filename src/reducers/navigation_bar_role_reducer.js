import { FETCH_ROLE } from '../actions/navigation_bar_role_action';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_ROLE:
            return action.payload.data;
    }
    return state;
}