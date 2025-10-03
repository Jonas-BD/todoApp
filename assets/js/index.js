export let todoHeader = document.getElementById('todoHeader');
export let todoApp = document.getElementById('todoApp');

import { initApp } from "./actions/init.js";

initApp();

// function initApp() {
//     let stored = getData();
//     if (stored == null) {
//         currentData = { darkMode: false, lists: [] };
//         saveData(currentData);
//     } else {
//         currentData = stored;
//     }
//     listView();
// }

// function listView() {
//     console.log(appState);

//     todoApp.innerHTML = '';
//     todoHeader.innerHTML = '';

//     if (currentData.lists.length === 0) {
//         const emptyMsg = document.createElement('p');
//         emptyMsg.innerText = 'Ingen lister, tryk på plusset';
//         todoApp.appendChild(emptyMsg);
//     } else {
//         currentData.lists.forEach((list,index) => {
//             const listElement = document.createElement('div');
//             listElement.className = 'list';
//             listElement.innerHTML = `<h2 onclick="listClickCallback('showList',${index})">${list.name}</h2>
//             <button onclick="listClickCallback('editList',${index})"><img src="assets/Icons/edit1.svg" alt="Edit"></button>
//             <button onclick="listClickCallback('deleteList',${index})"><img src="assets/Icons/trash1.svg" alt="Delete"></button>`;
//             todoApp.appendChild(listElement);
//         });
//     }
//     // Div til mellemrum
//     let divHeader = document.createElement('div');
//     todoHeader.appendChild(divHeader);

//     // Main page title
//     let todoTitle = document.createElement('h1');
//     todoTitle.textContent = 'Todo lister';
//     todoHeader.appendChild(todoTitle);

//     // Menu thing
//     let menuThing = document.createElement('button');
//     menuThing.id = 'menuButton';
//     menuThing.innerHTML = '<img src="assets/Icons/menu.svg" alt="Menu">';
//     menuThing.addEventListener('click', () => {
//         showMenuOverlay();
//     });
//     todoHeader.appendChild(menuThing);

//     // New button
//     let newButton = document.createElement('button');
//     newButton.id = 'newButton';
//     newButton.innerHTML = '<img src="assets/Icons/plus.svg" alt="New">';
//     newButton.addEventListener('click', () => {
//         newCallBack();
//     });
//     todoApp.appendChild(newButton);
// }

// function listClickCallback(action, index) {
//     if (appState === 'listView') {
//         activeList = index;
//         switch (action) {
//             case 'showList':
//                 console.log('Viser liste: ' + currentData.lists[index].name);
//                 listItemView();
//                 break;
//             case 'editList':
//                 console.log('Redigerer liste: ' + currentData.lists[index].name);
//                 editFunction(index, 'list');
//                 break;
//             case 'deleteList':
//                 console.log('Sletter liste: ' + currentData.lists[index].name);
//                 deleteFunction(index, 'list');
//                 break;
//             default:
//                 console.log('No action here...');
//                 break;
//         }
//     } else if (appState === 'itemView') {
//         switch (action) {
//             case 'itemDone':
//                 console.log('Markerer item som færdig: ' + currentData.lists[activeList].items[index].name);
//                 itemDoneFunction(index);
//                 break;
//             case 'editItem':
//                 console.log('Redigerer item: ' + currentData.lists[activeList].items[index].name);
//                 editFunction(index, 'item');
//                 break;
//             case 'deleteItem':
//                 console.log('Sletter item: ' + currentData.lists[activeList].items[index].name);
//                 deleteFunction(index, 'item');
//                 break;
//             default:
//                 console.log('No action here...');
//                 break;
//         }
//     }
// }
// function newCallBack() {
//     switch (appState) {
//         case 'listView':
//             console.log('Du er ved at lave en liste i '+appState);
//             showOverlay('Opret ny liste', 'Navn på liste');
//             break;
//         case 'itemView':
//             console.log('Du er ved at lave et item i '+appState);
//             showOverlay('Opret nyt item', 'Navn på item');
//             break;
//         default:
//             console.log('No action here...');
//             break;
//     }
// }

