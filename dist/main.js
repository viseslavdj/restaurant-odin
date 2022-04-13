/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\nlet content = document.getElementById('content');\ncontent.classList.add('content');\n\nlet container = document.createElement('div');\ncontainer.classList.add('container');\n\nlet navig = document.createElement('nav');\n// let list = document.createElement('ul');\nlet home = document.createElement('p');\nlet menu = document.createElement('p');\nlet contact = document.createElement('p');\nhome.classList.add(\"nav-bar\");\nmenu.classList.add(\"nav-bar\");\ncontact.classList.add(\"nav-bar\");\n\n\nhome.innerHTML = \"Home\";\nmenu.innerHTML = \"Menu\";\ncontact.innerHTML = \"Contact\";\n\n//home.addEventListener(click)\n\n// list.appendChild(home);\n// list.appendChild(menu);\n// list.appendChild(contact);\nnavig.appendChild(home);\nnavig.appendChild(menu);\nnavig.appendChild(contact);\ncontainer.appendChild(navig);\n\n\nlet headline = document.createElement('h1');\nheadline.innerHTML = \"Kamakona's Shrimp\";\ncontainer.appendChild(headline);\n\nlet image = document.createElement('img');\nimage.src=\"./images/logo.jpg\";\nimage.classList.add(\"logo\")\ncontainer.appendChild(image);\n\nlet para = document.createElement('p');\n// let node = document.createTextNode(\"Kamekona's newest business venture which is a mobile shrimp truck and the logo is a giant smiling shrimp with his face.\");\n// para.appendChild(node);\npara.innerHTML = \"Kamekona's newest business venture which is a mobile shrimp truck and the logo is a giant smiling shrimp with his face. \";\npara.classList.add(\"about\")\ncontainer.appendChild(para);\n\ncontent.appendChild(container);\n\n console.log(content);\n  \n\n//# sourceURL=webpack://javascript_adv/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;