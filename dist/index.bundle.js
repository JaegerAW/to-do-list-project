/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  --sidebar-color: #0cb8fd;
  padding: 0;
  margin: 0;
}

.container {
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100vh;
  overflow: scroll;
}

.sidebar {
  background-color: var(--sidebar-color);
}

.sidebar > h1 {
  background-color: var(--sidebar-color);
}

.projects {
  background-color: var(--sidebar-color);
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 20px;
  font-weight: bold;
}
.card {
  width: 400px;
  background-color: #f6fcff;
  border-radius: 20px;
  box-shadow: 2px 2px 2px grey;
  padding: 20px;
  margin: 15px;
}

.cardheader {
  padding-top: 15px;
  padding-left: 15px;
  font-size: 30px;
}

.date {
  position: relative;
  left: 0px;
  top: 0px;
}

.high {
  background-color: red;
}

.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  height: 300px;
  border: 2px solid black;
}

.modallabel {
  margin-left: 100px;
  margin-top: 100px;
}

.prioritylabel {
  margin-left: 100px;
  margin-top: 20px;
}

select {
  border: 2px solid black;
  width: 150px;
}

.hidden {
  display: none;
}

.tasks {
  font-weight: bold;
  font-size: 20px;
}

.tasks > .taskdescription {
  font-weight: lighter;
  font-size: 12px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ;oCACkC;EAClC,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,4BAA4B;EAC5B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;AACV;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,eAAe;AACjB","sourcesContent":["* {\n  --sidebar-color: #0cb8fd;\n  padding: 0;\n  margin: 0;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  height: 100vh;\n  overflow: scroll;\n}\n\n.sidebar {\n  background-color: var(--sidebar-color);\n}\n\n.sidebar > h1 {\n  background-color: var(--sidebar-color);\n}\n\n.projects {\n  background-color: var(--sidebar-color);\n  color: white;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n    \"Lucida Sans\", Arial, sans-serif;\n  padding: 20px;\n  font-weight: bold;\n}\n.card {\n  width: 400px;\n  background-color: #f6fcff;\n  border-radius: 20px;\n  box-shadow: 2px 2px 2px grey;\n  padding: 20px;\n  margin: 15px;\n}\n\n.cardheader {\n  padding-top: 15px;\n  padding-left: 15px;\n  font-size: 30px;\n}\n\n.date {\n  position: relative;\n  left: 0px;\n  top: 0px;\n}\n\n.high {\n  background-color: red;\n}\n\n.modal {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 400px;\n  height: 300px;\n  border: 2px solid black;\n}\n\n.modallabel {\n  margin-left: 100px;\n  margin-top: 100px;\n}\n\n.prioritylabel {\n  margin-left: 100px;\n  margin-top: 20px;\n}\n\nselect {\n  border: 2px solid black;\n  width: 150px;\n}\n\n.hidden {\n  display: none;\n}\n\n.tasks {\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.tasks > .taskdescription {\n  font-weight: lighter;\n  font-size: 12px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ "./src/myProjects.js");
/* harmony import */ var _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskModal.js */ "./src/addTaskModal.js");



function createTask(task, priority, description) {
  return {
    id: `${task}${Date.now()}`,
    name: task,
    priority: priority,
    description: description,
  };
}


/***/ }),

/***/ "./src/addTaskModal.js":
/*!*****************************!*\
  !*** ./src/addTaskModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskModal: () => (/* binding */ addTaskModal),
/* harmony export */   newPriorityInput: () => (/* binding */ newPriorityInput),
/* harmony export */   newTaskInput: () => (/* binding */ newTaskInput),
/* harmony export */   submitNewTaskBtn: () => (/* binding */ submitNewTaskBtn),
/* harmony export */   taskDescriptionInput: () => (/* binding */ taskDescriptionInput)
/* harmony export */ });
/* harmony import */ var _myProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects */ "./src/myProjects.js");


const addTaskModal = document.createElement("div");
addTaskModal.classList.add("hidden");
addTaskModal.classList.add("modal");
const closeForm = document.createElement("button");

closeForm.innerHTML = "Close Form";

closeForm.addEventListener("click", () => {
  newTaskInput.value = "";
  taskDescriptionInput.value = "";
  addTaskModal.classList.toggle("hidden");
});
addTaskModal.appendChild(closeForm);
//const addTaskModal = document.createElement('div');

//addTaskModal.classList.add('hidden');

//create label and input box for user to input new task title
const newTask = document.createElement("div");
newTask.classList.add("modallabel");
newTask.textContent = "New Task :";
const newTaskInput = document.createElement("input");
newTaskInput.setAttribute("placeholder", "Add New Task Here");
newTaskInput.setAttribute("id", "newtaskinput");
newTaskInput.classList.add("inputbox");
newTask.appendChild(newTaskInput);

//create label and select input for user to input new task priority
const newPriority = document.createElement("div");
newPriority.textContent = "Priority: ";
newPriority.classList.add("prioritylabel");
const newPriorityInput = document.createElement("select");
newPriorityInput.setAttribute("id", "newpriorityinput");

