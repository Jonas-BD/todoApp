import { state } from '../utils/state.js';
import { listItemView } from '../views/itemView.js';
import { saveData } from '../utils/storage.js';

// Skal på et tidspunkt sættes sammen med "saveList", og lave det til en "Større" function. Navn på function: f.eks: "saveFunction", hvor jeg så vil tjekke alt efter hvor man er på siden
export function saveItem(data) {
    console.log('Du har nu gemt itemet '+data);
    state.currentData.lists[state.activeList].items.push({ name: data, done: false });
    saveData(state.currentData);
    listItemView();
}

export function itemDoneFunction(index) {
    state.currentData.lists[state.activeList].items[index].done = !state.currentData.lists[state.activeList].items[index].done;
    saveData(state.currentData);
    listItemView();
}