/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "body{ \n    background-color: #1D2D44;\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n}\n\n\n  /* TOP NAVIGATION BAR STYLES */\n.navBar { \n    background-color: #3E5C76;\n    border-radius: 15px;\n    padding: 10px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.navBar div { \n    flex: 1 1 33%;\n}\n\n    .navBarLeft { \n        font-size: 50px;\n        font-weight: bolder;\n        color: #F0EBD8;\n    }\n    .addProjectBtn { \n        font-size: 30px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n    }\n        .addProjectBtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n    .navBarRight { \n        font-size: 30px;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        gap: 2rem;\n    }\n        .loginbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .loginbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n        .signupbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .signupbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n/* VERTICAL NAVIGATION BAR STYLES */\n\n.vnav { \n    display: flex;\n    flex-direction: column;\n    width: 50px;\n    gap: 20px;\n    position: fixed;\n    top: 50vh;\n    left: 15px;\n    width: 200px;\n    height: 100%;\n}\n    .vnav-btn{ \n        height: 50px;\n        width: 50px;\n        background-color: transparent;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: none;\n    }\n        .vnav-btn:hover { \n            padding-left: 20px;\n            cursor: pointer;\n        }\n/* ADD PROJECT WINDOW FORM */\n\n.addprojectwindow { \n    background-color: #3E5C76;\n    border-radius: 15px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n    width: 30vw;\n    min-width: 400px;\n    display: flex;\n    flex-direction: column;\n}\n    .addprojectwindowbanner { \n        background-color: #F0EBD8;\n        border-top-left-radius: 15px;\n        border-top-right-radius: 15px;\n        display: flex;\n    }\n\n\n\n\n\n/* PROJECT BOXES */\n.content { \n    background-color: red;\n    margin-left: 100px;\n    display: flex;\n    gap: 1rem;\n    flex-wrap: wrap;\n}\n    .projectbox { \n        min-width: 300px;\n        height: 300px;\n        background-color: #3E5C76;\n        border: 3px solid #F0EBD8;\n        border-radius: 15px;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        }\n        .projectbanner { \n            position: absolute;\n            top: -1px;\n            background-color: #F0EBD8;\n            width: 100%;\n            height: 40px;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n            text-align: center;\n            font-size: 20px;\n            font-weight: bold;\n            border: 1px solid #F0EBD8;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n            .deleteprojectbtn { \n                background: #FF3B30;\n                border: none;\n                border-radius: 50%;\n                color: #FF3B30;\n            }\n                .deleteprojectbtn:hover { \n                    background: #FF3B30;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                    \n                }\n\n            .projecttitle{ \n            }\n\n            .addtaskbtn { \n                background-color: #4CD964;\n                border: none;\n                border-radius: 50%;\n                color: #4CD964;\n            }\n                .addtaskbtn:hover { \n                    background-color: #4CD964;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                }\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,gDAAgD;AACpD;;;EAGE,8BAA8B;AAChC;IACI,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;;IAEnB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;;IAEI;QACI,eAAe;QACf,mBAAmB;QACnB,cAAc;IAClB;IACA;QACI,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,mBAAmB;QACnB,YAAY;QACZ,yBAAyB;IAC7B;QACI;YACI,yBAAyB;YACzB,cAAc;YACd,mBAAmB;YACnB,yBAAyB;QAC7B;IACJ;QACI,eAAe;QACf,aAAa;QACb,yBAAyB;QACzB,mBAAmB;QACnB,SAAS;IACb;QACI;YACI,eAAe;YACf,iBAAiB;YACjB,aAAa;YACb,mBAAmB;YACnB,YAAY;YACZ,yBAAyB;QAC7B;YACI;gBACI,yBAAyB;gBACzB,cAAc;gBACd,mBAAmB;gBACnB,yBAAyB;YAC7B;;QAEJ;YACI,eAAe;YACf,iBAAiB;YACjB,aAAa;YACb,mBAAmB;YACnB,YAAY;YACZ,yBAAyB;QAC7B;YACI;gBACI,yBAAyB;gBACzB,cAAc;gBACd,mBAAmB;gBACnB,yBAAyB;YAC7B;;AAEZ,mCAAmC;;AAEnC;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,SAAS;IACT,eAAe;IACf,SAAS;IACT,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;IACI;QACI,YAAY;QACZ,WAAW;QACX,6BAA6B;QAC7B,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,YAAY;IAChB;QACI;YACI,kBAAkB;YAClB,eAAe;QACnB;AACR,4BAA4B;;AAE5B;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;IACI;QACI,yBAAyB;QACzB,4BAA4B;QAC5B,6BAA6B;QAC7B,aAAa;IACjB;;;;;;AAMJ,kBAAkB;AAClB;IACI,qBAAqB;IACrB,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,eAAe;AACnB;IACI;QACI,gBAAgB;QAChB,aAAa;QACb,yBAAyB;QACzB,yBAAyB;QACzB,mBAAmB;QACnB,kBAAkB;QAClB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB;QACA;YACI,kBAAkB;YAClB,SAAS;YACT,yBAAyB;YACzB,WAAW;YACX,YAAY;YACZ,4BAA4B;YAC5B,6BAA6B;YAC7B,kBAAkB;YAClB,eAAe;YACf,iBAAiB;YACjB,yBAAyB;YACzB,aAAa;YACb,8BAA8B;YAC9B,mBAAmB;QACvB;YACI;gBACI,mBAAmB;gBACnB,YAAY;gBACZ,kBAAkB;gBAClB,cAAc;YAClB;gBACI;oBACI,mBAAmB;oBACnB,YAAY;oBACZ,kBAAkB;oBAClB,cAAc;;gBAElB;;YAEJ;YACA;;YAEA;gBACI,yBAAyB;gBACzB,YAAY;gBACZ,kBAAkB;gBAClB,cAAc;YAClB;gBACI;oBACI,yBAAyB;oBACzB,YAAY;oBACZ,kBAAkB;oBAClB,cAAc;gBAClB","sourcesContent":["body{ \n    background-color: #1D2D44;\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n}\n\n\n  /* TOP NAVIGATION BAR STYLES */\n.navBar { \n    background-color: #3E5C76;\n    border-radius: 15px;\n    padding: 10px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n.navBar div { \n    flex: 1 1 33%;\n}\n\n    .navBarLeft { \n        font-size: 50px;\n        font-weight: bolder;\n        color: #F0EBD8;\n    }\n    .addProjectBtn { \n        font-size: 30px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n    }\n        .addProjectBtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n    .navBarRight { \n        font-size: 30px;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        gap: 2rem;\n    }\n        .loginbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .loginbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n        .signupbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .signupbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n/* VERTICAL NAVIGATION BAR STYLES */\n\n.vnav { \n    display: flex;\n    flex-direction: column;\n    width: 50px;\n    gap: 20px;\n    position: fixed;\n    top: 50vh;\n    left: 15px;\n    width: 200px;\n    height: 100%;\n}\n    .vnav-btn{ \n        height: 50px;\n        width: 50px;\n        background-color: transparent;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: none;\n    }\n        .vnav-btn:hover { \n            padding-left: 20px;\n            cursor: pointer;\n        }\n/* ADD PROJECT WINDOW FORM */\n\n.addprojectwindow { \n    background-color: #3E5C76;\n    border-radius: 15px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n    width: 30vw;\n    min-width: 400px;\n    display: flex;\n    flex-direction: column;\n}\n    .addprojectwindowbanner { \n        background-color: #F0EBD8;\n        border-top-left-radius: 15px;\n        border-top-right-radius: 15px;\n        display: flex;\n    }\n\n\n\n\n\n/* PROJECT BOXES */\n.content { \n    background-color: red;\n    margin-left: 100px;\n    display: flex;\n    gap: 1rem;\n    flex-wrap: wrap;\n}\n    .projectbox { \n        min-width: 300px;\n        height: 300px;\n        background-color: #3E5C76;\n        border: 3px solid #F0EBD8;\n        border-radius: 15px;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        }\n        .projectbanner { \n            position: absolute;\n            top: -1px;\n            background-color: #F0EBD8;\n            width: 100%;\n            height: 40px;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n            text-align: center;\n            font-size: 20px;\n            font-weight: bold;\n            border: 1px solid #F0EBD8;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n            .deleteprojectbtn { \n                background: #FF3B30;\n                border: none;\n                border-radius: 50%;\n                color: #FF3B30;\n            }\n                .deleteprojectbtn:hover { \n                    background: #FF3B30;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                    \n                }\n\n            .projecttitle{ \n            }\n\n            .addtaskbtn { \n                background-color: #4CD964;\n                border: none;\n                border-radius: 50%;\n                color: #4CD964;\n            }\n                .addtaskbtn:hover { \n                    background-color: #4CD964;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                }\n\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/add-project-window.js":
/*!***********************************!*\
  !*** ./src/add-project-window.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAddProjectWindow": () => (/* binding */ displayAddProjectWindow)
