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
   
   --sidebar-color: #0CB8FD;
   padding: 0;
   margin: 0;
}

.container {
    display: grid;
    grid-template-columns: 300px 1fr;
    height: 100vh;
    overflow: scroll;
}


.sidebar{
    background-color: var(--sidebar-color);
}

.sidebar > h1 {
    background-color: var(--sidebar-color);
}

.projects {
    background-color: var(--sidebar-color);
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding: 20px;
    font-weight: bold;
}
.card {
    width: 400px;
   background-color: #F6FCFF;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;GAEG,wBAAwB;GACxB,UAAU;GACV,SAAS;AACZ;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,aAAa;IACb,gBAAgB;AACpB;;;AAGA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,qGAAqG;IACrG,aAAa;IACb,iBAAiB;AACrB;AACA;IACI,YAAY;GACb,yBAAyB;IACxB,mBAAmB;IACnB,4BAA4B;IAC5B,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;;AAEZ;;AAEA;IACI,qBAAqB;;AAEzB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,eAAe;AACnB","sourcesContent":["* {\n   \n   --sidebar-color: #0CB8FD;\n   padding: 0;\n   margin: 0;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    height: 100vh;\n    overflow: scroll;\n}\n\n\n.sidebar{\n    background-color: var(--sidebar-color);\n}\n\n.sidebar > h1 {\n    background-color: var(--sidebar-color);\n}\n\n.projects {\n    background-color: var(--sidebar-color);\n    color: white;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    padding: 20px;\n    font-weight: bold;\n}\n.card {\n    width: 400px;\n   background-color: #F6FCFF;\n    border-radius: 20px;\n    box-shadow: 2px 2px 2px grey;\n    padding: 20px;\n    margin: 15px;\n}\n\n.cardheader {\n    padding-top: 15px;\n    padding-left: 15px;\n    font-size: 30px;\n}\n\n.date {\n    position: relative;\n    left: 0px;\n    top: 0px;\n\n}\n\n.high {\n    background-color: red;\n    \n}\n\n.modal {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 400px;\n    height: 300px;\n    border: 2px solid black;\n}\n\n.modallabel {\n    margin-left: 100px;\n    margin-top: 100px;\n}\n\n.prioritylabel {\n    margin-left: 100px;\n    margin-top: 20px;\n}\n\nselect {\n    border: 2px solid black;\n    width: 150px;\n}\n\n.hidden {\n    display: none;\n}\n\n.tasks {\n    font-weight: bold;\n    font-size: 20px;\n}\n\n.tasks > .taskdescription {\n    font-weight: lighter;\n    font-size: 12px;\n}"],"sourceRoot":""}]);
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
        "id": `${task}${Date.now()}`,
        "name": task,
        "priority": priority,
        "description": description,
    
    }

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


const addTaskModal = document.createElement('div');
addTaskModal.classList.add('hidden');
addTaskModal.classList.add('modal');
const closeForm = document.createElement('button');

closeForm.innerHTML = 'Close Form';

closeForm.addEventListener('click', ()=>{
    newTaskInput.value = '';
    taskDescriptionInput.value = '';
    addTaskModal.classList.toggle('hidden');

})
addTaskModal.appendChild(closeForm);
//const addTaskModal = document.createElement('div');

//addTaskModal.classList.add('hidden');

//create label and input box for user to input new task title
const newTask = document.createElement('div');
newTask.classList.add('modallabel');
newTask.textContent = "New Task :";
const newTaskInput = document.createElement('input');
newTaskInput.setAttribute('placeholder', 'Add New Task Here');
newTaskInput.setAttribute('id', 'newtaskinput');
newTaskInput.classList.add('inputbox');
newTask.appendChild(newTaskInput);

//create label and select input for user to input new task priority
const newPriority = document.createElement('div');
newPriority.textContent = "Priority: ";
newPriority.classList.add('prioritylabel');
const newPriorityInput = document.createElement('select');
newPriorityInput.setAttribute('id', 'newpriorityinput');

//add options to select
const selectHigh = document.createElement('option');
selectHigh.textContent = "High";
selectHigh.setAttribute('value', 'High')
newPriorityInput.appendChild(selectHigh);
const selectMedium = document.createElement('option');
selectMedium.textContent = "Medium";
newPriorityInput.appendChild(selectMedium);
const selectLow = document.createElement('option');
selectLow.textContent = "Low";
newPriorityInput.appendChild(selectLow);
newPriority.appendChild(newPriorityInput);

