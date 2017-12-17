var getValue = require("../data/getLocalStorage");

/**
 * Deletes elements with state: done in array(key - "todosElements").
 * @throws QUOTA_EXCEEDED_ERR if memory is full (5 MB)
 * @see getLocalStorage
 */
function clearComFromLocalStorage() {
    var structure = getValue.getLocalStorage("todosElements");
    var index = 0;

    while (index < structure.length) {
        if (structure[index].state == "done") {
            structure.splice(index, 1);

        } else {
            index++;
        }
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

exports.clearComFromLocalStorage = clearComFromLocalStorage;