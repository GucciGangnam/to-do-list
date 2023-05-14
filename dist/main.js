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
___CSS_LOADER_EXPORT___.push([module.id, "body{ \n    background-color: #1D2D44;\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n}\n\n\n  /* TOP NAVIGATION BAR STYLES */\n.navBar { \n    background-color: #3E5C76;\n    border-radius: 15px;\n    padding: 10px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    z-index: 2;\n}\n.navBar div { \n    flex: 1 1 33%;\n}\n\n    .navBarLeft { \n        font-size: 50px;\n        font-weight: bolder;\n        color: #F0EBD8;\n    }\n    .addProjectBtn { \n        font-size: 30px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n    }\n        .addProjectBtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n    .navBarRight { \n        font-size: 30px;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        gap: 2rem;\n    }\n        .loginbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .loginbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n        .signupbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .signupbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n/* VERTICAL NAVIGATION BAR STYLES */\n\n.vnav { \n    display: flex;\n    flex-direction: column;\n    width: 50px;\n    gap: 20px;\n    position: fixed;\n    top: 50vh;\n    left: 15px;\n    width: 200px;\n    height: 100%;\n}\n    .vnav-btn{ \n        height: 50px;\n        width: 50px;\n        background-color: transparent;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: none;\n    }\n        .vnav-btn:hover { \n            padding-left: 20px;\n            cursor: pointer;\n        }\n/* ADD PROJECT WINDOW FORM */\n\n.addprojectwindow { \n    position: absolute;\n    top: 18%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n\n    background-color: #3E5C76;\n    border: 3px solid #F0EBD8;\n    border-radius: 15px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n    min-width: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    z-index: 2;\n\n    min-width: 400px;\n    width: 500px;\n    flex-grow: inherit;\n}\n    .addprojectwindowbanner { \n        background-color: #F0EBD8;\n        top: -1px;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50px;\n        min-height: fit-content;\n        width: 101%\n        \n    }\n        .addprojectwindowbannerclosebtn { \n            position: absolute;\n            left: 10px;\n            background: #FF3B30;\n            border: none;\n            border-radius: 50%;\n            color: #FF3B30;\n        }\n            .addprojectwindowbannerclosebtn:hover { \n                background: #FF3B30;\n                border: none;\n                border-radius: 50%;\n                color: #000000;\n            }\n        .addprojectwindowbannertitle {\n            font-size: 20px;\n            font-weight: bold;\n        }\n    .addprojectwindowinput { \n        border-radius: 15px;\n        font-size: 20px;\n        padding: 20px;\n        width: 75%;\n        text-align: center;\n\n    }\n    .addprojectwindowsubmitbtn{ \n        font-size: 20px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n        margin-bottom: 30px;\n        border: 1px solid #F0EBD8;\n    }\n        .addprojectwindowsubmitbtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n\n/* OVERLAY DIMMER */\n.darkoverlay { \n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n\n\n\n/* PROJECT BOXES */\n.content { \n    background-color: rgba(255, 0, 0, 0.051);\n    margin-left: 70px;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 30px;\n\n    flex-wrap: wrap;\n}\n    .projectbox { \n        min-width: 400px;\n        min-height: 300px;\n        max-height: fit-content;\n        background-color: #3E5C76;\n        border: 3px solid #F0EBD8;\n        border-radius: 15px;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 15px;\n        padding-top: 60px;\n        box-sizing: border-box;\n        gap: 15px;\n        }\n        .projectbanner { \n            position: absolute;\n            top: -1px;\n            background-color: #F0EBD8;\n            width: 100%;\n            height: 40px;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n            text-align: center;\n            font-size: 20px;\n            font-weight: bold;\n            border: 1px solid #F0EBD8;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n            .deleteprojectbtn { \n                background: #FF3B30;\n                border: none;\n                border-radius: 50%;\n                color: #FF3B30;\n            }\n                .deleteprojectbtn:hover { \n                    background: #FF3B30;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                    \n                }\n\n            .projecttitle{ \n            }\n\n            .addtaskbtn { \n                background-color: #4CD964;\n                border: none;\n                border-radius: 50%;\n                color: #4CD964;\n            }\n                .addtaskbtn:hover { \n                    background-color: #4CD964;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                }\n    /* TASK BOXES */\n\n.taskbox{ \n    background-color: #748CAB;\n    width: 100%;\n    border-radius: 15px;\n    padding: 25px;\n    box-sizing: border-box;\n    gap: 10px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n    .tasktitle { \n        font-size: 15px;\n        font-weight: bold;\n        padding: 5px;\n        padding-left: 10px;\n        padding-right: 10px;\n        border-radius: 10px;\n    }\n    .taskduedate { \n        font-size: 15px;\n        padding: 5px;\n        padding-left: 10px;\n        padding-right: 10px;\n        border-radius: 10px;\n        color: #454545;\n    }\n    .taskcompletedmarker{ \n        position: absolute;\n        right: 10px;\n\n        background-color: #F0EBD8;\n        border-radius: 50%;\n        border: 2px solid #3E5C76;\n        width: 20px;\n        height: 20px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n/* ADD TASK WINDOW */\n\n.addtaskwindow{ \n    position: absolute;\n    top: 18%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n\n    background-color: #3E5C76;\n    border: 3px solid #F0EBD8;\n    border-radius: 15px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n    min-width: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    z-index: 2;\n\n    min-width: 400px;\n    width: 500px;\n    flex-grow: inherit;\n}\n.addtaskwindowbanner { \n    background-color: #F0EBD8;\n        top: -1px;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50px;\n        min-height: fit-content;\n        width: 101%\n}\n    .addtaskwindowbannerclosebtn { \n        position: absolute;\n        left: 10px;\n        background: #FF3B30;\n        border: none;\n        border-radius: 50%;\n        color: #FF3B30;\n    }\n        .addtaskwindowbannerclosebtn:hover { \n            background: #FF3B30;\n            border: none;\n            border-radius: 50%;\n            color: #000000;\n        }\n    .addtaskwindowbannertitle {\n        font-size: 20px;\n        font-weight: bold;\n    }\n    .addtaskwindowinput { \n        border-radius: 15px;\n        font-size: 20px;\n        padding: 20px;\n        width: 75%;\n        text-align: center;\n    }\n    .addtaskwindowdate { \n        border-radius: 15px;\n        font-size: 20px;\n        padding: 10px;\n        text-align: center;\n    }\n    .addtaskwindowpriority { \n        border-radius: 15px;\n        font-size: 20px;\n        padding: 10px;\n        text-align: center;\n    }\n    .addtaskwindowsubmitbtn{ \n        font-size: 20px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n        margin-bottom: 30px;\n        border: 1px solid #F0EBD8;\n    }\n        .addtaskwindowsubmitbtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{ \n    background-color: #1D2D44;\n    font-family: 'Helvetica Neue', Arial, sans-serif;\n}\n\n\n  /* TOP NAVIGATION BAR STYLES */\n.navBar { \n    background-color: #3E5C76;\n    border-radius: 15px;\n    padding: 10px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    z-index: 2;\n}\n.navBar div { \n    flex: 1 1 33%;\n}\n\n    .navBarLeft { \n        font-size: 50px;\n        font-weight: bolder;\n        color: #F0EBD8;\n    }\n    .addProjectBtn { \n        font-size: 30px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n    }\n        .addProjectBtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n    .navBarRight { \n        font-size: 30px;\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        gap: 2rem;\n    }\n        .loginbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .loginbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n        .signupbtn { \n            font-size: 20px;\n            font-weight: bold;\n            padding: 10px;\n            border-radius: 10px;\n            border: none;;\n            background-color: #F0EBD8;\n        }\n            .signupbtn:hover { \n                background-color: #3E5C76;\n                color: #F0EBD8;\n                border-radius: 10px;\n                border: 1px solid #F0EBD8;\n            }\n\n/* VERTICAL NAVIGATION BAR STYLES */\n\n.vnav { \n    display: flex;\n    flex-direction: column;\n    width: 50px;\n    gap: 20px;\n    position: fixed;\n    top: 50vh;\n    left: 15px;\n    width: 200px;\n    height: 100%;\n}\n    .vnav-btn{ \n        height: 50px;\n        width: 50px;\n        background-color: transparent;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: none;\n    }\n        .vnav-btn:hover { \n            padding-left: 20px;\n            cursor: pointer;\n        }\n/* ADD PROJECT WINDOW FORM */\n\n.addprojectwindow { \n    position: absolute;\n    top: 18%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n\n    background-color: #3E5C76;\n    border: 3px solid #F0EBD8;\n    border-radius: 15px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n    min-width: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    z-index: 2;\n\n    min-width: 400px;\n    width: 500px;\n    flex-grow: inherit;\n}\n    .addprojectwindowbanner { \n        background-color: #F0EBD8;\n        top: -1px;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50px;\n        min-height: fit-content;\n        width: 101%\n        \n    }\n        .addprojectwindowbannerclosebtn { \n            position: absolute;\n            left: 10px;\n            background: #FF3B30;\n            border: none;\n            border-radius: 50%;\n            color: #FF3B30;\n        }\n            .addprojectwindowbannerclosebtn:hover { \n                background: #FF3B30;\n                border: none;\n                border-radius: 50%;\n                color: #000000;\n            }\n        .addprojectwindowbannertitle {\n            font-size: 20px;\n            font-weight: bold;\n        }\n    .addprojectwindowinput { \n        border-radius: 15px;\n        font-size: 20px;\n        padding: 20px;\n        width: 75%;\n        text-align: center;\n\n    }\n    .addprojectwindowsubmitbtn{ \n        font-size: 20px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n        margin-bottom: 30px;\n        border: 1px solid #F0EBD8;\n    }\n        .addprojectwindowsubmitbtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n\n/* OVERLAY DIMMER */\n.darkoverlay { \n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n\n\n\n/* PROJECT BOXES */\n.content { \n    background-color: rgba(255, 0, 0, 0.051);\n    margin-left: 70px;\n    display: flex;\n    justify-content: space-evenly;\n    gap: 30px;\n\n    flex-wrap: wrap;\n}\n    .projectbox { \n        min-width: 400px;\n        min-height: 300px;\n        max-height: fit-content;\n        background-color: #3E5C76;\n        border: 3px solid #F0EBD8;\n        border-radius: 15px;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 15px;\n        padding-top: 60px;\n        box-sizing: border-box;\n        gap: 15px;\n        }\n        .projectbanner { \n            position: absolute;\n            top: -1px;\n            background-color: #F0EBD8;\n            width: 100%;\n            height: 40px;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n            text-align: center;\n            font-size: 20px;\n            font-weight: bold;\n            border: 1px solid #F0EBD8;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n            .deleteprojectbtn { \n                background: #FF3B30;\n                border: none;\n                border-radius: 50%;\n                color: #FF3B30;\n            }\n                .deleteprojectbtn:hover { \n                    background: #FF3B30;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                    \n                }\n\n            .projecttitle{ \n            }\n\n            .addtaskbtn { \n                background-color: #4CD964;\n                border: none;\n                border-radius: 50%;\n                color: #4CD964;\n            }\n                .addtaskbtn:hover { \n                    background-color: #4CD964;\n                    border: none;\n                    border-radius: 50%;\n                    color: #000000;\n                }\n    /* TASK BOXES */\n\n.taskbox{ \n    background-color: #748CAB;\n    width: 100%;\n    border-radius: 15px;\n    padding: 25px;\n    box-sizing: border-box;\n    gap: 10px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n    .tasktitle { \n        font-size: 15px;\n        font-weight: bold;\n        padding: 5px;\n        padding-left: 10px;\n        padding-right: 10px;\n        border-radius: 10px;\n    }\n    .taskduedate { \n        font-size: 15px;\n        padding: 5px;\n        padding-left: 10px;\n        padding-right: 10px;\n        border-radius: 10px;\n        color: #454545;\n    }\n    .taskcompletedmarker{ \n        position: absolute;\n        right: 10px;\n\n        background-color: #F0EBD8;\n        border-radius: 50%;\n        border: 2px solid #3E5C76;\n        width: 20px;\n        height: 20px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n/* ADD TASK WINDOW */\n\n.addtaskwindow{ \n    position: absolute;\n    top: 18%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1;\n\n    background-color: #3E5C76;\n    border: 3px solid #F0EBD8;\n    border-radius: 15px;\n    margin: 10px;\n    margin-top: 10px;\n    margin-bottom: 50px;\n    min-width: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    z-index: 2;\n\n    min-width: 400px;\n    width: 500px;\n    flex-grow: inherit;\n}\n.addtaskwindowbanner { \n    background-color: #F0EBD8;\n        top: -1px;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50px;\n        min-height: fit-content;\n        width: 101%\n}\n    .addtaskwindowbannerclosebtn { \n        position: absolute;\n        left: 10px;\n        background: #FF3B30;\n        border: none;\n        border-radius: 50%;\n        color: #FF3B30;\n    }\n        .addtaskwindowbannerclosebtn:hover { \n            background: #FF3B30;\n            border: none;\n            border-radius: 50%;\n            color: #000000;\n        }\n    .addtaskwindowbannertitle {\n        font-size: 20px;\n        font-weight: bold;\n    }\n    .addtaskwindowinput { \n        border-radius: 15px;\n        font-size: 20px;\n        padding: 20px;\n        width: 75%;\n        text-align: center;\n    }\n    .addtaskwindowdate { \n        border-radius: 15px;\n        font-size: 20px;\n        padding: 10px;\n        text-align: center;\n    }\n    .addtaskwindowpriority { \n        border-radius: 15px;\n        font-size: 20px;\n        padding: 10px;\n        text-align: center;\n    }\n    .addtaskwindowsubmitbtn{ \n        font-size: 20px;\n        font-weight: bold;\n        padding: 10px;\n        border-radius: 10px;\n        border: none;;\n        background-color: #F0EBD8;\n        margin-bottom: 30px;\n        border: 1px solid #F0EBD8;\n    }\n        .addtaskwindowsubmitbtn:hover { \n            background-color: #3E5C76;\n            color: #F0EBD8;\n            border-radius: 10px;\n            border: 1px solid #F0EBD8;\n        }\n"],"sourceRoot":""}]);
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
/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-projects */ "./src/display-projects.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");










