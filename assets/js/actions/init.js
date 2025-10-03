import { getData, saveData } from '../utils/storage.js';
import { listView } from '../views/listView.js';
import { state } from '../utils/state.js';

export function initApp() {
    let stored = getData();
    if (stored == null) {
        state.currentData = { darkMode: false, lists: [] };
        saveData(state.currentData);
    } else {
        state.currentData = stored;
    }
    listView();
}