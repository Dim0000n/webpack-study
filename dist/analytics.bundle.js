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

/***/ "./src/analytics.js":
/*!**************************!*\
  !*** ./src/analytics.js ***!
  \**************************/
/***/ (() => {

eval("function createAnalytics() {\r\n    let counter = 0 //variable to store click count\r\n    let isDestroyed = false //state flag of Analytics \r\n\r\n    const listener = () => counter++ //incrementor of counter\r\n\r\n    document.addEventListener('click', listener) //count number of click on document\r\n\r\n    return {\r\n        //method to destroy Analytcis\r\n        destroy() {\r\n            document.removeEventListener('click', listener)\r\n            isDestroyed = true\r\n        },\r\n        \r\n        //method to get number of clicks\r\n        getClicks() {\r\n            //if destroyed\r\n            if (isDestroyed) return 'Analytics is destroyed'\r\n\r\n            return counter\r\n        }\r\n\r\n    }\r\n}\r\n\r\nwindow.analytics = createAnalytics() //create analytics\n\n//# sourceURL=webpack://webpackstudy/./src/analytics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/analytics.js"]();
/******/ 	
/******/ })()
;