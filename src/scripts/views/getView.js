var model = require("../models/getModel");

/**
 * Shows new add element.
 * @see getModel
 */
function getView() {
    /**
     * Finds particular Node by ClassName.
     * @return Nodes of particular Class ("todos-list")
     *
     */
    function searchPlace() {
        return document.getElementsByClassName("todos-list");
    }

    /**
     * Inserts new element in DOM
     * @param list - Parent Node in DOM
     * @param elementStructure - obj with fields "state" - done/undone mark and "name".
     */
    function addNewPosition(list, elementStructure) {
        var newListEl = document.createElement("div");
        newListEl.className = "todos-item";
        /*
        *first child
         */
        var newListElChild = document.createElement("div");
        newListElChild.className = (elementStructure.state === "undone")
            ? "todos-item_undone-mark-w":
            "todos-item_done-mark-w";

        //1 child of first child
        var newListElChildChild = document.createElement("div");
        newListElChildChild.className = (elementStructure.state === "undone")
            ? "todos-item_undone-mark-icon":
            "todos-item_done-mark-icon";
        newListElChild.appendChild(newListElChildChild);

        //2 child of first child
        newListElChildChild = document.createElement("input");
        newListElChildChild.className = (elementStructure.state === "undone")
            ? "todos-item_undone-mark":
            "todos-item_done-mark";
        newListElChildChild.setAttribute("type", "checkbox");
        if (elementStructure.state !== "undone") {
            newListElChildChild.setAttribute("checked", "checked");
        }
        newListElChildChild.setAttribute("aria-label", "mark undone");
        newListElChild.appendChild(newListElChildChild);

        newListEl.appendChild(newListElChild);

        /*
         *Second child
         */
        newListElChild = document.createElement("button");
        newListElChild.className = "todos-item_delete";
        newListElChild.setAttribute("aria-label", "delete item");

        //1 of second child
        newListElChildChild = document.createElement("div");
        newListElChildChild.className = "todos-item_delete_icon";
        newListElChild.appendChild(newListElChildChild);

        newListEl.appendChild(newListElChild);

        /*
         *Third child
         */
        newListElChild = document.createElement("div");
        newListElChild.className = "todos-item_name-w";

        //1 of third child
        newListElChildChild = document.createElement("textarea");
        newListElChildChild.className = "todos-item_name";
        newListElChildChild.value = elementStructure.name;
        newListElChild.appendChild(newListElChildChild);

        newListEl.appendChild(newListElChild);

        list.appendChild(newListEl);

        newListEl = null;
        newListElChild = null;
        newListElChildChild = null;
    }

    var structure = model.getModel();

    if (structure === null) {
        return;
    }

    var list = searchPlace()[0];

    addNewPosition(list, structure[structure.length - 1]);

    structure = null;
    list = null;
}

exports.getView = getView;