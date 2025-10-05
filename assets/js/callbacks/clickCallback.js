import { state } from '../utils/state.js';
import { listItemView } from '../views/itemView.js';
import { deleteFunction } from '../actions/deleteAction.js';
import { editFunction } from '../actions/editAction.js';
import { itemDoneFunction } from '../actions/itemActions.js';

export function listClickCallback(action, index) {
    if (state.appState === 'listView') {
        state.activeList = index;
        switch (action) {
            case 'showList':
                console.log('Viser liste: ' + state.currentData.lists[index].name);
                listItemView();
                break;
            case 'editList':
                console.log('Redigerer liste: ' + state.currentData.lists[index].name);
                editFunction(index, 'list');
                break;
            case 'deleteList':
                console.log('Sletter liste: ' + state.currentData.lists[index].name);
                deleteFunction(index, 'list');
                break;
            default:
                console.log('No action here...');
                break;
        }
    } else if (state.appState === 'itemView') {
        switch (action) {
            case 'itemDone':
                console.log('Markerer item som færdig: ' + state.currentData.lists[state.activeList].items[index].name);
                itemDoneFunction(index);
                break;
            case 'editItem':
                console.log('Redigerer item: ' + state.currentData.lists[state.activeList].items[index].name);
                editFunction(index, 'item');
                break;
            case 'deleteItem':
                console.log('Sletter item: ' + state.currentData.lists[state.activeList].items[index].name);
                deleteFunction(index, 'item');
                break;
            default:
                console.log('No action here...');
                break;
        }
    }
}
window.listClickCallback = listClickCallback;