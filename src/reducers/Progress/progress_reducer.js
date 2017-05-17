import { FETCH_PROGRESS }  from "../../actions/Progress/progress_action";

export default function (state = null, action) {
    
    switch (action.type) {
        
        case FETCH_PROGRESS:
           
            return action.payload.data;
    }

    return state;
} 