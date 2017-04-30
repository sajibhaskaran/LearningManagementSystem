// Acts as a bridge for actions called from objects
export function navCallFunctions(object) {

    if (typeof (object) === "object") {
        return object;
    } else {
        return object();
    }
}