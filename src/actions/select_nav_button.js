export const SELECT_LIST_ITEM = 'SELECT_LIST_ITEM';

// Selects the clicked on list item
//export function navigationBarListItemSelected(listItem) {

export function selectNavButton() {
    return {
        type: SELECT_LIST_ITEM,
        payload: listItem
    }
}