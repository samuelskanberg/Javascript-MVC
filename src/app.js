import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

window.onload = function() {
    let m = new Model();
    let v = new View();
    let c = new Controller(m, v);
};
