/**
 * Gets data that is in LocalStorage
 * @param key - String that is in LocalStorage
 * @return array of obj with fields "state" - done/undone mark and "name"
 */
function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

exports.getLocalStorage = getLocalStorage;