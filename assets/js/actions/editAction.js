import { saveData } from "../utils/storage.js";

export function editFunction(index, type) {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';

    const overlayTitle = document.createElement('h2');
    overlayTitle.textContent = `Rediger ${type === 'list' ? 'liste' : 'item'}`;
    overlay.appendChild(overlayTitle);
    const input = document.createElement('input');
    input.type = 'text';
    input.value = type === 'list' ? currentData.lists[index].name : currentData.lists[activeList].items[index].name;
    overlay.appendChild(input);

    const saveBtn = document.createElement('button');
    saveBtn.innerText = 'Gem';
    saveBtn.addEventListener('click', () => {
        const inputValue = input.value;
        if (inputValue) {
            if (type === 'list') {
                currentData.lists[index].name = inputValue;
            } else {
                currentData.lists[activeList].items[index].name = inputValue;
            }
            saveData(currentData);
            overlay.remove();
            if (type === 'list') {
                listView();
            } else {
                listItemView();
            }
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