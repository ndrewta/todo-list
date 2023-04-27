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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createForm)\n/* harmony export */ });\nfunction createForm(elem) {\n  function createTitleInput() {\n    const div = document.createElement(\"div\");\n    // Label\n    const label = document.createElement(\"label\");\n    Object.assign(label, {\n      textContent: \"Title:\",\n      for: \"title\",\n    });\n    // Input\n    const input = document.createElement(\"input\");\n    Object.assign(input, {\n      type: \"text\",\n      id: \"title\",\n      name: \"title\",\n      required: true,\n      disabled: true,\n    });\n    // Append\n    div.appendChild(label);\n    div.appendChild(input);\n\n    return div;\n  }\n\n  function createDateInput() {\n    const div = document.createElement(\"div\");\n    // Label\n    const label = document.createElement(\"label\");\n    Object.assign(label, {\n      textContent: \"Due:\",\n      for: \"date\",\n    });\n    // Input\n    const input = document.createElement(\"input\");\n    Object.assign(input, {\n      type: \"date\",\n      id: \"date\",\n      name: \"date\",\n      required: true,\n      disabled: true,\n    });\n    // Append\n    div.appendChild(label);\n    div.appendChild(input);\n\n    return div;\n  }\n\n  function createDescriptionInput() {\n    const div = document.createElement(\"div\");\n    // Label\n    const label = document.createElement(\"label\");\n    Object.assign(label, {\n      textContent: \"Description:\",\n      for: \"description\",\n    });\n    // Input\n    const textArea = document.createElement(\"textarea\");\n    Object.assign(textArea, {\n      id: \"description\",\n      name: \"description\",\n      required: true,\n      disabled: true,\n    });\n    // Append\n    div.appendChild(label);\n    div.appendChild(textArea);\n\n    return div;\n  }\n\n  function createRadioInputs() {\n    const div = document.createElement(\"div\");\n    const divLabel = document.createElement(\"label\");\n    Object.assign(divLabel, {\n      textContent: \"Priority: \",\n      for: \"priority\",\n    });\n    const inputs = [];\n    const values = [\"low\", \"med\", \"high\"];\n\n    function capitalise(i) {\n      return i && i[0].toUpperCase() + i.slice(1);\n    }\n    values.forEach((value) => {\n      // Label\n      const label = document.createElement(\"label\");\n      Object.assign(label, {\n        textContent: capitalise(value),\n        htmlFor: value,\n      });\n      inputs.push(label);\n      // Input\n      const input = document.createElement(\"input\");\n      Object.assign(input, {\n        type: \"radio\",\n        id: value,\n        name: \"priority\",\n        value,\n        disabled: true,\n        required: true,\n      });\n      inputs.push(input);\n    });\n\n    div.appendChild(divLabel);\n    inputs.forEach((input) => {\n      div.appendChild(input);\n    });\n    return div;\n  }\n\n  function createListItems() {\n    let itemCounter = 1;\n    const div = document.createElement(\"div\");\n    const divLabel = document.createElement(\"label\");\n    Object.assign(divLabel, {\n      textContent: \"Add items \",\n      for: \"itemBtn\",\n    });\n    const addBtn = document.createElement(\"button\");\n    Object.assign(addBtn, {\n      textContent: \"+ icon\",\n      id: \"itemBtn\",\n      type: \"button\",\n    });\n\n    // List div\n    const list = document.createElement(\"ul\");\n    list.setAttribute(\"id\", \"listItems\");\n\n    function createInput() {\n      // Creates to do items\n      const id = `item${itemCounter}`;\n      const li = document.createElement(\"li\");\n      li.setAttribute(\"id\", id);\n      const localDiv = document.createElement(\"div\");\n\n      // Input\n      const input = document.createElement(\"input\");\n      Object.assign(input, {\n        type: \"text\",\n        name: \"items\",\n        id,\n      });\n      // Remove button\n      const removeBtn = document.createElement(\"button\");\n      Object.assign(removeBtn, {\n        textContent: \"- icon\",\n        id,\n        type: \"button\",\n      });\n\n      // Hook eventListener to remove button\n      removeBtn.addEventListener(\"click\", () => {\n        const item = document.getElementById(id);\n        item.remove();\n        itemCounter -= 1;\n      });\n\n      // Increment counter to raise ID #\n      itemCounter += 1;\n      localDiv.appendChild(input);\n      localDiv.appendChild(removeBtn);\n      li.appendChild(localDiv);\n\n      list.appendChild(li);\n    }\n    // Hook eventListener to run createInput\n    addBtn.addEventListener(\"click\", createInput);\n\n    // Append\n    div.appendChild(divLabel);\n    div.appendChild(addBtn);\n    div.appendChild(list);\n\n    return div;\n  }\n\n  function clearListItems() {\n    const list = document.getElementById(\"listItems\");\n    while (list.hasChildNodes()) {\n      list.removeChild(list.firstChild);\n    }\n  }\n\n  function createButtons() {\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"form-btns\");\n\n    // Submit button\n    const submitBtn = document.createElement(\"button\");\n    Object.assign(submitBtn, {\n      textContent: \"Submit\",\n      type: \"submit\",\n      id: \"submit\",\n      disabled: true,\n    });\n    // Clear button\n    const resetBtn = document.createElement(\"button\");\n    Object.assign(resetBtn, {\n      textContent: \"Clear\",\n      type: \"reset\",\n      id: \"clear\",\n      disabled: true,\n    });\n    resetBtn.addEventListener(\"click\", clearListItems);\n    div.appendChild(submitBtn);\n    div.appendChild(resetBtn);\n\n    return div;\n  }\n\n  function createLayout() {\n    // Div\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"class\", \"form\");\n    // Form\n    const form = document.createElement(\"form\");\n    form.setAttribute(\"method\", \"post\");\n    const title = createTitleInput();\n    const date = createDateInput();\n    const radio = createRadioInputs();\n    const description = createDescriptionInput();\n    const listItems = createListItems();\n    const btns = createButtons();\n    form.appendChild(title);\n    form.appendChild(date);\n    form.appendChild(radio);\n    form.appendChild(description);\n    form.appendChild(listItems);\n    form.appendChild(btns);\n    // Append to div\n    div.appendChild(form);\n\n    return div;\n  }\n\n  function setForm() {\n    const content = document.querySelector(elem);\n    const form = createLayout();\n    content.appendChild(form);\n  }\n  function toggleForm() {\n    const formDiv = document.querySelector(\".form\");\n    const title = document.getElementById(\"title\");\n    const date = document.getElementById(\"date\");\n    const low = document.getElementById(\"low\");\n    const med = document.getElementById(\"med\");\n    const high = document.getElementById(\"high\");\n    const description = document.getElementById(\"description\");\n    const listItems = document.getElementById(\"listItems\");\n    const submitBtn = document.getElementById(\"submit\");\n    const resetBtn = document.getElementById(\"clear\");\n    const formList = [\n      title,\n      date,\n      low,\n      med,\n      high,\n      description,\n      listItems,\n      submitBtn,\n      resetBtn,\n    ];\n    formDiv.classList.toggle(\"form-toggle\");\n    formList.forEach((inputElem) => {\n      const item = inputElem;\n      if (item.disabled) {\n        item.disabled = false;\n      } else {\n        item.disabled = true;\n      }\n    });\n  }\n\n  return { setForm, toggleForm, clearListItems };\n}\n\n\n//# sourceURL=webpack://todo-list/./src/form.js?");

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