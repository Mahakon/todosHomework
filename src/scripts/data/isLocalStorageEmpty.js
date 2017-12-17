var getValue = require("../data/getLocalStorage");

/**
 * Checks for elements in LocalStorage
 * @return there are something ? true : false
 * @see getLocalStorage
 */
function isLocalStorageEmpty() {
    var structure = getValue.getLocalStorage("todosElements");

    return (structure.length === 0);
}


exports.isLocalStorageEmpty = isLocalStorageEmpty;