function displayAddTaskWindow(projectName) { 
    console.log('adding task for ' + projectName);
    const darkOverlay = document.createElement('div');
    darkOverlay.classList.add('darkoverlay');
    darkOverlay.id = 'darkoverlay';
    document.body.appendChild(darkOverlay);

    const addTaskWindow = document.createElement('div');
    addTaskWindow.classList.add('addtaskwindow');
    addTaskWindow.id = 'addtaskwindow';
    document.body.appendChild(addTaskWindow);
        const addTaskWindowBanner = document.createElement('div');
        addTaskWindowBanner.classList.add('addtaskwindowbanner');
        addTaskWindowBanner.id = 'addtaskwindowbanner';
        addTaskWindow.appendChild(addTaskWindowBanner);
        const addTaskWindowBannerCloseBtn = document.createElement('button');
        addTaskWindowBannerCloseBtn.classList.add('addtaskwindowbannerclosebtn');
        addTaskWindowBannerCloseBtn.id = 'addtaskwindowbannerclosebtn';
        addTaskWindowBannerCloseBtn.innerHTML = 'x';
        addTaskWindowBanner.appendChild(addTaskWindowBannerCloseBtn);
        addTaskWindowBannerCloseBtn.addEventListener('click', () => {
                console.log('add task window close button clicked');
                addTaskWindow.remove();
                const darkOverlay = document.getElementById('darkoverlay');
                darkOverlay.remove();
            });
            const addTaskWindowBannerTitle = document.createElement('div');
            addTaskWindowBannerTitle.classList.add('addtaskwindowbannertitle');
            addTaskWindowBannerTitle.id = 'addtaskwindowbannertitle';
            addTaskWindowBannerTitle.innerHTML = 'Add Task to ' + projectName;
            addTaskWindowBanner.appendChild(addTaskWindowBannerTitle);
        const addTaskWindowInput = document.createElement('input');
        addTaskWindowInput.classList.add('addtaskwindowinput');
        addTaskWindowInput.id = 'addtaskwindowinput';
        addTaskWindowInput.placeholder = 'Task Name';
        addTaskWindow.appendChild(addTaskWindowInput);
        const addTaskWindowDate = document.createElement('input');
        addTaskWindowDate.classList.add('addtaskwindowdate');
        addTaskWindowDate.id = 'addtaskwindowdate';
        addTaskWindowDate.type = 'date';
        addTaskWindow.appendChild(addTaskWindowDate);
        const addTaskWindowPriority = document.createElement('select');
        addTaskWindowPriority.classList.add('addtaskwindowpriority');
        addTaskWindowPriority.id = 'addtaskwindowpriority';
        addTaskWindow.appendChild(addTaskWindowPriority);
            const addTaskWindowPriorityOption1 = document.createElement('option');
            addTaskWindowPriorityOption1.classList.add('addtaskwindowpriorityoption');
            addTaskWindowPriorityOption1.id = 'addtaskwindowpriorityoption1';
            addTaskWindowPriorityOption1.value = 'not important';
            addTaskWindowPriorityOption1.innerHTML = 'Normal';
            addTaskWindowPriority.appendChild(addTaskWindowPriorityOption1);
            const addTaskWindowPriorityOption2 = document.createElement('option');
            addTaskWindowPriorityOption2.classList.add('addtaskwindowpriorityoption');
            addTaskWindowPriorityOption2.id = 'addtaskwindowpriorityoption2';
            addTaskWindowPriorityOption2.value = 'important';
            addTaskWindowPriorityOption2.innerHTML = 'Important';
            addTaskWindowPriority.appendChild(addTaskWindowPriorityOption2);

        const addTaskWindowSubmitBtn = document.createElement('button');
        addTaskWindowSubmitBtn.classList.add('addtaskwindowsubmitbtn');
        addTaskWindowSubmitBtn.id = 'addtaskwindowsubmitbtn';
        addTaskWindowSubmitBtn.innerHTML = 'Add Task';
        addTaskWindow.appendChild(addTaskWindowSubmitBtn);
        addTaskWindowSubmitBtn.addEventListener('click', () => {
            if (addTaskWindowInput.value == '') {
                addTaskWindowInput.style.border = '1px solid red';
                addTaskWindowInput.placeholder = 'Task Name Required';
                return;
            }
            console.log('add task window submit button clicked');
            const taskName = document.getElementById('addtaskwindowinput').value;
            const taskDate = document.getElementById('addtaskwindowdate').value;
            const taskPriority = document.getElementById('addtaskwindowpriority').value;
            const newTask = new _index_js__WEBPACK_IMPORTED_MODULE_1__.Task(taskName, " ", taskDate, taskPriority);
            console.log(newTask);
            // add new task to project that is named projectName
            for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_1__.projects.length; i++) {
                if (_index_js__WEBPACK_IMPORTED_MODULE_1__.projects[i].name == projectName) {
                    _index_js__WEBPACK_IMPORTED_MODULE_1__.projects[i].tasks.push(newTask);
                    console.log(_index_js__WEBPACK_IMPORTED_MODULE_1__.projects);
                    addTaskWindow.remove();
                    const darkOverlay = document.getElementById('darkoverlay');
                    darkOverlay.remove();
                    const content = document.getElementById('content');
                    content.innerHTML = '';
                    (0,_display_projects__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();
                }
            }
            
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
                                if (task.completed === false) {
                                    task.completed = true;
                                    taskCompletedMarker.innerHTML = '✓';
                                    taskCompletedMarker.style.backgroundColor = '#4CD964';
                                    taskBox.style.textDecoration = 'line-through';
                                }
                                else {
                                    task.completed = false;
                                    taskCompletedMarker.innerHTML = '';
                                    taskCompletedMarker.style.backgroundColor = '#F0EBD8';
                                    taskBox.style.textDecoration = 'none';
                                }
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
        this.completed = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxhQUFhLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssYUFBYSxZQUFZLGFBQWEsY0FBYyxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssYUFBYSxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFNBQVMsWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssYUFBYSxZQUFZLGFBQWEsWUFBWSxNQUFNLE1BQU0sYUFBYSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLGFBQWEsWUFBWSxhQUFhLFlBQVksTUFBTSxNQUFNLGFBQWEsWUFBWSxhQUFhLFlBQVksT0FBTyxXQUFXLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUs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QTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Ri9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGQtcHJvamVjdC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGQtdGFzay13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWdlLXRlbXBsYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUQyRDQ0O1xcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbiAgLyogVE9QIE5BVklHQVRJT04gQkFSIFNUWUxFUyAqL1xcbi5uYXZCYXIgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuLm5hdkJhciBkaXYgeyBcXG4gICAgZmxleDogMSAxIDMzJTtcXG59XFxuXFxuICAgIC5uYXZCYXJMZWZ0IHsgXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgICAgY29sb3I6ICNGMEVCRDg7XFxuICAgIH1cXG4gICAgLmFkZFByb2plY3RCdG4geyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgfVxcbiAgICAgICAgLmFkZFByb2plY3RCdG46aG92ZXIgeyBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICAgICAgICAgIGNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRUJEODtcXG4gICAgICAgIH1cXG4gICAgLm5hdkJhclJpZ2h0IHsgXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgIH1cXG4gICAgICAgIC5sb2dpbmJ0biB7IFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lOztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5sb2dpbmJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRUJEODtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAuc2lnbnVwYnRuIHsgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLnNpZ251cGJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICAgICAgICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRUJEODtcXG4gICAgICAgICAgICB9XFxuXFxuLyogVkVSVElDQUwgTkFWSUdBVElPTiBCQVIgU1RZTEVTICovXFxuXFxuLnZuYXYgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwdmg7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4gICAgLnZuYXYtYnRueyBcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuICAgICAgICAudm5hdi1idG46aG92ZXIgeyBcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbi8qIEFERCBQUk9KRUNUIFdJTkRPVyBGT1JNICovXFxuXFxuLmFkZHByb2plY3R3aW5kb3cgeyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE4JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0YwRUJEODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICB6LWluZGV4OiAyO1xcblxcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGZsZXgtZ3JvdzogaW5oZXJpdDtcXG59XFxuICAgIC5hZGRwcm9qZWN0d2luZG93YmFubmVyIHsgXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgdG9wOiAtMXB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgd2lkdGg6IDEwMSVcXG4gICAgICAgIFxcbiAgICB9XFxuICAgICAgICAuYWRkcHJvamVjdHdpbmRvd2Jhbm5lcmNsb3NlYnRuIHsgXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGM0IzMDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIGNvbG9yOiAjRkYzQjMwO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgIC5hZGRwcm9qZWN0d2luZG93YmFubmVyY2xvc2VidG46aG92ZXIgeyBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGM0IzMDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIC5hZGRwcm9qZWN0d2luZG93YmFubmVydGl0bGUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIH1cXG4gICAgLmFkZHByb2plY3R3aW5kb3dpbnB1dCB7IFxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICB3aWR0aDogNzUlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICB9XFxuICAgIC5hZGRwcm9qZWN0d2luZG93c3VibWl0YnRueyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICB9XFxuICAgICAgICAuYWRkcHJvamVjdHdpbmRvd3N1Ym1pdGJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgfVxcblxcbi8qIE9WRVJMQVkgRElNTUVSICovXFxuLmRhcmtvdmVybGF5IHsgXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuXFxuXFxuXFxuLyogUFJPSkVDVCBCT1hFUyAqL1xcbi5jb250ZW50IHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA1MSk7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgZ2FwOiAzMHB4O1xcblxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbiAgICAucHJvamVjdGJveCB7IFxcbiAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI0YwRUJEODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnByb2plY3RiYW5uZXIgeyBcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiAtMXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmRlbGV0ZXByb2plY3RidG4geyBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGM0IzMDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkYzQjMwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmRlbGV0ZXByb2plY3RidG46aG92ZXIgeyBcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRjNCMzA7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnByb2plY3R0aXRsZXsgXFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5hZGR0YXNrYnRuIHsgXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0Q5NjQ7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRDRDk2NDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIC5hZGR0YXNrYnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENEOTY0O1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgLyogVEFTSyBCT1hFUyAqL1xcblxcbi50YXNrYm94eyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc0OENBQjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuICAgIC50YXNrdGl0bGUgeyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIH1cXG4gICAgLnRhc2tkdWVkYXRlIHsgXFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGNvbG9yOiAjNDU0NTQ1O1xcbiAgICB9XFxuICAgIC50YXNrY29tcGxldGVkbWFya2VyeyBcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzRTVDNzY7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4vKiBBREQgVEFTSyBXSU5ET1cgKi9cXG5cXG4uYWRkdGFza3dpbmRvd3sgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxOCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGMEVCRDg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgei1pbmRleDogMjtcXG5cXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBmbGV4LWdyb3c6IGluaGVyaXQ7XFxufVxcbi5hZGR0YXNrd2luZG93YmFubmVyIHsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICB0b3A6IC0xcHg7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMTAxJVxcbn1cXG4gICAgLmFkZHRhc2t3aW5kb3diYW5uZXJjbG9zZWJ0biB7IFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRjNCMzA7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBjb2xvcjogI0ZGM0IzMDtcXG4gICAgfVxcbiAgICAgICAgLmFkZHRhc2t3aW5kb3diYW5uZXJjbG9zZWJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRjNCMzA7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgICAgIH1cXG4gICAgLmFkZHRhc2t3aW5kb3diYW5uZXJ0aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgICAuYWRkdGFza3dpbmRvd2lucHV0IHsgXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmFkZHRhc2t3aW5kb3dkYXRlIHsgXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuYWRkdGFza3dpbmRvd3ByaW9yaXR5IHsgXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuYWRkdGFza3dpbmRvd3N1Ym1pdGJ0bnsgXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lOztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRUJEODtcXG4gICAgfVxcbiAgICAgICAgLmFkZHRhc2t3aW5kb3dzdWJtaXRidG46aG92ZXIgeyBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICAgICAgICAgIGNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YwRUJEODtcXG4gICAgICAgIH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdEQUFnRDtBQUNwRDs7O0VBR0UsOEJBQThCO0FBQ2hDO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7SUFFSTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsbUJB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SSx5QkFBeUI7WUFDekIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQix5QkFBeUI7UUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRDJENDQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuICAvKiBUT1AgTkFWSUdBVElPTiBCQVIgU1RZTEVTICovXFxuLm5hdkJhciB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4ubmF2QmFyIGRpdiB7IFxcbiAgICBmbGV4OiAxIDEgMzMlO1xcbn1cXG5cXG4gICAgLm5hdkJhckxlZnQgeyBcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgfVxcbiAgICAuYWRkUHJvamVjdEJ0biB7IFxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTs7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICB9XFxuICAgICAgICAuYWRkUHJvamVjdEJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgfVxcbiAgICAubmF2QmFyUmlnaHQgeyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgfVxcbiAgICAgICAgLmxvZ2luYnRuIHsgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmxvZ2luYnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5zaWdudXBidG4geyBcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTs7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuc2lnbnVwYnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgICAgIH1cXG5cXG4vKiBWRVJUSUNBTCBOQVZJR0FUSU9OIEJBUiBTVFlMRVMgKi9cXG5cXG4udm5hdiB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTB2aDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiAgICAudm5hdi1idG57IFxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgICAgIC52bmF2LWJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuLyogQUREIFBST0pFQ1QgV0lORE9XIEZPUk0gKi9cXG5cXG4uYWRkcHJvamVjdHdpbmRvdyB7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTglO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB6LWluZGV4OiAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U1Qzc2O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuXFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgZmxleC1ncm93OiBpbmhlcml0O1xcbn1cXG4gICAgLmFkZHByb2plY3R3aW5kb3diYW5uZXIgeyBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICB0b3A6IC0xcHg7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMTAxJVxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgIC5hZGRwcm9qZWN0d2luZG93YmFubmVyY2xvc2VidG4geyBcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbGVmdDogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYzQjMwO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgY29sb3I6ICNGRjNCMzA7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgLmFkZHByb2plY3R3aW5kb3diYW5uZXJjbG9zZWJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYzQjMwO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgLmFkZHByb2plY3R3aW5kb3diYW5uZXJ0aXRsZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcbiAgICAuYWRkcHJvamVjdHdpbmRvd2lucHV0IHsgXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIH1cXG4gICAgLmFkZHByb2plY3R3aW5kb3dzdWJtaXRidG57IFxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTs7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgIH1cXG4gICAgICAgIC5hZGRwcm9qZWN0d2luZG93c3VibWl0YnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgICAgICAgICBjb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICB9XFxuXFxuLyogT1ZFUkxBWSBESU1NRVIgKi9cXG4uZGFya292ZXJsYXkgeyBcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBQUk9KRUNUIEJPWEVTICovXFxuLmNvbnRlbnQgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMDUxKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuICAgIC5wcm9qZWN0Ym94IHsgXFxuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBnYXA6IDE1cHg7XFxuICAgICAgICB9XFxuICAgICAgICAucHJvamVjdGJhbm5lciB7IFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IC0xcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVCRDg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAuZGVsZXRlcHJvamVjdGJ0biB7IFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkYzQjMwO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRjNCMzA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAuZGVsZXRlcHJvamVjdGJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGM0IzMDtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucHJvamVjdHRpdGxleyBcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmFkZHRhc2tidG4geyBcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDRDk2NDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNENEOTY0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgLmFkZHRhc2tidG46aG92ZXIgeyBcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0Q5NjQ7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAvKiBUQVNLIEJPWEVTICovXFxuXFxuLnRhc2tib3h7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ4Q0FCO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4gICAgLnRhc2t0aXRsZSB7IFxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgfVxcbiAgICAudGFza2R1ZWRhdGUgeyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgY29sb3I6ICM0NTQ1NDU7XFxuICAgIH1cXG4gICAgLnRhc2tjb21wbGV0ZWRtYXJrZXJ7IFxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDEwcHg7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFQkQ4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzNFNUM3NjtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbi8qIEFERCBUQVNLIFdJTkRPVyAqL1xcblxcbi5hZGR0YXNrd2luZG93eyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE4JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNFNUM3NjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0YwRUJEODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICB6LWluZGV4OiAyO1xcblxcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGZsZXgtZ3JvdzogaW5oZXJpdDtcXG59XFxuLmFkZHRhc2t3aW5kb3diYW5uZXIgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgIHRvcDogLTFweDtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIHdpZHRoOiAxMDElXFxufVxcbiAgICAuYWRkdGFza3dpbmRvd2Jhbm5lcmNsb3NlYnRuIHsgXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGM0IzMDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGNvbG9yOiAjRkYzQjMwO1xcbiAgICB9XFxuICAgICAgICAuYWRkdGFza3dpbmRvd2Jhbm5lcmNsb3NlYnRuOmhvdmVyIHsgXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGM0IzMDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xcbiAgICAgICAgfVxcbiAgICAuYWRkdGFza3dpbmRvd2Jhbm5lcnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICAgIC5hZGR0YXNrd2luZG93aW5wdXQgeyBcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuYWRkdGFza3dpbmRvd2RhdGUgeyBcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5hZGR0YXNrd2luZG93cHJpb3JpdHkgeyBcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5hZGR0YXNrd2luZG93c3VibWl0YnRueyBcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUJEODtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICB9XFxuICAgICAgICAuYWRkdGFza3dpbmRvd3N1Ym1pdGJ0bjpob3ZlciB7IFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTVDNzY7XFxuICAgICAgICAgICAgY29sb3I6ICNGMEVCRDg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xcbiAgICAgICAgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL2ltcG9ydHMgXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMuanMnO1xuaW1wb3J0IHsgcHJvamVjdHMsIFByb2plY3QsIFRhc2sgfSBmcm9tICcuL2luZGV4LmpzJztcblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5QWRkUHJvamVjdFdpbmRvdygpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkUHJvamVjdFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhZGRwcm9qZWN0d2luZG93Jyk7XG4gICAgYWRkUHJvamVjdFdpbmRvdy5pZCA9ICdhZGRwcm9qZWN0d2luZG93JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFByb2plY3RXaW5kb3cpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0V2luZG93QmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFByb2plY3RXaW5kb3dCYW5uZXIuY2xhc3NMaXN0LmFkZCgnYWRkcHJvamVjdHdpbmRvd2Jhbm5lcicpO1xuICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyLmlkID0gJ2FkZHByb2plY3R3aW5kb3diYW5uZXInO1xuICAgICAgICBhZGRQcm9qZWN0V2luZG93LmFwcGVuZENoaWxkKGFkZFByb2plY3RXaW5kb3dCYW5uZXIpO1xuICAgICAgICAgICAgY29uc3QgYWRkUHJvamVjdFdpbmRvd0Jhbm5lckNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyQ2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnYWRkcHJvamVjdHdpbmRvd2Jhbm5lcmNsb3NlYnRuJyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyQ2xvc2VCdG4uaWQgPSAnYWRkcHJvamVjdHdpbmRvd2Jhbm5lcmNsb3NlYnRuJztcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dCYW5uZXJDbG9zZUJ0bi5pbm5lckhUTUwgPSAneCc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RXaW5kb3dCYW5uZXJDbG9zZUJ0bik7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0Jhbm5lckNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHByb2plY3Qgd2luZG93IGNsb3NlIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhcmtPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmtvdmVybGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRhcmtPdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RXaW5kb3dCYW5uZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dCYW5uZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdhZGRwcm9qZWN0d2luZG93YmFubmVydGl0bGUnKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyVGl0bGUuaWQgPSAnYWRkcHJvamVjdHdpbmRvd2Jhbm5lcnRpdGxlJztcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyVGl0bGUuaW5uZXJIVE1MID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93QmFubmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RXaW5kb3dCYW5uZXJUaXRsZSk7XG4gICAgICAgICAgICBjb25zdCBhZGRQcm9qZWN0V2luZG93SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0lucHV0LmNsYXNzTGlzdC5hZGQoJ2FkZHByb2plY3R3aW5kb3dpbnB1dCcpO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0lucHV0LmlkID0gJ2FkZHByb2plY3R3aW5kb3dpbnB1dCc7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93SW5wdXQucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBOYW1lJztcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3cuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFdpbmRvd0lucHV0KTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFByb2plY3RXaW5kb3dTdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dTdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkcHJvamVjdHdpbmRvd3N1Ym1pdGJ0bicpO1xuICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd1N1Ym1pdEJ0bi5pZCA9ICdhZGRwcm9qZWN0d2luZG93c3VibWl0YnRuJztcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dTdWJtaXRCdG4uaW5uZXJIVE1MID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3cuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFdpbmRvd1N1Ym1pdEJ0bik7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkZFByb2plY3RXaW5kb3dJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dJbnB1dC5wbGFjZWhvbGRlciA9ICdQbGVhc2UgZW50ZXIgYSBwcm9qZWN0IG5hbWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0lucHV0LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjt9XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0cy5zb21lKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBhZGRQcm9qZWN0V2luZG93SW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dJbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IGFscmVhZHkgZXhpc3RzJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dJbnB1dC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47fVxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkUHJvamVjdFdpbmRvd0lucHV0LnZhbHVlLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3dJbnB1dC5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IG5hbWUgdG9vIGxvbmcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkUHJvamVjdFdpbmRvd0lucHV0LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjt9XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHByb2plY3Qgd2luZG93IHN1Ym1pdCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoYWRkUHJvamVjdFdpbmRvd0lucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrb3ZlcmxheScpO1xuICAgICAgICAgICAgICAgICAgICBkYXJrT3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xufVxuZXhwb3J0IHsgZGlzcGxheUFkZFByb2plY3RXaW5kb3cgfTsiLCJpbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMnO1xuaW1wb3J0IHsgcHJvamVjdHMsIFByb2plY3QsIFRhc2sgfSBmcm9tICcuL2luZGV4LmpzJztcblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5QWRkVGFza1dpbmRvdyhwcm9qZWN0TmFtZSkgeyBcbiAgICBjb25zb2xlLmxvZygnYWRkaW5nIHRhc2sgZm9yICcgKyBwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdkYXJrb3ZlcmxheScpO1xuICAgIGRhcmtPdmVybGF5LmlkID0gJ2RhcmtvdmVybGF5JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRhcmtPdmVybGF5KTtcblxuICAgIGNvbnN0IGFkZFRhc2tXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUYXNrV2luZG93LmNsYXNzTGlzdC5hZGQoJ2FkZHRhc2t3aW5kb3cnKTtcbiAgICBhZGRUYXNrV2luZG93LmlkID0gJ2FkZHRhc2t3aW5kb3cnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza1dpbmRvdyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tXaW5kb3dCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkVGFza1dpbmRvd0Jhbm5lci5jbGFzc0xpc3QuYWRkKCdhZGR0YXNrd2luZG93YmFubmVyJyk7XG4gICAgICAgIGFkZFRhc2tXaW5kb3dCYW5uZXIuaWQgPSAnYWRkdGFza3dpbmRvd2Jhbm5lcic7XG4gICAgICAgIGFkZFRhc2tXaW5kb3cuYXBwZW5kQ2hpbGQoYWRkVGFza1dpbmRvd0Jhbm5lcik7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tXaW5kb3dCYW5uZXJDbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrV2luZG93QmFubmVyQ2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnYWRkdGFza3dpbmRvd2Jhbm5lcmNsb3NlYnRuJyk7XG4gICAgICAgIGFkZFRhc2tXaW5kb3dCYW5uZXJDbG9zZUJ0bi5pZCA9ICdhZGR0YXNrd2luZG93YmFubmVyY2xvc2VidG4nO1xuICAgICAgICBhZGRUYXNrV2luZG93QmFubmVyQ2xvc2VCdG4uaW5uZXJIVE1MID0gJ3gnO1xuICAgICAgICBhZGRUYXNrV2luZG93QmFubmVyLmFwcGVuZENoaWxkKGFkZFRhc2tXaW5kb3dCYW5uZXJDbG9zZUJ0bik7XG4gICAgICAgIGFkZFRhc2tXaW5kb3dCYW5uZXJDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRhc2sgd2luZG93IGNsb3NlIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgYWRkVGFza1dpbmRvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrb3ZlcmxheScpO1xuICAgICAgICAgICAgICAgIGRhcmtPdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrV2luZG93QmFubmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGFkZFRhc2tXaW5kb3dCYW5uZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdhZGR0YXNrd2luZG93YmFubmVydGl0bGUnKTtcbiAgICAgICAgICAgIGFkZFRhc2tXaW5kb3dCYW5uZXJUaXRsZS5pZCA9ICdhZGR0YXNrd2luZG93YmFubmVydGl0bGUnO1xuICAgICAgICAgICAgYWRkVGFza1dpbmRvd0Jhbm5lclRpdGxlLmlubmVySFRNTCA9ICdBZGQgVGFzayB0byAnICsgcHJvamVjdE5hbWU7XG4gICAgICAgICAgICBhZGRUYXNrV2luZG93QmFubmVyLmFwcGVuZENoaWxkKGFkZFRhc2tXaW5kb3dCYW5uZXJUaXRsZSk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tXaW5kb3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGFkZFRhc2tXaW5kb3dJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGR0YXNrd2luZG93aW5wdXQnKTtcbiAgICAgICAgYWRkVGFza1dpbmRvd0lucHV0LmlkID0gJ2FkZHRhc2t3aW5kb3dpbnB1dCc7XG4gICAgICAgIGFkZFRhc2tXaW5kb3dJbnB1dC5wbGFjZWhvbGRlciA9ICdUYXNrIE5hbWUnO1xuICAgICAgICBhZGRUYXNrV2luZG93LmFwcGVuZENoaWxkKGFkZFRhc2tXaW5kb3dJbnB1dCk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tXaW5kb3dEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgYWRkVGFza1dpbmRvd0RhdGUuY2xhc3NMaXN0LmFkZCgnYWRkdGFza3dpbmRvd2RhdGUnKTtcbiAgICAgICAgYWRkVGFza1dpbmRvd0RhdGUuaWQgPSAnYWRkdGFza3dpbmRvd2RhdGUnO1xuICAgICAgICBhZGRUYXNrV2luZG93RGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgICAgICBhZGRUYXNrV2luZG93LmFwcGVuZENoaWxkKGFkZFRhc2tXaW5kb3dEYXRlKTtcbiAgICAgICAgY29uc3QgYWRkVGFza1dpbmRvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGFkZFRhc2tXaW5kb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdhZGR0YXNrd2luZG93cHJpb3JpdHknKTtcbiAgICAgICAgYWRkVGFza1dpbmRvd1ByaW9yaXR5LmlkID0gJ2FkZHRhc2t3aW5kb3dwcmlvcml0eSc7XG4gICAgICAgIGFkZFRhc2tXaW5kb3cuYXBwZW5kQ2hpbGQoYWRkVGFza1dpbmRvd1ByaW9yaXR5KTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRhc2tXaW5kb3dQcmlvcml0eU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGFkZFRhc2tXaW5kb3dQcmlvcml0eU9wdGlvbjEuY2xhc3NMaXN0LmFkZCgnYWRkdGFza3dpbmRvd3ByaW9yaXR5b3B0aW9uJyk7XG4gICAgICAgICAgICBhZGRUYXNrV2luZG93UHJpb3JpdHlPcHRpb24xLmlkID0gJ2FkZHRhc2t3aW5kb3dwcmlvcml0eW9wdGlvbjEnO1xuICAgICAgICAgICAgYWRkVGFza1dpbmRvd1ByaW9yaXR5T3B0aW9uMS52YWx1ZSA9ICdub3QgaW1wb3J0YW50JztcbiAgICAgICAgICAgIGFkZFRhc2tXaW5kb3dQcmlvcml0eU9wdGlvbjEuaW5uZXJIVE1MID0gJ05vcm1hbCc7XG4gICAgICAgICAgICBhZGRUYXNrV2luZG93UHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVGFza1dpbmRvd1ByaW9yaXR5T3B0aW9uMSk7XG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrV2luZG93UHJpb3JpdHlPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBhZGRUYXNrV2luZG93UHJpb3JpdHlPcHRpb24yLmNsYXNzTGlzdC5hZGQoJ2FkZHRhc2t3aW5kb3dwcmlvcml0eW9wdGlvbicpO1xuICAgICAgICAgICAgYWRkVGFza1dpbmRvd1ByaW9yaXR5T3B0aW9uMi5pZCA9ICdhZGR0YXNrd2luZG93cHJpb3JpdHlvcHRpb24yJztcbiAgICAgICAgICAgIGFkZFRhc2tXaW5kb3dQcmlvcml0eU9wdGlvbjIudmFsdWUgPSAnaW1wb3J0YW50JztcbiAgICAgICAgICAgIGFkZFRhc2tXaW5kb3dQcmlvcml0eU9wdGlvbjIuaW5uZXJIVE1MID0gJ0ltcG9ydGFudCc7XG4gICAgICAgICAgICBhZGRUYXNrV2luZG93UHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVGFza1dpbmRvd1ByaW9yaXR5T3B0aW9uMik7XG5cbiAgICAgICAgY29uc3QgYWRkVGFza1dpbmRvd1N1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrV2luZG93U3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZHRhc2t3aW5kb3dzdWJtaXRidG4nKTtcbiAgICAgICAgYWRkVGFza1dpbmRvd1N1Ym1pdEJ0bi5pZCA9ICdhZGR0YXNrd2luZG93c3VibWl0YnRuJztcbiAgICAgICAgYWRkVGFza1dpbmRvd1N1Ym1pdEJ0bi5pbm5lckhUTUwgPSAnQWRkIFRhc2snO1xuICAgICAgICBhZGRUYXNrV2luZG93LmFwcGVuZENoaWxkKGFkZFRhc2tXaW5kb3dTdWJtaXRCdG4pO1xuICAgICAgICBhZGRUYXNrV2luZG93U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFkZFRhc2tXaW5kb3dJbnB1dC52YWx1ZSA9PSAnJykge1xuICAgICAgICAgICAgICAgIGFkZFRhc2tXaW5kb3dJbnB1dC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCc7XG4gICAgICAgICAgICAgICAgYWRkVGFza1dpbmRvd0lucHV0LnBsYWNlaG9sZGVyID0gJ1Rhc2sgTmFtZSBSZXF1aXJlZCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCB0YXNrIHdpbmRvdyBzdWJtaXQgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHRhc2t3aW5kb3dpbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkdGFza3dpbmRvd2RhdGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGR0YXNrd2luZG93cHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0YXNrTmFtZSwgXCIgXCIsIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VGFzayk7XG4gICAgICAgICAgICAvLyBhZGQgbmV3IHRhc2sgdG8gcHJvamVjdCB0aGF0IGlzIG5hbWVkIHByb2plY3ROYW1lXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RzW2ldLm5hbWUgPT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0udGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgICAgICAgICAgICAgICBhZGRUYXNrV2luZG93LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrb3ZlcmxheScpO1xuICAgICAgICAgICAgICAgICAgICBkYXJrT3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgKTtcblxufVxuZXhwb3J0IHsgZGlzcGxheUFkZFRhc2tXaW5kb3cgfTsiLCIvLyBpbXBvcnRzIFxuaW1wb3J0IHsgcHJvamVjdHMsIFByb2plY3QsIFRhc2sgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IGRpc3BsYXlBZGRUYXNrV2luZG93IH0gZnJvbSAnLi9hZGQtdGFzay13aW5kb3cuanMnO1xuXG5cblxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHsgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Qm94LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Rib3gnKTtcbiAgICAgICAgcHJvamVjdEJveC5pZCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Qm94KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RCYW5uZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdGJhbm5lcicpO1xuICAgICAgICAgICAgcHJvamVjdEJhbm5lci5pZCA9ICdwcm9qZWN0YmFubmVyJyArIHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIHByb2plY3RCb3guYXBwZW5kQ2hpbGQocHJvamVjdEJhbm5lcik7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlcHJvamVjdGJ0bicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdG4uaWQgPSAnZGVsZXRlcHJvamVjdGJ0bicgKyBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5pbm5lckhUTUwgPSAneCc7XG4gICAgICAgICAgICAgICAgcHJvamVjdEJhbm5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUnICsgcHJvamVjdC5uYW1lICsgJ2J1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0dGl0bGUnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuaWQgPSAncHJvamVjdHRpdGxlJyArIHByb2plY3QubmFtZTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3RCYW5uZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbi8vIGRpc3BsYXkgdGFza3NcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0JveC5jbGFzc0xpc3QuYWRkKCd0YXNrYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tCb3guaWQgPSAndGFza2JveCcgKyB0YXNrLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RCb3guYXBwZW5kQ2hpbGQodGFza0JveCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5pZCA9ICd0YXNrdGl0bGUnICsgdGFzay5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLmlubmVySFRNTCA9IHRhc2submFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrZHVlZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuaWQgPSAndGFza2R1ZWRhdGUnICsgdGFzay5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2ltcG9ydGFudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQm94LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrQ29tcGxldGVkTWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ29tcGxldGVkTWFya2VyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tjb21wbGV0ZWRtYXJrZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDb21wbGV0ZWRNYXJrZXIuaWQgPSAndGFza2NvbXBsZXRlZG1hcmtlcicgKyB0YXNrLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ29tcGxldGVkTWFya2VyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0JveC5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGVkTWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ29tcGxldGVkTWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGFzayBjb21wbGV0ZWQgbWFya2VyIGNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0NvbXBsZXRlZE1hcmtlci5pbm5lckhUTUwgPSAn4pyTJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDb21wbGV0ZWRNYXJrZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0Q0Q5NjQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0JveC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tDb21wbGV0ZWRNYXJrZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrQ29tcGxldGVkTWFya2VyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRjBFQkQ4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tCb3guc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuLy8gYWRkIGFkZCB0YXNrIGJ0biBcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGR0YXNrYnRuJyk7XG4gICAgICAgICAgICAgICAgYWRkVGFza0J0bi5pZCA9ICdhZGR0YXNrYnRuJyArIHByb2plY3QubmFtZTtcbiAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmlubmVySFRNTCA9ICcrJztcbiAgICAgICAgICAgICAgICBwcm9qZWN0QmFubmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgICAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUFkZFRhc2tXaW5kb3cocHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgfSk7XG59XG5leHBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfTsiLCIvLyBpbXBvcnRzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGRpc3BsYXlQYWdlVGVtcGxhdGUgfSBmcm9tICcuL3BhZ2UtdGVtcGxhdGUnO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9kaXNwbGF5LXByb2plY3RzJztcblxuXG4vLyBsaWJyYXJpZXMgXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4vLyBjbGFzc2VzXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLyBzYW1wbGUgcHJvamVjdHMgYW5kIHRhc2tzIC8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3Qgc2FtcGxlUHJvamVjdDEgPSBuZXcgUHJvamVjdCgnVGVzdCBQcm9qZWN0IDEnKTtcbmNvbnN0IHNhbXBsZVByb2plY3QyID0gbmV3IFByb2plY3QoJ1Byb2plY3QgMicpO1xuY29uc3Qgc2FtcGxlUHJvamVjdDMgPSBuZXcgUHJvamVjdCgnUHJvamVjdCAzJyk7XG5cbmNvbnN0IHNhbXBsZVRhc2sxID0gbmV3IFRhc2soJ0NyZWF0ZSBUb0RvIGxpc3QgZm9yIE9kaW4nLCAnVGhpcyBpcyB0YXNrIDEnLCAnMjAyNC0wMS0wMScsICdpbXBvcnRhbnQnKTtcbmNvbnN0IHNhbXBsZVRhc2syID0gbmV3IFRhc2soJ1Rhc2sgMicsICdUaGlzIGlzIHRhc2sgMicsICcyMDI0LTAxLTAxJywgJ25vdCBpbXBvcnRhbnQnKTtcbnNhbXBsZVByb2plY3QxLnRhc2tzLnB1c2goc2FtcGxlVGFzazEpO1xuc2FtcGxlUHJvamVjdDEudGFza3MucHVzaChzYW1wbGVUYXNrMik7XG5wcm9qZWN0cy5wdXNoKHNhbXBsZVByb2plY3QxKTtcblxuY29uc3Qgc2FtcGxlVGFzazMgPSBuZXcgVGFzaygnVGFzayAzJywgJ1RoaXMgaXMgdGFzayAzJywgJzIwMjQtMDEtMDEnLCAnaW1wb3J0YW50Jyk7XG5jb25zdCBzYW1wbGVUYXNrNCA9IG5ldyBUYXNrKCdUYXNrIDQnLCAnVGhpcyBpcyB0YXNrIDQnLCAnMjAyNC0wMS0wMScsICdub3QgaW1wb3J0YW50Jyk7XG5jb25zdCBzYW1wbGVUYXNrNyA9IG5ldyBUYXNrKCdUYXNrIDcnLCAnVGhpcyBpcyB0YXNrIDcnLCAnMjAyNC0wMS0wMScsICdub3QgaW1wb3J0YW50Jyk7XG5jb25zdCBzYW1wbGVUYXNrOCA9IG5ldyBUYXNrKCdUYXNrIDgnLCAnVGhpcyBpcyB0YXNrIDgnLCAnMjAyNC0wMS0wMScsICdub3QgaW1wb3J0YW50Jyk7XG5zYW1wbGVQcm9qZWN0Mi50YXNrcy5wdXNoKHNhbXBsZVRhc2szKTtcbnNhbXBsZVByb2plY3QyLnRhc2tzLnB1c2goc2FtcGxlVGFzazQpO1xuc2FtcGxlUHJvamVjdDIudGFza3MucHVzaChzYW1wbGVUYXNrNyk7XG5zYW1wbGVQcm9qZWN0Mi50YXNrcy5wdXNoKHNhbXBsZVRhc2s4KTtcbnByb2plY3RzLnB1c2goc2FtcGxlUHJvamVjdDIpO1xuXG5jb25zdCBzYW1wbGVUYXNrNSA9IG5ldyBUYXNrKCdUYXNrIDUnLCAnVGhpcyBpcyB0YXNrIDUnLCAnMjAyNC0wMS0wMScsICdpbXBvcnRhbnQnKTtcbmNvbnN0IHNhbXBsZVRhc2s2ID0gbmV3IFRhc2soJ1Rhc2sgNicsICdUaGlzIGlzIHRhc2sgNicsICcyMDI0LTAxLTAxJywgJ25vdCBpbXBvcnRhbnQnKTtcbnNhbXBsZVByb2plY3QzLnRhc2tzLnB1c2goc2FtcGxlVGFzazUpO1xuc2FtcGxlUHJvamVjdDMudGFza3MucHVzaChzYW1wbGVUYXNrNik7XG5wcm9qZWN0cy5wdXNoKHNhbXBsZVByb2plY3QzKTtcblxuXG5leHBvcnQgeyBwcm9qZWN0cywgUHJvamVjdCwgVGFzayB9O1xuLy8gZnVuY3Rpb25zXG5cbi8vLy8vLy8vLy8gbG9hZCBwYWdlIHRlbXBsYXRlIC8vLy8vLy8vLy9cbmRpc3BsYXlQYWdlVGVtcGxhdGUoKTtcbmRpc3BsYXlQcm9qZWN0cygpO1xuXG5cbiIsIi8vIGZ1bmN0aW9uIHRvIGxvYWQgcGFnZSBjb250ZW50IFxuICAvLyBMb2FkIHRvcCBuYXYgXG4gIC8vIExvYWQgdmVydGljYWwgbmF2XG4gIC8vIGNyZWF0ZSBjb250ZW50IGRpdiBmb3IgcHJvamVjdHMgXG5cblxuICAvLyBpbXBvcnRzIFxuICAgIC8vbW9kdWVsc1xuICBpbXBvcnQgeyBkaXNwbGF5QWRkUHJvamVjdFdpbmRvdyB9IGZyb20gJy4vYWRkLXByb2plY3Qtd2luZG93JztcbiAgICAvL2ltYWdlc1xuICBpbXBvcnQgSG9tZUljb24gZnJvbSAnLi9pY29ucy9Ib21lLnBuZyc7XG4gIGNvbnN0IGhvbWVJY29uID0gbmV3IEltYWdlKCk7XG4gIGhvbWVJY29uLnNyYyA9IEhvbWVJY29uO1xuICBpbXBvcnQgVGFza3NJY29uIGZyb20gJy4vaWNvbnMvVGFza3MucG5nJztcbiAgY29uc3QgdGFza3NJY29uID0gbmV3IEltYWdlKCk7XG4gIHRhc2tzSWNvbi5zcmMgPSBUYXNrc0ljb247XG4gIGltcG9ydCBDb21wbGV0ZWRJY29uIGZyb20gJy4vaWNvbnMvQ29tcGxldGVkLnBuZyc7XG4gIGNvbnN0IGNvbXBsZXRlZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY29tcGxldGVkSWNvbi5zcmMgPSBDb21wbGV0ZWRJY29uO1xuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnZVRlbXBsYXRlKCkge1xuICAvLyBsb2FkIHRvcCBuYXYgXG4gIGNvbnN0IE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBOYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XG4gIE5hdkJhci5pZCA9ICduYXZCYXInO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKE5hdkJhcik7XG4gICAgY29uc3QgbmF2QmFyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhckxlZnQuY2xhc3NMaXN0LmFkZCgnbmF2QmFyTGVmdCcpO1xuICAgIG5hdkJhckxlZnQuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcbiAgICBOYXZCYXIuYXBwZW5kQ2hpbGQobmF2QmFyTGVmdCk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ0bicpO1xuICAgIGFkZFByb2plY3RCdG4uaW5uZXJIVE1MID0gJ0FkZCBQcm9qZWN0JztcbiAgICBOYXZCYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXJrT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdkYXJrb3ZlcmxheScpO1xuICAgICAgICBkYXJrT3ZlcmxheS5pZCA9ICdkYXJrb3ZlcmxheSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGFya092ZXJsYXkpO1xuICAgICAgICBkaXNwbGF5QWRkUHJvamVjdFdpbmRvdygpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBuYXZCYXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhclJpZ2h0LmNsYXNzTGlzdC5hZGQoJ25hdkJhclJpZ2h0Jyk7XG4gICAgbmF2QmFyUmlnaHQuaW5uZXJIVE1MID0gJyc7XG4gICAgTmF2QmFyLmFwcGVuZENoaWxkKG5hdkJhclJpZ2h0KTtcbiAgICAgIGNvbnN0IGxvZ0luQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBsb2dJbkJ0bi5jbGFzc0xpc3QuYWRkKCdsb2dpbmJ0bicpO1xuICAgICAgbG9nSW5CdG4uaW5uZXJIVE1MID0gJ0xvZyBJbic7XG4gICAgICBuYXZCYXJSaWdodC5hcHBlbmRDaGlsZChsb2dJbkJ0bik7XG4gICAgICBjb25zdCBzaWduVXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHNpZ25VcEJ0bi5jbGFzc0xpc3QuYWRkKCdzaWdudXBidG4nKTtcbiAgICAgIHNpZ25VcEJ0bi5pbm5lckhUTUwgPSAnU2lnbiBVcCc7XG4gICAgICBuYXZCYXJSaWdodC5hcHBlbmRDaGlsZChzaWduVXBCdG4pO1xuICAvLyBsb2FkIHZlcnRpY2FsIG5hdlxuICBjb25zdCB2bmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZuYXZCYXIuY2xhc3NMaXN0LmFkZCgndm5hdicpO1xuICB2bmF2QmFyLmlkID0gJ3ZuYXYnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHZuYXZCYXIpO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ3ZuYXYtYnRuJyk7XG4gICAgaG9tZUJ0bi5pZCA9ICd2bmF2LWhvbWUtYnRuJztcbiAgICBob21lQnRuLmFwcGVuZENoaWxkKGhvbWVJY29uKTtcbiAgICB2bmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IHRhc2tzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza3NCdG4uY2xhc3NMaXN0LmFkZCgndm5hdi1idG4nKTtcbiAgICB0YXNrc0J0bi5pZCA9ICd2bmF2LXRhc2tzLWJ0bic7XG4gICAgdGFza3NCdG4uYXBwZW5kQ2hpbGQodGFza3NJY29uKTtcbiAgICB2bmF2QmFyLmFwcGVuZENoaWxkKHRhc2tzQnRuKTtcbiAgICAgIHRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndGFza3MgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IGNvbXBsZXRlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbXBsZXRlZEJ0bi5jbGFzc0xpc3QuYWRkKCd2bmF2LWJ0bicpO1xuICAgIGNvbXBsZXRlZEJ0bi5pZCA9ICd2bmF2LWNvbXBsZXRlZC1idG4nO1xuICAgIGNvbXBsZXRlZEJ0bi5hcHBlbmRDaGlsZChjb21wbGV0ZWRJY29uKTtcbiAgICB2bmF2QmFyLmFwcGVuZENoaWxkKGNvbXBsZXRlZEJ0bik7XG4gICAgICBjb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZWQgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgIH1cbiAgICApO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBjb250ZW50LmlkID0gJ2NvbnRlbnQnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuZXhwb3J0IHsgZGlzcGxheVBhZ2VUZW1wbGF0ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==