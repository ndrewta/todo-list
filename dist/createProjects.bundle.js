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

/***/ "./src/createProjects.js":
/*!*******************************!*\
  !*** ./src/createProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProjects)\n/* harmony export */ });\n/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ \"./src/pubsub.js\");\n\n\nfunction createProjects() {\n  let projects = [];\n\n  class Project {\n    constructor(title, date, priority, description, itemList) {\n      this.title = title;\n      this.date = date;\n      this.priority = priority;\n      this.description = description;\n      this.itemList = itemList;\n    }\n  }\n\n  function sortDates() {\n    if (!projects.length <= 0) {\n      projects.sort((a, b) => new Date(b.date) - new Date(a.date));\n    }\n    projects.reverse();\n  }\n\n  function submit({ formElem }) {\n    const data = new FormData(formElem);\n    const title = data.get(\"title\");\n    const date = data.get(\"date\");\n    const priority = data.get(\"priority\");\n    const description = data.get(\"description\");\n    const itemList = data\n      .getAll(\"items\")\n      .map((item) => ({ value: item, completed: false }));\n    const project = new Project(title, date, priority, description, itemList);\n    projects.push(project);\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"create-cover\", projects);\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"clear-form\", null);\n    formElem.reset();\n  }\n\n  function publishUpdatedArray() {\n    // Publish updated projects array\n    sortDates();\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"projects-update\", projects);\n  }\n\n  function testSubmit(x) {\n    const title = `Test ${x}`;\n    const date = \"12/12/2000\";\n    const priority = \"High\";\n    const description = \"asdasdasdasd\";\n    const itemList = [\"x1\", \"x2\", \"x3\"].map((item) => ({\n      value: item,\n      completed: false,\n    }));\n    const project = new Project(title, date, priority, description, itemList);\n\n    projects.push(project);\n    sortDates();\n    _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].publish(\"create-cover\", projects);\n  }\n\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(\"projects-request\", publishUpdatedArray);\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(\"submit-form\", submit);\n  _pubsub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subscribe(\"test\", testSubmit);\n  return { projects };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/createProjects.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/createProjects.js");
/******/ 	
/******/ })()
;