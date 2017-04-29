export const SELECT_PAGE_FIELD = "SELECT_PAGE_FIELD";

export function SelectField(field) {

    return {
        type: SELECT_PAGE_FIELD,
        payload: field
    }
}