import Event from './event.js';

class Model {
    constructor() {
        this.shoppingList = [];
        console.log("Model");
        this.shoppingListUpdatedEvent = new Event();
    }

    addItem(item) {
        console.log("Adding item: "+item);
        this.shoppingList.push(item);
        this.shoppingListUpdatedEvent.trigger(this.shoppingList);
    }

    deleteItem(index) {
        //this.shoppingList.
    }
}

export default Model;