var add = require("./controllers/addTodos");
var viewAll = require("./views/getViewAll");
var view = require("./views/getView");
var buttonElements;
var inputElements;
var deleteEl = require("./controllers/deleteTodos");
var checkbox = require("./controllers/changeCheckbox");
var leftItems = require("./controllers/countLeftItems");
var viewActive = require("./views/getViewActive");
var viewCompleted = require("./views/getViewCompleted");
var clearCompleted = require("./controllers/clearCompletedTodos");
var domElements = require("./views/hideDomElements");
/**
 * Gets all elements from DOM with the tag "button" and "input".
 * @see addEvent
 */
function putListeners() {
    buttonElements = document.getElementsByTagName("button");
    inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < buttonElements.length; i++) {
        addEvent(buttonElements[i]);
    }
    for (var i = 0; i < inputElements.length; i++) {
        addEvent(inputElements[i]);
    }
}

/**
 * Hands events.
 * @param event that comes
 * @see addTodos
 * @see putListeners
 * @see countLeftItems
 * @see getView
 * @see deleteTodos
 * @see changeCheckbox
 * @see getViewActive
 * @see getViewAll
 * @see getViewCompleted
 * @see clearCompletedTodos
 * @see hideDomElements
 */
function handler(event) {

    switch (event.target.className){
        case "todos-add_new-item": {
            if (event.keyCode == 13) {
                if (this.value.localeCompare("") !==0) {
                    add.addTodos(event, this.value);
                    this.value = "";

                    view.getView();

                    putListeners();

                    leftItems.countLeftItems();
                    domElements.hideDomElements();
                } else {
                    alert("ENTER NOTE NAME");
                }
            }
        } break;

        case "todos-item_delete": {
            deleteEl.deleteTodos(event);
            leftItems.countLeftItems();
            domElements.hideDomElements();
        } break;

        case "todos-add_select-all": {
            for (var i = 0; i < inputElements.length; i++) {
                if (inputElements[i].className.localeCompare("todos-add_new-item") !== 0) {
                    checkbox.changeCheckbox(inputElements[i], false);
                }
            }

            leftItems.countLeftItems();
        } break;

        case "todos-filter __all": {
            viewAll.getViewAll(false);
        } break;

        case "todos-filter __active": {
            viewActive.getViewActive()
        } break;

        case "todos-filter __completed": {
            viewCompleted.getViewCompleted()
        } break;

        case "todos-actions-bar_delete-done": {
            clearCompleted.clearCompletedTodos();
            leftItems.countLeftItems();
            domElements.hideDomElements();
        } break;

        case "todos-item_undone-mark": {
            checkbox.changeCheckbox(event, true);
            leftItems.countLeftItems();
            domElements.hideDomElements();
        }break;

        case "todos-item_done-mark": {
            checkbox.changeCheckbox(event, true);
            leftItems.countLeftItems();
            domElements.hideDomElements();
        }break;

        default: {

        }
    }

}

/**
 * Adds EventListener on particular action
 * @param element of DOM
 * @see handler
 */
function addEvent(elem) {
    switch (elem.className){
        case "todos-add_new-item": {
            elem.addEventListener("keypress", handler);
        } break;

        case "todos-item_undone-mark": {
            elem.addEventListener("change", handler);
        } break;

        case "todos-item_done-mark": {
            elem.addEventListener("change", handler);
        } break;

        default: {
            elem.addEventListener("click", handler);
        }
    }
}


viewAll.getViewAll(true);

leftItems.countLeftItems();

domElements.hideDomElements();

putListeners();