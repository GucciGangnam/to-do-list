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
___CSS_LOADER_EXPORT___.push([module.id, "body{ \n    background-color: #1D2D44;\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n}\n\n\n  /* TOP NAVIGATION BAR STYLES */\n.navBar { \n    background-color: #3E5C76;\n    border-radius: 15px;\n    padding: 10px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    z-index: 2;\n}\n.navBar div { \n    flex: 1 1 33%;\n}\n\n    .navBarLeft { \n        font-size: 50px;\n        font-weight: bolder;\n        color: #F0EBD8;\n    }\n    .addProjectBtn { \n        font-size: 30px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n    }\n        .addProjectBtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n    .navBarRight { \n        font-size: 30px;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        gap: 2rem;\n    }\n        .loginbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .loginbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n        .signupbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .signupbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n/* VERTICAL NAVIGATION BAR STYLES */\n\n.vnav { \n    display: flex;\n    flex-direction: column;\n    width: 50px;\n    gap: 20px;\n    position: fixed;\n    top: 50vh;\n    left: 15px;\n    width: 200px;\n    height: 100%;\n}\n    .vnav-btn{ \n        height: 50px;\n        width: 50px;\n        background-color: transparent;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: none;\n    }\n        .vnav-btn:hover { \n            padding-left: 20px;\n            cursor: pointer;\n        }\n/* ADD PROJECT WINDOW FORM */\n\n.addprojectwindow { \n    position: absolute;\n    top: 18%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n\n    background-color: #3E5C76;\n    border: 3px solid #F0EBD8;\n    border-radius: 15px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n    min-width: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    z-index: 2;\n\n    min-width: 400px;\n    width: 500px;\n    flex-grow: inherit;\n}\n    .addprojectwindowbanner { \n        background-color: #F0EBD8;\n        top: -1px;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50px;\n        min-height: fit-content;\n        width: 101%\n        \n    }\n        .addprojectwindowbannerclosebtn { \n            position: absolute;\n            left: 10px;\n            background: #FF3B30;\n            border: none;\n            border-radius: 50%;\n            color: #FF3B30;\n        }\n            .addprojectwindowbannerclosebtn:hover { \n                background: #FF3B30;\n                border: none;\n                border-radius: 50%;\n                color: #000000;\n            }\n        .addprojectwindowbannertitle {\n            font-size: 20px;\n            font-weight: bold;\n        }\n    .addprojectwindowinput { \n        border-radius: 15px;\n        font-size: 20px;\n        padding: 20px;\n        width: 75%;\n        text-align: center;\n\n    }\n    .addprojectwindowsubmitbtn{ \n        font-size: 20px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n        margin-bottom: 30px;\n        border: 1px solid #F0EBD8;\n    }\n        .addprojectwindowsubmitbtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n\n/* OVERLAY DIMMER */\n.darkoverlay { \n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n\n\n\n/* PROJECT BOXES */\n.content { \n    background-color: rgba(255, 0, 0, 0.051);\n    margin-left: 70px;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 30px;\n\n    flex-wrap: wrap;\n}\n    .projectbox { \n        min-width: 400px;\n        min-height: 300px;\n        max-height: fit-content;\n        background-color: #3E5C76;\n        border: 3px solid #F0EBD8;\n        border-radius: 15px;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 15px;\n        padding-top: 60px;\n        box-sizing: border-box;\n        gap: 15px;\n        }\n        .projectbanner { \n            position: absolute;\n            top: -1px;\n            background-color: #F0EBD8;\n            width: 100%;\n            height: 40px;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n            text-align: center;\n            font-size: 20px;\n            font-weight: bold;\n            border: 1px solid #F0EBD8;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n            .deleteprojectbtn { \n                background: #FF3B30;\n                border: none;\n                border-radius: 50%;\n                color: #FF3B30;\n            }\n                .deleteprojectbtn:hover { \n                    background: #FF3B30;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                    \n                }\n\n            .projecttitle{ \n            }\n\n            .addtaskbtn { \n                background-color: #4CD964;\n                border: none;\n                border-radius: 50%;\n                color: #4CD964;\n            }\n                .addtaskbtn:hover { \n                    background-color: #4CD964;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                }\n    /* TASK BOXES */\n\n.taskbox{ \n    background-color: #748CAB;\n    width: 100%;\n    border-radius: 15px;\n    padding: 25px;\n    box-sizing: border-box;\n    gap: 10px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n    .tasktitle { \n        font-size: 15px;\n        font-weight: bold;\n        padding: 5px;\n        padding-left: 10px;\n        padding-right: 10px;\n        border-radius: 10px;\n    }\n    .taskduedate { \n        font-size: 15px;\n        padding: 5px;\n        padding-left: 10px;\n        padding-right: 10px;\n        border-radius: 10px;\n        color: #454545;\n    }\n    .taskcompletedmarker{ \n        position: absolute;\n        right: 10px;\n\n        background-color: #F0EBD8;\n        border-radius: 50%;\n        border: 2px solid #3E5C76;\n        width: 20px;\n        height: 20px;\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{ \n    background-color: #1D2D44;\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n}\n\n\n  /* TOP NAVIGATION BAR STYLES */\n.navBar { \n    background-color: #3E5C76;\n    border-radius: 15px;\n    padding: 10px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    z-index: 2;\n}\n.navBar div { \n    flex: 1 1 33%;\n}\n\n    .navBarLeft { \n        font-size: 50px;\n        font-weight: bolder;\n        color: #F0EBD8;\n    }\n    .addProjectBtn { \n        font-size: 30px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n    }\n        .addProjectBtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n    .navBarRight { \n        font-size: 30px;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        gap: 2rem;\n    }\n        .loginbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .loginbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n        .signupbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .signupbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n/* VERTICAL NAVIGATION BAR STYLES */\n\n.vnav { \n    display: flex;\n    flex-direction: column;\n    width: 50px;\n    gap: 20px;\n    position: fixed;\n    top: 50vh;\n    left: 15px;\n    width: 200px;\n    height: 100%;\n}\n    .vnav-btn{ \n        height: 50px;\n        width: 50px;\n        background-color: transparent;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: none;\n    }\n        .vnav-btn:hover { \n            padding-left: 20px;\n            cursor: pointer;\n        }\n/* ADD PROJECT WINDOW FORM */\n\n.addprojectwindow { \n    position: absolute;\n    top: 18%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n\n    background-color: #3E5C76;\n    border: 3px solid #F0EBD8;\n    border-radius: 15px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n    min-width: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    z-index: 2;\n\n    min-width: 400px;\n    width: 500px;\n    flex-grow: inherit;\n}\n    .addprojectwindowbanner { \n        background-color: #F0EBD8;\n        top: -1px;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50px;\n        min-height: fit-content;\n        width: 101%\n        \n    }\n        .addprojectwindowbannerclosebtn { \n            position: absolute;\n            left: 10px;\n            background: #FF3B30;\n            border: none;\n            border-radius: 50%;\n            color: #FF3B30;\n        }\n            .addprojectwindowbannerclosebtn:hover { \n                background: #FF3B30;\n                border: none;\n                border-radius: 50%;\n                color: #000000;\n            }\n        .addprojectwindowbannertitle {\n            font-size: 20px;\n            font-weight: bold;\n        }\n    .addprojectwindowinput { \n        border-radius: 15px;\n        font-size: 20px;\n        padding: 20px;\n        width: 75%;\n        text-align: center;\n\n    }\n    .addprojectwindowsubmitbtn{ \n        font-size: 20px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n        margin-bottom: 30px;\n        border: 1px solid #F0EBD8;\n    }\n        .addprojectwindowsubmitbtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n\n/* OVERLAY DIMMER */\n.darkoverlay { \n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n\n\n\n/* PROJECT BOXES */\n.content { \n    background-color: rgba(255, 0, 0, 0.051);\n    margin-left: 70px;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 30px;\n\n    flex-wrap: wrap;\n}\n    .projectbox { \n        min-width: 400px;\n        min-height: 300px;\n        max-height: fit-content;\n        background-color: #3E5C76;\n        border: 3px solid #F0EBD8;\n        border-radius: 15px;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 15px;\n        padding-top: 60px;\n        box-sizing: border-box;\n        gap: 15px;\n        }\n        .projectbanner { \n            position: absolute;\n            top: -1px;\n            background-color: #F0EBD8;\n            width: 100%;\n            height: 40px;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n            text-align: center;\n            font-size: 20px;\n            font-weight: bold;\n            border: 1px solid #F0EBD8;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n            .deleteprojectbtn { \n                background: #FF3B30;\n                border: none;\n                border-radius: 50%;\n                color: #FF3B30;\n            }\n                .deleteprojectbtn:hover { \n                    background: #FF3B30;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                    \n                }\n\n            .projecttitle{ \n            }\n\n            .addtaskbtn { \n                background-color: #4CD964;\n                border: none;\n                border-radius: 50%;\n                color: #4CD964;\n            }\n                .addtaskbtn:hover { \n                    background-color: #4CD964;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                }\n    /* TASK BOXES */\n\n.taskbox{ \n    background-color: #748CAB;\n    width: 100%;\n    border-radius: 15px;\n    padding: 25px;\n    box-sizing: border-box;\n    gap: 10px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n    .tasktitle { \n        font-size: 15px;\n        font-weight: bold;\n        padding: 5px;\n        padding-left: 10px;\n        padding-right: 10px;\n        border-radius: 10px;\n    }\n    .taskduedate { \n        font-size: 15px;\n        padding: 5px;\n        padding-left: 10px;\n        padding-right: 10px;\n        border-radius: 10px;\n        color: #454545;\n    }\n    .taskcompletedmarker{ \n        position: absolute;\n        right: 10px;\n\n        background-color: #F0EBD8;\n        border-radius: 50%;\n        border: 2px solid #3E5C76;\n        width: 20px;\n        height: 20px;\n    }"],"sourceRoot":""}]);
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
/* harmony import */ var _display_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-projects.js */ "./src/display-projects.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
//imports 










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
                    addProjectWindow.remove();
                    const darkOverlay = document.getElementById('darkoverlay');
                    darkOverlay.remove();
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
                    if (addProjectWindowInput.value === '') {
                        addProjectWindowInput.placeholder = 'Please enter a project name';
                        addProjectWindowInput.style.border = '1px solid red';
                        return;}
                    if (_index_js__WEBPACK_IMPORTED_MODULE_1__.projects.some(project => project.name === addProjectWindowInput.value)) {
                        addProjectWindowInput.value = '';
                        addProjectWindowInput.placeholder = 'Project already exists';
                        addProjectWindowInput.style.border = '1px solid red';
                        return;}
                    if (addProjectWindowInput.value.length > 20) {
                        addProjectWindowInput.value = '';
                        addProjectWindowInput.placeholder = 'Project name too long';
                        addProjectWindowInput.style.border = '1px solid red';
                        return;}


                    console.log('add project window submit button clicked');
                    const newProject = new _index_js__WEBPACK_IMPORTED_MODULE_1__.Project(addProjectWindowInput.value);
                    _index_js__WEBPACK_IMPORTED_MODULE_1__.projects.push(newProject);
                    console.log(_index_js__WEBPACK_IMPORTED_MODULE_1__.projects);
                    addProjectWindow.remove();
                    const darkOverlay = document.getElementById('darkoverlay');
                    darkOverlay.remove();
                    content.innerHTML = '';
                    (0,_display_projects_js__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();

                }
            );
}


