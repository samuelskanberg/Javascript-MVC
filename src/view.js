import Event from './event.js';

class View {
    constructor() {
        this.addItemEvent = new Event();
        this.removeItemEvent = new Event();

        const addItem = () => {
            const itemTextElement = document.getElementById('newItemText');
            const itemText = itemTextElement.value;
            if (itemText.length > 0) {
                itemTextElement.value = "";
                this.addItemEvent.trigger(itemText);
            }
        };
        const newItemButton = document.getElementById('newItemButton');
        newItemButton.addEventListener('click', addItem);

        const newItemText = document.getElementById('newItemText');
        newItemText.addEventListener('keydown', (e) => {
            if (e.key == "Enter") {
                addItem();
            }
        });
    }

    updateList(items) {
        const ulElement = document.getElementById('shoppingListItems');
        ulElement.innerHTML = '';
        for (let i = 0; i < items.length; i++) {
            const liItem = document.createElement('li');
            liItem.setAttribute('data-id', items[i].id);
            const removeButton = document.createElement('button');
            removeButton.innerHTML = "Remove";
            removeButton.addEventListener('click', event => {
                const itemId = event.target.parentElement.getAttribute('data-id');
                this.removeItemEvent.trigger(itemId);
            })
            const itemSpan = document.createElement('span');
            itemSpan.innerHTML = items[i].text;
            liItem.appendChild(removeButton);
            liItem.appendChild(itemSpan);
            ulElement.appendChild(liItem);
        }
    }
}

export default View;