//add textArea description of task
const newTaskDescription = document.createElement('div');
newTaskDescription.classList.add('prioritylabel');
newTaskDescription.textContent = "Description: ";
newTaskDescription.setAttribute('placeholder', "Enter task details here");

const taskDescriptionInput = document.createElement('textarea');
taskDescriptionInput.setAttribute('cols', '30');
taskDescriptionInput.setAttribute('rows', '5');
newTaskDescription.appendChild(taskDescriptionInput);
//button to submit new task to the project
const submitNewTaskBtn = document.createElement('button');
submitNewTaskBtn.classList.add('prioritylabel');
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
let myProjects = JSON.parse(localStorage.getItem('projects')) || [];



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







const mainContent = document.querySelector('#main');

let currentProjectIndex;
let currentTaskIndex;

const reset = () => {
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value = '';
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value = '';
}

function renderMain(event) { //render project from sidebar to mainContent body

    mainContent.textContent = '';
    mainContent.appendChild(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal); //dialog to input new task and its priority
   
    currentProjectIndex = parseInt(event.target.id.split('-')[1]);
  
   
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.setAttribute('id', _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].id);

    const projectCardHeader = document.createElement('h3');
    projectCardHeader.classList.add('cardheader');
    projectCardHeader.textContent =  _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].name
    projectCard.appendChild(projectCardHeader);    
   
    const projectDue = document.createElement('div');
    projectDue.textContent = `Due: ${_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].due}`;
    projectDue.classList.add('date');
    projectCard.appendChild(projectDue);


       
    
  
    for (let i = 0; i < _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks?.length; i++) {
    
        const tasks = document.createElement('div');
        
    //when we want to update after delete, just store with same "key" and the "key" will be updated.
   
  
        tasks.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].name;
        tasks.classList.add('tasks');
        tasks.setAttribute('id', _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].id);
        const taskDescription = document.createElement('div');
        taskDescription.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].description;
        taskDescription.classList.add('taskdescription');

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit Task";
        editBtn.setAttribute('id', `edit-${i}`);
        editBtn.addEventListener('click', (e)=>{
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
            currentTaskIndex = parseInt(e.target.id.split('-')[1]);
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].name;
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].priority;
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].description;
            console.log(currentTaskIndex);
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Submit Editted Task";
        }
        )
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Task';
        deleteBtn.addEventListener('click', ()=>{
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.splice(i, 1);
        localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
        renderMain(event);
        })
 

        tasks.appendChild(deleteBtn);
        tasks.appendChild(editBtn);
        tasks.appendChild(taskDescription);
        projectCard.appendChild(tasks);
        
    }

    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task";
    mainContent.appendChild(addTaskBtn);
    addTaskBtn.addEventListener('click', ()=>{
        
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = 'Add New Task';

    });
    mainContent.appendChild(addTaskBtn);
    mainContent.appendChild(projectCard)



}

function updateTaskContainer() { //exactly the same as renderMain, only without reassigning the currentProjectIndex. used for after altering myProjects array(deleteTask, addTask)
    mainContent.textContent = '';
    mainContent.appendChild(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal); //dialog to input new task and its priority

    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.setAttribute('id', _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].id);

    const projectCardHeader = document.createElement('h3');
    projectCardHeader.classList.add('cardheader');
    projectCardHeader.textContent =  _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].name
    projectCard.appendChild(projectCardHeader);    
   
    const projectDue = document.createElement('div');
    projectDue.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].due;
    projectDue.classList.add('date');
    projectCard.appendChild(projectDue);

       
    
  
    for (let i = 0; i < _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks?.length; i++) {
    
        const tasks = document.createElement('div');
        const deleteBtn = document.createElement('button');
     
 
    //when we want to update after delete, just store with same "key" and the "key" will be updated.
   
  
        tasks.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].name;
        tasks.classList.add('tasks');
        tasks.setAttribute('id', _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].id);
        const taskDescription = document.createElement('div');
        taskDescription.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].description;
        taskDescription.classList.add('taskdescription');

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit Task";
        editBtn.setAttribute('id', `edit-${i}`);
        editBtn.addEventListener('click', (e)=>{
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
            currentTaskIndex = parseInt(e.target.id.split('-')[1]);
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].name;
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].priority;
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].description;
            console.log(currentTaskIndex);
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Submit Editted Task";
        }
        )

        deleteBtn.textContent = 'Delete Task';
        deleteBtn.addEventListener('click', ()=>{
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.splice(i, 1);
        localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
        updateTaskContainer();
        })
        tasks.appendChild(deleteBtn);
        tasks.appendChild(editBtn);
        tasks.appendChild(taskDescription);
        projectCard.appendChild(tasks);
        
    }

    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task";
    mainContent.appendChild(addTaskBtn);
    addTaskBtn.addEventListener('click', ()=>{
        
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = 'Add New Task';
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');

    });
    mainContent.appendChild(addTaskBtn);
    mainContent.appendChild(projectCard)



}