/***/ }),

/***/ "./src/add-task-window.js":
/*!********************************!*\
  !*** ./src/add-task-window.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAddTaskWindow": () => (/* binding */ displayAddTaskWindow)
/* harmony export */ });









function displayAddTaskWindow(projectName) { 
    console.log('adding task for ' + projectName);
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
/* harmony import */ var _add_task_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-task-window.js */ "./src/add-task-window.js");
// imports 







function displayProjects() { 
    const content = document.getElementById('content');
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
// display tasks
                project.tasks.forEach(task => {
                    const taskBox = document.createElement('div');
                    taskBox.classList.add('taskbox');
                    taskBox.id = 'taskbox' + task.name;
                    projectBox.appendChild(taskBox);
                        const taskTitle = document.createElement('div');
                        taskTitle.classList.add('tasktitle');
                        taskTitle.id = 'tasktitle' + task.name;
                        taskTitle.innerHTML = task.name;
                        taskBox.appendChild(taskTitle);
                        const taskDueDate = document.createElement('div');
                        taskDueDate.classList.add('taskduedate');
                        taskDueDate.id = 'taskduedate' + task.name;
                        taskDueDate.innerHTML = task.dueDate;
                        taskBox.appendChild(taskDueDate);
                        if (task.priority === 'important') {
                            taskBox.style.border = '1px solid red';
                        } 
                        const taskCompletedMarker = document.createElement('button');
                        taskCompletedMarker.classList.add('taskcompletedmarker');
                        taskCompletedMarker.id = 'taskcompletedmarker' + task.name;
                        taskCompletedMarker.innerHTML = '';
                        taskBox.appendChild(taskCompletedMarker);
                            taskCompletedMarker.addEventListener('click', () => {
                                console.log('task completed marker clicked');
                            }
                        );
                });
// add add task btn 
                const addTaskBtn = document.createElement('button');
                addTaskBtn.classList.add('addtaskbtn');
                addTaskBtn.id = 'addtaskbtn' + project.name;
                addTaskBtn.innerHTML = '+';
                projectBanner.appendChild(addTaskBtn);
                    addTaskBtn.addEventListener('click', () => {
                        (0,_add_task_window_js__WEBPACK_IMPORTED_MODULE_1__.displayAddTaskWindow)(project.name);
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

const sampleTask1 = new Task('Create ToDo list for Odin', 'This is task 1', '2024-01-01', 'important');
const sampleTask2 = new Task('Task 2', 'This is task 2', '2024-01-01', 'not important');
sampleProject1.tasks.push(sampleTask1);
sampleProject1.tasks.push(sampleTask2);
projects.push(sampleProject1);

const sampleTask3 = new Task('Task 3', 'This is task 3', '2024-01-01', 'important');
const sampleTask4 = new Task('Task 4', 'This is task 4', '2024-01-01', 'not important');
const sampleTask7 = new Task('Task 7', 'This is task 7', '2024-01-01', 'not important');
const sampleTask8 = new Task('Task 8', 'This is task 8', '2024-01-01', 'not important');
sampleProject2.tasks.push(sampleTask3);
sampleProject2.tasks.push(sampleTask4);
sampleProject2.tasks.push(sampleTask7);
sampleProject2.tasks.push(sampleTask8);
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
        const darkOverlay = document.createElement('div');
        darkOverlay.classList.add('darkoverlay');
        darkOverlay.id = 'darkoverlay';
        document.body.appendChild(darkOverlay);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZC1wcm9qZWN0LXdpbmRvdy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZC10YXNrLXdpbmRvdy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3BhZ2UtdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRDJENDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuICAvKiBUT1AgTkFWSUdBVElPTiBCQVIgU1RZTEVTICovXFxuLm5hdkJhciB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4ubmF2QmFyIGRpdiB7IFxcbiAgICBmbGV4OiAxIDEgMzMlO1xcbn1cXG5cXG4gICAgLm5hdkJhckxlZnQgeyBcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgfVxcbiAgICAuYWRkUHJvamVjdEJ0biB7IFxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTs7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICB9XFxuICAgICAgICAuYWRkUHJvamVjdEJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgfVxcbiAgICAubmF2QmFyUmlnaHQgeyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbiAgICAgICAgLmxvZ2luYnRuIHsgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmxvZ2luYnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5zaWdudXBidG4geyBcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTs7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuc2lnbnVwYnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgICAgIH1cXG5cXG4vKiBWRVJUSUNBTCBOQVZJR0FUSU9OIEJBUiBTVFlMRVMgKi9cXG5cXG4udm5hdiB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTB2aDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiAgICAudm5hdi1idG57IFxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgICAgIC52bmF2LWJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuLyogQUREIFBST0pFQ1QgV0lORE9XIEZPUk0gKi9cXG5cXG4uYWRkcHJvamVjdHdpbmRvdyB7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTglO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuXFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgZmxleC1ncm93OiBpbmhlcml0O1xcbn1cXG4gICAgLmFkZHByb2plY3R3aW5kb3diYW5uZXIgeyBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICB0b3A6IC0xcHg7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMTAxJVxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgIC5hZGRwcm9qZWN0d2luZG93YmFubmVyY2xvc2VidG4geyBcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYzQjMwO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgY29sb3I6ICNGRjNCMzA7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmFkZHByb2plY3R3aW5kb3diYW5uZXJjbG9zZWJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYzQjMwO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgLmFkZHByb2plY3R3aW5kb3diYW5uZXJ0aXRsZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcbiAgICAuYWRkcHJvamVjdHdpbmRvd2lucHV0IHsgXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIH1cXG4gICAgLmFkZHByb2plY3R3aW5kb3dzdWJtaXRidG57IFxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTs7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgIH1cXG4gICAgICAgIC5hZGRwcm9qZWN0d2luZG93c3VibWl0YnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICB9XFxuXFxuLyogT1ZFUkxBWSBESU1NRVIgKi9cXG4uZGFya292ZXJsYXkgeyBcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBQUk9KRUNUIEJPWEVTICovXFxuLmNvbnRlbnQgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMDUxKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuICAgIC5wcm9qZWN0Ym94IHsgXFxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgICAgICB9XFxuICAgICAgICAucHJvamVjdGJhbm5lciB7IFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IC0xcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuZGVsZXRlcHJvamVjdGJ0biB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYzQjMwO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRjNCMzA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuZGVsZXRlcHJvamVjdGJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGM0IzMDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJvamVjdHRpdGxleyBcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmFkZHRhc2tidG4geyBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDRDk2NDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNENEOTY0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmFkZHRhc2tidG46aG92ZXIgeyBcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0Q5NjQ7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAvKiBUQVNLIEJPWEVTICovXFxuXFxuLnRhc2tib3h7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ4Q0FCO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4gICAgLnRhc2t0aXRsZSB7IFxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbiAgICAudGFza2R1ZWRhdGUgeyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgY29sb3I6ICM0NTQ1NDU7XFxuICAgIH1cXG4gICAgLnRhc2tjb21wbGV0ZWRtYXJrZXJ7IFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzNFNUM3NjtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixnREFBZ0Q7QUFDcEQ7OztFQUdFLDhCQUE4QjtBQUNoQztJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1COztJQUVuQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0lBRUk7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1oseUJBQXlCO0lBQzdCO1FBQ0k7WUFDSSx5QkFBeUI7WUFDekIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQix5QkFBeUI7UUFDN0I7SUFDSjtRQUNJLGVBQWU7UUFDZixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixTQUFTO0lBQ2I7UUFDSTtZQUNJLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1oseUJBQXlCO1FBQzdCO1lBQ0k7Z0JBQ0kseUJBQXlCO2dC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SSxtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osa0JBQWtCO2dCQUNsQixjQUFjO1lBQ2xCO2dCQUNJO29CQUNJLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLGNBQWM7O2dCQUVsQjs7WUFFSjtZQUNBOztZQUVBO2dCQUNJLHlCQUF5QjtnQkFDekIsWUFBWTtnQkFDWixrQkFBa0I7Z0JBQ2xCLGNBQWM7WUFDbEI7Z0JBQ0k7b0JBQ0kseUJBQXlCO29CQUN6QixZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsY0FBYztnQkFDbEI7SUFDWixlQUFlOztBQUVuQjtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7O1FBRVgseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsV0FBVztRQUNYLFlBQVk7SUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRDJENDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuICAvKiBUT1AgTkFWSUdBVElPTiBCQVIgU1RZTEVTICovXFxuLm5hdkJhciB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4ubmF2QmFyIGRpdiB7IFxcbiAgICBmbGV4OiAxIDEgMzMlO1xcbn1cXG5cXG4gICAgLm5hdkJhckxlZnQgeyBcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgfVxcbiAgICAuYWRkUHJvamVjdEJ0biB7IFxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTs7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICB9XFxuICAgICAgICAuYWRkUHJvamVjdEJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgfVxcbiAgICAubmF2QmFyUmlnaHQgeyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbiAgICAgICAgLmxvZ2luYnRuIHsgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmxvZ2luYnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5zaWdudXBidG4geyBcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTs7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuc2lnbnVwYnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgICAgIH1cXG5cXG4vKiBWRVJUSUNBTCBOQVZJR0FUSU9OIEJBUiBTVFlMRVMgKi9cXG5cXG4udm5hdiB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTB2aDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiAgICAudm5hdi1idG57IFxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgICAgIC52bmF2LWJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuLyogQUREIFBST0pFQ1QgV0lORE9XIEZPUk0gKi9cXG5cXG4uYWRkcHJvamVjdHdpbmRvdyB7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTglO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuXFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgZmxleC1ncm93OiBpbmhlcml0O1xcbn1cXG4gICAgLmFkZHByb2plY3R3aW5kb3diYW5uZXIgeyBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICB0b3A6IC0xcHg7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMTAxJVxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgIC5hZGRwcm9qZWN0d2luZG93YmFubmVyY2xvc2VidG4geyBcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYzQjMwO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgY29sb3I6ICNGRjNCMzA7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmFkZHByb2plY3R3aW5kb3diYW5uZXJjbG9zZWJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYzQjMwO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgLmFkZHByb2plY3R3aW5kb3diYW5uZXJ0aXRsZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcbiAgICAuYWRkcHJvamVjdHdpbmRvd2lucHV0IHsgXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIH1cXG4gICAgLmFkZHByb2plY3R3aW5kb3dzdWJtaXRidG57IFxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTs7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgIH1cXG4gICAgICAgIC5hZGRwcm9qZWN0d2luZG93c3VibWl0YnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICB9XFxuXFxuLyogT1ZFUkxBWSBESU1NRVIgKi9cXG4uZGFya292ZXJsYXkgeyBcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBQUk9KRUNUIEJPWEVTICovXFxuLmNvbnRlbnQgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMDUxKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuICAgIC5wcm9qZWN0Ym94IHsgXFxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgICAgICB9XFxuICAgICAgICAucHJvamVjdGJhbm5lciB7IFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IC0xcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuZGVsZXRlcHJvamVjdGJ0biB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYzQjMwO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRjNCMzA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuZGVsZXRlcHJvamVjdGJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGM0IzMDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJvamVjdHRpdGxleyBcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmFkZHRhc2tidG4geyBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDRDk2NDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNENEOTY0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmFkZHRhc2tidG46aG92ZXIgeyBcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0Q5NjQ7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAvKiBUQVNLIEJPWEVTICovXFxuXFxuLnRhc2tib3h7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ4Q0FCO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4gICAgLnRhc2t0aXRsZSB7IFxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbiAgICAudGFza2R1ZWRhdGUgeyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgY29sb3I6ICM0NTQ1NDU7XFxuICAgIH1cXG4gICAgLnRhc2tjb21wbGV0ZWRtYXJrZXJ7IFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzNFNUM3NjtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vaW1wb3J0cyBcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gJy4vZGlzcGxheS1wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCwgVGFzayB9IGZyb20gJy4vaW5kZXguanMnO1xuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlBZGRQcm9qZWN0V2luZG93KCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRQcm9qZWN0V2luZG93LmNsYXNzTGlzdC5hZGQoJ2FkZHByb2plY3R3aW5kb3cnKTtcbiAgICBhZGRQcm9qZWN0V2luZG93LmlkID0gJ2FkZHByb2plY3R3aW5kb3cnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFdpbmRvdyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RXaW5kb3dCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkUHJvamVjdFdpbmRvd0Jhbm5lci5jbGFzc0xpc3QuYWRkKCdhZGRwcm9qZWN0d2luZG93YmFubmVyJyk7XG4gICAgICAgIGFkZFByb2plY3RXaW5kb3dCYW5uZXIuaWQgPSAnYWRkcHJvamVjdHdpbmRvd2Jhbm5lcic7XG4gICAgICAgIGFkZFByb2plY3RXaW5kb3cuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFdpbmRvd0Jhbm5lcik7XG4gICAgICAgICAgICBjb25zdCBhZGRQcm9qZWN0V2luZG93QmFubmVyQ2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dCYW5uZXJDbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRwcm9qZWN0d2luZG93YmFubmVyY2xvc2VidG4nKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dCYW5uZXJDbG9zZUJ0bi5pZCA9ICdhZGRwcm9qZWN0d2luZG93YmFubmVyY2xvc2VidG4nO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0Jhbm5lckNsb3NlQnRuLmlubmVySFRNTCA9ICd4JztcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dCYW5uZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFdpbmRvd0Jhbm5lckNsb3NlQnRuKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQgcHJvamVjdCB3aW5kb3cgY2xvc2UgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya292ZXJsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgZGFya092ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRkUHJvamVjdFdpbmRvd0Jhbm5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnYWRkcHJvamVjdHdpbmRvd2Jhbm5lcnRpdGxlJyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyVGl0bGUuaWQgPSAnYWRkcHJvamVjdHdpbmRvd2Jhbm5lcnRpdGxlJztcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dCYW5uZXJUaXRsZS5pbm5lckhUTUwgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0Jhbm5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0V2luZG93QmFubmVyVGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgYWRkUHJvamVjdFdpbmRvd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGRwcm9qZWN0d2luZG93aW5wdXQnKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dJbnB1dC5pZCA9ICdhZGRwcm9qZWN0d2luZG93aW5wdXQnO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0lucHV0LnBsYWNlaG9sZGVyID0gJ1Byb2plY3QgTmFtZSc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93LmFwcGVuZENoaWxkKGFkZFByb2plY3RXaW5kb3dJbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBhZGRQcm9qZWN0V2luZG93U3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93U3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZHByb2plY3R3aW5kb3dzdWJtaXRidG4nKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dTdWJtaXRCdG4uaWQgPSAnYWRkcHJvamVjdHdpbmRvd3N1Ym1pdGJ0bic7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93U3VibWl0QnRuLmlubmVySFRNTCA9ICdBZGQgUHJvamVjdCc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93LmFwcGVuZENoaWxkKGFkZFByb2plY3RXaW5kb3dTdWJtaXRCdG4pO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGRQcm9qZWN0V2luZG93SW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93SW5wdXQucGxhY2Vob2xkZXIgPSAnUGxlYXNlIGVudGVyIGEgcHJvamVjdCBuYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dJbnB1dC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47fVxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdHMuc29tZShwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gYWRkUHJvamVjdFdpbmRvd0lucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0lucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93SW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBhbHJlYWR5IGV4aXN0cyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93SW5wdXQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO31cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkZFByb2plY3RXaW5kb3dJbnB1dC52YWx1ZS5sZW5ndGggPiAyMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0lucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93SW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBuYW1lIHRvbyBsb25nJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dJbnB1dC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47fVxuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCBwcm9qZWN0IHdpbmRvdyBzdWJtaXQgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGFkZFByb2plY3RXaW5kb3dJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya292ZXJsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgZGFya092ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbn1cbmV4cG9ydCB7IGRpc3BsYXlBZGRQcm9qZWN0V2luZG93IH07IiwiXG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheUFkZFRhc2tXaW5kb3cocHJvamVjdE5hbWUpIHsgXG4gICAgY29uc29sZS5sb2coJ2FkZGluZyB0YXNrIGZvciAnICsgcHJvamVjdE5hbWUpO1xufVxuZXhwb3J0IHsgZGlzcGxheUFkZFRhc2tXaW5kb3cgfTsiLCIvLyBpbXBvcnRzIFxuaW1wb3J0IHsgcHJvamVjdHMsIFByb2plY3QsIFRhc2sgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IGRpc3BsYXlBZGRUYXNrV2luZG93IH0gZnJvbSAnLi9hZGQtdGFzay13aW5kb3cuanMnO1xuXG5cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHsgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Qm94LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Rib3gnKTtcbiAgICAgICAgcHJvamVjdEJveC5pZCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Qm94KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RCYW5uZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdGJhbm5lcicpO1xuICAgICAgICAgICAgcHJvamVjdEJhbm5lci5pZCA9ICdwcm9qZWN0YmFubmVyJyArIHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIHByb2plY3RCb3guYXBwZW5kQ2hpbGQocHJvamVjdEJhbm5lcik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlcHJvamVjdGJ0bicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdG4uaWQgPSAnZGVsZXRlcHJvamVjdGJ0bicgKyBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5pbm5lckhUTUwgPSAneCc7XG4gICAgICAgICAgICAgICAgcHJvamVjdEJhbm5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUnICsgcHJvamVjdC5uYW1lICsgJ2J1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0dGl0bGUnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuaWQgPSAncHJvamVjdHRpdGxlJyArIHByb2plY3QubmFtZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3RCYW5uZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbi8vIGRpc3BsYXkgdGFza3NcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0JveC5jbGFzc0xpc3QuYWRkKCd0YXNrYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tCb3guaWQgPSAndGFza2JveCcgKyB0YXNrLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RCb3guYXBwZW5kQ2hpbGQodGFza0JveCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5pZCA9ICd0YXNrdGl0bGUnICsgdGFzay5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLmlubmVySFRNTCA9IHRhc2submFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrZHVlZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuaWQgPSAndGFza2R1ZWRhdGUnICsgdGFzay5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2ltcG9ydGFudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQm94LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrQ29tcGxldGVkTWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ29tcGxldGVkTWFya2VyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tjb21wbGV0ZWRtYXJrZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDb21wbGV0ZWRNYXJrZXIuaWQgPSAndGFza2NvbXBsZXRlZG1hcmtlcicgKyB0YXNrLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ29tcGxldGVkTWFya2VyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGVkTWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ29tcGxldGVkTWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGFzayBjb21wbGV0ZWQgbWFya2VyIGNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuLy8gYWRkIGFkZCB0YXNrIGJ0biBcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGR0YXNrYnRuJyk7XG4gICAgICAgICAgICAgICAgYWRkVGFza0J0bi5pZCA9ICdhZGR0YXNrYnRuJyArIHByb2plY3QubmFtZTtcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmlubmVySFRNTCA9ICcrJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0QmFubmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgICAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUFkZFRhc2tXaW5kb3cocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgfSk7XG59XG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfTsiLCIvLyBpbXBvcnRzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRpc3BsYXlQYWdlVGVtcGxhdGUgfSBmcm9tICcuL3BhZ2UtdGVtcGxhdGUnO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5LXByb2plY3RzJztcblxuXG4vLyBsaWJyYXJpZXMgXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4vLyBjbGFzc2VzXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLyBzYW1wbGUgcHJvamVjdHMgYW5kIHRhc2tzIC8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3Qgc2FtcGxlUHJvamVjdDEgPSBuZXcgUHJvamVjdCgnVGVzdCBQcm9qZWN0IDEnKTtcbmNvbnN0IHNhbXBsZVByb2plY3QyID0gbmV3IFByb2plY3QoJ1Byb2plY3QgMicpO1xuY29uc3Qgc2FtcGxlUHJvamVjdDMgPSBuZXcgUHJvamVjdCgnUHJvamVjdCAzJyk7XG5cbmNvbnN0IHNhbXBsZVRhc2sxID0gbmV3IFRhc2soJ0NyZWF0ZSBUb0RvIGxpc3QgZm9yIE9kaW4nLCAnVGhpcyBpcyB0YXNrIDEnLCAnMjAyNC0wMS0wMScsICdpbXBvcnRhbnQnKTtcbmNvbnN0IHNhbXBsZVRhc2syID0gbmV3IFRhc2soJ1Rhc2sgMicsICdUaGlzIGlzIHRhc2sgMicsICcyMDI0LTAxLTAxJywgJ25vdCBpbXBvcnRhbnQnKTtcbnNhbXBsZVByb2plY3QxLnRhc2tzLnB1c2goc2FtcGxlVGFzazEpO1xuc2FtcGxlUHJvamVjdDEudGFza3MucHVzaChzYW1wbGVUYXNrMik7XG5wcm9qZWN0cy5wdXNoKHNhbXBsZVByb2plY3QxKTtcblxuY29uc3Qgc2FtcGxlVGFzazMgPSBuZXcgVGFzaygnVGFzayAzJywgJ1RoaXMgaXMgdGFzayAzJywgJzIwMjQtMDEtMDEnLCAnaW1wb3J0YW50Jyk7XG5jb25zdCBzYW1wbGVUYXNrNCA9IG5ldyBUYXNrKCdUYXNrIDQnLCAnVGhpcyBpcyB0YXNrIDQnLCAnMjAyNC0wMS0wMScsICdub3QgaW1wb3J0YW50Jyk7XG5jb25zdCBzYW1wbGVUYXNrNyA9IG5ldyBUYXNrKCdUYXNrIDcnLCAnVGhpcyBpcyB0YXNrIDcnLCAnMjAyNC0wMS0wMScsICdub3QgaW1wb3J0YW50Jyk7XG5jb25zdCBzYW1wbGVUYXNrOCA9IG5ldyBUYXNrKCdUYXNrIDgnLCAnVGhpcyBpcyB0YXNrIDgnLCAnMjAyNC0wMS0wMScsICdub3QgaW1wb3J0YW50Jyk7XG5zYW1wbGVQcm9qZWN0Mi50YXNrcy5wdXNoKHNhbXBsZVRhc2szKTtcbnNhbXBsZVByb2plY3QyLnRhc2tzLnB1c2goc2FtcGxlVGFzazQpO1xuc2FtcGxlUHJvamVjdDIudGFza3MucHVzaChzYW1wbGVUYXNrNyk7XG5zYW1wbGVQcm9qZWN0Mi50YXNrcy5wdXNoKHNhbXBsZVRhc2s4KTtcbnByb2plY3RzLnB1c2goc2FtcGxlUHJvamVjdDIpO1xuXG5jb25zdCBzYW1wbGVUYXNrNSA9IG5ldyBUYXNrKCdUYXNrIDUnLCAnVGhpcyBpcyB0YXNrIDUnLCAnMjAyNC0wMS0wMScsICdpbXBvcnRhbnQnKTtcbmNvbnN0IHNhbXBsZVRhc2s2ID0gbmV3IFRhc2soJ1Rhc2sgNicsICdUaGlzIGlzIHRhc2sgNicsICcyMDI0LTAxLTAxJywgJ25vdCBpbXBvcnRhbnQnKTtcbnNhbXBsZVByb2plY3QzLnRhc2tzLnB1c2goc2FtcGxlVGFzazUpO1xuc2FtcGxlUHJvamVjdDMudGFza3MucHVzaChzYW1wbGVUYXNrNik7XG5wcm9qZWN0cy5wdXNoKHNhbXBsZVByb2plY3QzKTtcblxuXG5leHBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCwgVGFzayB9O1xuLy8gZnVuY3Rpb25zXG5cbi8vLy8vLy8vLy8gbG9hZCBwYWdlIHRlbXBsYXRlIC8vLy8vLy8vLy9cbmRpc3BsYXlQYWdlVGVtcGxhdGUoKTtcbmRpc3BsYXlQcm9qZWN0cygpO1xuXG5cbiIsIi8vIGZ1bmN0aW9uIHRvIGxvYWQgcGFnZSBjb250ZW50IFxuICAvLyBMb2FkIHRvcCBuYXYgXG4gIC8vIExvYWQgdmVydGljYWwgbmF2XG4gIC8vIGNyZWF0ZSBjb250ZW50IGRpdiBmb3IgcHJvamVjdHMgXG5cblxuICAvLyBpbXBvcnRzIFxuICAgIC8vbW9kdWVsc1xuICBpbXBvcnQgeyBkaXNwbGF5QWRkUHJvamVjdFdpbmRvdyB9IGZyb20gJy4vYWRkLXByb2plY3Qtd2luZG93JztcbiAgICAvL2ltYWdlc1xuICBpbXBvcnQgSG9tZUljb24gZnJvbSAnLi9pY29ucy9Ib21lLnBuZyc7XG4gIGNvbnN0IGhvbWVJY29uID0gbmV3IEltYWdlKCk7XG4gIGhvbWVJY29uLnNyYyA9IEhvbWVJY29uO1xuICBpbXBvcnQgVGFza3NJY29uIGZyb20gJy4vaWNvbnMvVGFza3MucG5nJztcbiAgY29uc3QgdGFza3NJY29uID0gbmV3IEltYWdlKCk7XG4gIHRhc2tzSWNvbi5zcmMgPSBUYXNrc0ljb247XG4gIGltcG9ydCBDb21wbGV0ZWRJY29uIGZyb20gJy4vaWNvbnMvQ29tcGxldGVkLnBuZyc7XG4gIGNvbnN0IGNvbXBsZXRlZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY29tcGxldGVkSWNvbi5zcmMgPSBDb21wbGV0ZWRJY29uO1xuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZVRlbXBsYXRlKCkge1xuICAvLyBsb2FkIHRvcCBuYXYgXG4gIGNvbnN0IE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBOYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XG4gIE5hdkJhci5pZCA9ICduYXZCYXInO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKE5hdkJhcik7XG4gICAgY29uc3QgbmF2QmFyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhckxlZnQuY2xhc3NMaXN0LmFkZCgnbmF2QmFyTGVmdCcpO1xuICAgIG5hdkJhckxlZnQuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcbiAgICBOYXZCYXIuYXBwZW5kQ2hpbGQobmF2QmFyTGVmdCk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ0bicpO1xuICAgIGFkZFByb2plY3RCdG4uaW5uZXJIVE1MID0gJ0FkZCBQcm9qZWN0JztcbiAgICBOYXZCYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdkYXJrb3ZlcmxheScpO1xuICAgICAgICBkYXJrT3ZlcmxheS5pZCA9ICdkYXJrb3ZlcmxheSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGFya092ZXJsYXkpO1xuICAgICAgICBkaXNwbGF5QWRkUHJvamVjdFdpbmRvdygpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBuYXZCYXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhclJpZ2h0LmNsYXNzTGlzdC5hZGQoJ25hdkJhclJpZ2h0Jyk7XG4gICAgbmF2QmFyUmlnaHQuaW5uZXJIVE1MID0gJyc7XG4gICAgTmF2QmFyLmFwcGVuZENoaWxkKG5hdkJhclJpZ2h0KTtcbiAgICAgIGNvbnN0IGxvZ0luQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBsb2dJbkJ0bi5jbGFzc0xpc3QuYWRkKCdsb2dpbmJ0bicpO1xuICAgICAgbG9nSW5CdG4uaW5uZXJIVE1MID0gJ0xvZyBJbic7XG4gICAgICBuYXZCYXJSaWdodC5hcHBlbmRDaGlsZChsb2dJbkJ0bik7XG4gICAgICBjb25zdCBzaWduVXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHNpZ25VcEJ0bi5jbGFzc0xpc3QuYWRkKCdzaWdudXBidG4nKTtcbiAgICAgIHNpZ25VcEJ0bi5pbm5lckhUTUwgPSAnU2lnbiBVcCc7XG4gICAgICBuYXZCYXJSaWdodC5hcHBlbmRDaGlsZChzaWduVXBCdG4pO1xuICAvLyBsb2FkIHZlcnRpY2FsIG5hdlxuICBjb25zdCB2bmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZuYXZCYXIuY2xhc3NMaXN0LmFkZCgndm5hdicpO1xuICB2bmF2QmFyLmlkID0gJ3ZuYXYnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZuYXZCYXIpO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ3ZuYXYtYnRuJyk7XG4gICAgaG9tZUJ0bi5pZCA9ICd2bmF2LWhvbWUtYnRuJztcbiAgICBob21lQnRuLmFwcGVuZENoaWxkKGhvbWVJY29uKTtcbiAgICB2bmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IHRhc2tzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza3NCdG4uY2xhc3NMaXN0LmFkZCgndm5hdi1idG4nKTtcbiAgICB0YXNrc0J0bi5pZCA9ICd2bmF2LXRhc2tzLWJ0bic7XG4gICAgdGFza3NCdG4uYXBwZW5kQ2hpbGQodGFza3NJY29uKTtcbiAgICB2bmF2QmFyLmFwcGVuZENoaWxkKHRhc2tzQnRuKTtcbiAgICAgIHRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndGFza3MgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IGNvbXBsZXRlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbXBsZXRlZEJ0bi5jbGFzc0xpc3QuYWRkKCd2bmF2LWJ0bicpO1xuICAgIGNvbXBsZXRlZEJ0bi5pZCA9ICd2bmF2LWNvbXBsZXRlZC1idG4nO1xuICAgIGNvbXBsZXRlZEJ0bi5hcHBlbmRDaGlsZChjb21wbGV0ZWRJY29uKTtcbiAgICB2bmF2QmFyLmFwcGVuZENoaWxkKGNvbXBsZXRlZEJ0bik7XG4gICAgICBjb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZWQgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgIH1cbiAgICApO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuZXhwb3J0IHsgZGlzcGxheVBhZ2VUZW1wbGF0ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==