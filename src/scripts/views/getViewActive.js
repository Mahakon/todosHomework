/**
 * shows nodes with className = "todos-item_undone-mark-w"
 * hides nodes with className = "todos-item_done-mark-w"
 */
function getViewActive() {
    /**
     * Finds particular Node by ClassName.
     * @param par - ClassName - string
     * @return Nodes of particular Class
     *
     */
    function searchPlace(par) {
        return document.getElementsByClassName(par);
    }

    var listTodos = searchPlace("todos-item_undone-mark-w");

    for (var i = 0; i < listTodos.length; i++) {
        listTodos[i].parentNode.style.display = "block";
    }

    listTodos = searchPlace("todos-item_done-mark-w");

    for (var i = 0; i < listTodos.length; i++) {
        listTodos[i].parentNode.style.display = "none";
    }

    listTodos=null;

}

exports.getViewActive = getViewActive;