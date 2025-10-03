import { state } from "../utils/state.js";
import { todoApp, todoHeader } from "../index.js";
import { listClickCallback } from "../callbacks/clickCallback.js";

export function listView() {
    console.log()
    todoApp.innerHTML = '';
    todoHeader.innerHTML = '';

    if (state.currentData.lists.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.innerText = 'Ingen lister, tryk på plusset';
        todoApp.appendChild(emptyMsg);
    } else {
        state.currentData.lists.forEach((list,index) => {
            const listElement = document.createElement('div');
            listElement.className = 'list';

            const title = document.createElement('h2');
            title.textContent = list.name;
            title.addEventListener('click', () => listClickCallback('showList', index));

            const editButton = document.createElement('button');
            editButton.innerHTML = `<img src="assets/Icons/edit1.svg" alt="Edit">`;
            editButton.addEventListener('click', () => listClickCallback('editList', index));

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = `<img src="assets/Icons/trash1.svg" alt="Delete">`;
            deleteButton.addEventListener('click', () => listClickCallback('deleteList', index));

            listElement.appendChild(title);
            listElement.appendChild(editButton);
            listElement.appendChild(deleteButton);

            todoApp.appendChild(listElement);
        });
    }
    // Div til mellemrum
    let divHeader = document.createElement('div');
    todoHeader.appendChild(divHeader);

    // Main page title
    let todoTitle = document.createElement('h1');
    todoTitle.textContent = 'Todo lister';
    todoHeader.appendChild(todoTitle);

    // Menu thing
    let menuThing = document.createElement('button');
    menuThing.id = 'menuButton';
    menuThing.innerHTML = '<img src="assets/Icons/menu.svg" alt="Menu">';
    menuThing.addEventListener('click', () => {
        showMenuOverlay();
    });
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