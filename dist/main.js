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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\n  let content = document.getElementById('content');\n  content.classList.add('content');\n\n  let container = document.createElement('div');\n  container.classList.add('container');\n\n  let navig = document.createElement('nav');\n  // let list = document.createElement('ul');\n  let home = document.createElement('p');\n  let menu = document.createElement('p');\n  let contact = document.createElement('p');\n  home.classList.add(\"nav-bar\");\n  menu.classList.add(\"nav-bar\");\n  contact.classList.add(\"nav-bar\");\n\n\n  home.innerHTML = \"Home\";\n  menu.innerHTML = \"Menu\";\n  contact.innerHTML = \"Contact\";\n  navig.appendChild(home);\n  navig.appendChild(menu);\n  navig.appendChild(contact);\n  container.appendChild(navig);\n\n\n  let headline = document.createElement('h2');\n  headline.innerHTML = \"Kamakona's Shrimp Address\";\n  container.appendChild(headline);\n\n  let head6 = document.createElement('h4');\n  head6.innerHTML = \"Address:\";\n  container.appendChild(head6);\n  let para = document.createElement('p');\n  para.innerHTML = \"700 Nimitz Hwy Honolulu, HI 96817\";\n  container.appendChild(para);\n\n  \n\n  return container; //content.appendChild(container);\n\n\n}\n \n \n\n//# sourceURL=webpack://javascript_adv/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home(){\n  let content = document.getElementById('content');\n  content.classList.add('content');\n\n  let container = document.createElement('div');\n  container.classList.add('container');\n\n  let navig = document.createElement('nav');\n  // let list = document.createElement('ul');\n  let home = document.createElement('p');\n  let menu = document.createElement('p');\n  let contact = document.createElement('p');\n  home.classList.add(\"nav-bar\");\n  home.setAttribute('id', 'hp');\n  menu.classList.add(\"nav-bar\");\n  menu.setAttribute('id', 'mp');\n  contact.classList.add(\"nav-bar\");\n  contact.setAttribute('id', 'cp');\n\n\n  home.innerHTML = \"Home\";\n  menu.innerHTML = \"Menu\";\n  contact.innerHTML = \"Contact\";\n  navig.appendChild(home);\n  navig.appendChild(menu);\n  navig.appendChild(contact);\n  container.appendChild(navig);\n\n\n  let headline = document.createElement('h1');\n  headline.innerHTML = \"Kamakona's Shrimp\";\n  container.appendChild(headline);\n\n  let image = document.createElement('img');\n  image.src=\"./images/logo.jpg\";\n  image.classList.add(\"logo\")\n  container.appendChild(image);\n\n  let para = document.createElement('p');\n  // let node = document.createTextNode(\"Kamekona's newest business venture which is a mobile shrimp truck and the logo is a giant smiling shrimp with his face.\");\n  // para.appendChild(node);\n  para.innerHTML = \"Kamekona's newest business venture which is a mobile shrimp truck and the logo is a giant smiling shrimp with his face. \";\n  para.classList.add(\"about\")\n  container.appendChild(para);\n\n  return container; //content.appendChild(container);\n\n\n}\n \n\n//# sourceURL=webpack://javascript_adv/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n// import home from './home.js';\n// import menu from './menu.js'\n// const home = require(\"./home.js\");\n// console.log(home);\n\n\n\n\nconsole.log((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)());\n\nlet content = document.getElementById('content');\ncontent.classList.add('content');\ncontent.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)());\n// content.appendChild(menu());\n\n// let container = document.createElement('div');\n// container.classList.add('container');\n\nlet navig = document.createElement('nav');\n// let list = document.createElement('ul');\nlet homePage = document.getElementById('hp');\nlet menuPage = document.getElementById('mp');\nlet contactPage = document.getElementById('cp');\n// homePage.classList.add(\"nav-bar\");\n// menuPage.classList.add(\"nav-bar\");\n// contact.classList.add(\"nav-bar\");\n\n\n// homePage.innerHTML = \"Home\";\n// menuPage.innerHTML = \"Menu\";\n// contact.innerHTML = \"Contact\";\n\nhomePage.addEventListener(\"click\", function(){render ('home');});\nmenuPage.addEventListener(\"click\", function(){render ('menu');});\ncontactPage.addEventListener(\"click\", function(){render ('contact');});\nfunction render(page){\n  let content = document.getElementById('content');\n\n  clear_page(content);\n  switch (page){\n    case 'home':\n      console.log(\"HOME\");\n      content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)());\n      break;\n    case 'menu':\n      console.log(\"Menu turn\");\n      content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)());\n      break;\n    case 'contact':\n      console.log(\"Contact turn\");\n      content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)());\n      break;\n    default:\n\n  }\n}\n\nfunction clear_page(parent){\n  while(parent.firstChild){\n    parent.removeChild(parent.lastChild);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://javascript_adv/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(){\n  let content = document.getElementById('content');\n  content.classList.add('content');\n\n  let container = document.createElement('div');\n  container.classList.add('container');\n\n  let navig = document.createElement('nav');\n  // let list = document.createElement('ul');\n  let home = document.createElement('p');\n  let menu = document.createElement('p');\n  let contact = document.createElement('p');\n  home.classList.add(\"nav-bar\");\n  menu.classList.add(\"nav-bar\");\n  contact.classList.add(\"nav-bar\");\n\n\n  home.innerHTML = \"Home\";\n  menu.innerHTML = \"Menu\";\n  contact.innerHTML = \"Contact\";\n  navig.appendChild(home);\n  navig.appendChild(menu);\n  navig.appendChild(contact);\n  container.appendChild(navig);\n\n\n  let headline = document.createElement('h2');\n  headline.innerHTML = \"Kamakona's Shrimp Menu\";\n  container.appendChild(headline);\n\n  let head6 = document.createElement('h4');\n  head6.innerHTML = \"Plates:\";\n  container.appendChild(head6);\n  let para = document.createElement('p');\n  para.innerHTML = \"All plates comes with 2 scoops rice, mac salad, sweet potato, green salad.\";\n  container.appendChild(para);\n\n  let food = document.createElement('ul');\n  let sj = document.createElement('li');\n  sj.textContent = \"Shrimp Jambalaya $12\";\n  let hot = document.createElement('li');\n  hot.textContent = \"Hot & Spicy $12\";\n  let shoyu = document.createElement(\"li\");\n  shoyu.innerHTML = \"Shoyu $10\";\n  food.appendChild(sj);\n  food.appendChild(hot);\n  food.appendChild(shoyu);\n  container.appendChild(food);\n\n  return container; //content.appendChild(container);\n\n\n}\n \n \n\n//# sourceURL=webpack://javascript_adv/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;