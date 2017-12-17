var getValue = require("../data/getLocalStorage");

/**
 * Adds new element to LocalStorage
 * @param obj with fields "state" - done/undone mark and "name"
 * @throws QUOTA_EXCEEDED_ERR if memory is full (5 MB)
 * @see getLocalStorage
 */
function setLocalStorage(value) {
    var todosStructure;

    if (localStorage.length === 0) {
        todosStructure = [value];
    } else {
        todosStructure = getValue.getLocalStorage("todosElements");
        todosStructure.push(value);
    }

    try {
        localStorage.setItem("todosElements", JSON.stringify(todosStructure));
    } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            alert('Sorry')
        }
    }

}

exports.setLocalStorage = setLocalStorage;