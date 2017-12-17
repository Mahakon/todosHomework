var storage = require("../data/getLocalStorage")

/**
 * Get array.
 * @return array of todos elements from LocalStorage
 * @see getLocalStorage
 */
function getModel() {
    return storage.getLocalStorage("todosElements");
}

exports.getModel = getModel;