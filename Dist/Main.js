(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Source/General/ClassExtensions/CE_General.ts":
/*!******************************************************!*\
  !*** ./Source/General/ClassExtensions/CE_General.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Array.prototype._AddFunction_Inline = function SequenceEquals(otherArray) {
  var equalsFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
    return a == b;
  };
  if (this.length != otherArray.length) return false;
  return this.every(function (item, index) {
    return equalsFunc(item, otherArray[index]);
  });
};

/***/ }),

/***/ "./Source/General/Logging.ts":
/*!***********************************!*\
  !*** ./Source/General/Logging.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logging */ "./Source/General/Logging.ts");

G({
  Log: Log
});

function Log() {
  var _console;

  return (_console = console).log.apply(_console, arguments);
}

/***/ }),

/***/ "./Source/General/Start_0.ts":
/*!***********************************!*\
  !*** ./Source/General/Start_0.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Start_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Start_0 */ "./Source/General/Start_0.ts");
 // fake/empty import, so this module is correctly seen as module (rather than raw js script)

global["g"] = global;
g.G = G;

function G() {
  for (var _len = arguments.length, globalHolders = new Array(_len), _key = 0; _key < _len; _key++) {
    globalHolders[_key] = arguments[_key];
  }

  for (var _i = 0, _globalHolders = globalHolders; _i < _globalHolders.length; _i++) {
    var globalHolder = _globalHolders[_i];
    g.Extend(globalHolder);
  }
}

/***/ }),

/***/ "./Source/Input/ExtraKeys.ts":
/*!***********************************!*\
  !*** ./Source/Input/ExtraKeys.ts ***!
  \***********************************/
/*! exports provided: extraKeys, MouseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extraKeys", function() { return extraKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseButton", function() { return MouseButton; });
// full list here: http://cherrytree.at/misc/vk.htm
var extraKeys = {
  leftShift: 160,
  rightShift: 161,
  leftControl: 162,
  rightControl: 163,
  leftAlt: 164,
  rightAlt: 165,
  meta_windows: 91,
  // custom
  mouseLeft: 1000 + 1,
  mouseRight: 1000 + 2,
  mouseMiddle: 1000 + 3,
  mouseForward: 1000 + 4,
  mouseBackward: 1000 + 5,
  mouseWheelUp: 1000 + 6,
  mouseWheelDown: 1000 + 7,
  // number row
  N1: 49,
  // slashes and such

  /*slash: 191,
  backslash: 220,*/
  volumeDown: 174,
  volumeUp: 175,
  // numpad keys
  // All of these, except for numpadCenter, are in regular keycode collection, but kept here too since naming is confusing.
  // (For example, [numpad insert] is same as [insert], but [numpad +] is not same as [+].)
  // ==========
  numpadDivide: 111,
  numpadHome: 36,
  numpadUp: 38,
  numpadInsert: 45,
  numpadCenter: 12,
  numpadMultiply: 106,
  numpadSubtract: 109,
  numpadAdd: 107,
  numpadEnter: 108,
  numpadEnd: 35,
  numpadDown: 40
}; // smaller copy sets

var MouseButton;

(function (MouseButton) {
  MouseButton[MouseButton["Left"] = extraKeys.mouseLeft] = "Left";
  MouseButton[MouseButton["Right"] = extraKeys.mouseRight] = "Right";
  MouseButton[MouseButton["Middle"] = extraKeys.mouseMiddle] = "Middle";
  MouseButton[MouseButton["Forward"] = extraKeys.mouseForward] = "Forward";
  MouseButton[MouseButton["Backward"] = extraKeys.mouseBackward] = "Backward";
})(MouseButton || (MouseButton = {}));

/***/ }),

/***/ "./Source/Main.ts":
/*!************************!*\
  !*** ./Source/Main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _General_Start_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General/Start_0 */ "./Source/General/Start_0.ts");
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-vextensions */ "js-vextensions");
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_vextensions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _General_ClassExtensions_CE_General__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./General/ClassExtensions/CE_General */ "./Source/General/ClassExtensions/CE_General.ts");
/* harmony import */ var _General_ClassExtensions_CE_General__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_General_ClassExtensions_CE_General__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _General_Logging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./General/Logging */ "./Source/General/Logging.ts");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var death__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! death */ "death");
/* harmony import */ var death__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(death__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! process */ "process");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_6__);
// "static" imports



 //import "babel-core/register";



 //import { StartEventLoop, StopEventLoop } from "./Input/EventLoop";
//let addHotkeySystem = !process.argv.Contains("noHotkey");

__webpack_require__(/*! ./Utils/Bridge/Bridge_VDesktop */ "./Source/Utils/Bridge/Bridge_VDesktop.ts"); // subscripts
// ==========


