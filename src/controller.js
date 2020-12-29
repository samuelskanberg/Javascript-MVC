class Controller {
    constructor(model, view) {
        console.log("Controller");
        this.model = model;
        this.view = view;

        this.view.addItemEvent.addListener(text => {
            this.model.addItem(text);
        });

        this.model.shoppingListUpdatedEvent.addListener(items => {
            console.log("controller listener");
            this.view.updateList(items);
        });
    }

    run() {
        this.view.render();
    }
}

export default Controller;