// function listItemView() {
//     appState = "itemView";
//     console.log(appState);

//     todoApp.innerHTML = '';
//     todoHeader.innerHTML = '';
//     const list = currentData.lists[activeList];

//     if (currentData.lists[activeList].items.length === 0) {
//         const emptyMsg = document.createElement('p');
//         emptyMsg.innerText = 'Ingen lister, tryk på plusset';
//         todoApp.appendChild(emptyMsg);
//     } else {
//         currentData.lists[activeList].items.forEach((item,index) => {
//             const listElement = document.createElement('div');
//             listElement.className = 'list';
//             const itemClass = item.done ? 'item-done' : '';
//             listElement.innerHTML = `<h2 class="${itemClass}" onclick="listClickCallback('itemDone',${index})">${item.name}</h2>
//             <button onclick="listClickCallback('editItem',${index})"><img src="assets/Icons/edit1.svg" alt="Edit"></button>
//             <button onclick="listClickCallback('deleteItem',${index})"><img src="assets/Icons/trash1.svg" alt="Delete"></button>`;
//             todoApp.appendChild(listElement);
//         });
//     }
//     // Div til mellemrum
//     let divBack = document.createElement('button');
//     divBack.className = 'backButton';
//     divBack.innerHTML = `<img src="assets/Icons/back.svg" alt="Back">`;
//     divBack.addEventListener('click', () => {
//         appState = "listView";
//         listView();
//     });
//     todoHeader.appendChild(divBack);

//     // Main page title
//     let todoTitle = document.createElement('h1');
//     todoTitle.textContent = list.name;
//     todoHeader.appendChild(todoTitle);

//     // Menu thing
//     let menuThing = document.createElement('button');
//     todoHeader.appendChild(menuThing);

//     // New button
//     let newButton = document.createElement('button');
//     newButton.id = 'newButton';
//     newButton.innerHTML = '<img src="assets/Icons/plus.svg" alt="New">';
//     newButton.addEventListener('click', () => {
//         newCallBack();
//     });
//     todoApp.appendChild(newButton);
// }

// function showOverlay(title, type) {
//     const overlay = document.createElement('div');
//     overlay.id = 'overlay';

//     const overlayTitle = document.createElement('h2');
//     overlayTitle.innerText = title;
//     overlay.appendChild(overlayTitle);

//     const listInput = document.createElement('input');
//     listInput.type = 'text';
//     listInput.placeholder = type;
//     overlay.appendChild(listInput);

//     const saveBtn = document.createElement('button');
//     saveBtn.innerText = 'Gem';
//     saveBtn.addEventListener('click', () => {
//         const inputValue = listInput.value;
//         if (inputValue) {
//             if (type === 'Navn på liste') {
//                 saveList(inputValue);
//             } else {
//                 saveItem(inputValue);
//             }
//             overlay.remove();
//         }
//     });
//     overlay.appendChild(saveBtn);

//     const cancelBtn = document.createElement('button');
//     cancelBtn.innerText = 'Cancel';
//     cancelBtn.addEventListener('click', () => {
//         overlay.remove();
//     });
//     overlay.appendChild(cancelBtn);

//     todoApp.appendChild(overlay);
// }
// function newItemCreation() {
//     todoApp.innerHTML = '';
//     todoHeader.innerHTML = '';

//     const label = document.createElement('label');
//     label.textContent = 'Skriv item navn';
//     label.setAttribute('for', 'itemName');

//     const input = document.createElement('input');
//     input.type = 'text';
//     input.id = 'itemName';
//     input.placeholder = 'Item navn';

//     const okBtn = document.createElement('button');
//     okBtn.innerText = 'Gem';
//     okBtn.addEventListener('click', () => {
//         if (input.value.length === 0) {
//             alert('Du skal skrive et liste navn');
//             return;
//         }
//         let itemName = input.value;
//         saveItem(itemName);
//     });

//     const cancelBtn = document.createElement('button');
//     cancelBtn.innerText = 'Cancel';
//     cancelBtn.addEventListener('click', () => {
//         listView();
//     });