/* harmony export */ });









function displayAddProjectWindow() {
    const addProjectWindow = document.createElement('div');
    addProjectWindow.classList.add('addprojectwindow');
    addProjectWindow.id = 'addprojectwindow';
    document.body.appendChild(addProjectWindow);
        const addProjectWindowBanner = document.createElement('div');
        addProjectWindowBanner.classList.add('addprojectwindowbanner');
        addProjectWindowBanner.id = 'addprojectwindowbanner';
        addProjectWindow.appendChild(addProjectWindowBanner);
            const addProjectWindowBannerCloseBtn = document.createElement('button');
            addProjectWindowBannerCloseBtn.classList.add('addprojectwindowbannerclosebtn');
            addProjectWindowBannerCloseBtn.id = 'addprojectwindowbannerclosebtn';
            addProjectWindowBannerCloseBtn.innerHTML = 'x';
            addProjectWindowBanner.appendChild(addProjectWindowBannerCloseBtn);
                addProjectWindowBannerCloseBtn.addEventListener('click', () => {
                    console.log('add project window close button clicked');
                });
                const addProjectWindowBannerTitle = document.createElement('div');
            addProjectWindowBannerTitle.classList.add('addprojectwindowbannertitle');
            addProjectWindowBannerTitle.id = 'addprojectwindowbannertitle';
            addProjectWindowBannerTitle.innerHTML = 'Add Project';
            addProjectWindowBanner.appendChild(addProjectWindowBannerTitle);
            const addProjectWindowInput = document.createElement('input');
            addProjectWindowInput.classList.add('addprojectwindowinput');
            addProjectWindowInput.id = 'addprojectwindowinput';
            addProjectWindowInput.placeholder = 'Project Name';
            addProjectWindow.appendChild(addProjectWindowInput);
            const addProjectWindowSubmitBtn = document.createElement('button');
            addProjectWindowSubmitBtn.classList.add('addprojectwindowsubmitbtn');
            addProjectWindowSubmitBtn.id = 'addprojectwindowsubmitbtn';
            addProjectWindowSubmitBtn.innerHTML = 'Add Project';
            addProjectWindow.appendChild(addProjectWindowSubmitBtn);
                addProjectWindowSubmitBtn.addEventListener('click', () => {
                    console.log('add project window submit button clicked');
                }
            );
}


