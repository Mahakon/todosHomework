var getValue = require("../data/getLocalStorage");

/**
 * Changes field("state") of particular object from current state to mark(@param2).
 * @param particular position -1 < index < array.size() int
 * @param String "done"/"undone"
 * @throws QUOTA_EXCEEDED_ERR if memory is full (5 MB)
 * @see getLocalStorage
 */
function changeStateLocalStorage(index, mark) {
    var structure = getValue.getLocalStorage("todosElements");

    if (index > -1) {
        structure[index].state = mark;
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

exports.changeStateLocalStorage = changeStateLocalStorage;