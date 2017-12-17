var storage = require("../data/deleteFromLocalStorage");

/**
 * Deletes particular Node in DOM.
 * Sends index of deleted Node to LocalStorage.
 * @param event - generated event
 * @see deleteFromLocalStorage
 */
function deleteTodos(event) {
    /**
     * Finds particular Node by ClassName.
     * @return Nodes of particular Class ("todos-list")
     *
     */
    function searchPlace() {
        return document.getElementsByClassName("todos-list");
    }

    var list = searchPlace()[0];
    var childrens = list.childNodes;

    for (var i = 0; i < childrens.length; i++) {
        if (childrens[i] === event.target.parentNode) {
            list.removeChild(childrens[i]);
            storage.deleteFromLocalStorage(i);
            break;
        }
    }
}


exports.deleteTodos = deleteTodos;