/***/ }),

/***/ "./src/display-projects.js":
/*!*********************************!*\
  !*** ./src/display-projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
// imports 







function displayProjects() { 
    const content = document.getElementById('content');
    //loop through projects array and console.log each project name
    _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(project => {
        const projectBox = document.createElement('div');
        projectBox.classList.add('projectbox');
        projectBox.id = project.name;
        content.appendChild(projectBox);
            const projectBanner = document.createElement('div');
            projectBanner.classList.add('projectbanner');
            projectBanner.id = 'projectbanner' + project.name;
            projectBox.appendChild(projectBanner);
                const deleteProjectBtn = document.createElement('button');
                deleteProjectBtn.classList.add('deleteprojectbtn');
                deleteProjectBtn.id = 'deleteprojectbtn' + project.name;
                deleteProjectBtn.innerHTML = 'x';
                projectBanner.appendChild(deleteProjectBtn);
                    deleteProjectBtn.addEventListener('click', () => {
                        console.log('delete' + project.name + 'button clicked');
                        _index_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(project), 1);
                        console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.projects);
                        content.innerHTML = '';
                        displayProjects();
                    }
                );
                const projectTitle = document.createElement('div');
                projectTitle.classList.add('projecttitle');
                projectTitle.id = 'projecttitle' + project.name;
                projectTitle.innerHTML = project.name;
                projectBanner.appendChild(projectTitle);
                const addTaskBtn = document.createElement('button');
                addTaskBtn.classList.add('addtaskbtn');
                addTaskBtn.id = 'addtaskbtn' + project.name;
                addTaskBtn.innerHTML = '+';
                projectBanner.appendChild(addTaskBtn);
                    addTaskBtn.addEventListener('click', () => {
                        console.log('add task to' + project.name + 'button clicked');
                    }
                );





    });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-template */ "./src/page-template.js");
/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-projects */ "./src/display-projects.js");
// imports





// libraries 
const projects = [];

// classes
class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        
    }
}


class Task {
    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

////////////////// sample projects and tasks //////////////////
const sampleProject1 = new Project('Test Project 1');
const sampleProject2 = new Project('Project 2');
const sampleProject3 = new Project('Project 3');

const sampleTask1 = new Task('Task 1', 'This is task 1', '2024-01-01', 'important');
const sampleTask2 = new Task('Task 2', 'This is task 2', '2024-01-01', 'not important');
sampleProject1.tasks.push(sampleTask1);
sampleProject1.tasks.push(sampleTask2);
projects.push(sampleProject1);

const sampleTask3 = new Task('Task 3', 'This is task 3', '2024-01-01', 'important');
const sampleTask4 = new Task('Task 4', 'This is task 4', '2024-01-01', 'not important');
sampleProject2.tasks.push(sampleTask3);
sampleProject2.tasks.push(sampleTask4);
projects.push(sampleProject2);

const sampleTask5 = new Task('Task 5', 'This is task 5', '2024-01-01', 'important');
const sampleTask6 = new Task('Task 6', 'This is task 6', '2024-01-01', 'not important');
sampleProject3.tasks.push(sampleTask5);
sampleProject3.tasks.push(sampleTask6);
projects.push(sampleProject3);



// functions

////////// load page template //////////
(0,_page_template__WEBPACK_IMPORTED_MODULE_1__.displayPageTemplate)();
(0,_display_projects__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();


/***/ }),

/***/ "./src/page-template.js":
/*!******************************!*\
  !*** ./src/page-template.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPageTemplate": () => (/* binding */ displayPageTemplate)
