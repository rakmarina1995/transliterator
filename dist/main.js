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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("\r\nwindow.addEventListener(\"load\", function (event) {\r\n    let rule = [],\r\n        srcText = document.getElementById('src-text'),\r\n        transText = document.getElementById('trans-text'),\r\n        clearBtn = document.getElementById('clear-btn'),\r\n        copyBtn = document.getElementById('copy-btn'),\r\n        mainElement = document.getElementById('main-item-src'),\r\n        mainTransElement = document.getElementById('main-item-src');\r\n\r\n\r\n    init();\r\n\r\n    async function getData() {\r\n        const response = await fetch('/json/rule.json');\r\n        if (response && response.status === 200) {\r\n            const result = await response.json();\r\n            if (result && !result.error) {\r\n                rule = result;\r\n                return;\r\n            }\r\n        } else {\r\n            console.log('Не удалось получить данные!')\r\n        }\r\n    }\r\n\r\n    function init() {\r\n        getData();\r\n        srcText.oninput=(e)=>{\r\n            srcText.style.height = 'auto';\r\n            srcText.style.height = (srcText.scrollHeight) + 'px';\r\n            let arr = Array.from(srcText.value).map(letter => {\r\n                let change = rule.find(item => {\r\n                    return item.letter === letter;\r\n                })\r\n                if (change && change.hasOwnProperty('value')) {\r\n                    return letter = change.value;\r\n\r\n                } else {\r\n                    return letter;\r\n                }\r\n            })\r\n            transText.value = arr.join('');\r\n            transText.style.height = 'auto';\r\n            transText.style.height = (transText.scrollHeight) + 'px';\r\n\r\n        }\r\n        // transText.oninput=(e)=>{\r\n        //     transText.style.height = 'auto';\r\n        //     transText.style.height = (transText.scrollHeight) + 'px';\r\n        // }\r\n        clearBtn.onclick = (e) => {\r\n            srcText.value = \"\";\r\n            transText.value = \"\";\r\n            srcText.style.height = '';\r\n            transText.style.height = '';\r\n        }\r\n        copyBtn.onclick = (e) => {\r\n            transText.select();\r\n            document.execCommand(\"copy\");\r\n\r\n        }\r\n    }\r\n\r\n})\n\n//# sourceURL=webpack://transliterator-version1/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;