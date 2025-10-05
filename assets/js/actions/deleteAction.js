import { state } from "../utils/state.js";
import { saveData } from "../utils/storage.js";
import { listView } from "../views/listView.js"; 
import { listItemView } from "../views/itemView.js";

export function deleteFunction(index, type) {
    if (type === 'list') {
        state.currentData.lists.splice(index, 1);
        saveData(state.currentData);
        listView();
    } else if (type === 'item') {
        state.currentData.lists[state.activeList].items.splice(index, 1);
        saveData(state.currentData);
        listItemView();
    }
}