//add options to select
const selectHigh = document.createElement("option");
selectHigh.textContent = "High";
selectHigh.setAttribute("value", "High");
newPriorityInput.appendChild(selectHigh);
const selectMedium = document.createElement("option");
selectMedium.textContent = "Medium";
newPriorityInput.appendChild(selectMedium);
const selectLow = document.createElement("option");
selectLow.textContent = "Low";
newPriorityInput.appendChild(selectLow);
newPriority.appendChild(newPriorityInput);

//add textArea description of task
const newTaskDescription = document.createElement("div");
newTaskDescription.classList.add("prioritylabel");
newTaskDescription.textContent = "Description: ";
newTaskDescription.setAttribute("placeholder", "Enter task details here");

const taskDescriptionInput = document.createElement("textarea");
taskDescriptionInput.setAttribute("cols", "30");
taskDescriptionInput.setAttribute("rows", "5");
newTaskDescription.appendChild(taskDescriptionInput);
//button to submit new task to the project
const submitNewTaskBtn = document.createElement("button");
submitNewTaskBtn.classList.add("prioritylabel");
submitNewTaskBtn.textContent = "Submit New Task";

addTaskModal.appendChild(newTask);
addTaskModal.appendChild(newPriority);
addTaskModal.appendChild(newTaskDescription);

addTaskModal.appendChild(submitNewTaskBtn);








/***/ }),

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


/***/ }),

/***/ "./src/renderMain.js":
/*!***************************!*\
  !*** ./src/renderMain.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMain),
/* harmony export */   updateTaskContainer: () => (/* binding */ updateTaskContainer)
/* harmony export */ });
/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ "./src/myProjects.js");
/* harmony import */ var _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskModal.js */ "./src/addTaskModal.js");
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTask.js */ "./src/addTask.js");






const mainContent = document.querySelector("#main");

let currentProjectIndex;
let currentTaskIndex;

const reset = () => {
  _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value = "";
  _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value = "";
};

function renderMain(event) {
  //render project from sidebar to mainContent body

  mainContent.textContent = "";
  mainContent.appendChild(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal); //dialog to input new task and its priority

  currentProjectIndex = parseInt(event.target.id.split("-")[1]);

  const projectCard = document.createElement("div");
  projectCard.classList.add("card");
  projectCard.setAttribute("id", _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].id);

  const projectCardHeader = document.createElement("h3");
  projectCardHeader.classList.add("cardheader");
  projectCardHeader.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].name;
  projectCard.appendChild(projectCardHeader);

  const projectDue = document.createElement("div");
  projectDue.textContent = `Due: ${_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].due}`;
  projectDue.classList.add("date");
  projectCard.appendChild(projectDue);

  for (let i = 0; i < _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks?.length; i++) {
    const tasks = document.createElement("div");

    //when we want to update after delete, just store with same "key" and the "key" will be updated.

    tasks.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].name;
    tasks.classList.add("tasks");
    tasks.setAttribute("id", _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].id);
    const taskDescription = document.createElement("div");
    taskDescription.textContent =
      _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].description;
    taskDescription.classList.add("taskdescription");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Task";
    editBtn.setAttribute("id", `edit-${i}`);
    editBtn.addEventListener("click", (e) => {
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
      currentTaskIndex = parseInt(e.target.id.split("-")[1]);
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].name;
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].priority;
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].description;
      console.log(currentTaskIndex);
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Submit Editted Task";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Task";
    deleteBtn.addEventListener("click", () => {
      _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.splice(i, 1);
      localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
      renderMain(event);
    });

    tasks.appendChild(deleteBtn);
    tasks.appendChild(editBtn);
    tasks.appendChild(taskDescription);
    projectCard.appendChild(tasks);
  }

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  mainContent.appendChild(addTaskBtn);
  addTaskBtn.addEventListener("click", () => {
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Add New Task";
  });
  mainContent.appendChild(addTaskBtn);
  mainContent.appendChild(projectCard);
}

