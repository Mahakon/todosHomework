var storage = require("../data/setLocalStorage");

/**
 * creates new obj  with fields "state" - done and "name".
 * sends to LocalStorage.
 * @param event - generated event
 * @param value - String name of todos element
 * @see setLocalStorage
 */
function addTodos(event, value) {
    var curElement = {
        name: value,
        state: "undone"
    }

    storage.setLocalStorage(curElement);

    curElement = null;
}

exports.addTodos = addTodos;