export function deleteFunction(index, type) {
    if (type === 'list') {
        currentData.lists.splice(index, 1);
    } else if (type === 'item') {
        currentData.lists[activeList].items.splice(index, 1);
    }
    saveData(currentData);
    listView();
}
