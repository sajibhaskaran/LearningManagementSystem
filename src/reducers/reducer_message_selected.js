export default function(state=null, action){
    switch (action.type) {
        case 'MESSAGE_SELECTED':
            return action.payload;


    }
    return state;
}
