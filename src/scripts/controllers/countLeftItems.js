var storage = require("../data/getLocalStorage");

/**
 * Counts undone Todos elements.
 * Shows the number.
 */
function countLeftItems() {
    function count() {
        var structure = storage.getLocalStorage("todosElements");
        var num = 0;

        for (var i = 0; i < structure.length; i++) {
            if (structure[i].state.localeCompare("undone") === 0) {
                num++;
            }
        }

        return num;
    }

    /**
     * Finds particular Node by ClassName.
     * @return Nodes of particular Class ("todos-actions-bar_counter-undone")
     *
     */
    function searchPlace() {
        return document.getElementsByClassName("todos-actions-bar_counter-undone");
    }

    var element = searchPlace()[0];

    element.innerHTML = count().toString() + " items left";
}

exports.countLeftItems = countLeftItems;