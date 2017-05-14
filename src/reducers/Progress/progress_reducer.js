import { FETCH_PROGRESS }  from "../../actions/Progress/progress_action";

export default function (state = null, action) {
    console.log("s", action);
    switch (action.type) {
        
        // returning the data.
        case FETCH_PROGRESS:
            //console.log(action.payload.data);
            return action.payload.data;
    }

    return state;
} 