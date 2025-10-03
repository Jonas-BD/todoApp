import { state } from "../utils/state.js";
import { todoApp, todoHeader } from "../index.js";
import { listClickCallback } from "../callbacks/clickCallback.js";
import { newCallBack } from "../callbacks/newClickCallback.js";

export function listItemView() {
    state.appState = "itemView";
    console.log(state.appState);

    todoApp.innerHTML = '';
    todoHeader.innerHTML = '';
    const list = state.currentData.lists[state.activeList];

    if (list.items.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.innerText = 'Ingen lister, tryk på plusset';
        todoApp.appendChild(emptyMsg);
    } else {
        list.items.forEach((item,index) => {
            const listElement = document.createElement('div');
            listElement.className = 'list';
            const itemClass = item.done ? 'item-done' : '';
            
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.addEventListener('click', () => listClickCallback('itemDone', index));

            const editButton = document.createElement('button');
            editButton.innerHTML = `<img src="assets/Icons/edit1.svg" alt="Edit">`;
            editButton.addEventListener('click', () => listClickCallback('editItem', index));

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = `<img src="assets/Icons/trash1.svg" alt="Delete">`;
            deleteButton.addEventListener('click', () => listClickCallback('deleteItem', index));

            listElement.appendChild(title);
            listElement.appendChild(editButton);
            listElement.appendChild(deleteButton);

            todoApp.appendChild(listElement);
        });
    }
    // Div til mellemrum
    let divBack = document.createElement('button');
    divBack.className = 'backButton';
    divBack.innerHTML = `<img src="assets/Icons/back.svg" alt="Back">`;
    divBack.addEventListener('click', () => {
        appState = "listView";
        listView();
    });
    todoHeader.appendChild(divBack);

    // Main page title
    let todoTitle = document.createElement('h1');
    todoTitle.textContent = list.name;
    todoHeader.appendChild(todoTitle);

    // Menu thing
    let menuThing = document.createElement('button');
    todoHeader.appendChild(menuThing);

    // New button
    let newButton = document.createElement('button');
    newButton.id = 'newButton';
    newButton.innerHTML = '<img src="assets/Icons/plus.svg" alt="New">';
    newButton.addEventListener('click', () => {
        newCallBack();
    });
    todoApp.appendChild(newButton);
}