import { FETCH_ROLE } from '../actions/navigation_bar_role_action';

export default function (state = null, action) {

    switch (action.type) {

        // Returns the role this user is in
        case FETCH_ROLE:
            return action.payload.data;
    }

    return state;
}