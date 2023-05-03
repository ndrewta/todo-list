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

/***/ "./src/displayProjects.js":
/*!********************************!*\
  !*** ./src/displayProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayProjects)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\nfunction displayProjects(elem) {\n  const content = document.querySelector(elem);\n  let projects = [];\n  function createCover(array, indexNumber) {\n    let index = indexNumber;\n    let project = array;\n    if (index === null || index === undefined) {\n      index = array.length - 1;\n      project = project[index];\n    }\n\n    const cover = document.createElement(\"div\");\n    cover.setAttribute(\"class\", \"cover\");\n    cover.setAttribute(\"id\", project.priority);\n    cover.setAttribute(\"data-id\", index);\n\n    const titleDiv = document.createElement(\"div\");\n    const title = document.createElement(\"h2\");\n    const titleData = project.title;\n    title.textContent = `Title: ${titleData}`;\n    titleDiv.appendChild(title);\n    cover.appendChild(titleDiv);\n\n    const dateDiv = document.createElement(\"div\");\n    const date = document.createElement(\"h2\");\n    const dateData = project.date;\n    date.textContent = `Due: ${dateData}`;\n    dateDiv.appendChild(date);\n    cover.appendChild(dateDiv);\n\n    const descriptionDiv = document.createElement(\"div\");\n    const description = document.createElement(\"h2\");\n    const descriptionData = project.description;\n    description.textContent = `Description: ${descriptionData}`;\n    descriptionDiv.appendChild(description);\n    cover.appendChild(descriptionDiv);\n\n    content.appendChild(cover);\n  }\n\n  function reloadProjectDisplay(array) {\n    while (content.hasChildNodes()) {\n      content.removeChild(content.firstChild);\n    }\n\n    array.forEach((project, index) => {\n      createCover(project, index);\n    });\n  }\n\n  function displayContent(array, id) {\n    const projectElem = projects[id];\n  }\n\n  function clearDisplay() {\n    while (content.hasChildNodes()) {\n      content.removeChild(content.firstChild);\n    }\n  }\n\n  function getProjectId(e) {\n    let id;\n\n    if (e.getAttribute(\"class\") === \"cover\") {\n      id = e.dataset.id;\n    } else if (e.closest(\".cover\")) {\n      const x = e.closest(\".cover\");\n      id = x.dataset.id;\n    }\n    return id;\n  }\n\n  function detailedDisplay(project) {\n    const { itemList } = project;\n    const display = document.createElement(\"div\");\n    display.setAttribute(\"class\", \"display\");\n\n    const titleDiv = document.createElement(\"div\");\n    const title = document.createElement(\"h2\");\n    const titleData = project.title;\n    title.textContent = `Title: ${titleData}`;\n    titleDiv.appendChild(title);\n    display.appendChild(titleDiv);\n\n    const dateDiv = document.createElement(\"div\");\n    const date = document.createElement(\"h2\");\n    const dateData = project.date;\n    date.textContent = `Due: ${dateData}`;\n    dateDiv.appendChild(date);\n    display.appendChild(dateDiv);\n\n    const descriptionDiv = document.createElement(\"div\");\n    const description = document.createElement(\"h2\");\n    const descriptionData = project.description;\n    description.textContent = `Description: ${descriptionData}`;\n    descriptionDiv.appendChild(description);\n    display.appendChild(descriptionDiv);\n\n    const listDiv = document.createElement(\"div\");\n    const listTitle = document.createElement(\"h2\");\n    listTitle.textContent = \"Checklist:\";\n\n    const list = document.createElement(\"ul\");\n    itemList.forEach((item) => {\n      const li = document.createElement(\"li\");\n      Object.assign(li, {\n        textContent: item,\n        id: itemList.indexOf(item),\n      });\n\n      const checkbox = document.createElement(\"input\");\n      Object.assign(checkbox, {\n        type: \"checkbox\",\n      });\n      li.appendChild(checkbox);\n      list.appendChild(li);\n    });\n    const editBtn = document.createElement(\"button\");\n    Object.assign(editBtn, {\n      textContent: \"Edit\",\n      type: \"button\",\n    });\n    const deleteBtn = document.createElement(\"button\");\n    Object.assign(deleteBtn, {\n      textContent: \"Delete\",\n      type: \"button\",\n    });\n\n    listDiv.appendChild(listTitle);\n    listDiv.appendChild(list);\n    listDiv.appendChild(editBtn);\n    listDiv.appendChild(deleteBtn);\n    display.appendChild(listDiv);\n    content.appendChild(display);\n  }\n\n  function expandProject(array, e) {\n    let index = getProjectId(e.target);\n    if (index === undefined) {\n      return;\n    }\n    let project = array[index];\n    clearDisplay();\n    detailedDisplay(project);\n  }\n\n  function updateProjectsArray(updatedProjects) {\n    projects = updatedProjects;\n  }\n\n  content.addEventListener(\"click\", (e) => {\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"projects-request\", null);\n    expandProject(projects, e);\n  });\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(\"projects-update\", updateProjectsArray);\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(\"create-cover\", createCover);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/displayProjects.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/displayProjects.js");
/******/ 	
/******/ })()
;