//     todoApp.appendChild(label);
//     todoApp.appendChild(input);
//     todoApp.appendChild(okBtn);
//     todoApp.appendChild(cancelBtn);
// }

// function saveList(data) {
//     console.log('Du har nu gemt listen '+data);
//     currentData.lists.push({ name: data, items: [] });
//     saveData(currentData);
//     listView();
// }
// function saveItem(data) {
//     console.log('Du har nu gemt itemet '+data);
//     currentData.lists[activeList].items.push({ name: data, done: false });
//     saveData(currentData);
//     listItemView();
// }

// function getData() {
//     const storedData = localStorage.getItem('TodooApp');
//     return JSON.parse(storedData);
// }

// function saveData(data) {
//     localStorage.setItem('TodooApp', JSON.stringify(data));
// }

// function deleteFunction(index, type) {
//     if (type === 'list') {
//         currentData.lists.splice(index, 1);
//         saveData(currentData);
//         listView();
//     } else if (type === 'item') {
//         currentData.lists[activeList].items.splice(index, 1);
//         saveData(currentData);
//         listItemView();
//     }
// }
// function editFunction(index, type) {
//     const overlay = document.createElement('div');
//     overlay.id = 'overlay';

//     const overlayTitle = document.createElement('h2');
//     overlayTitle.innerText = type === 'list' ? 'Rediger liste' : 'Rediger item';
//     overlay.appendChild(overlayTitle);

//     const input = document.createElement('input');
//     input.type = 'text';
//     input.value = type === 'list' ? currentData.lists[index].name : currentData.lists[activeList].items[index].name;
//     overlay.appendChild(input);

//     const saveBtn = document.createElement('button');
//     saveBtn.innerText = 'Gem';
//     saveBtn.addEventListener('click', () => {
//         const inputValue = input.value;
//         if (inputValue) {
//             if (type === 'list') {
//                 currentData.lists[index].name = inputValue;
//             } else {
//                 currentData.lists[activeList].items[index].name = inputValue;
//             }
//             saveData(currentData);
//             overlay.remove();
//             if (type === 'list') {
//                 listView();
//             } else {
//                 listItemView();
//             }
//         }
//     });
//     overlay.appendChild(saveBtn);

//     const cancelBtn = document.createElement('button');
//     cancelBtn.innerText = 'Cancel';
//     cancelBtn.addEventListener('click', () => {
//         overlay.remove();
//     });
//     overlay.appendChild(cancelBtn);

//     todoApp.appendChild(overlay);
// }
// function itemDoneFunction(index) {
//     currentData.lists[activeList].items[index].done = !currentData.lists[activeList].items[index].done;
//     saveData(currentData);
//     listItemView();
// }

// function showMenuOverlay() {
//     const overlay = document.createElement('div');
//     overlay.id = 'overlay';

//     const overlayTitle = document.createElement('h2');
//     overlayTitle.innerText = 'Indstillinger';
//     overlay.appendChild(overlayTitle);

//     // Dark mode switch
//     const label = document.createElement('label');
//     label.className = 'theme-switch';

//     const input = document.createElement('input');
//     input.type = 'checkbox';
//     input.checked = currentData.darkMode; // husker sidste valg
//     input.addEventListener('change', () => {
//         toggleDarkMode();
//     });

//     const slider = document.createElement('span');
//     slider.className = 'slider';

//     label.appendChild(input);
//     label.appendChild(slider);
//     overlay.appendChild(label);

//     // Luk knap
//     const closeBtn = document.createElement('button');
//     closeBtn.innerText = 'Luk';
//     closeBtn.addEventListener('click', () => {
//         overlay.remove();
//     });
//     overlay.appendChild(closeBtn);

//     todoApp.appendChild(overlay);
// }

// function applyTheme() {
//     if (currentData.darkMode) {
//         document.body.classList.add("dark-mode");
//     } else {
//         document.body.classList.remove("dark-mode");
//     }
// }

// function toggleDarkMode() {
//     currentData.darkMode = !currentData.darkMode;
//     saveData(currentData);
//     applyTheme();
// }
// initApp();