/* harmony export */ });
/* harmony import */ var _add_project_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project-window */ "./src/add-project-window.js");
/* harmony import */ var _icons_Home_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/Home.png */ "./src/icons/Home.png");
/* harmony import */ var _icons_Tasks_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/Tasks.png */ "./src/icons/Tasks.png");
/* harmony import */ var _icons_Completed_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/Completed.png */ "./src/icons/Completed.png");
// function to load page content 
  // Load top nav 
  // Load vertical nav
  // create content div for projects 


  // imports 
    //moduels
  
    //images
  
  const homeIcon = new Image();
  homeIcon.src = _icons_Home_png__WEBPACK_IMPORTED_MODULE_1__;
  
  const tasksIcon = new Image();
  tasksIcon.src = _icons_Tasks_png__WEBPACK_IMPORTED_MODULE_2__;
  
  const completedIcon = new Image();
  completedIcon.src = _icons_Completed_png__WEBPACK_IMPORTED_MODULE_3__;




function displayPageTemplate() {
  // load top nav 
  const NavBar = document.createElement('div');
  NavBar.classList.add('navBar');
  NavBar.id = 'navBar';
  document.body.appendChild(NavBar);
    const navBarLeft = document.createElement('div');
    navBarLeft.classList.add('navBarLeft');
    navBarLeft.innerHTML = 'Projects';
    NavBar.appendChild(navBarLeft);
    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('addProjectBtn');
    addProjectBtn.innerHTML = 'Add Project';
    NavBar.appendChild(addProjectBtn);
      addProjectBtn.addEventListener('click', () => {
        (0,_add_project_window__WEBPACK_IMPORTED_MODULE_0__.displayAddProjectWindow)();
      });

    const navBarRight = document.createElement('div');
    navBarRight.classList.add('navBarRight');
    navBarRight.innerHTML = '';
    NavBar.appendChild(navBarRight);
      const logInBtn = document.createElement('button');
      logInBtn.classList.add('loginbtn');
      logInBtn.innerHTML = 'Log In';
      navBarRight.appendChild(logInBtn);
      const signUpBtn = document.createElement('button');
      signUpBtn.classList.add('signupbtn');
      signUpBtn.innerHTML = 'Sign Up';
      navBarRight.appendChild(signUpBtn);
  // load vertical nav
  const vnavBar = document.createElement('div');
  vnavBar.classList.add('vnav');
  vnavBar.id = 'vnav';
  document.body.appendChild(vnavBar);
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('vnav-btn');
    homeBtn.id = 'vnav-home-btn';
    homeBtn.appendChild(homeIcon);
    vnavBar.appendChild(homeBtn);
      homeBtn.addEventListener('click', () => {
        console.log('home button clicked');
      });
    const tasksBtn = document.createElement('button');
    tasksBtn.classList.add('vnav-btn');
    tasksBtn.id = 'vnav-tasks-btn';
    tasksBtn.appendChild(tasksIcon);
    vnavBar.appendChild(tasksBtn);
      tasksBtn.addEventListener('click', () => {
        console.log('tasks button clicked');
      });
    const completedBtn = document.createElement('button');
    completedBtn.classList.add('vnav-btn');
    completedBtn.id = 'vnav-completed-btn';
    completedBtn.appendChild(completedIcon);
    vnavBar.appendChild(completedBtn);
      completedBtn.addEventListener('click', () => {
        console.log('completed button clicked');
      }
    );
  const content = document.createElement('div');
  content.classList.add('content');
  content.id = 'content';
  document.body.appendChild(content);
}



/***/ }),

/***/ "./src/icons/Completed.png":
/*!*********************************!*\
  !*** ./src/icons/Completed.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9314f41418211b4afbed.png";

/***/ }),

/***/ "./src/icons/Home.png":
/*!****************************!*\
  !*** ./src/icons/Home.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a7a43e018717728a5c8.png";

/***/ }),

