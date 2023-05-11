/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createForm)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\nfunction createForm(elem) {\n  const content = document.querySelector(elem);\n  function createTitleInput() {\n    const div = document.createElement(\"div\");\n    // Label\n    const label = document.createElement(\"label\");\n    Object.assign(label, {\n      textContent: \"Title:\",\n      for: \"title\",\n    });\n    // Input\n    const input = document.createElement(\"input\");\n    Object.assign(input, {\n      type: \"text\",\n      id: \"title\",\n      name: \"title\",\n      required: true,\n      disabled: true,\n    });\n    // Append\n    div.appendChild(label);\n    div.appendChild(input);\n\n    return div;\n  }\n\n  function createDateInput() {\n    const div = document.createElement(\"div\");\n    // Label\n    const label = document.createElement(\"label\");\n    Object.assign(label, {\n      textContent: \"Due:\",\n      for: \"date\",\n    });\n    // Input\n    const input = document.createElement(\"input\");\n    Object.assign(input, {\n      type: \"date\",\n      id: \"date\",\n      name: \"date\",\n      required: true,\n      disabled: true,\n    });\n    // Append\n    div.appendChild(label);\n    div.appendChild(input);\n\n    return div;\n  }\n\n  function createDescriptionInput() {\n    const div = document.createElement(\"div\");\n    // Label\n    const label = document.createElement(\"label\");\n    Object.assign(label, {\n      textContent: \"Description:\",\n      for: \"description\",\n    });\n    // Input\n    const textArea = document.createElement(\"textarea\");\n    Object.assign(textArea, {\n      id: \"description\",\n      name: \"description\",\n      required: true,\n      disabled: true,\n    });\n    // Append\n    div.appendChild(label);\n    div.appendChild(textArea);\n\n    return div;\n  }\n\n  function createRadioInputs() {\n    const div = document.createElement(\"div\");\n    const label = document.createElement(\"label\");\n    Object.assign(label, {\n      textContent: \"Priority:\",\n      for: \"formPriority\",\n    });\n    const prioritySelect = document.createElement(\"select\");\n    Object.assign(prioritySelect, {\n      name: \"priority\",\n      id: \"formPriority\",\n    });\n    const lowPriority = document.createElement(\"option\");\n    Object.assign(lowPriority, {\n      textContent: \"Low\",\n      value: \"Low\",\n    });\n    const medPriority = document.createElement(\"option\");\n    Object.assign(medPriority, {\n      textContent: \"Medium\",\n      value: \"Medium\",\n    });\n    const highPriority = document.createElement(\"option\");\n    Object.assign(highPriority, {\n      textContent: \"High\",\n      value: \"High\",\n    });\n    prioritySelect.appendChild(lowPriority);\n    prioritySelect.appendChild(medPriority);\n    prioritySelect.appendChild(highPriority);\n    div.appendChild(label);\n    div.appendChild(prioritySelect);\n    return div;\n  }\n  function createListItems() {\n    const div = document.createElement(\"div\");\n    const divLabel = document.createElement(\"label\");\n    Object.assign(divLabel, {\n      textContent: \"Add items \",\n      for: \"itemBtn\",\n    });\n    const addBtn = document.createElement(\"button\");\n    Object.assign(addBtn, {\n      textContent: \"+ icon\",\n      id: \"itemBtn\",\n      type: \"button\",\n      disabled: true,\n    });\n\n    // List div\n    const list = document.createElement(\"ul\");\n    list.setAttribute(\"id\", \"listItems\");\n\n    function createInput() {\n      // Creates to do items\n      const id = \"item\";\n      const li = document.createElement(\"li\");\n      li.setAttribute(\"id\", id);\n      const localDiv = document.createElement(\"div\");\n\n      // Input\n      const input = document.createElement(\"input\");\n      Object.assign(input, {\n        type: \"text\",\n        name: \"items\",\n        id,\n      });\n      // Remove button\n      const removeBtn = document.createElement(\"button\");\n      Object.assign(removeBtn, {\n        textContent: \"- icon\",\n        id,\n        type: \"button\",\n      });\n\n      // Hook eventListener to remove button\n      removeBtn.addEventListener(\"click\", () => {\n        const item = document.getElementById(id);\n        item.remove();\n      });\n\n      localDiv.appendChild(input);\n      localDiv.appendChild(removeBtn);\n      li.appendChild(localDiv);\n\n      list.appendChild(li);\n    }\n    // Hook eventListener to run createInput\n    addBtn.addEventListener(\"click\", createInput);\n\n    // Append\n    div.appendChild(divLabel);\n    div.appendChild(addBtn);\n    div.appendChild(list);\n\n    return div;\n  }\n\n  function clearListItems() {\n    const list = document.getElementById(\"listItems\");\n    while (list.hasChildNodes()) {\n      list.removeChild(list.firstChild);\n    }\n  }\n\n  function createButtons() {\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"form-btns\");\n\n    // Submit button\n    const submitBtn = document.createElement(\"button\");\n    Object.assign(submitBtn, {\n      textContent: \"Submit\",\n      type: \"submit\",\n      id: \"submit\",\n      disabled: true,\n    });\n    // Clear button\n    const resetBtn = document.createElement(\"button\");\n    Object.assign(resetBtn, {\n      textContent: \"Clear\",\n      type: \"reset\",\n      id: \"clear\",\n      disabled: true,\n    });\n    resetBtn.addEventListener(\"click\", clearListItems);\n    div.appendChild(submitBtn);\n    div.appendChild(resetBtn);\n\n    return div;\n  }\n\n  function createLayout() {\n    // Div\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"class\", \"form\");\n    // Form\n    const form = document.createElement(\"form\");\n    form.setAttribute(\"method\", \"post\");\n    const title = createTitleInput();\n    const date = createDateInput();\n    const radio = createRadioInputs();\n    const description = createDescriptionInput();\n    const listItems = createListItems();\n    const btns = createButtons();\n    form.appendChild(title);\n    form.appendChild(date);\n    form.appendChild(radio);\n    form.appendChild(description);\n    form.appendChild(listItems);\n    form.appendChild(btns);\n    // Append to div\n    div.appendChild(form);\n    form.addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"submit-form\", { formElem: form });\n    });\n    form.addEventListener(\"submit\", () => _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"toggle-form\", null));\n\n    return div;\n  }\n\n  function toggleForm() {\n    const formDiv = document.querySelector(\".form\");\n    const formElements = formDiv.querySelectorAll(\"input, textarea, button\");\n    formDiv.classList.toggle(\"form-toggle\");\n    formElements.forEach((inputElem) => {\n      const item = inputElem;\n      if (item.disabled) {\n        item.disabled = false;\n      } else {\n        item.disabled = true;\n      }\n    });\n  }\n\n  const form = createLayout();\n  content.appendChild(form);\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(\"toggle-form\", toggleForm);\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(\"clear-form\", clearListItems);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/form.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction pubSub() {\n  const subscribers = {};\n\n  function publish(eventName, data) {\n    if (!Array.isArray(subscribers[eventName])) {\n      return;\n    }\n    subscribers[eventName].forEach((callback) => {\n      callback(data);\n    });\n  }\n  function subscribe(eventName, callback) {\n    if (!Array.isArray(subscribers[eventName])) {\n      subscribers[eventName] = [];\n    }\n    subscribers[eventName].push(callback);\n    const index = subscribers[eventName].length - 1;\n\n    return {\n      unsubscribe() {\n        subscribers[eventName].splice(index, 1);\n      },\n    };\n  }\n  return { publish, subscribe };\n}\n\nconst sharedPubSub = pubSub();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sharedPubSub);\n\n\n//# sourceURL=webpack://todo-list/./src/pubsub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/form.js");
/******/ 	
/******/ })()
;