function updateTaskContainer() {
  //exactly the same as renderMain, only without reassigning the currentProjectIndex. used for after altering myProjects array(deleteTask, addTask)
  mainContent.textContent = "";
  mainContent.appendChild(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal); //dialog to input new task and its priority

  const projectCard = document.createElement("div");
  projectCard.classList.add("card");
  projectCard.setAttribute("id", _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].id);

  const projectCardHeader = document.createElement("h3");
  projectCardHeader.classList.add("cardheader");
  projectCardHeader.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].name;
  projectCard.appendChild(projectCardHeader);

  const projectDue = document.createElement("div");
  projectDue.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].due;
  projectDue.classList.add("date");
  projectCard.appendChild(projectDue);

  for (let i = 0; i < _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks?.length; i++) {
    const tasks = document.createElement("div");
    const deleteBtn = document.createElement("button");

    //when we want to update after delete, just store with same "key" and the "key" will be updated.

    tasks.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].name;
    tasks.classList.add("tasks");
    tasks.setAttribute("id", _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].id);
    const taskDescription = document.createElement("div");
    taskDescription.textContent =
      _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].description;
    taskDescription.classList.add("taskdescription");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Task";
    editBtn.setAttribute("id", `edit-${i}`);
    editBtn.addEventListener("click", (e) => {
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
      currentTaskIndex = parseInt(e.target.id.split("-")[1]);
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].name;
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].priority;
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].description;
      console.log(currentTaskIndex);
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Submit Editted Task";
    });

    deleteBtn.textContent = "Delete Task";
    deleteBtn.addEventListener("click", () => {
      _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.splice(i, 1);
      localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
      updateTaskContainer();
    });
    tasks.appendChild(deleteBtn);
    tasks.appendChild(editBtn);
    tasks.appendChild(taskDescription);
    projectCard.appendChild(tasks);
  }

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  mainContent.appendChild(addTaskBtn);
  addTaskBtn.addEventListener("click", () => {
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Add New Task";
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
  });
  mainContent.appendChild(addTaskBtn);
  mainContent.appendChild(projectCard);
}

const submitNewTask = () => {
  const taskObj = {
    name: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value,
    priority: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value,
    description: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value,
  };
  // const currentTaskIndex = myProjects[currentProjectIndex].tasks.findIndex((item)=> item.id === currentTask.id);
  if (!_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value && !_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value) {
    alert("Please enter task details");
  } else if (!_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks) {
    //new project, no task property yet, assign task(s) property
    _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks = [
      (0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value,
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value,
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value
      ),
    ];
    localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
    reset();
    updateTaskContainer();
  } else if (_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex]) {
    //if task exists, edit task

    _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex] = taskObj;
    localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
    reset();
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
    currentTaskIndex = null; //after submit editted task, turn off currentTaskIndex, bug fixed where we keep on editing the same task index when we create new task.
    updateTaskContainer();
  } else {
    _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.push(
      (0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value,
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value,
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value
      )
    ); //project already made, tasks property exist, but no currentTaskIndex;
    localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
    reset();
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
    updateTaskContainer();
  }
};

_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.addEventListener("click", submitNewTask);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myProjects.js */ "./src/myProjects.js");
/* harmony import */ var _renderMain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderMain.js */ "./src/renderMain.js");
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTask.js */ "./src/addTask.js");
/* harmony import */ var _addTaskModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addTaskModal.js */ "./src/addTaskModal.js");





//import  updateTaskContainer  from './renderMain.js';

const mainContent = document.querySelector("#main");
const sideBar = document.querySelector("#sidebarproject");

const deleteProject = (e) => {
  let deleteProjectIndex = e.target.id.split("-")[1];
  console.log(deleteProjectIndex);
  _myProjects_js__WEBPACK_IMPORTED_MODULE_1__.myProjects.splice(deleteProjectIndex, 1);
  localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_1__.myProjects));
  renderSidebar();
};

function renderSidebar() {
  let sidebarHTML = "";
  _myProjects_js__WEBPACK_IMPORTED_MODULE_1__.myProjects.forEach((project, index) => {
    sidebarHTML += `<div class="projects" id="project-${index}">${project.name}</div>
                        <button class="delete" id="delete-${index}">Delete Project</button>
        `;
  });
  sideBar.innerHTML = "";
  sideBar.innerHTML += sidebarHTML;
  const projects = document.querySelectorAll(".projects");
  projects.forEach((project) => project.addEventListener("click", _renderMain_js__WEBPACK_IMPORTED_MODULE_2__["default"]));
  const deleteProjectBtn = document.querySelectorAll(".delete");
  deleteProjectBtn.forEach((btn) => {
    btn.addEventListener("click", deleteProject);
  });
}

renderSidebar();

mainContent.appendChild(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_4__.addTaskModal);

//sidebar shows a list of projects
//sidebar can run a forEach on a projects array
//project1 in array has name and duedate when created, project1.items.push(item) when click on add task
//projectsArray.forEach((project)=> {})

//content shows a project when it's clicked on the sidebar

/*
function renderMain(event) {

    let index = parseInt(event.target.id.split('-')[1]);

   
    
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');

    const projectCardHeader = document.createElement('h3');
    projectCardHeader.classList.add('cardheader');
    projectCardHeader.textContent =  myProjects[index].name
   projectCard.appendChild(projectCardHeader);    
   
   const projectDue = document.createElement('div');
    projectDue.textContent = myProjects[index].due;
    projectDue.classList.add('date');
    projectCard.appendChild(projectDue);

   for (let i = 0; i < myProjects[index].tasks.length; i++) {
    projectCard.innerHTML +=`<div class="tasks ${myProjects[index].tasks[i].priority}"><input type='checkbox'>${myProjects[index].tasks[i].name}</div>`;
   }
    mainContent.appendChild(projectCard)

}
*/