/***/ "./src/icons/Tasks.png":
/*!*****************************!*\
  !*** ./src/icons/Tasks.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "184d89c10e35842149a8.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGQtcHJvamVjdC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWdlLXRlbXBsYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQyRDQ0O1xcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbiAgLyogVE9QIE5BVklHQVRJT04gQkFSIFNUWUxFUyAqL1xcbi5uYXZCYXIgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdkJhciBkaXYgeyBcXG4gICAgZmxleDogMSAxIDMzJTtcXG59XFxuXFxuICAgIC5uYXZCYXJMZWZ0IHsgXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgY29sb3I6ICNGMEVCRDg7XFxuICAgIH1cXG4gICAgLmFkZFByb2plY3RCdG4geyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgfVxcbiAgICAgICAgLmFkZFByb2plY3RCdG46aG92ZXIgeyBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICAgICAgICAgIGNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRUJEODtcXG4gICAgICAgIH1cXG4gICAgLm5hdkJhclJpZ2h0IHsgXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgIH1cXG4gICAgICAgIC5sb2dpbmJ0biB7IFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lOztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5sb2dpbmJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRUJEODtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAuc2lnbnVwYnRuIHsgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnNpZ251cGJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRUJEODtcXG4gICAgICAgICAgICB9XFxuXFxuLyogVkVSVElDQUwgTkFWSUdBVElPTiBCQVIgU1RZTEVTICovXFxuXFxuLnZuYXYgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwdmg7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4gICAgLnZuYXYtYnRueyBcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuICAgICAgICAudm5hdi1idG46aG92ZXIgeyBcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbi8qIEFERCBQUk9KRUNUIFdJTkRPVyBGT1JNICovXFxuXFxuLmFkZHByb2plY3R3aW5kb3cgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuICAgIC5hZGRwcm9qZWN0d2luZG93YmFubmVyIHsgXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcblxcblxcblxcblxcbi8qIFBST0pFQ1QgQk9YRVMgKi9cXG4uY29udGVudCB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbiAgICAucHJvamVjdGJveCB7IFxcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI0YwRUJEODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAucHJvamVjdGJhbm5lciB7IFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IC0xcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuZGVsZXRlcHJvamVjdGJ0biB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYzQjMwO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRjNCMzA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuZGVsZXRlcHJvamVjdGJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGM0IzMDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJvamVjdHRpdGxleyBcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmFkZHRhc2tidG4geyBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDRDk2NDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNENEOTY0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmFkZHRhc2tidG46aG92ZXIgeyBcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0Q5NjQ7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgICAgICAgICAgICAgfVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsZ0RBQWdEO0FBQ3BEOzs7RUFHRSw4QkFBOEI7QUFDaEM7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0lBRUk7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1oseUJBQXlCO0lBQzdCO1FBQ0k7WUFDSSx5QkFBeUI7WUFDekIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQix5QkFBeUI7UUFDN0I7SUFDSjtRQUNJLGVBQWU7UUFDZixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixTQUFTO0lBQ2I7UUFDSTtZQUNJLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1oseUJBQXlCO1FBQzdCO1lBQ0k7Z0JBQ0kseUJBQXlCO2dCQUN6QixjQUFjO2dCQUNkLG1CQUFtQjtnQkFDbkIseUJBQXlCO1lBQzdCOztRQUVKO1lBQ0ksZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFlBQVk7WUFDWix5QkFBeUI7UUFDN0I7WUFDSTtnQkFDSSx5QkFBeUI7Z0JBQ3pCLGNBQWM7Z0JBQ2QsbUJBQW1CO2dCQUNuQix5QkFBeUI7WUFDN0I7O0FBRVosbUNBQW1DOztBQUVuQztJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtBQUNoQjtJQUNJO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCw2QkFBNkI7UUFDN0IsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQjtRQUNJO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7QUFDUiw0QkFBNEI7O0FBRTVCO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7SUFDSTtRQUNJLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLGFBQWE7SUFDakI7Ozs7OztBQU1KLGtCQUFrQjtBQUNsQjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQjtRQUNBO1lBQ0ksa0JBQWtCO1lBQ2xCLFNBQVM7WUFDVCx5QkFBeUI7WUFDekIsV0FBVztZQUNYLFlBQVk7WUFDWiw0QkFBNEI7WUFDNUIsNkJBQTZCO1lBQzdCLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLHlCQUF5QjtZQUN6QixhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLG1CQUFtQjtRQUN2QjtZQUNJO2dCQUNJLG1CQUFtQjtnQkFDbkIsWUFBWTtnQkFDWixrQkFBa0I7Z0JBQ2xCLGNBQWM7WUFDbEI7Z0JBQ0k7b0JBQ0ksbUJBQW1CO29CQUNuQixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsY0FBYzs7Z0JBRWxCOztZQUVKO1lBQ0E7O1lBRUE7Z0JBQ0kseUJBQXlCO2dCQUN6QixZQUFZO2dCQUNaLGtCQUFrQjtnQkFDbEIsY0FBYztZQUNsQjtnQkFDSTtvQkFDSSx5QkFBeUI7b0JBQ3pCLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixjQUFjO2dCQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5eyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMkQ0NDtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG4gIC8qIFRPUCBOQVZJR0FUSU9OIEJBUiBTVFlMRVMgKi9cXG4ubmF2QmFyIHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYXZCYXIgZGl2IHsgXFxuICAgIGZsZXg6IDEgMSAzMyU7XFxufVxcblxcbiAgICAubmF2QmFyTGVmdCB7IFxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgICAgIGNvbG9yOiAjRjBFQkQ4O1xcbiAgICB9XFxuICAgIC5hZGRQcm9qZWN0QnRuIHsgXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lOztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgIH1cXG4gICAgICAgIC5hZGRQcm9qZWN0QnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICB9XFxuICAgIC5uYXZCYXJSaWdodCB7IFxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICB9XFxuICAgICAgICAubG9naW5idG4geyBcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTs7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAubG9naW5idG46aG92ZXIgeyBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLnNpZ251cGJ0biB7IFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lOztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5zaWdudXBidG46aG92ZXIgeyBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICAgICAgfVxcblxcbi8qIFZFUlRJQ0FMIE5BVklHQVRJT04gQkFSIFNUWUxFUyAqL1xcblxcbi52bmF2IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MHZoO1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuICAgIC52bmF2LWJ0bnsgXFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbiAgICAgICAgLnZuYXYtYnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4vKiBBREQgUFJPSkVDVCBXSU5ET1cgRk9STSAqL1xcblxcbi5hZGRwcm9qZWN0d2luZG93IHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiAgICAuYWRkcHJvamVjdHdpbmRvd2Jhbm5lciB7IFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG5cXG5cXG5cXG5cXG4vKiBQUk9KRUNUIEJPWEVTICovXFxuLmNvbnRlbnQgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4gICAgLnByb2plY3Rib3ggeyBcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnByb2plY3RiYW5uZXIgeyBcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiAtMXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmRlbGV0ZXByb2plY3RidG4geyBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGM0IzMDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkYzQjMwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmRlbGV0ZXByb2plY3RidG46aG92ZXIgeyBcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRjNCMzA7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByb2plY3R0aXRsZXsgXFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5hZGR0YXNrYnRuIHsgXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0Q5NjQ7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRDRDk2NDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5hZGR0YXNrYnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENEOTY0O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheUFkZFByb2plY3RXaW5kb3coKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFByb2plY3RXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYWRkcHJvamVjdHdpbmRvdycpO1xuICAgIGFkZFByb2plY3RXaW5kb3cuaWQgPSAnYWRkcHJvamVjdHdpbmRvdyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0V2luZG93KTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdFdpbmRvd0Jhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyLmNsYXNzTGlzdC5hZGQoJ2FkZHByb2plY3R3aW5kb3diYW5uZXInKTtcbiAgICAgICAgYWRkUHJvamVjdFdpbmRvd0Jhbm5lci5pZCA9ICdhZGRwcm9qZWN0d2luZG93YmFubmVyJztcbiAgICAgICAgYWRkUHJvamVjdFdpbmRvdy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0V2luZG93QmFubmVyKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RXaW5kb3dCYW5uZXJDbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0Jhbm5lckNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZHByb2plY3R3aW5kb3diYW5uZXJjbG9zZWJ0bicpO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0Jhbm5lckNsb3NlQnRuLmlkID0gJ2FkZHByb2plY3R3aW5kb3diYW5uZXJjbG9zZWJ0bic7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyQ2xvc2VCdG4uaW5uZXJIVE1MID0gJ3gnO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0Jhbm5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0V2luZG93QmFubmVyQ2xvc2VCdG4pO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dCYW5uZXJDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCBwcm9qZWN0IHdpbmRvdyBjbG9zZSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RXaW5kb3dCYW5uZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0Jhbm5lclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FkZHByb2plY3R3aW5kb3diYW5uZXJ0aXRsZScpO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0Jhbm5lclRpdGxlLmlkID0gJ2FkZHByb2plY3R3aW5kb3diYW5uZXJ0aXRsZSc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyVGl0bGUuaW5uZXJIVE1MID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dCYW5uZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFdpbmRvd0Jhbm5lclRpdGxlKTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RXaW5kb3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93SW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkcHJvamVjdHdpbmRvd2lucHV0Jyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93SW5wdXQuaWQgPSAnYWRkcHJvamVjdHdpbmRvd2lucHV0JztcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dJbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IE5hbWUnO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvdy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0V2luZG93SW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgYWRkUHJvamVjdFdpbmRvd1N1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd1N1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRwcm9qZWN0d2luZG93c3VibWl0YnRuJyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93U3VibWl0QnRuLmlkID0gJ2FkZHByb2plY3R3aW5kb3dzdWJtaXRidG4nO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd1N1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvdy5hcHBlbmRDaGlsZChhZGRQcm9qZWN0V2luZG93U3VibWl0QnRuKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHByb2plY3Qgd2luZG93IHN1Ym1pdCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG59XG5leHBvcnQgeyBkaXNwbGF5QWRkUHJvamVjdFdpbmRvdyB9OyIsIi8vIGltcG9ydHMgXG5pbXBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCwgVGFzayB9IGZyb20gJy4vaW5kZXguanMnO1xuXG5cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkgeyBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAvL2xvb3AgdGhyb3VnaCBwcm9qZWN0cyBhcnJheSBhbmQgY29uc29sZS5sb2cgZWFjaCBwcm9qZWN0IG5hbWVcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZCgncHJvamVjdGJveCcpO1xuICAgICAgICBwcm9qZWN0Qm94LmlkID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RCb3gpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEJhbm5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0YmFubmVyJyk7XG4gICAgICAgICAgICBwcm9qZWN0QmFubmVyLmlkID0gJ3Byb2plY3RiYW5uZXInICsgcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChwcm9qZWN0QmFubmVyKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGVwcm9qZWN0YnRuJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5pZCA9ICdkZWxldGVwcm9qZWN0YnRuJyArIHByb2plY3QubmFtZTtcbiAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmlubmVySFRNTCA9ICd4JztcbiAgICAgICAgICAgICAgICBwcm9qZWN0QmFubmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZScgKyBwcm9qZWN0Lm5hbWUgKyAnYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3R0aXRsZScpO1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS5pZCA9ICdwcm9qZWN0dGl0bGUnICsgcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdEJhbm5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZHRhc2tidG4nKTtcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmlkID0gJ2FkZHRhc2tidG4nICsgcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gJysnO1xuICAgICAgICAgICAgICAgIHByb2plY3RCYW5uZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRhc2sgdG8nICsgcHJvamVjdC5uYW1lICsgJ2J1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG5cblxuXG5cbiAgICB9KTtcbn1cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9OyIsIi8vIGltcG9ydHNcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZGlzcGxheVBhZ2VUZW1wbGF0ZSB9IGZyb20gJy4vcGFnZS10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMnO1xuXG5cbi8vIGxpYnJhcmllcyBcbmNvbnN0IHByb2plY3RzID0gW107XG5cbi8vIGNsYXNzZXNcbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICBcbiAgICB9XG59XG5cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vIHNhbXBsZSBwcm9qZWN0cyBhbmQgdGFza3MgLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBzYW1wbGVQcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdUZXN0IFByb2plY3QgMScpO1xuY29uc3Qgc2FtcGxlUHJvamVjdDIgPSBuZXcgUHJvamVjdCgnUHJvamVjdCAyJyk7XG5jb25zdCBzYW1wbGVQcm9qZWN0MyA9IG5ldyBQcm9qZWN0KCdQcm9qZWN0IDMnKTtcblxuY29uc3Qgc2FtcGxlVGFzazEgPSBuZXcgVGFzaygnVGFzayAxJywgJ1RoaXMgaXMgdGFzayAxJywgJzIwMjQtMDEtMDEnLCAnaW1wb3J0YW50Jyk7XG5jb25zdCBzYW1wbGVUYXNrMiA9IG5ldyBUYXNrKCdUYXNrIDInLCAnVGhpcyBpcyB0YXNrIDInLCAnMjAyNC0wMS0wMScsICdub3QgaW1wb3J0YW50Jyk7XG5zYW1wbGVQcm9qZWN0MS50YXNrcy5wdXNoKHNhbXBsZVRhc2sxKTtcbnNhbXBsZVByb2plY3QxLnRhc2tzLnB1c2goc2FtcGxlVGFzazIpO1xucHJvamVjdHMucHVzaChzYW1wbGVQcm9qZWN0MSk7XG5cbmNvbnN0IHNhbXBsZVRhc2szID0gbmV3IFRhc2soJ1Rhc2sgMycsICdUaGlzIGlzIHRhc2sgMycsICcyMDI0LTAxLTAxJywgJ2ltcG9ydGFudCcpO1xuY29uc3Qgc2FtcGxlVGFzazQgPSBuZXcgVGFzaygnVGFzayA0JywgJ1RoaXMgaXMgdGFzayA0JywgJzIwMjQtMDEtMDEnLCAnbm90IGltcG9ydGFudCcpO1xuc2FtcGxlUHJvamVjdDIudGFza3MucHVzaChzYW1wbGVUYXNrMyk7XG5zYW1wbGVQcm9qZWN0Mi50YXNrcy5wdXNoKHNhbXBsZVRhc2s0KTtcbnByb2plY3RzLnB1c2goc2FtcGxlUHJvamVjdDIpO1xuXG5jb25zdCBzYW1wbGVUYXNrNSA9IG5ldyBUYXNrKCdUYXNrIDUnLCAnVGhpcyBpcyB0YXNrIDUnLCAnMjAyNC0wMS0wMScsICdpbXBvcnRhbnQnKTtcbmNvbnN0IHNhbXBsZVRhc2s2ID0gbmV3IFRhc2soJ1Rhc2sgNicsICdUaGlzIGlzIHRhc2sgNicsICcyMDI0LTAxLTAxJywgJ25vdCBpbXBvcnRhbnQnKTtcbnNhbXBsZVByb2plY3QzLnRhc2tzLnB1c2goc2FtcGxlVGFzazUpO1xuc2FtcGxlUHJvamVjdDMudGFza3MucHVzaChzYW1wbGVUYXNrNik7XG5wcm9qZWN0cy5wdXNoKHNhbXBsZVByb2plY3QzKTtcblxuXG5leHBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCwgVGFzayB9O1xuLy8gZnVuY3Rpb25zXG5cbi8vLy8vLy8vLy8gbG9hZCBwYWdlIHRlbXBsYXRlIC8vLy8vLy8vLy9cbmRpc3BsYXlQYWdlVGVtcGxhdGUoKTtcbmRpc3BsYXlQcm9qZWN0cygpO1xuIiwiLy8gZnVuY3Rpb24gdG8gbG9hZCBwYWdlIGNvbnRlbnQgXG4gIC8vIExvYWQgdG9wIG5hdiBcbiAgLy8gTG9hZCB2ZXJ0aWNhbCBuYXZcbiAgLy8gY3JlYXRlIGNvbnRlbnQgZGl2IGZvciBwcm9qZWN0cyBcblxuXG4gIC8vIGltcG9ydHMgXG4gICAgLy9tb2R1ZWxzXG4gIGltcG9ydCB7IGRpc3BsYXlBZGRQcm9qZWN0V2luZG93IH0gZnJvbSAnLi9hZGQtcHJvamVjdC13aW5kb3cnO1xuICAgIC8vaW1hZ2VzXG4gIGltcG9ydCBIb21lSWNvbiBmcm9tICcuL2ljb25zL0hvbWUucG5nJztcbiAgY29uc3QgaG9tZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgaG9tZUljb24uc3JjID0gSG9tZUljb247XG4gIGltcG9ydCBUYXNrc0ljb24gZnJvbSAnLi9pY29ucy9UYXNrcy5wbmcnO1xuICBjb25zdCB0YXNrc0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdGFza3NJY29uLnNyYyA9IFRhc2tzSWNvbjtcbiAgaW1wb3J0IENvbXBsZXRlZEljb24gZnJvbSAnLi9pY29ucy9Db21wbGV0ZWQucG5nJztcbiAgY29uc3QgY29tcGxldGVkSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjb21wbGV0ZWRJY29uLnNyYyA9IENvbXBsZXRlZEljb247XG5cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlQYWdlVGVtcGxhdGUoKSB7XG4gIC8vIGxvYWQgdG9wIG5hdiBcbiAgY29uc3QgTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIE5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXZCYXInKTtcbiAgTmF2QmFyLmlkID0gJ25hdkJhcic7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTmF2QmFyKTtcbiAgICBjb25zdCBuYXZCYXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyTGVmdC5jbGFzc0xpc3QuYWRkKCduYXZCYXJMZWZ0Jyk7XG4gICAgbmF2QmFyTGVmdC5pbm5lckhUTUwgPSAnUHJvamVjdHMnO1xuICAgIE5hdkJhci5hcHBlbmRDaGlsZChuYXZCYXJMZWZ0KTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgYWRkUHJvamVjdEJ0bi5pbm5lckhUTUwgPSAnQWRkIFByb2plY3QnO1xuICAgIE5hdkJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcbiAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlBZGRQcm9qZWN0V2luZG93KCk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IG5hdkJhclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyUmlnaHQuY2xhc3NMaXN0LmFkZCgnbmF2QmFyUmlnaHQnKTtcbiAgICBuYXZCYXJSaWdodC5pbm5lckhUTUwgPSAnJztcbiAgICBOYXZCYXIuYXBwZW5kQ2hpbGQobmF2QmFyUmlnaHQpO1xuICAgICAgY29uc3QgbG9nSW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGxvZ0luQnRuLmNsYXNzTGlzdC5hZGQoJ2xvZ2luYnRuJyk7XG4gICAgICBsb2dJbkJ0bi5pbm5lckhUTUwgPSAnTG9nIEluJztcbiAgICAgIG5hdkJhclJpZ2h0LmFwcGVuZENoaWxkKGxvZ0luQnRuKTtcbiAgICAgIGNvbnN0IHNpZ25VcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgc2lnblVwQnRuLmNsYXNzTGlzdC5hZGQoJ3NpZ251cGJ0bicpO1xuICAgICAgc2lnblVwQnRuLmlubmVySFRNTCA9ICdTaWduIFVwJztcbiAgICAgIG5hdkJhclJpZ2h0LmFwcGVuZENoaWxkKHNpZ25VcEJ0bik7XG4gIC8vIGxvYWQgdmVydGljYWwgbmF2XG4gIGNvbnN0IHZuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdm5hdkJhci5jbGFzc0xpc3QuYWRkKCd2bmF2Jyk7XG4gIHZuYXZCYXIuaWQgPSAndm5hdic7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodm5hdkJhcik7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgndm5hdi1idG4nKTtcbiAgICBob21lQnRuLmlkID0gJ3ZuYXYtaG9tZS1idG4nO1xuICAgIGhvbWVCdG4uYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuICAgIHZuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaG9tZSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgfSk7XG4gICAgY29uc3QgdGFza3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrc0J0bi5jbGFzc0xpc3QuYWRkKCd2bmF2LWJ0bicpO1xuICAgIHRhc2tzQnRuLmlkID0gJ3ZuYXYtdGFza3MtYnRuJztcbiAgICB0YXNrc0J0bi5hcHBlbmRDaGlsZCh0YXNrc0ljb24pO1xuICAgIHZuYXZCYXIuYXBwZW5kQ2hpbGQodGFza3NCdG4pO1xuICAgICAgdGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0YXNrcyBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgfSk7XG4gICAgY29uc3QgY29tcGxldGVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tcGxldGVkQnRuLmNsYXNzTGlzdC5hZGQoJ3ZuYXYtYnRuJyk7XG4gICAgY29tcGxldGVkQnRuLmlkID0gJ3ZuYXYtY29tcGxldGVkLWJ0bic7XG4gICAgY29tcGxldGVkQnRuLmFwcGVuZENoaWxkKGNvbXBsZXRlZEljb24pO1xuICAgIHZuYXZCYXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkQnRuKTtcbiAgICAgIGNvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlZCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgfVxuICAgICk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQuaWQgPSAnY29udGVudCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5leHBvcnQgeyBkaXNwbGF5UGFnZVRlbXBsYXRlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9