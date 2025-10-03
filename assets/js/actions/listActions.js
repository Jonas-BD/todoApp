import { state } from '../utils/state.js';
import { listView } from '../views/listView.js';
import { saveData } from '../utils/storage.js';

export function saveList(data) {
    state.currentData.lists.push({ name: data, items: [] });
    state.saveData(state.currentData);
    listView();
}