/*
function logMessage() {
    console.log('hello');
}

logMessage();
const myProjects = [ 

];
//{projectname: xxx, dueDate: date, list:[{title: asdasd, description: asdasd, priority: yes/no}]}

/*myprojects = [
{
    projectName: get a job, dueDate: 10 dec 2025, todolist:[
    {
    item: get good at programming, description: try to be better at programming everyday, priority: true
    },
    {
    item: Prepare for interviews, description
    }
    ]
}
]



function createProject(projectName, dueDate, todolist, items, description, priority)  {
return {
"project name": projectName,
"Due Date": dueDate,
"to do list": [{item: items, Description: description, Priority: priority}]
}

}

const project1 = new createProject('get a job', '10-12-2025', 'get good at programming', 'complete odin project wholly to get good at programming', 'yes');
myProjects.push(project1);
const btn = document.createElement('button');
btn.addEventListener('click', createProject);
btn.textContent = "test";

document.body.appendChild(btn)

*/

/*const myProjects = [
    {
        name: "Go to supermarket",
        due: "12/2/25",
        tasks: [
                    {
                        name: "Buy apples",
                        priority: "high"
                    },
                    {
                        name: "Buy Eggs",
                        priority: "medium"
                    }
                ]
    },
    {
        name: "Clean the house",
        due: "13/2/25",
        tasks: [
                    {
                        name: "Sweep and mop the floor",
                        priority: "high"
                    },
                    {
                        name: "Do laundry",
                        priority: "high"
                    }
                ]
    }
]; 
*/

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL3NyYy9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL3NyYy9hZGRUYXNrTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL215UHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL3JlbmRlck1haW4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgLS1zaWRlYmFyLWNvbG9yOiAjMGNiOGZkO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcbn1cblxuLnNpZGViYXIgPiBoMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xufVxuXG4ucHJvamVjdHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuICAgIFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmZjZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyZXk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLmNhcmRoZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5kYXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuXG4uaGlnaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubW9kYWxsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5wcmlvcml0eWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhc2tzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRhc2tzID4gLnRhc2tkZXNjcmlwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaO29DQUNrQztFQUNsQyxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgLS1zaWRlYmFyLWNvbG9yOiAjMGNiOGZkO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxufVxcblxcbi5zaWRlYmFyID4gaDEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuICAgIFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmY2ZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyZXk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4uY2FyZGhlYWRlciB7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmRhdGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMHB4O1xcbiAgdG9wOiAwcHg7XFxufVxcblxcbi5oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubW9kYWxsYWJlbCB7XFxuICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLnByaW9yaXR5bGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrcyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRhc2tzID4gLnRhc2tkZXNjcmlwdGlvbiB7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi9teVByb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBhZGRUYXNrTW9kYWwgfSBmcm9tIFwiLi9hZGRUYXNrTW9kYWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogYCR7dGFza30ke0RhdGUubm93KCl9YCxcbiAgICBuYW1lOiB0YXNrLFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi4vbXlQcm9qZWN0c1wiO1xuXG5jb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWRkVGFza01vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5hZGRUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuY29uc3QgY2xvc2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuY2xvc2VGb3JtLmlubmVySFRNTCA9IFwiQ2xvc2UgRm9ybVwiO1xuXG5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmV3VGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuYWRkVGFza01vZGFsLmFwcGVuZENoaWxkKGNsb3NlRm9ybSk7XG4vL2NvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vL2FkZFRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuLy9jcmVhdGUgbGFiZWwgYW5kIGlucHV0IGJveCBmb3IgdXNlciB0byBpbnB1dCBuZXcgdGFzayB0aXRsZVxuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5uZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJtb2RhbGxhYmVsXCIpO1xubmV3VGFzay50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2sgOlwiO1xuY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xubmV3VGFza0lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiQWRkIE5ldyBUYXNrIEhlcmVcIik7XG5uZXdUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXd0YXNraW5wdXRcIik7XG5uZXdUYXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0Ym94XCIpO1xubmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrSW5wdXQpO1xuXG4vL2NyZWF0ZSBsYWJlbCBhbmQgc2VsZWN0IGlucHV0IGZvciB1c2VyIHRvIGlucHV0IG5ldyB0YXNrIHByaW9yaXR5XG5jb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5uZXdQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xubmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5bGFiZWxcIik7XG5jb25zdCBuZXdQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbm5ld1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdwcmlvcml0eWlucHV0XCIpO1xuXG4vL2FkZCBvcHRpb25zIHRvIHNlbGVjdFxuY29uc3Qgc2VsZWN0SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zZWxlY3RIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG5zZWxlY3RIaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbm5ld1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoc2VsZWN0SGlnaCk7XG5jb25zdCBzZWxlY3RNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuc2VsZWN0TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbm5ld1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoc2VsZWN0TWVkaXVtKTtcbmNvbnN0IHNlbGVjdExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zZWxlY3RMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xubmV3UHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChzZWxlY3RMb3cpO1xubmV3UHJpb3JpdHkuYXBwZW5kQ2hpbGQobmV3UHJpb3JpdHlJbnB1dCk7XG5cbi8vYWRkIHRleHRBcmVhIGRlc2NyaXB0aW9uIG9mIHRhc2tcbmNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5uZXdUYXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5bGFiZWxcIik7XG5uZXdUYXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbm5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIHRhc2sgZGV0YWlscyBoZXJlXCIpO1xuXG5jb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbnRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIzMFwiKTtcbnRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xubmV3VGFza0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbi8vYnV0dG9uIHRvIHN1Ym1pdCBuZXcgdGFzayB0byB0aGUgcHJvamVjdFxuY29uc3Qgc3VibWl0TmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXROZXdUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eWxhYmVsXCIpO1xuc3VibWl0TmV3VGFza0J0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0IE5ldyBUYXNrXCI7XG5cbmFkZFRhc2tNb2RhbC5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbmFkZFRhc2tNb2RhbC5hcHBlbmRDaGlsZChuZXdQcmlvcml0eSk7XG5hZGRUYXNrTW9kYWwuYXBwZW5kQ2hpbGQobmV3VGFza0Rlc2NyaXB0aW9uKTtcblxuYWRkVGFza01vZGFsLmFwcGVuZENoaWxkKHN1Ym1pdE5ld1Rhc2tCdG4pO1xuXG5leHBvcnQgeyBhZGRUYXNrTW9kYWwgfTtcbmV4cG9ydCB7IHN1Ym1pdE5ld1Rhc2tCdG4gfTtcbmV4cG9ydCB7IG5ld1Rhc2tJbnB1dCB9O1xuZXhwb3J0IHsgbmV3UHJpb3JpdHlJbnB1dCB9O1xuZXhwb3J0IHsgdGFza0Rlc2NyaXB0aW9uSW5wdXQgfTtcbiIsImxldCBteVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuZXhwb3J0IHsgbXlQcm9qZWN0cyB9O1xuXG4vL0NPQkEhIGNvbnN0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuXG4vL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcblxuLypcblxubXlQcm9qZWN0cy5wdXNoKDEpO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xubXlQcm9qZWN0cy5wb3AoKTtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcbi8vZG9udCBzZXQgaXRlbSBoZXJlLCBhcyBwcm9qZWN0IHdpbGwgYWx3YXlzIGdldCB1cGRhdGVkIHdoZW4gcmVmcmVzaGVkO1xuKi9cblxuLy93aGVuIGkgZGVsZXRlIGZyb20gbG9jYWwgc3RvcmFnZSwgcmVuZGVyTWFpbiBkb2VzbnQgc2hvdyB1cGRhdGVkIHZlcnNpb24gYXMgaXQgcmVuZGVycyBteVByb2plY3RzLlxuLy9hZGQgcHJvamVjdCBmdW5jdGlvbiBzaG91bGQgYmUgaGVyZS4gZ2V0IHRoZSBkb20gZm9yIHRoZSBmb3JtIHRvIGFkZCBwcm9qZWN0IGhlcmUgdG9vXG4iLCJpbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi4vbXlQcm9qZWN0cy5qc1wiO1xuXG5pbXBvcnQgeyBzdWJtaXROZXdUYXNrQnRuLCB0YXNrRGVzY3JpcHRpb24gfSBmcm9tIFwiLi9hZGRUYXNrTW9kYWwuanNcIjtcbmltcG9ydCB7XG4gIGFkZFRhc2tNb2RhbCxcbiAgbmV3VGFza0lucHV0LFxuICBuZXdQcmlvcml0eUlucHV0LFxuICB0YXNrRGVzY3JpcHRpb25JbnB1dCxcbn0gZnJvbSBcIi4vYWRkVGFza01vZGFsLmpzXCI7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9hZGRUYXNrLmpzXCI7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG5sZXQgY3VycmVudFByb2plY3RJbmRleDtcbmxldCBjdXJyZW50VGFza0luZGV4O1xuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgbmV3VGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWFpbihldmVudCkge1xuICAvL3JlbmRlciBwcm9qZWN0IGZyb20gc2lkZWJhciB0byBtYWluQ29udGVudCBib2R5XG5cbiAgbWFpbkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrTW9kYWwpOyAvL2RpYWxvZyB0byBpbnB1dCBuZXcgdGFzayBhbmQgaXRzIHByaW9yaXR5XG5cbiAgY3VycmVudFByb2plY3RJbmRleCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi1cIilbMV0pO1xuXG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0uaWQpO1xuXG4gIGNvbnN0IHByb2plY3RDYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBwcm9qZWN0Q2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZGhlYWRlclwiKTtcbiAgcHJvamVjdENhcmRIZWFkZXIudGV4dENvbnRlbnQgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLm5hbWU7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RDYXJkSGVhZGVyKTtcblxuICBjb25zdCBwcm9qZWN0RHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdER1ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7bXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5kdWV9YDtcbiAgcHJvamVjdER1ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdER1ZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzPy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIC8vd2hlbiB3ZSB3YW50IHRvIHVwZGF0ZSBhZnRlciBkZWxldGUsIGp1c3Qgc3RvcmUgd2l0aCBzYW1lIFwia2V5XCIgYW5kIHRoZSBcImtleVwiIHdpbGwgYmUgdXBkYXRlZC5cblxuICAgIHRhc2tzLnRleHRDb250ZW50ID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tpXS5uYW1lO1xuICAgIHRhc2tzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc1wiKTtcbiAgICB0YXNrcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2ldLmlkKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2ldLmRlc2NyaXB0aW9uO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFza2Rlc2NyaXB0aW9uXCIpO1xuXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZWRpdC0ke2l9YCk7XG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgY3VycmVudFRhc2tJbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgICBuZXdUYXNrSW5wdXQudmFsdWUgPVxuICAgICAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdLm5hbWU7XG4gICAgICBuZXdQcmlvcml0eUlucHV0LnZhbHVlID1cbiAgICAgICAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tjdXJyZW50VGFza0luZGV4XS5wcmlvcml0eTtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID1cbiAgICAgICAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tjdXJyZW50VGFza0luZGV4XS5kZXNjcmlwdGlvbjtcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrSW5kZXgpO1xuICAgICAgc3VibWl0TmV3VGFza0J0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0IEVkaXR0ZWQgVGFza1wiO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUYXNrXCI7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuICAgICAgcmVuZGVyTWFpbihldmVudCk7XG4gICAgfSk7XG5cbiAgICB0YXNrcy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIHRhc2tzLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIHRhc2tzLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodGFza3MpO1xuICB9XG5cbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgc3VibWl0TmV3VGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUYXNrXCI7XG4gIH0pO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza0NvbnRhaW5lcigpIHtcbiAgLy9leGFjdGx5IHRoZSBzYW1lIGFzIHJlbmRlck1haW4sIG9ubHkgd2l0aG91dCByZWFzc2lnbmluZyB0aGUgY3VycmVudFByb2plY3RJbmRleC4gdXNlZCBmb3IgYWZ0ZXIgYWx0ZXJpbmcgbXlQcm9qZWN0cyBhcnJheShkZWxldGVUYXNrLCBhZGRUYXNrKVxuICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tNb2RhbCk7IC8vZGlhbG9nIHRvIGlucHV0IG5ldyB0YXNrIGFuZCBpdHMgcHJpb3JpdHlcblxuICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBwcm9qZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLmlkKTtcblxuICBjb25zdCBwcm9qZWN0Q2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcHJvamVjdENhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcImNhcmRoZWFkZXJcIik7XG4gIHByb2plY3RDYXJkSGVhZGVyLnRleHRDb250ZW50ID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5uYW1lO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZEhlYWRlcik7XG5cbiAgY29uc3QgcHJvamVjdER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3REdWUudGV4dENvbnRlbnQgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLmR1ZTtcbiAgcHJvamVjdER1ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdER1ZSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzPy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgLy93aGVuIHdlIHdhbnQgdG8gdXBkYXRlIGFmdGVyIGRlbGV0ZSwganVzdCBzdG9yZSB3aXRoIHNhbWUgXCJrZXlcIiBhbmQgdGhlIFwia2V5XCIgd2lsbCBiZSB1cGRhdGVkLlxuXG4gICAgdGFza3MudGV4dENvbnRlbnQgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2ldLm5hbWU7XG4gICAgdGFza3MuY2xhc3NMaXN0LmFkZChcInRhc2tzXCIpO1xuICAgIHRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0uaWQpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrZGVzY3JpcHRpb25cIik7XG5cbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGBlZGl0LSR7aX1gKTtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICBjdXJyZW50VGFza0luZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuaWQuc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9XG4gICAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0ubmFtZTtcbiAgICAgIG5ld1ByaW9yaXR5SW5wdXQudmFsdWUgPVxuICAgICAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdLnByaW9yaXR5O1xuICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPVxuICAgICAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdLmRlc2NyaXB0aW9uO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tJbmRleCk7XG4gICAgICBzdWJtaXROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXQgRWRpdHRlZCBUYXNrXCI7XG4gICAgfSk7XG5cbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUYXNrXCI7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuICAgICAgdXBkYXRlVGFza0NvbnRhaW5lcigpO1xuICAgIH0pO1xuICAgIHRhc2tzLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gIH1cblxuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzdWJtaXROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIjtcbiAgICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG59XG5cbmNvbnN0IHN1Ym1pdE5ld1Rhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tPYmogPSB7XG4gICAgbmFtZTogbmV3VGFza0lucHV0LnZhbHVlLFxuICAgIHByaW9yaXR5OiBuZXdQcmlvcml0eUlucHV0LnZhbHVlLFxuICAgIGRlc2NyaXB0aW9uOiB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgfTtcbiAgLy8gY29uc3QgY3VycmVudFRhc2tJbmRleCA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3MuZmluZEluZGV4KChpdGVtKT0+IGl0ZW0uaWQgPT09IGN1cnJlbnRUYXNrLmlkKTtcbiAgaWYgKCFuZXdUYXNrSW5wdXQudmFsdWUgJiYgIXRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgdGFzayBkZXRhaWxzXCIpO1xuICB9IGVsc2UgaWYgKCFteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzKSB7XG4gICAgLy9uZXcgcHJvamVjdCwgbm8gdGFzayBwcm9wZXJ0eSB5ZXQsIGFzc2lnbiB0YXNrKHMpIHByb3BlcnR5XG4gICAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcyA9IFtcbiAgICAgIGNyZWF0ZVRhc2soXG4gICAgICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSxcbiAgICAgICAgbmV3UHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWVcbiAgICAgICksXG4gICAgXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcbiAgICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICByZXNldCgpO1xuICAgIHVwZGF0ZVRhc2tDb250YWluZXIoKTtcbiAgfSBlbHNlIGlmIChteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdKSB7XG4gICAgLy9pZiB0YXNrIGV4aXN0cywgZWRpdCB0YXNrXG5cbiAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdID0gdGFza09iajtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcbiAgICByZXNldCgpO1xuICAgIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGN1cnJlbnRUYXNrSW5kZXggPSBudWxsOyAvL2FmdGVyIHN1Ym1pdCBlZGl0dGVkIHRhc2ssIHR1cm4gb2ZmIGN1cnJlbnRUYXNrSW5kZXgsIGJ1ZyBmaXhlZCB3aGVyZSB3ZSBrZWVwIG9uIGVkaXRpbmcgdGhlIHNhbWUgdGFzayBpbmRleCB3aGVuIHdlIGNyZWF0ZSBuZXcgdGFzay5cbiAgICB1cGRhdGVUYXNrQ29udGFpbmVyKCk7XG4gIH0gZWxzZSB7XG4gICAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5wdXNoKFxuICAgICAgY3JlYXRlVGFzayhcbiAgICAgICAgbmV3VGFza0lucHV0LnZhbHVlLFxuICAgICAgICBuZXdQcmlvcml0eUlucHV0LnZhbHVlLFxuICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZVxuICAgICAgKVxuICAgICk7IC8vcHJvamVjdCBhbHJlYWR5IG1hZGUsIHRhc2tzIHByb3BlcnR5IGV4aXN0LCBidXQgbm8gY3VycmVudFRhc2tJbmRleDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcbiAgICByZXNldCgpO1xuICAgIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIHVwZGF0ZVRhc2tDb250YWluZXIoKTtcbiAgfVxufTtcblxuc3VibWl0TmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0TmV3VGFzayk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi9teVByb2plY3RzLmpzXCI7XG5pbXBvcnQgcmVuZGVyTWFpbiBmcm9tIFwiLi9yZW5kZXJNYWluLmpzXCI7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9hZGRUYXNrLmpzXCI7XG5pbXBvcnQgeyBhZGRUYXNrTW9kYWwgfSBmcm9tIFwiLi9hZGRUYXNrTW9kYWwuanNcIjtcbi8vaW1wb3J0ICB1cGRhdGVUYXNrQ29udGFpbmVyICBmcm9tICcuL3JlbmRlck1haW4uanMnO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJwcm9qZWN0XCIpO1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgbGV0IGRlbGV0ZVByb2plY3RJbmRleCA9IGUudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKVsxXTtcbiAgY29uc29sZS5sb2coZGVsZXRlUHJvamVjdEluZGV4KTtcbiAgbXlQcm9qZWN0cy5zcGxpY2UoZGVsZXRlUHJvamVjdEluZGV4LCAxKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gIHJlbmRlclNpZGViYXIoKTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXIoKSB7XG4gIGxldCBzaWRlYmFySFRNTCA9IFwiXCI7XG4gIG15UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBzaWRlYmFySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2plY3RzXCIgaWQ9XCJwcm9qZWN0LSR7aW5kZXh9XCI+JHtwcm9qZWN0Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCIgaWQ9XCJkZWxldGUtJHtpbmRleH1cIj5EZWxldGUgUHJvamVjdDwvYnV0dG9uPlxuICAgICAgICBgO1xuICB9KTtcbiAgc2lkZUJhci5pbm5lckhUTUwgPSBcIlwiO1xuICBzaWRlQmFyLmlubmVySFRNTCArPSBzaWRlYmFySFRNTDtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RzXCIpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJNYWluKSk7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcbiAgZGVsZXRlUHJvamVjdEJ0bi5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICB9KTtcbn1cblxucmVuZGVyU2lkZWJhcigpO1xuXG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrTW9kYWwpO1xuXG4vL3NpZGViYXIgc2hvd3MgYSBsaXN0IG9mIHByb2plY3RzXG4vL3NpZGViYXIgY2FuIHJ1biBhIGZvckVhY2ggb24gYSBwcm9qZWN0cyBhcnJheVxuLy9wcm9qZWN0MSBpbiBhcnJheSBoYXMgbmFtZSBhbmQgZHVlZGF0ZSB3aGVuIGNyZWF0ZWQsIHByb2plY3QxLml0ZW1zLnB1c2goaXRlbSkgd2hlbiBjbGljayBvbiBhZGQgdGFza1xuLy9wcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QpPT4ge30pXG5cbi8vY29udGVudCBzaG93cyBhIHByb2plY3Qgd2hlbiBpdCdzIGNsaWNrZWQgb24gdGhlIHNpZGViYXJcblxuLypcbmZ1bmN0aW9uIHJlbmRlck1haW4oZXZlbnQpIHtcblxuICAgIGxldCBpbmRleCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZC5zcGxpdCgnLScpWzFdKTtcblxuICAgXG4gICAgXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJvamVjdENhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZGhlYWRlcicpO1xuICAgIHByb2plY3RDYXJkSGVhZGVyLnRleHRDb250ZW50ID0gIG15UHJvamVjdHNbaW5kZXhdLm5hbWVcbiAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RDYXJkSGVhZGVyKTsgICAgXG4gICBcbiAgIGNvbnN0IHByb2plY3REdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RHVlLnRleHRDb250ZW50ID0gbXlQcm9qZWN0c1tpbmRleF0uZHVlO1xuICAgIHByb2plY3REdWUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3REdWUpO1xuXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHNbaW5kZXhdLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdENhcmQuaW5uZXJIVE1MICs9YDxkaXYgY2xhc3M9XCJ0YXNrcyAke215UHJvamVjdHNbaW5kZXhdLnRhc2tzW2ldLnByaW9yaXR5fVwiPjxpbnB1dCB0eXBlPSdjaGVja2JveCc+JHtteVByb2plY3RzW2luZGV4XS50YXNrc1tpXS5uYW1lfTwvZGl2PmA7XG4gICB9XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXG5cbn1cbiovXG5cbi8qXG5mdW5jdGlvbiBsb2dNZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xufVxuXG5sb2dNZXNzYWdlKCk7XG5jb25zdCBteVByb2plY3RzID0gWyBcblxuXTtcbi8ve3Byb2plY3RuYW1lOiB4eHgsIGR1ZURhdGU6IGRhdGUsIGxpc3Q6W3t0aXRsZTogYXNkYXNkLCBkZXNjcmlwdGlvbjogYXNkYXNkLCBwcmlvcml0eTogeWVzL25vfV19XG5cbi8qbXlwcm9qZWN0cyA9IFtcbntcbiAgICBwcm9qZWN0TmFtZTogZ2V0IGEgam9iLCBkdWVEYXRlOiAxMCBkZWMgMjAyNSwgdG9kb2xpc3Q6W1xuICAgIHtcbiAgICBpdGVtOiBnZXQgZ29vZCBhdCBwcm9ncmFtbWluZywgZGVzY3JpcHRpb246IHRyeSB0byBiZSBiZXR0ZXIgYXQgcHJvZ3JhbW1pbmcgZXZlcnlkYXksIHByaW9yaXR5OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgaXRlbTogUHJlcGFyZSBmb3IgaW50ZXJ2aWV3cywgZGVzY3JpcHRpb25cbiAgICB9XG4gICAgXVxufVxuXVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgZHVlRGF0ZSwgdG9kb2xpc3QsIGl0ZW1zLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpICB7XG5yZXR1cm4ge1xuXCJwcm9qZWN0IG5hbWVcIjogcHJvamVjdE5hbWUsXG5cIkR1ZSBEYXRlXCI6IGR1ZURhdGUsXG5cInRvIGRvIGxpc3RcIjogW3tpdGVtOiBpdGVtcywgRGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBQcmlvcml0eTogcHJpb3JpdHl9XVxufVxuXG59XG5cbmNvbnN0IHByb2plY3QxID0gbmV3IGNyZWF0ZVByb2plY3QoJ2dldCBhIGpvYicsICcxMC0xMi0yMDI1JywgJ2dldCBnb29kIGF0IHByb2dyYW1taW5nJywgJ2NvbXBsZXRlIG9kaW4gcHJvamVjdCB3aG9sbHkgdG8gZ2V0IGdvb2QgYXQgcHJvZ3JhbW1pbmcnLCAneWVzJyk7XG5teVByb2plY3RzLnB1c2gocHJvamVjdDEpO1xuY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcbmJ0bi50ZXh0Q29udGVudCA9IFwidGVzdFwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ0bilcblxuKi9cblxuLypjb25zdCBteVByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJHbyB0byBzdXBlcm1hcmtldFwiLFxuICAgICAgICBkdWU6IFwiMTIvMi8yNVwiLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJ1eSBhcHBsZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJ1eSBFZ2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNsZWFuIHRoZSBob3VzZVwiLFxuICAgICAgICBkdWU6IFwiMTMvMi8yNVwiLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN3ZWVwIGFuZCBtb3AgdGhlIGZsb29yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJEbyBsYXVuZHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICB9XG5dOyBcbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=