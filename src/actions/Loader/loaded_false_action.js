export const LOADED_FALSE = "LOADED_FALSE";

export function loadedFalse() {
    return {
        type: LOADED_FALSE,
        payload: false
    }
}