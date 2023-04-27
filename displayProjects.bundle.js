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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayProjects)\n/* harmony export */ });\nfunction displayProjects(elem) {\n  const content = document.querySelector(elem);\n  function createCover(projects) {\n    const index = projects.length - 1;\n    const project = projects[index];\n\n    const cover = document.createElement(\"div\");\n    cover.setAttribute(\"class\", \"cover\");\n    cover.setAttribute(\"id\", project.priority);\n    cover.setAttribute(\"data-id\", index);\n\n    const titleDiv = document.createElement(\"div\");\n    const title = document.createElement(\"h2\");\n    const titleData = project.title;\n    title.textContent = `Title: ${titleData}`;\n    titleDiv.appendChild(title);\n    cover.appendChild(titleDiv);\n\n    const dateDiv = document.createElement(\"div\");\n    const date = document.createElement(\"h2\");\n    const dateData = project.date;\n    date.textContent = `Due: ${dateData}`;\n    dateDiv.appendChild(date);\n    cover.appendChild(dateDiv);\n\n    const descriptionDiv = document.createElement(\"div\");\n    const description = document.createElement(\"h2\");\n    const descriptionData = project.description;\n    description.textContent = `Description: ${descriptionData}`;\n    descriptionDiv.appendChild(description);\n    cover.appendChild(descriptionDiv);\n\n    content.appendChild(cover);\n  }\n\n  function displayContent(projects, id) {\n    const projectElem = projects[id];\n    console.log(projectElem.itemList);\n  }\n\n  return { createCover, displayContent };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/displayProjects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/displayProjects.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;