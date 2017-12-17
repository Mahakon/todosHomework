var model = require("../models/getModel");

/**
 * Shows all elements that are in LocalStorage.
 * @param  flag true - clear html after insertPosisin
 * false - display all elements in ParentNode
 * @see getModel
 */
function getViewAll(flag) {
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

    if (flag) {
        var structure = model.getModel();

        if (structure === null) {
            return;
        }

        var list = searchPlace()[0];
        list.innerHTML = "";

        for (var i = 0; i < structure.length; i++) {
            addNewPosition(list, structure[i]);
        }

        structure = null;
        list = null;
    } else {
        var listItems = searchPlace()[0].childNodes;

        for (var i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "block";
        }

        listItems = null;

    }

}

exports.getViewAll = getViewAll;