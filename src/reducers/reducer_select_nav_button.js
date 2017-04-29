import { SELECT_LIST_ITEM } from '../actions/select_nav_button';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_LIST_ITEM:
            return action.payload;
    }

    return state;
}