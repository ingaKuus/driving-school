/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("Array.from(document.getElementsByClassName('ticker')).forEach(ticker => {\r\n  startTicker(ticker, 5)\r\n  window.onresize = () => {\r\n    startTicker(ticker, 5, true);\r\n  }\r\n})\r\n\r\nconst filialBlockAddresses = document.querySelector('.filial-block__addresses');\r\nfilialBlockAddresses.querySelectorAll('.tab').forEach(tab => {\r\n  tab.onclick = () => {\r\n    changeTab(tab, filialBlockAddresses);\r\n  }\r\n});\r\n\r\nfunction startTicker(ticker, speed, isOnResize) {\r\n  const tickerLabelBlock = ticker.querySelector('.ticker__labels')\r\n  const tickerLabel = ticker.querySelector('.ticker__label');\r\n  tickerLabelW = tickerLabel.clientWidth + Number(window.getComputedStyle(tickerLabel).getPropertyValue('margin-right').slice(0, -2));\r\n\r\n  const labelsMaxNum = window.innerWidth / tickerLabelW + 1;\r\n  const labelsCurNum = tickerLabelBlock.children.length;\r\n  if (labelsCurNum < labelsMaxNum) {\r\n    for (let i = 0; i <= labelsMaxNum - labelsCurNum; i++) {\r\n      const newLabel = tickerLabel.cloneNode(true);\r\n      tickerLabelBlock.appendChild(newLabel);\r\n    }\r\n  }\r\n\r\n  if (!isOnResize) {\r\n    let i = 0;\r\n    setInterval(() => {\r\n      if (i >= tickerLabelW) {\r\n        i = 0;\r\n      }\r\n      tickerLabelBlock.style.left = `-${i}px`;\r\n      i++;\r\n    }, 50/speed)\r\n  }\r\n}\r\n\r\nfunction changeTab(tab, parentBlock) {\r\n  if (tab.classList.contains('tab_active')) {\r\n    return;\r\n  }\r\n\r\n  const blockId = tab.getAttribute('openBlock');\r\n  const newBlock = document.getElementById(blockId);\r\n  const prevBlock = parentBlock.querySelector('.active');\r\n  const prevTab = parentBlock.querySelector('.tab_active');\r\n\r\n  console.log(prevBlock, prevTab);\r\n  newBlock.classList.add('active');\r\n  prevBlock.classList.remove('active');\r\n\r\n  tab.classList.add('tab_active')\r\n  prevTab.classList.remove('tab_active');\r\n}\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;