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

eval("const allvoices = document.querySelector('.allvoices');\r\nconst microphone = document.querySelector('.microphone');\r\nconst stream = document.querySelector('.stream');\r\n\r\nconst iconvalues = document.querySelector('.iconvalues');\r\n\r\nconst inputactive = document.querySelector('.activereplacement');\r\n\r\nallvoices.onclick = function () {\r\n    inputactive.textContent = 'allvoices - mode';\r\n\r\n    allvoices.classList.add(\"selecteditem\");\r\n    microphone.classList.remove(\"selecteditem\");\r\n    stream.classList.remove(\"selecteditem\");\r\n\r\n};\r\n\r\nmicrophone.onclick = function () {\r\n    inputactive.textContent = 'speaker - mode';\r\n\r\n    microphone.classList.add(\"selecteditem\");\r\n    allvoices.classList.remove(\"selecteditem\");\r\n    stream.classList.remove(\"selecteditem\");\r\n};\r\n\r\nstream.onclick = function () {\r\n    inputactive.textContent = 'stream - mode';\r\n\r\n    stream.classList.add(\"selecteditem\");\r\n    allvoices.classList.remove(\"selecteditem\");\r\n    microphone.classList.remove(\"selecteditem\");\r\n};\n\n//# sourceURL=webpack://task_2/./src/index.js?");

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