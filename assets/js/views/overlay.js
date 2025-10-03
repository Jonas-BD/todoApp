import { saveItem } from '../actions/itemActions.js';
import { todoApp } from '../index.js';

export function showOverlay(title, type) {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';

    const overlayTitle = document.createElement('h2');
    overlayTitle.innerText = title;
    overlay.appendChild(overlayTitle);

    const listInput = document.createElement('input');
    listInput.type = 'text';
    listInput.placeholder = type;
    overlay.appendChild(listInput);

    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Gem';
    saveBtn.addEventListener('click', () => {
        const inputValue = listInput.value;
        if (inputValue) {
            if (type === 'Navn på liste') {
                saveList(inputValue);
            } else {
                saveItem(inputValue);
            }
            overlay.remove();
        }
    });
    overlay.appendChild(saveBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    cancelBtn.addEventListener('click', () => {
        overlay.remove();
    });
    overlay.appendChild(cancelBtn);

    todoApp.appendChild(overlay);
}