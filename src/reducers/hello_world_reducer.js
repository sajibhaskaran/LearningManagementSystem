export default function (state = null, action) {

    switch (action.type) {
        case "HELLO_WORLD":
            return action.payload;
    }

    return state;
}