const submitNewTask =() => {
    const taskObj = {
        name: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value,
        priority: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value,
        description: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value
    };
   // const currentTaskIndex = myProjects[currentProjectIndex].tasks.findIndex((item)=> item.id === currentTask.id);
    if (!_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value && !_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value) {
        alert('Please enter task details');
    }
    else if (!_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks) { //new project, no task property yet, assign task(s) property
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks = 
            [(0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value, _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value, _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value)];
            localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
            reset();
            updateTaskContainer();
        
    }
    else if (_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex]) { //if task exists, edit task
        
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex] = taskObj;
        localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
        reset();
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
        currentTaskIndex = null;//after submit editted task, turn off currentTaskIndex, bug fixed where we keep on editing the same task index when we create new task.
        updateTaskContainer();
        }

    
    else {_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.push((0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value, _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value, _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value)); //project already made, tasks property exist, but no currentTaskIndex;
localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
reset();
_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
updateTaskContainer();
    }};





_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.addEventListener('click', submitNewTask);

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





const mainContent = document.querySelector('#main');
const sideBar = document.querySelector('#sidebarproject');


const deleteProject = (e) => {
    let deleteProjectIndex = e.target.id.split('-')[1];
    console.log(deleteProjectIndex);    
    _myProjects_js__WEBPACK_IMPORTED_MODULE_1__.myProjects.splice(deleteProjectIndex,1);
    localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_1__.myProjects));
    renderSidebar();
    
    
}



