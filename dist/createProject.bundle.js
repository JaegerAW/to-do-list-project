/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/myProjects.js":
/*!***************************!*\
  !*** ./src/myProjects.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myProjects: () => (/* binding */ myProjects)
/* harmony export */ });
let myProjects = JSON.parse(localStorage.getItem("projects")) || [];



//COBA! const storedProjects = localStorage.setItem('projects', JSON.stringify(myProjects));

//localStorage.setItem('projects', JSON.stringify(myProjects));

/*

myProjects.push(1);
localStorage.setItem('projects', JSON.stringify(myProjects));
myProjects.pop();
localStorage.setItem('projects', JSON.stringify(myProjects));
//dont set item here, as project will always get updated when refreshed;
*/

//when i delete from local storage, renderMain doesnt show updated version as it renders myProjects.
//add project function should be here. get the dom for the form to add project here too


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
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ "./src/myProjects.js");

const newTitleInput = document.querySelector("#newtitle");
const newDueInput = document.querySelector("#newdue");
const addProjectBtn = document.querySelector("#addnewproject");

const createProject = (title, date) => {
  return {
    id: _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.length,
    name: title,
    due: date,
  };
};
addProjectBtn.addEventListener("click", () => {
  if (!newTitleInput.value || !newDueInput.value) {
    return;
  }
  _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.push(createProject(newTitleInput.value, newDueInput.value));
  localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFc0I7O0FBRXRCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTjZDO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxzREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBVTtBQUNaLGtEQUFrRCxzREFBVTtBQUM1RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL215UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG15UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG5leHBvcnQgeyBteVByb2plY3RzIH07XG5cbi8vQ09CQSEgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG5cbi8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuXG4vKlxuXG5teVByb2plY3RzLnB1c2goMSk7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG5teVByb2plY3RzLnBvcCgpO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuLy9kb250IHNldCBpdGVtIGhlcmUsIGFzIHByb2plY3Qgd2lsbCBhbHdheXMgZ2V0IHVwZGF0ZWQgd2hlbiByZWZyZXNoZWQ7XG4qL1xuXG4vL3doZW4gaSBkZWxldGUgZnJvbSBsb2NhbCBzdG9yYWdlLCByZW5kZXJNYWluIGRvZXNudCBzaG93IHVwZGF0ZWQgdmVyc2lvbiBhcyBpdCByZW5kZXJzIG15UHJvamVjdHMuXG4vL2FkZCBwcm9qZWN0IGZ1bmN0aW9uIHNob3VsZCBiZSBoZXJlLiBnZXQgdGhlIGRvbSBmb3IgdGhlIGZvcm0gdG8gYWRkIHByb2plY3QgaGVyZSB0b29cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuL215UHJvamVjdHMuanNcIjtcbmNvbnN0IG5ld1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3RpdGxlXCIpO1xuY29uc3QgbmV3RHVlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld2R1ZVwiKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZG5ld3Byb2plY3RcIik7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUsIGRhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpZDogbXlQcm9qZWN0cy5sZW5ndGgsXG4gICAgbmFtZTogdGl0bGUsXG4gICAgZHVlOiBkYXRlLFxuICB9O1xufTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKCFuZXdUaXRsZUlucHV0LnZhbHVlIHx8ICFuZXdEdWVJbnB1dC52YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBteVByb2plY3RzLnB1c2goY3JlYXRlUHJvamVjdChuZXdUaXRsZUlucHV0LnZhbHVlLCBuZXdEdWVJbnB1dC52YWx1ZSkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9