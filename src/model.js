import Event from './event.js';

class Model {
    constructor() {
        this.shoppingList = [];
        this.idCounter = 1;
        this.shoppingListUpdatedEvent = new Event();
    }

    addItem(item) {
        this.shoppingList.push({
            "id": this.idCounter++,
            "text": item
        });
        this.shoppingListUpdatedEvent.trigger(this.shoppingList);
    }

    deleteItem(id) {
        const indexFound = this.shoppingList.findIndex(item => item.id == id);
        this.shoppingList.splice(indexFound, 1);
        this.shoppingListUpdatedEvent.trigger(this.shoppingList);
    }
}

export default Model;