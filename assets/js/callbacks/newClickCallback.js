import { state } from '../utils/state.js';
import { showOverlay } from '../views/overlay.js';

export function newClickCallback() {
    switch (state.appState) {
        case 'listView':
            console.log('Du er ved at lave en liste i '+state.appState);
            showOverlay('Opret ny liste', 'Navn på liste');
            break;
        case 'itemView':
            console.log('Du er ved at lave et item i '+state.appState);
            showOverlay('Opret nyt item', 'Navn på item');
            break;
        default:
            console.log('No action here...');
            break;
    }
}