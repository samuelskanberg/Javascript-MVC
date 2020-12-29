class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.addItemEvent.addListener(text => {
            this.model.addItem(text);
        });

        this.model.shoppingListUpdatedEvent.addListener(items => {
            this.view.updateList(items);
        });

        this.view.removeItemEvent.addListener(id => {
            this.model.deleteItem(id);
        });
    }
}

export default Controller;