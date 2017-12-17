var storage = require("../data/changeStateLocalStorage");

/**
 * Changes checkBox state
 * @param event - generated event
 * @param flag true - sends data about changed Nodes to LocalStorage
 * false - just changes state in DOM
 * @see changeStateLocalStorage
 */
function changeCheckbox(event, flag) {
    var parent = (flag) ? event.target.parentNode : event.parentNode;
    var childs = parent.childNodes;
    var mark = "done";

    /**
     * Changes Nodes ClassName in Dom
     */
    function switcher() {
        if (parent.className.localeCompare("todos-item_undone-mark-w") === 0) {
            childs[0].className = "todos-item_done-mark-icon";
            childs[1].className = "todos-item_done-mark";
            childs[1].setAttribute("checked", "checked");
            childs[1].setAttribute("aria-label", "mark done");
            parent.className = "todos-item_done-mark-w";
            mark = "done";
        } else {
            childs[0].className = "todos-item_undone-mark-icon";
            childs[1].className = "todos-item_undone-mark";
            childs[1].removeAttribute("checked");
            childs[1].setAttribute("aria-label", "mark undone");
            parent.className = "todos-item_undone-mark-w";
            mark = "undone";
        }
    }


    /**
     * @return the position of changed Node in DOM
     */
    function findIndex() {
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
            if (childrens[i] === parent.parentNode) {
                return i;
            }
        }
    }

    if (flag) {
        switcher();
        storage.changeStateLocalStorage(findIndex(), mark);
        parent = null;
        childs = null;

        return;
    }

    if (parent.className.localeCompare("todos-item_undone-mark-w") === 0) {
        switcher();
        storage.changeStateLocalStorage(findIndex(), mark);

    }

    parent = null;
    childs = null;
}

exports.changeCheckbox = changeCheckbox;