__webpack_require__(/*! ./Scripts/General */ "./Source/Scripts/General.ts"); // shutdown
// ==========
//OnDeath({uncaughtException: true, exit: true})((signal, error)=> {


var OffDeath = death__WEBPACK_IMPORTED_MODULE_5___default()({
  uncaughtException: true,
  exit: true
})(function (signal, error) {
  ShutDown(signal, error);
  OffDeath();
});

function ShutDown(signal, error) {
  console.log("Signal: ".concat(signal, " Error: ").concat(error)); //StopEventLoop();
  //RemoveHooks();
} // PreExit message is sent by venryx-desktop just before it closes (so we have chance to clean up) 


process__WEBPACK_IMPORTED_MODULE_6___default.a.on("message", function (message) {
  if (message == "PreExit") {
    ShutDown("PreExit", null);
  }
}); // launch
// ==========

/*if (addHotkeySystem) {
    AddHook();
}*/
//StartEventLoop();

/***/ }),

/***/ "./Source/Scripts/General.ts":
/*!***********************************!*\
  !*** ./Source/Scripts/General.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var iohook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iohook */ "iohook");
/* harmony import */ var iohook__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(iohook__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input/ExtraKeys */ "./Source/Input/ExtraKeys.ts");

 // If using iohook turns out insufficient (eg. not being able to capture keypresses for a desired hotkey), try using the Windows RegisterHotKey function:
// * https://stackoverflow.com/questions/14799035/node-webkit-winapi/58314436#58314436
// * https://www.fluxbytes.com/csharp/how-to-register-a-global-hotkey-for-your-application-in-c
// If that doesn't work, I guess you'll have the use the node-ffi hook approach, even though I think it causes more overhead/delay. (see HotkeyManager.ts)

iohook__WEBPACK_IMPORTED_MODULE_0___default.a.useRawcode(true); // use rawcodes for shortcuts/hotkeys
// logging
// ==========

/*ioHook.on('keydown', event => {
    console.log(event); // { type: 'mousemove', x: 700, y: 400 }
});*/
// hotkeys
// ==========
// if using keycodes

/*const id = ioHook.registerShortcut([56, 3663], (keys) => {
    console.log('Shortcut called with keys: ', keys);
    // todo
});*/
// if using rawcodes

var id = iohook__WEBPACK_IMPORTED_MODULE_0___default.a.registerShortcut([_Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].leftControl, _Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].leftAlt, _Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].numpadEnd], function (keys) {
  console.log('Shortcut called with keys: ', keys);
}); // init
// ==========
// register and start hook

iohook__WEBPACK_IMPORTED_MODULE_0___default.a.start(false);
Log("Added listeners");

/***/ }),

/***/ "./Source/Utils/Bridge/Bridge_VDesktop.ts":
/*!************************************************!*\
  !*** ./Source/Utils/Bridge/Bridge_VDesktop.ts ***!
  \************************************************/
/*! exports provided: InDesktopApp, desktopBridge, sideScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InDesktopApp", function() { return InDesktopApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopBridge", function() { return desktopBridge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideScreen", function() { return sideScreen; });
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-vextensions */ "js-vextensions");
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_vextensions__WEBPACK_IMPORTED_MODULE_0__);

function InDesktopApp() {
  //return window.top != window && window.top.name == "Venryx Desktop";
  //return window.top != window;
  //return inElectron;
  return process.argv[2] && process.argv[2] == "asVDM";
}
var desktopBridge = new js_vextensions__WEBPACK_IMPORTED_MODULE_0__["Bridge"]({
  receiveChannelMessageFunc_adder: function receiveChannelMessageFunc_adder(receiveChannelMessageFunc) {
    if (!InDesktopApp()) return;
    process.on("message", function (channelMessage) {
      receiveChannelMessageFunc(channelMessage);
    });
  },
  sendChannelMessageFunc: function sendChannelMessageFunc(channelMessage) {
    if (!InDesktopApp()) return;
    process.send(channelMessage);
  }
}); // for module system
// ==========

var sideScreen = false;
desktopBridge.RegisterFunction("SetSideScreen", function (val) {
  Log("SideScreen value received in window-manager module! Val: " + val);
  sideScreen = val;
});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./Source/Main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./Source/Main.ts */"./Source/Main.ts");


/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "death":
/*!************************!*\
  !*** external "death" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("death");

/***/ }),

/***/ "iohook":
/*!*************************!*\
  !*** external "iohook" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("iohook");

/***/ }),

/***/ "js-vextensions":
/*!*********************************!*\
  !*** external "js-vextensions" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-vextensions");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ })

/******/ });
});
//# sourceMappingURL=Main.js.map