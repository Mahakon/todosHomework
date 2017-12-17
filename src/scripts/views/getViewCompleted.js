/**
 * shows nodes with className = "todos-item_done-mark-w"
 * hides nodes with className = "todos-item_undone-mark-w"
 */
function getViewCompleted() {
    function searchPlace(par) {
        return document.getElementsByClassName(par);
    }

    var listTodos = searchPlace("todos-item_done-mark-w");

    for (var i = 0; i < listTodos.length; i++) {
        listTodos[i].parentNode.style.display = "block";
    }

    listTodos = searchPlace("todos-item_undone-mark-w");

    for (var i = 0; i < listTodos.length; i++) {
        listTodos[i].parentNode.style.display = "none";
    }

    listTodos=null;

}

exports.getViewCompleted = getViewCompleted;