var storage = require("../data/clearComFromLocalStorage");

/**
 * Deletes Node with ClassName = "todos-item_done-mark-w" from DOM
 * @see clearComFromLocalStorage
 */
function clearCompletedTodos() {
    function searchPlace(par) {
        return document.getElementsByClassName(par);
    }

    var listTodos = searchPlace("todos-item_done-mark-w");
    var list = searchPlace("todos-list")[0];
    var el;
    var size = listTodos.length;

    while (size != 0){
        el = listTodos[size - 1].parentNode;
        list.removeChild(el);
        size--;
    }

    list = null;
    listTodos = null;

    storage.clearComFromLocalStorage();
}

exports.clearCompletedTodos = clearCompletedTodos;