function renderSidebar() {
    let sidebarHTML = '';
    _myProjects_js__WEBPACK_IMPORTED_MODULE_1__.myProjects.forEach((project, index) => {
        sidebarHTML += `<div class="projects" id="project-${index}">${project.name}</div>
                        <button class="delete" id="delete-${index}">Delete Project</button>
        `

    })
    sideBar.innerHTML = "";
    sideBar.innerHTML += sidebarHTML;
    const projects = document.querySelectorAll('.projects');
    projects.forEach(project => 
        project.addEventListener('click', _renderMain_js__WEBPACK_IMPORTED_MODULE_2__["default"])
    )
    const deleteProjectBtn = document.querySelectorAll('.delete');
    deleteProjectBtn.forEach(btn => {
        btn.addEventListener('click', deleteProject);
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBMEQ7QUFDMUU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0Ly4vc3JjL2FkZFRhc2tNb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9zcmMvbXlQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9zcmMvcmVuZGVyTWFpbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgXG4gICAtLXNpZGViYXItY29sb3I6ICMwQ0I4RkQ7XG4gICBwYWRkaW5nOiAwO1xuICAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuXG4uc2lkZWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcbn1cblxuLnNpZGViYXIgPiBoMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XG59XG5cbi5wcm9qZWN0cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2FyZCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RkNGRjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyZXk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDE1cHg7XG59XG5cbi5jYXJkaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZGF0ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcblxufVxuXG4uaGlnaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIFxufVxuXG4ubW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5tb2RhbGxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5wcmlvcml0eWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuc2VsZWN0IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrcyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGFza3MgPiAudGFza2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7R0FFRyx3QkFBd0I7R0FDeEIsVUFBVTtHQUNWLFNBQVM7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLHFHQUFxRztJQUNyRyxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0dBQ2IseUJBQXlCO0lBQ3hCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7O0FBRVo7O0FBRUE7SUFDSSxxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgXFxuICAgLS1zaWRlYmFyLWNvbG9yOiAjMENCOEZEO1xcbiAgIHBhZGRpbmc6IDA7XFxuICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcblxcbi5zaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG59XFxuXFxuLnNpZGViYXIgPiBoMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jYXJkIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICNGNkZDRkY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyZXk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLmNhcmRoZWFkZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHRvcDogMHB4O1xcblxcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgXFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1vZGFsbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHlsYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50YXNrcyA+IC50YXNrZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gJy4vbXlQcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBhZGRUYXNrTW9kYWwgfSBmcm9tICcuL2FkZFRhc2tNb2RhbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFzaywgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIFwiaWRcIjogYCR7dGFza30ke0RhdGUubm93KCl9YCxcbiAgICAgICAgXCJuYW1lXCI6IHRhc2ssXG4gICAgICAgIFwicHJpb3JpdHlcIjogcHJpb3JpdHksXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogZGVzY3JpcHRpb24sXG4gICAgXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gXCIuL215UHJvamVjdHNcIjtcblxuY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hZGRUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5hZGRUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbmNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5jbG9zZUZvcm0uaW5uZXJIVE1MID0gJ0Nsb3NlIEZvcm0nO1xuXG5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gJyc7XG4gICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG59KVxuYWRkVGFza01vZGFsLmFwcGVuZENoaWxkKGNsb3NlRm9ybSk7XG4vL2NvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vL2FkZFRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuLy9jcmVhdGUgbGFiZWwgYW5kIGlucHV0IGJveCBmb3IgdXNlciB0byBpbnB1dCBuZXcgdGFzayB0aXRsZVxuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubmV3VGFzay5jbGFzc0xpc3QuYWRkKCdtb2RhbGxhYmVsJyk7XG5uZXdUYXNrLnRleHRDb250ZW50ID0gXCJOZXcgVGFzayA6XCI7XG5jb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xubmV3VGFza0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQWRkIE5ldyBUYXNrIEhlcmUnKTtcbm5ld1Rhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld3Rhc2tpbnB1dCcpO1xubmV3VGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Ym94Jyk7XG5uZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tJbnB1dCk7XG5cbi8vY3JlYXRlIGxhYmVsIGFuZCBzZWxlY3QgaW5wdXQgZm9yIHVzZXIgdG8gaW5wdXQgbmV3IHRhc2sgcHJpb3JpdHlcbmNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5uZXdQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xubmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlsYWJlbCcpO1xuY29uc3QgbmV3UHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xubmV3UHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld3ByaW9yaXR5aW5wdXQnKTtcblxuLy9hZGQgb3B0aW9ucyB0byBzZWxlY3RcbmNvbnN0IHNlbGVjdEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbnNlbGVjdEhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbnNlbGVjdEhpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJylcbm5ld1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoc2VsZWN0SGlnaCk7XG5jb25zdCBzZWxlY3RNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbnNlbGVjdE1lZGl1bS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG5uZXdQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHNlbGVjdE1lZGl1bSk7XG5jb25zdCBzZWxlY3RMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbnNlbGVjdExvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7XG5uZXdQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHNlbGVjdExvdyk7XG5uZXdQcmlvcml0eS5hcHBlbmRDaGlsZChuZXdQcmlvcml0eUlucHV0KTtcblxuLy9hZGQgdGV4dEFyZWEgZGVzY3JpcHRpb24gb2YgdGFza1xuY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5uZXdUYXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlsYWJlbCcpO1xubmV3VGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCI7XG5uZXdUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiRW50ZXIgdGFzayBkZXRhaWxzIGhlcmVcIik7XG5cbmNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbnRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpO1xudGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzUnKTtcbm5ld1Rhc2tEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25JbnB1dCk7XG4vL2J1dHRvbiB0byBzdWJtaXQgbmV3IHRhc2sgdG8gdGhlIHByb2plY3RcbmNvbnN0IHN1Ym1pdE5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnN1Ym1pdE5ld1Rhc2tCdG4uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlsYWJlbCcpO1xuc3VibWl0TmV3VGFza0J0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0IE5ldyBUYXNrXCI7XG5cblxuXG5cbmFkZFRhc2tNb2RhbC5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbmFkZFRhc2tNb2RhbC5hcHBlbmRDaGlsZChuZXdQcmlvcml0eSk7XG5hZGRUYXNrTW9kYWwuYXBwZW5kQ2hpbGQobmV3VGFza0Rlc2NyaXB0aW9uKTtcblxuYWRkVGFza01vZGFsLmFwcGVuZENoaWxkKHN1Ym1pdE5ld1Rhc2tCdG4pO1xuXG5cbmV4cG9ydCB7IGFkZFRhc2tNb2RhbCB9O1xuZXhwb3J0IHsgc3VibWl0TmV3VGFza0J0biB9O1xuZXhwb3J0IHsgbmV3VGFza0lucHV0IH07XG5leHBvcnQgeyBuZXdQcmlvcml0eUlucHV0IH07XG5leHBvcnQgeyB0YXNrRGVzY3JpcHRpb25JbnB1dCB9OyIsImxldCBteVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW107XG5cbmV4cG9ydCB7IG15UHJvamVjdHMgfTtcblxuLy9DT0JBISBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcblxuLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG5cbi8qXG5cbm15UHJvamVjdHMucHVzaCgxKTtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcbm15UHJvamVjdHMucG9wKCk7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4vL2RvbnQgc2V0IGl0ZW0gaGVyZSwgYXMgcHJvamVjdCB3aWxsIGFsd2F5cyBnZXQgdXBkYXRlZCB3aGVuIHJlZnJlc2hlZDtcbiovXG5cbi8vd2hlbiBpIGRlbGV0ZSBmcm9tIGxvY2FsIHN0b3JhZ2UsIHJlbmRlck1haW4gZG9lc250IHNob3cgdXBkYXRlZCB2ZXJzaW9uIGFzIGl0IHJlbmRlcnMgbXlQcm9qZWN0cy5cbi8vYWRkIHByb2plY3QgZnVuY3Rpb24gc2hvdWxkIGJlIGhlcmUuIGdldCB0aGUgZG9tIGZvciB0aGUgZm9ybSB0byBhZGQgcHJvamVjdCBoZXJlIHRvb1xuIiwiaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gJy4vbXlQcm9qZWN0cy5qcyc7XG5cbmltcG9ydCB7IHN1Ym1pdE5ld1Rhc2tCdG4sIHRhc2tEZXNjcmlwdGlvbiB9IGZyb20gJy4vYWRkVGFza01vZGFsLmpzJztcbmltcG9ydCB7IGFkZFRhc2tNb2RhbCwgbmV3VGFza0lucHV0LCBuZXdQcmlvcml0eUlucHV0LCB0YXNrRGVzY3JpcHRpb25JbnB1dCB9IGZyb20gJy4vYWRkVGFza01vZGFsLmpzJztcbmltcG9ydCBjcmVhdGVUYXNrICBmcm9tICcuL2FkZFRhc2suanMnO1xuXG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcblxubGV0IGN1cnJlbnRQcm9qZWN0SW5kZXg7XG5sZXQgY3VycmVudFRhc2tJbmRleDtcblxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgbmV3VGFza0lucHV0LnZhbHVlID0gJyc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWFpbihldmVudCkgeyAvL3JlbmRlciBwcm9qZWN0IGZyb20gc2lkZWJhciB0byBtYWluQ29udGVudCBib2R5XG5cbiAgICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tNb2RhbCk7IC8vZGlhbG9nIHRvIGlucHV0IG5ldyB0YXNrIGFuZCBpdHMgcHJpb3JpdHlcbiAgIFxuICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBwYXJzZUludChldmVudC50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSk7XG4gIFxuICAgXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgcHJvamVjdENhcmQuc2V0QXR0cmlidXRlKCdpZCcsIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0uaWQpO1xuXG4gICAgY29uc3QgcHJvamVjdENhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByb2plY3RDYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRoZWFkZXInKTtcbiAgICBwcm9qZWN0Q2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLm5hbWVcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZEhlYWRlcik7ICAgIFxuICAgXG4gICAgY29uc3QgcHJvamVjdER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REdWUudGV4dENvbnRlbnQgPSBgRHVlOiAke215UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0uZHVlfWA7XG4gICAgcHJvamVjdER1ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdER1ZSk7XG5cblxuICAgICAgIFxuICAgIFxuICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3M/Lmxlbmd0aDsgaSsrKSB7XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgIC8vd2hlbiB3ZSB3YW50IHRvIHVwZGF0ZSBhZnRlciBkZWxldGUsIGp1c3Qgc3RvcmUgd2l0aCBzYW1lIFwia2V5XCIgYW5kIHRoZSBcImtleVwiIHdpbGwgYmUgdXBkYXRlZC5cbiAgIFxuICBcbiAgICAgICAgdGFza3MudGV4dENvbnRlbnQgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2ldLm5hbWU7XG4gICAgICAgIHRhc2tzLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzJyk7XG4gICAgICAgIHRhc2tzLnNldEF0dHJpYnV0ZSgnaWQnLCBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2ldLmlkKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgZWRpdC0ke2l9YCk7XG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrSW5kZXggPSBwYXJzZUludChlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdKTtcbiAgICAgICAgICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0ubmFtZTtcbiAgICAgICAgICAgIG5ld1ByaW9yaXR5SW5wdXQudmFsdWUgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdLnByaW9yaXR5O1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tJbmRleCk7XG4gICAgICAgICAgICBzdWJtaXROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXQgRWRpdHRlZCBUYXNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUgVGFzayc7XG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gICAgICAgIHJlbmRlck1haW4oZXZlbnQpO1xuICAgICAgICB9KVxuIFxuXG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBcbiAgICAgICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBzdWJtaXROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBOZXcgVGFzayc7XG5cbiAgICB9KTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZClcblxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhc2tDb250YWluZXIoKSB7IC8vZXhhY3RseSB0aGUgc2FtZSBhcyByZW5kZXJNYWluLCBvbmx5IHdpdGhvdXQgcmVhc3NpZ25pbmcgdGhlIGN1cnJlbnRQcm9qZWN0SW5kZXguIHVzZWQgZm9yIGFmdGVyIGFsdGVyaW5nIG15UHJvamVjdHMgYXJyYXkoZGVsZXRlVGFzaywgYWRkVGFzaylcbiAgICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tNb2RhbCk7IC8vZGlhbG9nIHRvIGlucHV0IG5ldyB0YXNrIGFuZCBpdHMgcHJpb3JpdHlcblxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLmlkKTtcblxuICAgIGNvbnN0IHByb2plY3RDYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcm9qZWN0Q2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkaGVhZGVyJyk7XG4gICAgcHJvamVjdENhcmRIZWFkZXIudGV4dENvbnRlbnQgPSAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5uYW1lXG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmRIZWFkZXIpOyAgICBcbiAgIFxuICAgIGNvbnN0IHByb2plY3REdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RHVlLnRleHRDb250ZW50ID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5kdWU7XG4gICAgcHJvamVjdER1ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdER1ZSk7XG5cbiAgICAgICBcbiAgICBcbiAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzPy5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgXG4gXG4gICAgLy93aGVuIHdlIHdhbnQgdG8gdXBkYXRlIGFmdGVyIGRlbGV0ZSwganVzdCBzdG9yZSB3aXRoIHNhbWUgXCJrZXlcIiBhbmQgdGhlIFwia2V5XCIgd2lsbCBiZSB1cGRhdGVkLlxuICAgXG4gIFxuICAgICAgICB0YXNrcy50ZXh0Q29udGVudCA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0ubmFtZTtcbiAgICAgICAgdGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcbiAgICAgICAgdGFza3Muc2V0QXR0cmlidXRlKCdpZCcsIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0uaWQpO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XG4gICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGBlZGl0LSR7aX1gKTtcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgY3VycmVudFRhc2tJbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV0pO1xuICAgICAgICAgICAgbmV3VGFza0lucHV0LnZhbHVlID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tjdXJyZW50VGFza0luZGV4XS5uYW1lO1xuICAgICAgICAgICAgbmV3UHJpb3JpdHlJbnB1dC52YWx1ZSA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0ucHJpb3JpdHk7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFza0luZGV4KTtcbiAgICAgICAgICAgIHN1Ym1pdE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBFZGl0dGVkIFRhc2tcIjtcbiAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBUYXNrJztcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcbiAgICAgICAgdXBkYXRlVGFza0NvbnRhaW5lcigpO1xuICAgICAgICB9KVxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodGFza3MpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgXG4gICAgICAgIHN1Ym1pdE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIE5ldyBUYXNrJztcbiAgICAgICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgfSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXG5cblxuXG59XG5cblxuXG5jb25zdCBzdWJtaXROZXdUYXNrID0oKSA9PiB7XG4gICAgY29uc3QgdGFza09iaiA9IHtcbiAgICAgICAgbmFtZTogbmV3VGFza0lucHV0LnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogbmV3UHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlXG4gICAgfTtcbiAgIC8vIGNvbnN0IGN1cnJlbnRUYXNrSW5kZXggPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzLmZpbmRJbmRleCgoaXRlbSk9PiBpdGVtLmlkID09PSBjdXJyZW50VGFzay5pZCk7XG4gICAgaWYgKCFuZXdUYXNrSW5wdXQudmFsdWUgJiYgIXRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgdGFzayBkZXRhaWxzJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzKSB7IC8vbmV3IHByb2plY3QsIG5vIHRhc2sgcHJvcGVydHkgeWV0LCBhc3NpZ24gdGFzayhzKSBwcm9wZXJ0eVxuICAgICAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzID0gXG4gICAgICAgICAgICBbY3JlYXRlVGFzayhuZXdUYXNrSW5wdXQudmFsdWUsIG5ld1ByaW9yaXR5SW5wdXQudmFsdWUsIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlKV07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gICAgICAgICAgICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgdXBkYXRlVGFza0NvbnRhaW5lcigpO1xuICAgICAgICBcbiAgICB9XG4gICAgZWxzZSBpZiAobXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tjdXJyZW50VGFza0luZGV4XSkgeyAvL2lmIHRhc2sgZXhpc3RzLCBlZGl0IHRhc2tcbiAgICAgICAgXG4gICAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0gPSB0YXNrT2JqO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgY3VycmVudFRhc2tJbmRleCA9IG51bGw7Ly9hZnRlciBzdWJtaXQgZWRpdHRlZCB0YXNrLCB0dXJuIG9mZiBjdXJyZW50VGFza0luZGV4LCBidWcgZml4ZWQgd2hlcmUgd2Uga2VlcCBvbiBlZGl0aW5nIHRoZSBzYW1lIHRhc2sgaW5kZXggd2hlbiB3ZSBjcmVhdGUgbmV3IHRhc2suXG4gICAgICAgIHVwZGF0ZVRhc2tDb250YWluZXIoKTtcbiAgICAgICAgfVxuXG4gICAgXG4gICAgZWxzZSB7bXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5wdXNoKGNyZWF0ZVRhc2sobmV3VGFza0lucHV0LnZhbHVlLCBuZXdQcmlvcml0eUlucHV0LnZhbHVlLCB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSkpOyAvL3Byb2plY3QgYWxyZWFkeSBtYWRlLCB0YXNrcyBwcm9wZXJ0eSBleGlzdCwgYnV0IG5vIGN1cnJlbnRUYXNrSW5kZXg7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG5yZXNldCgpO1xuYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xudXBkYXRlVGFza0NvbnRhaW5lcigpO1xuICAgIH19O1xuXG5cblxuXG5cbnN1Ym1pdE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXROZXdUYXNrKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSAnLi9teVByb2plY3RzLmpzJztcbmltcG9ydCByZW5kZXJNYWluIGZyb20gJy4vcmVuZGVyTWFpbi5qcyc7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL2FkZFRhc2suanMnO1xuaW1wb3J0IHsgYWRkVGFza01vZGFsIH0gZnJvbSAnLi9hZGRUYXNrTW9kYWwuanMnO1xuLy9pbXBvcnQgIHVwZGF0ZVRhc2tDb250YWluZXIgIGZyb20gJy4vcmVuZGVyTWFpbi5qcyc7XG5cblxuXG5cblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFycHJvamVjdCcpO1xuXG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIGxldCBkZWxldGVQcm9qZWN0SW5kZXggPSBlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xuICAgIGNvbnNvbGUubG9nKGRlbGV0ZVByb2plY3RJbmRleCk7ICAgIFxuICAgIG15UHJvamVjdHMuc3BsaWNlKGRlbGV0ZVByb2plY3RJbmRleCwxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gICAgcmVuZGVyU2lkZWJhcigpO1xuICAgIFxuICAgIFxufVxuXG5cblxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhcigpIHtcbiAgICBsZXQgc2lkZWJhckhUTUwgPSAnJztcbiAgICBteVByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIHNpZGViYXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwicHJvamVjdHNcIiBpZD1cInByb2plY3QtJHtpbmRleH1cIj4ke3Byb2plY3QubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIiBpZD1cImRlbGV0ZS0ke2luZGV4fVwiPkRlbGV0ZSBQcm9qZWN0PC9idXR0b24+XG4gICAgICAgIGBcblxuICAgIH0pXG4gICAgc2lkZUJhci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHNpZGVCYXIuaW5uZXJIVE1MICs9IHNpZGViYXJIVE1MO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzJyk7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IFxuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyTWFpbilcbiAgICApXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdCk7XG4gICAgfSlcbn1cblxuXG5cblxucmVuZGVyU2lkZWJhcigpO1xuXG5cblxuXG5cblxubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza01vZGFsKTtcblxuXG5cblxuXG4gICAgLy9zaWRlYmFyIHNob3dzIGEgbGlzdCBvZiBwcm9qZWN0c1xuICAgIC8vc2lkZWJhciBjYW4gcnVuIGEgZm9yRWFjaCBvbiBhIHByb2plY3RzIGFycmF5XG4gICAgLy9wcm9qZWN0MSBpbiBhcnJheSBoYXMgbmFtZSBhbmQgZHVlZGF0ZSB3aGVuIGNyZWF0ZWQsIHByb2plY3QxLml0ZW1zLnB1c2goaXRlbSkgd2hlbiBjbGljayBvbiBhZGQgdGFza1xuICAgIC8vcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0KT0+IHt9KVxuXG5cblxuICAgIC8vY29udGVudCBzaG93cyBhIHByb2plY3Qgd2hlbiBpdCdzIGNsaWNrZWQgb24gdGhlIHNpZGViYXJcblxuXG4gICAgLypcbmZ1bmN0aW9uIHJlbmRlck1haW4oZXZlbnQpIHtcblxuICAgIGxldCBpbmRleCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZC5zcGxpdCgnLScpWzFdKTtcblxuICAgXG4gICAgXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgcHJvamVjdENhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZGhlYWRlcicpO1xuICAgIHByb2plY3RDYXJkSGVhZGVyLnRleHRDb250ZW50ID0gIG15UHJvamVjdHNbaW5kZXhdLm5hbWVcbiAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RDYXJkSGVhZGVyKTsgICAgXG4gICBcbiAgIGNvbnN0IHByb2plY3REdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RHVlLnRleHRDb250ZW50ID0gbXlQcm9qZWN0c1tpbmRleF0uZHVlO1xuICAgIHByb2plY3REdWUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3REdWUpO1xuXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHNbaW5kZXhdLnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdENhcmQuaW5uZXJIVE1MICs9YDxkaXYgY2xhc3M9XCJ0YXNrcyAke215UHJvamVjdHNbaW5kZXhdLnRhc2tzW2ldLnByaW9yaXR5fVwiPjxpbnB1dCB0eXBlPSdjaGVja2JveCc+JHtteVByb2plY3RzW2luZGV4XS50YXNrc1tpXS5uYW1lfTwvZGl2PmA7XG4gICB9XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXG5cbn1cbiovXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qXG5mdW5jdGlvbiBsb2dNZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xufVxuXG5sb2dNZXNzYWdlKCk7XG5jb25zdCBteVByb2plY3RzID0gWyBcblxuXTtcbi8ve3Byb2plY3RuYW1lOiB4eHgsIGR1ZURhdGU6IGRhdGUsIGxpc3Q6W3t0aXRsZTogYXNkYXNkLCBkZXNjcmlwdGlvbjogYXNkYXNkLCBwcmlvcml0eTogeWVzL25vfV19XG5cbi8qbXlwcm9qZWN0cyA9IFtcbntcbiAgICBwcm9qZWN0TmFtZTogZ2V0IGEgam9iLCBkdWVEYXRlOiAxMCBkZWMgMjAyNSwgdG9kb2xpc3Q6W1xuICAgIHtcbiAgICBpdGVtOiBnZXQgZ29vZCBhdCBwcm9ncmFtbWluZywgZGVzY3JpcHRpb246IHRyeSB0byBiZSBiZXR0ZXIgYXQgcHJvZ3JhbW1pbmcgZXZlcnlkYXksIHByaW9yaXR5OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgaXRlbTogUHJlcGFyZSBmb3IgaW50ZXJ2aWV3cywgZGVzY3JpcHRpb25cbiAgICB9XG4gICAgXVxufVxuXVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgZHVlRGF0ZSwgdG9kb2xpc3QsIGl0ZW1zLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpICB7XG5yZXR1cm4ge1xuXCJwcm9qZWN0IG5hbWVcIjogcHJvamVjdE5hbWUsXG5cIkR1ZSBEYXRlXCI6IGR1ZURhdGUsXG5cInRvIGRvIGxpc3RcIjogW3tpdGVtOiBpdGVtcywgRGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLCBQcmlvcml0eTogcHJpb3JpdHl9XVxufVxuXG59XG5cbmNvbnN0IHByb2plY3QxID0gbmV3IGNyZWF0ZVByb2plY3QoJ2dldCBhIGpvYicsICcxMC0xMi0yMDI1JywgJ2dldCBnb29kIGF0IHByb2dyYW1taW5nJywgJ2NvbXBsZXRlIG9kaW4gcHJvamVjdCB3aG9sbHkgdG8gZ2V0IGdvb2QgYXQgcHJvZ3JhbW1pbmcnLCAneWVzJyk7XG5teVByb2plY3RzLnB1c2gocHJvamVjdDEpO1xuY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVQcm9qZWN0KTtcbmJ0bi50ZXh0Q29udGVudCA9IFwidGVzdFwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ0bilcblxuKi9cblxuLypjb25zdCBteVByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJHbyB0byBzdXBlcm1hcmtldFwiLFxuICAgICAgICBkdWU6IFwiMTIvMi8yNVwiLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJ1eSBhcHBsZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJ1eSBFZ2dzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNsZWFuIHRoZSBob3VzZVwiLFxuICAgICAgICBkdWU6IFwiMTMvMi8yNVwiLFxuICAgICAgICB0YXNrczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN3ZWVwIGFuZCBtb3AgdGhlIGZsb29yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJEbyBsYXVuZHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICB9XG5dOyBcbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9