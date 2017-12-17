var getValue = require("../data/getLocalStorage");

/**
 * Deletes element of particular position in array(key - "todosElements").
 * @param particular position -1 < index < array.size() int
 * @throws QUOTA_EXCEEDED_ERR if memory is full (5 MB)
 * @see getLocalStorage
 */
function deleteFromLocalStorage(index) {
    var structure = getValue.getLocalStorage("todosElements");

    if (index > -1) {
        structure.splice(index, 1);
    }

    localStorage.clear();

    try {
        localStorage.setItem("todosElements", JSON.stringify(structure));
    } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            alert('Sorry')
        }
    }


}

exports.deleteFromLocalStorage = deleteFromLocalStorage;