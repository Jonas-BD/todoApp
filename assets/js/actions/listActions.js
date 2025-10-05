import { state } from '../utils/state.js';
import { listView } from '../views/listView.js';
import { saveData } from '../utils/storage.js';

// Skal på et tidspunkt sættes sammen med "saveItem", og lave det til en "Større" function. Navn på function: f.eks: "saveFunction", hvor jeg så vil tjekke alt efter hvor man er på siden
export function saveList(data) {
    state.currentData.lists.push({ name: data, items: [] });
    saveData(state.currentData);
    listView();
}
