import Event from './event.js';

class View {
    constructor() {
        console.log("View");
        this.addItemEvent = new Event();
    }

    render() {
        const shoppingList = document.createElement('div');
        shoppingList.className = 'shoppingList';

        const newItemTextInput = document.createElement('input');
        newItemTextInput.type = 'text';
        newItemTextInput.name = 'itemName';

        const newItemButton = document.getElementById('newItemButton');
        newItemButton.addEventListener('click', () => {
            console.log("Click");

            const itemTextElement = document.getElementById('newItemText');
            const itemText = itemTextElement.value;

            console.log("itemText: "+itemText);

            this.addItemEvent.trigger(itemText);
        });
    }

    updateList(items) {
        console.log("UpdateList in view");
        console.log(items);
        const ulElement = document.getElementById('shoppingListItems');
        ulElement.innerHTML = '';
        for (let i = 0; i < items.length; i++) {
            console.log("item: "+items[i]);
            const liItem = document.createElement('li');
            liItem.innerHTML = items[i];
            ulElement.appendChild(liItem);
        }
    }
}

export default View;