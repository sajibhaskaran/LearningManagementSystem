export const LOADED_TRUE = "LOADED_TRUE";

export function loadedTrue() {
    return {
        type: LOADED_TRUE,
        payload: true
    }
}