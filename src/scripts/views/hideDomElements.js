var storage = require("../data/isLocalStorageEmpty");

/**
 * Hides Nodes with ClassNames "todos-add_select-all" and "todos-actions-bar"
 * if LocalStorage is empty
 * if not displays them
 * @see isLocalStorageEmpty
 */
function hideDomElements() {
    /**
     * Finds particular Node by ClassName.
     * @param par - ClassName - string
     * @return Nodes of particular Class
     *
     */
    function searchPlace(par) {
        return document.getElementsByClassName(par);
    }
    var button = searchPlace("todos-add_select-all")[0];
    var actionsBar = searchPlace("todos-actions-bar")[0];

    if (storage.isLocalStorageEmpty()) {
        button.style.visibility = "hidden";
        actionsBar.style.display = "none";
    } else {
        button.style.visibility = "visible";
        actionsBar.style.display = "flex";
    }

    button = null;
    actionsBar = null;
}

exports.hideDomElements = hideDomElements;