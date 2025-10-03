import { state } from '../utils/state.js';
import { listItemView } from '../views/itemView.js';

export function saveItem(data) {
    console.log('Du har nu gemt itemet '+data);
    state.currentData.lists[state.activeList].items.push({ name: data, done: false });
    state.saveData(state.currentData);
    listItemView();
}