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
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// Бегущая строка\r\nArray.from(document.getElementsByClassName('ticker')).forEach(ticker => {\r\n  startTicker(ticker, 5)\r\n  window.onresize = () => {\r\n    startTicker(ticker, 5, true);\r\n  }\r\n})\r\n\r\n\r\n// Смена вкладки в блоке \"Наши филиалы\"\r\nconst filialBlockAddresses = document.querySelector('.filial-block__addresses');\r\nfilialBlockAddresses.querySelectorAll('.tab').forEach(tab => {\r\n  tab.onclick = () => {\r\n    changeTab(tab, filialBlockAddresses);\r\n  }\r\n});\r\n\r\n\r\n// Центрирование картинок в блоке\r\nwindow.onload = () => {\r\n  Array.from(document.querySelectorAll('img._center')).forEach(img => {\r\n    centerImg(img);\r\n  })\r\n}\r\n\r\n\r\n// Активация слайдеров\r\nArray.from(document.querySelectorAll('.slider')).forEach(slider => {\r\n  const middleware = [];\r\n  if (slider.classList.contains('instructors-block__slider')) {\r\n    middleware.push(setActiveContent, centerItemImg)\r\n\r\n    function centerItemImg() {\r\n      const img = slider.querySelector('.instructors-block__slider img');\r\n      centerImg(img);\r\n    }\r\n  \r\n    function setActiveContent(btn) {\r\n      const data = __webpack_require__(/*! ../../gulpfile.js/data/instructors.json */ \"./gulpfile.js/data/instructors.json\");\r\n      const container = slider.querySelector('.instructors-block__item-info')\r\n      const title = container.querySelector('.instructors-block__item-title')\r\n      const subtitleDriving = container.querySelector('.instructors-block__item-exp-driving')\r\n      const subtitleInstructor = container.querySelector('.instructors-block__item-exp-instructor')\r\n      const itemNum = btn.getAttribute('activeItemNum');\r\n\r\n  \r\n      title.innerHTML = data[itemNum].name;\r\n      subtitleDriving.querySelector('span').innerHTML = data[itemNum].info.exp_driving\r\n      subtitleInstructor.querySelector('span').innerHTML = data[itemNum].info.exp_instructor;\r\n\r\n      const curItemNumBlock = slider.querySelector('.instructors-block__slider-item-num .cur');\r\n      curItemNumBlock.innerHTML = Number(itemNum)+1;\r\n    }\r\n  }\r\n\r\n  if (slider.classList.contains('faq-block__slider')) {\r\n    middleware.push(closeItems);\r\n    \r\n    function closeItems() {\r\n      const openedItems = slider.querySelectorAll('.open')\r\n      Array.from(openedItems).forEach(item => {\r\n        item.classList.remove('open');\r\n      })\r\n    }\r\n  }\r\n\r\n  moveSliderListener(slider, middleware);\r\n})\r\n\r\nArray.from(document.querySelectorAll('.unfold')).forEach(item => {\r\n  unfoldItem(item);\r\n})\r\n\r\n\r\n//-------------Functions\r\n\r\nfunction startTicker(ticker, speed, isOnResize) {\r\n  const tickerLabelBlock = ticker.querySelector('.ticker__labels')\r\n  const tickerLabel = ticker.querySelector('.ticker__label');\r\n  tickerLabelW = tickerLabel.clientWidth + Number(window.getComputedStyle(tickerLabel).getPropertyValue('margin-right').slice(0, -2));\r\n\r\n  const labelsMaxNum = window.innerWidth / tickerLabelW + 1;\r\n  const labelsCurNum = tickerLabelBlock.children.length;\r\n  if (labelsCurNum < labelsMaxNum) {\r\n    for (let i = 0; i <= labelsMaxNum - labelsCurNum; i++) {\r\n      const newLabel = tickerLabel.cloneNode(true);\r\n      tickerLabelBlock.appendChild(newLabel);\r\n    }\r\n  }\r\n\r\n  if (!isOnResize) {\r\n    let i = 0;\r\n    setInterval(() => {\r\n      if (i >= tickerLabelW) {\r\n        i = 0;\r\n      }\r\n      tickerLabelBlock.style.left = `-${i}px`;\r\n      i++;\r\n    }, 50/speed)\r\n  }\r\n}\r\n\r\nfunction changeTab(tab, parentBlock) {\r\n  if (tab.classList.contains('tab_active')) {\r\n    return;\r\n  }\r\n\r\n  const blockId = tab.getAttribute('openBlock');\r\n  const newBlock = document.getElementById(blockId);\r\n  const prevBlock = parentBlock.querySelector('.active');\r\n  const prevTab = parentBlock.querySelector('.tab_active');\r\n\r\n  console.log(prevBlock, prevTab);\r\n  newBlock.classList.add('active');\r\n  prevBlock.classList.remove('active');\r\n\r\n  tab.classList.add('tab_active')\r\n  prevTab.classList.remove('tab_active');\r\n}\r\n\r\nfunction centerImg(img) {\r\n  let w = img.clientWidth;\r\n  let h = img.clientHeight;\r\n  const parent = img.parentElement.parentElement;\r\n  const parentW = parent.clientWidth\r\n  const parentH = parent.clientHeight\r\n\r\n\r\n  if (w/h > parentW/parentH) {\r\n    img.style.width = \"auto\";\r\n    img.style.height = \"100%\"\r\n  } else {\r\n    img.style.width = \"100%\";\r\n    img.style.height = \"auto\"\r\n  }\r\n}\r\n\r\nfunction moveSliderListener(slider, middleware) {\r\n  const prevBtn = slider.querySelector('.slider__btn-prev')\r\n  const nextBtn = slider.querySelector('.slider__btn-next')\r\n  if (!slider.querySelector('.slider__item.active')) {\r\n    slider.querySelector('.slider__item').classList.add('active');\r\n  }\r\n\r\n  prevBtn.onclick = () => {\r\n    btnListener([prevBtn, nextBtn], false)\r\n  }\r\n  nextBtn.onclick = () => {\r\n    btnListener([prevBtn, nextBtn], true)\r\n  }\r\n  \r\n\r\n  function btnListener(btns, isForward) {\r\n    const items = slider.getElementsByClassName('slider__item')\r\n    let activeItemNum;\r\n    const activeItem = Array.from(items).find((item, i) => {\r\n      if (item.classList.contains(\"active\")) {\r\n        activeItemNum = i;\r\n        return item;\r\n      }\r\n    })\r\n    let newItem;\r\n\r\n    if (isForward) {\r\n      if (activeItemNum < items.length-1) {\r\n        newItem = items[++activeItemNum];\r\n      } else {\r\n        newItem = items[activeItemNum = 0]\r\n      }\r\n    } else {\r\n      if (activeItemNum > 0) {\r\n        newItem = items[--activeItemNum];\r\n      } else {\r\n        newItem = items[activeItemNum = items.length-1];\r\n      }\r\n    }\r\n\r\n    btns.forEach(btn => {\r\n      btn.setAttribute('activeItemNum', activeItemNum)\r\n    })\r\n    \r\n    activeItem.classList.remove('active');\r\n    newItem.classList.add('active');\r\n\r\n    const activeContainer = slider.querySelector('.slider__item-active-container');\r\n    if (activeContainer) {\r\n      activeContainer.children[0].remove();\r\n      activeContainer.appendChild(newItem.children[0].cloneNode(true));\r\n    }\r\n\r\n    if (middleware.length) {\r\n      middleware.forEach(func => {\r\n        func(btns[0]);\r\n      })\r\n    }\r\n  }\r\n}\r\n\r\nfunction unfoldItem(item) {\r\n  const btn = item.querySelector('.unfold__btn')\r\n\r\n  btn.onclick = () => {\r\n    item.classList.toggle('open');\r\n  }\r\n}\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ }),

/***/ "./gulpfile.js/data/instructors.json":
/*!*******************************************!*\
  !*** ./gulpfile.js/data/instructors.json ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('[{\"name\":\"Любимов Игорь Юрьевич\",\"info\":{\"exp_driving\":\"с 1996 г.\",\"exp_instructor\":\"с 2002 г.\"},\"pic\":\"instructor-1.jpg\"},{\"name\":\"Любимов Игорь Юрьевич_2\",\"info\":{\"exp_driving\":\"с 1996 г._2\",\"exp_instructor\":\"с 2002 г._2\"},\"pic\":\"instructor-2.jpg\"},{\"name\":\"Любимов Игорь Юрьевич_3\",\"info\":{\"exp_driving\":\"с 1996 г._3\",\"exp_instructor\":\"с 2002 г._3\"},\"pic\":\"instructor-3.jpg\"},{\"name\":\"Любимов Игорь Юрьевич_4\",\"info\":{\"exp_driving\":\"с 1996 г._4\",\"exp_instructor\":\"с 2002 г._4\"},\"pic\":\"instructor-4.jpg\"}]');\n\n//# sourceURL=webpack://gulp-starter/./gulpfile.js/data/instructors.json?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;