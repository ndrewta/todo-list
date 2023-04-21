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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createForm)\n/* harmony export */ });\nfunction createForm(elem) {\n  function createTitleInput() {\n    const div = document.createElement(\"div\");\n    // Label\n    const label = document.createElement(\"label\");\n    Object.assign(label, {\n      textContent: \"Title:\",\n      for: \"title\",\n    });\n    // Input\n    const input = document.createElement(\"input\");\n    Object.assign(input, {\n      type: \"text\",\n      id: \"title\",\n      name: \"title\",\n      required: true,\n    });\n    // Append\n    div.appendChild(label);\n    div.appendChild(input);\n\n    return div;\n  }\n\n  function createDateInput() {\n    const div = document.createElement(\"div\");\n    // Label\n    const label = document.createElement(\"label\");\n    Object.assign(label, {\n      textContent: \"Date:\",\n      for: \"date\",\n    });\n    // Input\n    const input = document.createElement(\"input\");\n    Object.assign(input, {\n      type: \"date\",\n      id: \"date\",\n      name: \"date\",\n      required: true,\n    });\n    // Append\n    div.appendChild(label);\n    div.appendChild(input);\n\n    return div;\n  }\n\n  function createRadioInputs() {\n    const div = document.createElement(\"div\");\n    const p = document.createElement(\"p\");\n    p.textContent = \"Priority:\";\n    const inputs = [];\n    const values = [\"low\", \"med\", \"high\"];\n    values.forEach((value) => {\n      // Label\n      const label = document.createElement(\"label\");\n      Object.assign(label, {\n        textContent: value.toUpperCase(),\n        for: value,\n      });\n      inputs.push(label);\n      // Input\n      const input = document.createElement(\"input\");\n      Object.assign(input, {\n        type: \"radio\",\n        id: value,\n        name: \"priority\",\n        value,\n      });\n      inputs.push(input);\n    });\n\n    div.appendChild(p);\n    inputs.forEach((input) => {\n      div.appendChild(input);\n    });\n    return div;\n  }\n\n  function createButtons() {\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"form-btns\");\n\n    // Submit button\n    const submitBtn = document.createElement(\"button\");\n    Object.assign(submitBtn, {\n      textContent: \"Submit\",\n      type: \"submit\",\n      id: \"submit\",\n    });\n    // Cancel button\n    const resetBtn = document.createElement(\"button\");\n    Object.assign(resetBtn, {\n      textContent: \"Reset\",\n      type: \"reset\",\n      id: \"reset\",\n    });\n    div.appendChild(submitBtn);\n    div.appendChild(resetBtn);\n\n    return div;\n  }\n\n  function createLayout() {\n    // Div\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"form\");\n    // Form\n    const form = document.createElement(\"form\");\n    form.setAttribute(\"method\", \"post\");\n    const title = createTitleInput();\n    const date = createDateInput();\n    const radio = createRadioInputs();\n    const btns = createButtons();\n    form.appendChild(title);\n    form.appendChild(date);\n    form.appendChild(radio);\n    form.appendChild(btns);\n    // Append to div\n    div.appendChild(form);\n\n    return div;\n  }\n\n  function clearDom(element) {\n    while (element.firstChild) {\n      element.firstChild.remove();\n    }\n  }\n\n  function updateContent() {\n    const content = document.querySelector(elem);\n    clearDom(content);\n    const form = createLayout();\n    content.appendChild(form);\n  }\n  return { updateContent };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/form.js?");

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
/******/ 	__webpack_modules__["./src/form.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;