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

/***/ "./Source/General/Windows.ts":
/*!***********************************!*\
  !*** ./Source/General/Windows.ts ***!
  \***********************************/
/*! exports provided: user32, POINT, RECT, WINDOWPLACEMENT, WPF_ASYNCWINDOWPLACEMENT, SW_HIDE, SW_MAXIMIZE, SW_MINIMIZE, SW_RESTORE, SW_SHOW, SW_SHOWMINIMIZED, SW_SHOWMINNOACTIVE, SW_SHOWNA, SW_SHOWNOACTIVATE, SW_SHOWNORMAL, user32_extra, WindowInfo, GetWindowHandles, GetForegroundWindowHandle, GetForegroundWindowText, GetWindowText, GetWindowRect, GetWindowPlacement, SetWindowPlacement, SuspendState, SetSuspendState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user32", function() { return user32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POINT", function() { return POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECT", function() { return RECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOWPLACEMENT", function() { return WINDOWPLACEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WPF_ASYNCWINDOWPLACEMENT", function() { return WPF_ASYNCWINDOWPLACEMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW_HIDE", function() { return SW_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW_MAXIMIZE", function() { return SW_MAXIMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW_MINIMIZE", function() { return SW_MINIMIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW_RESTORE", function() { return SW_RESTORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW_SHOW", function() { return SW_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW_SHOWMINIMIZED", function() { return SW_SHOWMINIMIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW_SHOWMINNOACTIVE", function() { return SW_SHOWMINNOACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW_SHOWNA", function() { return SW_SHOWNA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW_SHOWNOACTIVATE", function() { return SW_SHOWNOACTIVATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW_SHOWNORMAL", function() { return SW_SHOWNORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user32_extra", function() { return user32_extra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowInfo", function() { return WindowInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWindowHandles", function() { return GetWindowHandles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetForegroundWindowHandle", function() { return GetForegroundWindowHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetForegroundWindowText", function() { return GetForegroundWindowText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWindowText", function() { return GetWindowText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWindowRect", function() { return GetWindowRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWindowPlacement", function() { return GetWindowPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetWindowPlacement", function() { return SetWindowPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspendState", function() { return SuspendState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSuspendState", function() { return SetSuspendState; });
/* harmony import */ var win32_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! win32-api */ "win32-api");
/* harmony import */ var win32_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(win32_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ffi_napi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ffi-napi */ "ffi-napi");
/* harmony import */ var ffi_napi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ffi_napi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ref_napi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ref-napi */ "ref-napi");
/* harmony import */ var ref_napi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ref_napi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-vextensions */ "./node_modules/js-vextensions/Dist/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Struct = __webpack_require__(/*! ref-struct-di */ "ref-struct-di")(ref_napi__WEBPACK_IMPORTED_MODULE_2___default.a); // mod win32-api to use number-based handles (instead of Buffers)
// ==========
// make-so any parameter or return type set to W.HWND ("HANDLE"), gets replaced with "int"
// For more info, see: https://github.com/waitingsong/node-win32-api/issues/16#issuecomment-540887760

/*let replacements = [
    {key: "HWND", oldValue: null, newValue: "int"},
];
replacements.forEach(a=> {
    a.oldValue = W[a.key];
    W[a.key] = a.newValue;
});*/


var replacements = [//{oldValue: "HANDLE", newValue: "int32"},
{
  oldValue: "uint64*",
  newValue: "int32"
}];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = Object(js_vextensions__WEBPACK_IMPORTED_MODULE_3__["CE"])(win32_api__WEBPACK_IMPORTED_MODULE_0__["User32"].apiDef).Pairs()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var pair = _step.value;
    var definitionArray = pair.value; //Log(`Name(${pair.key}) Returns(${pair.value[0]}) Arguments(${pair.value[1]})`);

    var nodes = Object(js_vextensions__WEBPACK_IMPORTED_MODULE_3__["GetTreeNodesInObjTree"])(definitionArray);
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var node = _step2.value;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = replacements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var replacement = _step3.value;

            if (node.Value === replacement.oldValue) {
              node.Value = replacement.newValue; //Log(`Replacing ${replacement.oldValue} with ${replacement.newValue}... @Path(${node.PathStr})`);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      } //Log(`New Name(${pair.key}) Returns(${pair.value[0]}) Arguments(${pair.value[1]})`);

    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
  /*let functionReplacements = [
      {name: "GetWindowTextW", value: []}
  ]
  functionReplacements.ForEach((replacement, {index, Break, Continue})=> {
      U.apiDef[replacement.name] = value;
  });*/
  //U.apiDef.GetWindowTextW = ["int32", ["int32", ref.refType("string") as any, "int32"]];

  /*U.apiDef.Pairs().forEach(pair=> {
      if (pair.key != "EnumWindows")
      delete U.apiDef[pair.key];
  })
  U.apiDef.VSet({
      ...U.apiDef.Including("EnumWindows"),
      GetWindowTextA: ["int32", ["int32", "string", "int32"]],
  } as any);*/
  //U.apiDef.GetWindowTextA = ["int32", ["int32", "string", "int32"]];

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var user32 = win32_api__WEBPACK_IMPORTED_MODULE_0__["User32"].load();
var POINT = Struct({
  'x': 'long',
  'y': 'long'
});
var RECT = Struct({
  'left': 'long',
  'top': 'long',
  'right': 'long',
  'bottom': 'long'
});
var WINDOWPLACEMENT = Struct({
  'length': 'uint',
  'flags': 'uint',
  'showCmd': 'uint',
  'ptMinPosition': POINT,
  'ptMaxPosition': POINT,
  'rcNormalPosition': RECT
}); //var WINDOWPLACEMENT_REF = ref.refType(WINDOWPLACEMENT);
// flags

var WPF_ASYNCWINDOWPLACEMENT = 4; // showCmd (from: https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-windowplacement)

var SW_HIDE = 0;
var SW_MAXIMIZE = 3;
var SW_MINIMIZE = 6;
var SW_RESTORE = 9;
var SW_SHOW = 5; //export const SW_SHOWMAXIMIZED = 3; // duplicate of SW_MAXIMIZE?

var SW_SHOWMINIMIZED = 2;
var SW_SHOWMINNOACTIVE = 7;
var SW_SHOWNA = 8;
var SW_SHOWNOACTIVATE = 4;
var SW_SHOWNORMAL = 1;
var user32_extra = new ffi_napi__WEBPACK_IMPORTED_MODULE_1___default.a.Library("user32", {
  //EnumWindows: ['bool', [voidPtr, 'int32']],
  //GetForegroundWindow: ["int32", []],
  GetWindowTextA: ["int32", ["int32", "string", "int32"]],
  //GetWindowTextA : ['long', ['long', stringPtr, 'long']]
  //GetWindowTextW: ["int32", ["int32", ref.refType("string"), "int32"]],
  GetWindowTextLengthW: ["int32", ["int32"]],
  GetWindowRect: ['bool', ['int32', "pointer"]],
  GetWindowPlacement: ["bool", ["int32", ref_napi__WEBPACK_IMPORTED_MODULE_2___default.a.refType(WINDOWPLACEMENT)]],
  SetWindowPlacement: ["bool", ["int32", ref_napi__WEBPACK_IMPORTED_MODULE_2___default.a.refType(WINDOWPLACEMENT)]],
  ShowWindow: ['bool', ['int32', 'int32']]
});
var WindowInfo = function WindowInfo() {
  _classCallCheck(this, WindowInfo);
};
function GetWindowHandles() {
  var result = [];
  var onFoundWindow = ffi_napi__WEBPACK_IMPORTED_MODULE_1___default.a.Callback('bool', ['long', 'int32'], function (handle, lParam) {
    result.push(handle);
    return true;
  });
  user32.EnumWindows(onFoundWindow, 0);
  return result;
}
/*export function GetWindowHandles() {
    let result = [] as DModel.HWND[];
    let onFoundWindow = ffi.Callback(W.BOOL, [W.HWND, W.LPARAM], (handle: DModel.HWND, lParam: number)=> {
        result.push(handle);
        return true;
    });
    user32.EnumWindows(onFoundWindow, 0);
    return result;
}*/

function GetForegroundWindowHandle() {
  //return user32.GetForegroundWindow().Int();
  return user32.GetForegroundWindow(); //return user32.GetForegroundWindow() as any as number;
}
function GetForegroundWindowText() {
  var handle = GetForegroundWindowHandle();
  return GetWindowText(handle);
} // Note: This function can cause an info-less crash, if: 1) using the W variant, 2) the buffer length is in a certain range [~8-280], 3) the program is launched using "node --inspect"

function GetWindowText(handle) {
  //let length = user32_extra.GetWindowTextLengthW(handle as any);
  //let bufferSize = 256;
  var bufferSize = 512;
  var buffer = new Buffer(bufferSize); //buffer.type = ref.types.CString;
  //let length = user32.GetWindowTextW(user32.GetForegroundWindow(), buffer, bufferSize);
  //let length = user32_extra.GetWindowTextA(handle, buffer, bufferSize);
  //let length = user32.GetWindowTextA(handle, buffer, bufferSize);
  //let length = user32.GetWindowTextW(handle.Buf(), buffer, bufferSize);

  var length = user32.GetWindowTextW(handle, buffer, bufferSize); //let length = user32.GetWindowTextW(handle as any, buffer, bufferSize);
  //return ref.readCString(buffer, 0);
  //return buffer.toString().substr(0, length as any);

  return buffer.toString('ucs2').replace(/\0+$/, '');
}
function GetWindowRect(handle) {
  //var rect = new rectStruct();
  //var rectPointer = ref.alloc(rectStructPointer);
  var rectPointer = Buffer.alloc(4 * 4); //Log("Address: " + ref.address(handle));
  //var success = user32_extra.GetWindowRect(handle, rect);
  //var success = user32_extra.GetWindowRect(ref.address(handle), repbuffer);

  var success = user32_extra.GetWindowRect(handle, rectPointer);
  if (!success) return null; //let rect = ref.get(rectPointer, 0, rectStructPointer).deref();
  //let rect = ref.get(rectPointer.buffer, 0, rectStructPointer).deref();
  //var repbuffer = new Buffer(4 * 4);

  var rect = RectPointerToRect(rectPointer); //Log("Rect: " + ToJSON(rect) + ";" + success);

  return RectToVRect(rect);
}
function GetWindowPlacement(handle) {
  var placementRef = ref_napi__WEBPACK_IMPORTED_MODULE_2___default.a.alloc(WINDOWPLACEMENT);
  user32_extra.GetWindowPlacement(handle, placementRef);
  return placementRef.deref(null);
}
function SetWindowPlacement(handle, placement) {
  /*var placementRef = ref.alloc(WINDOWPLACEMENT);
  placementRef.writeObject(0, state.placement);*/
  var placementRef = ref_napi__WEBPACK_IMPORTED_MODULE_2___default.a.alloc(WINDOWPLACEMENT, placement);
  return user32_extra.SetWindowPlacement(handle, placementRef);
}

function RectPointerToRect(rectPointer) {
  var rect = {};
  rect.left = rectPointer.readUInt32LE(0);
  rect.top = rectPointer.readUInt32LE(4);
  rect.right = rectPointer.readUInt32LE(8);
  rect.bottom = rectPointer.readUInt32LE(12);
  return rect;
}

function RectToVRect(rect) {
  return new js_vextensions__WEBPACK_IMPORTED_MODULE_3__["VRect"](rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top);
}

var SuspendState;

(function (SuspendState) {
  SuspendState[SuspendState["Sleep"] = 0] = "Sleep";
})(SuspendState || (SuspendState = {}));

var powrprof = ffi_napi__WEBPACK_IMPORTED_MODULE_1___default.a.Library('powrprof.dll', {
  SetSuspendState: ['int', ['int', 'int', 'int']]
});
function SetSuspendState(state) {
  if (state == SuspendState.Sleep) {
    powrprof.SetSuspendState(0, 0, 0);
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
  // 0-9
  numpadInsert: 45,
  numpadEnd: 35,
  numpadDown: 40,
  numpadPageDown: 34,
  numpadLeft: 37,
  numpadCenter: 12,
  numpadRight: 39,
  numpadHome: 36,
  numpadUp: 38,
  numpadPageUp: 33,
  // others, clockwise from top-left
  numpadDivide: 111,
  numpadMultiply: 106,
  numpadSubtract: 109,
  numpadAdd: 107,
  numpadEnter: 108
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
/* harmony import */ var js_vextensions_Helpers_ApplyCECode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-vextensions/Helpers/@ApplyCECode.js */ "./node_modules/js-vextensions/Helpers/@ApplyCECode.js");
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
/*! exports provided: WindowState, StoreStates, ShowStoredStates, RestoreStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowState", function() { return WindowState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreStates", function() { return StoreStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStoredStates", function() { return ShowStoredStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreStates", function() { return RestoreStates; });
/* harmony import */ var iohook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iohook */ "iohook");
/* harmony import */ var iohook__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(iohook__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input/ExtraKeys */ "./Source/Input/ExtraKeys.ts");
/* harmony import */ var _General_Windows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../General/Windows */ "./Source/General/Windows.ts");
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-vextensions */ "./node_modules/js-vextensions/Dist/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var windowTitlesToIgnore = [// never visible (as real window)
"Program Manager", // not really visible (at least usually -- and for me)
"Microsoft Text Input Application", "Backup and Sync", "Settings", "Microsoft Edge", // not needing placement-restoring, for other reasons
"Venryx Overlay"];
var WindowState = function WindowState(initialData) {
  _classCallCheck(this, WindowState);

  this.Extend(initialData);
};
var windowStates = {};
function StoreStates() {
  windowStates = {};
  var windows = Object(_General_Windows__WEBPACK_IMPORTED_MODULE_2__["GetWindowHandles"])();
  windows.forEach(function (handle) {
    if (!_General_Windows__WEBPACK_IMPORTED_MODULE_2__["user32"].IsWindowVisible(handle)) return;
    var text = Object(_General_Windows__WEBPACK_IMPORTED_MODULE_2__["GetWindowText"])(handle);
    if (text.length == 0) return;
    if (windowTitlesToIgnore.Contains(text)) return;
    var rect = Object(_General_Windows__WEBPACK_IMPORTED_MODULE_2__["GetWindowRect"])(handle);
    var placement = Object(_General_Windows__WEBPACK_IMPORTED_MODULE_2__["GetWindowPlacement"])(handle); //Log(`Found window. @Handle(${handle}) @Title(${text}) @Rect(${rect})`);

    var state = new WindowState({
      rect: rect,
      text: text,
      placement: placement
    });
    windowStates[handle] = state;
  });
  Log("States stored for ".concat(windowStates.Pairs().length, " windows."));
}
function ShowStoredStates() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = windowStates.Pairs()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _step.value,
          handle = _step$value.key,
          state = _step$value.value;
      Log("Window state: @Handle(".concat(handle, ") @Title(").concat(state.text, ") @Rect(").concat(state.rect, ") @Placement(").concat(Object(js_vextensions__WEBPACK_IMPORTED_MODULE_3__["ToJSON"])(state.placement), ")"));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
function RestoreStates() {
  var restoredWindows = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = windowStates.Pairs()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _step2.value,
          handle = _step2$value.keyNum,
          state = _step2$value.value;
      var placement = Object(_General_Windows__WEBPACK_IMPORTED_MODULE_2__["GetWindowPlacement"])(handle); // if placement is exactly the same as before, don't do anything

      if (Object(js_vextensions__WEBPACK_IMPORTED_MODULE_3__["ToJSON"])(placement) == Object(js_vextensions__WEBPACK_IMPORTED_MODULE_3__["ToJSON"])(state.placement)) continue;
      /*user32.ShowWindow(handle, SW_HIDE); // first, hide window (this seems to make the following steps get applied more quickly graphically)
      //user32.ShowWindow(handle, SW_SHOWMINNOACTIVE); // set show-state to "minimized", since maximized windows otherwise refuse to change screen
      user32.ShowWindow(handle, SW_RESTORE); // set show-state to "restored", since maximized windows otherwise refuse to change screen
      //user32.ShowWindow(handle, SW_SHOWNOACTIVATE); // set show-state to "restored", since maximized windows otherwise refuse to change screen
      //SetWindowPlacement(handle, E(state.placement, {showCmd: SW_RESTORE})); // apply old-placement, except have show-state be "restored", since most reliable for getting on correct screen
      SetWindowPlacement(handle, state.placement); // now that in "moveable" state, apply old-placement
      //SetWindowPlacement(handle, E(state.placement, {flags: WPF_ASYNCWINDOWPLACEMENT})); // now that in "moveable" state, apply old-placement*/
      // in case the window just changed screens, have taskbar entry moved to match

      /*user32.ShowWindow(handle, SW_HIDE);
      user32.ShowWindow(handle, SW_SHOWNA);*/
      //user32.ShowWindow(handle, SW_SHOWNA);
      //let finalPlacement = E(state.placement);
      // state.placement is an instance of a WindowPlacement class (node-ffi created; not the interface defined in Windows.ts), with the props as prototype getters (accessing the "ref.buffer" backing); thus, must use Clone to copy the values

      var finalPlacement = Object(js_vextensions__WEBPACK_IMPORTED_MODULE_3__["Clone"])(state.placement);
      finalPlacement.flags |= _General_Windows__WEBPACK_IMPORTED_MODULE_2__["WPF_ASYNCWINDOWPLACEMENT"]; // first, set show-state to "restored" on the correct screen (fixes taskbar-entry being on wrong screen (todo: confirm), and maximized windows refusing to change screen)
      //let restorePlacement = E(finalPlacement, {showCmd: SW_SHOWNOACTIVATE}); // this seems to sometimes make window really small, and not maximize from next command

      var restorePlacement = Object(js_vextensions__WEBPACK_IMPORTED_MODULE_3__["E"])(finalPlacement, {
        showCmd: _General_Windows__WEBPACK_IMPORTED_MODULE_2__["SW_RESTORE"]
      });
      Object(_General_Windows__WEBPACK_IMPORTED_MODULE_2__["SetWindowPlacement"])(handle, restorePlacement); // modify show-command to be the non-activating variant

      /*if (finalPlacement.showCmd == SW_MAXIMIZE) {
          // first, set show-state to "restored", since maximized windows otherwise refuse to change screen
          //let restorePlacement = E(finalPlacement, {showCmd: SW_SHOWNOACTIVATE}); // this seems to sometimes make window really small, and not maximize from next command
          /*let restorePlacement = E(finalPlacement, {showCmd: SW_RESTORE});
          SetWindowPlacement(handle, restorePlacement);*#/
            finalPlacement.showCmd = SW_MAXIMIZE;
      } else*/

      if (finalPlacement.showCmd == _General_Windows__WEBPACK_IMPORTED_MODULE_2__["SW_MINIMIZE"] || finalPlacement.showCmd == _General_Windows__WEBPACK_IMPORTED_MODULE_2__["SW_SHOWMINIMIZED"]) {
        finalPlacement.showCmd = _General_Windows__WEBPACK_IMPORTED_MODULE_2__["SW_SHOWMINNOACTIVE"];
      } else if (finalPlacement.showCmd == _General_Windows__WEBPACK_IMPORTED_MODULE_2__["SW_SHOWNORMAL"]) {
        finalPlacement.showCmd = _General_Windows__WEBPACK_IMPORTED_MODULE_2__["SW_SHOWNOACTIVATE"];
      } // apply final placement


      Object(_General_Windows__WEBPACK_IMPORTED_MODULE_2__["SetWindowPlacement"])(handle, finalPlacement);
      restoredWindows++;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  Log("States restored for ".concat(restoredWindows, " windows."));
} // hotkeys
// ==========
// If using iohook turns out insufficient (eg. not being able to capture keypresses for a desired hotkey), try using the Windows RegisterHotKey function:
// * https://stackoverflow.com/questions/14799035/node-webkit-winapi/58314436#58314436
// * https://www.fluxbytes.com/csharp/how-to-register-a-global-hotkey-for-your-application-in-c
// If that doesn't work, I guess you'll have the use the node-ffi hook approach, even though I think it causes more overhead/delay. (see HotkeyManager.ts)

iohook__WEBPACK_IMPORTED_MODULE_0___default.a.useRawcode(true); // use rawcodes for shortcuts/hotkeys
// logging

/*ioHook.on('keydown', event => {
    console.log(event); // { type: 'mousemove', x: 700, y: 400 }
});*/

iohook__WEBPACK_IMPORTED_MODULE_0___default.a.registerShortcut([_Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].leftControl, _Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].leftAlt, _Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].numpadEnd], function (keys) {
  return StoreStates();
});
iohook__WEBPACK_IMPORTED_MODULE_0___default.a.registerShortcut([_Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].leftControl, _Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].leftAlt, _Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].numpadDown], function (keys) {
  return ShowStoredStates();
});
iohook__WEBPACK_IMPORTED_MODULE_0___default.a.registerShortcut([_Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].leftControl, _Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].leftAlt, _Input_ExtraKeys__WEBPACK_IMPORTED_MODULE_1__["extraKeys"].numpadPageDown], function (keys) {
  return RestoreStates();
}); // register and start hook

iohook__WEBPACK_IMPORTED_MODULE_0___default.a.start(false);
Log("Added listeners"); // might as well store the window-states at module launch (no real negative, and helps for cases where forget to store states manually, since pre-sleep listener not yet developed)

StoreStates();

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
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-vextensions */ "./node_modules/js-vextensions/Dist/index.js");

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

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js ***!
  \**********************************************************************/
/*! exports provided: ArrayCE_funcs, ArrayCE, ArrayCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayCE_funcs", function() { return ArrayCE_funcs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayCE", function() { return ArrayCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayCES", function() { return ArrayCES; });
/* harmony import */ var _Utils_General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
/* harmony import */ var _Utils_Assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Assert */ "./node_modules/js-vextensions/Dist/Utils/Assert.js");
/* harmony import */ var _Utils_Types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const ArrayCE_funcs = {
    ForEach(func) {
        for (let i = 0; i < this.length; i++) {
            const controlOp = func(this[i], i, this);
            if (controlOp == "break")
                break;
            if (controlOp == "continue")
                continue;
            if (controlOp instanceof Array)
                return controlOp[1];
        }
    },
    ForEachAsync(func) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.length; i++) {
                const controlOp = yield func(this[i], i, this);
                if (controlOp == "break")
                    break;
                if (controlOp == "continue")
                    continue;
                if (controlOp instanceof Array)
                    return controlOp[1];
            }
        });
    },
    /*declare global { interface Array<T> { ForEachAsyncParallel(func: (value: T, index: number, array: T[])): Promise<void>; } }
    Array.prototype.ForEachAsync_Parallel = async function (this: Array<any>, fn) {
        await Promise.all(this.map(fn));
    },*/
    Contains(item) {
        return this.indexOf(item) != -1;
    },
    ContainsAny(...items) {
        for (const item of items) {
            if (this.indexOf(item) != -1) {
                return true;
            }
        }
        return false;
    },
    // for some reason, this platform doesn't have entries() defined
    /*entries() {
        var result = [];
        for (var i = 0; i < this.length; i++)
            result.push([i, this[i]]);
        return result;
    };*/
    Prepend(...newItems) {
        this.splice(0, 0, ...newItems);
    },
    Add(item) {
        return this.push(item);
    },
    CAdd(item) {
        this.push(item);
        return this;
    },
    TAdd(item) {
        this.push(item);
        return item;
    },
    AddRange(array) {
        //this.push(...array);
        // use loop, since sending them all as arguments fails when there are ~10000+ items
        for (const item of array) {
            this.push(item);
        }
        return this;
    },
    Remove(item) {
        var itemIndex = this.indexOf(item);
        if (itemIndex == -1)
            return false;
        this.splice(itemIndex, 1);
        return true;
    },
    RemoveAll(items) {
        for (let item of items) {
            ArrayCES.Remove(this, item);
        }
    },
    RemoveAt(index) {
        return this.splice(index, 1)[0];
    },
    Insert(index, obj) {
        this.splice(index, 0, obj);
    },
    SetItems(items) {
        this.splice(0, this.length, ...items);
        return this;
    },
    Reversed() {
        var clone = this.slice();
        clone.reverse();
        return clone;
    },
    //Object.prototype._AddFunction_Inline = function AsRef() { return new NodeReference_ByPath(this); }
    // Linq replacements
    // ----------
    Any(matchFunc) {
        for (let [index, item] of this.entries()) {
            if (matchFunc == null || matchFunc.call(item, item, index)) {
                return true;
            }
        }
        return false;
    },
    All(matchFunc) {
        for (let [index, item] of this.entries()) {
            if (!matchFunc.call(item, item, index)) {
                return false;
            }
        }
        return true;
    },
    Where(matchFunc) {
        var result = [];
        for (let [index, item] of this.entries()) {
            if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
                result.push(item);
            }
        }
        return result;
    },
    Select(selectFunc) {
        var result = [];
        for (let [index, item] of this.entries()) {
            result.push(selectFunc.call(item, item, index));
        }
        return result;
    },
    SelectMany(selectFunc) {
        //return [...this.entries()].reduce((acc, [index, item])=>acc.concat(selectFunc.call(item, item, index)), []);
        var result = [];
        for (let [index, item] of this.entries()) {
            ArrayCES.AddRange(result, selectFunc.call(item, item, index));
        }
        return result;
    },
    //Count(matchFunc) { return this.Where(matchFunc).length; };
    //Count(matchFunc) { return this.Where(matchFunc).length; }; // needed for items to be added properly to custom classes that extend Array
    // needed for items to be added properly to custom classes that extend Array
    Count() {
        return this.length;
    },
    VCount(matchFunc) {
        return ArrayCES.Where(this, matchFunc).length;
    },
    Clear() {
        /*while (this.length > 0)
            this.pop();*/
        this.splice(0, this.length);
    },
    First(matchFunc) {
        var result = ArrayCES.FirstOrX(this, matchFunc);
        if (result == null) {
            throw new Error("Matching item not found.");
        }
        return result;
    },
    FirstOrX(matchFunc, x = null) {
        if (matchFunc) {
            for (let [index, item] of this.entries()) {
                if (matchFunc.call(item, item, index)) {
                    return item;
                }
            }
        }
        else if (this.length > 0) {
            return this[0];
        }
        return x;
    },
    //FirstWithPropValue(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
    FirstWith(propName, propValue) {
        return ArrayCES.Where(this, function () { return this[propName] == propValue; })[0];
    },
    Last(matchFunc) {
        var result = ArrayCES.LastOrX(this, matchFunc);
        if (result === undefined) {
            throw new Error("Matching item not found.");
        }
        return result;
    },
    LastOrX(matchFunc, x = null) {
        if (matchFunc) {
            for (var i = this.length - 1; i >= 0; i--) {
                if (matchFunc.call(this[i], this[i], i)) {
                    return this[i];
                }
            }
        }
        else if (this.length > 0) {
            return this[this.length - 1];
        }
        return x;
    },
    XFromLast(x) {
        return this[(this.length - 1) - x];
    },
    Move(item, newIndex, /** Makes-so newIndex is the final index, even if after original/removal index. Default: true */ removeBeforeInsert = true) {
        var oldIndex = this.indexOf(item);
        /*if (oldIndex != -1) {
            this.RemoveAt(oldIndex);
            // New-index is understood to be the position-in-list to move the item to, as seen before the item started being moved.
            // So compensate for remove-from-old-position list modification.
            if (shiftInsertPointToPreserveFinalNeighbors && oldIndex < newIndex) {
                newIndex--;
            }
        }
        this.Insert(newIndex, item);*/
        if (removeBeforeInsert) {
            if (oldIndex != -1) {
                ArrayCES.RemoveAt(this, oldIndex);
            }
            ArrayCES.Insert(this, newIndex, item);
        }
        else {
            ArrayCES.Insert(this, newIndex, item);
            if (oldIndex != -1) {
                let oldEntry_currentIndex = newIndex <= oldIndex ? oldIndex + 1 : oldIndex; // if we just inserted the new version before the old entry, fix the old-entry's index by adding 1
                ArrayCES.RemoveAt(this, oldEntry_currentIndex);
            }
        }
        return oldIndex;
    },
    //ToList<T>(this: T[], itemType = null) { return [].concat(this); }
    /*ToDictionary(keyFunc, valFunc) {
        var result = new Dictionary();
        for (var i in this)
            result.Add(keyFunc(this[i]), valFunc(this[i]));
        return result;
    }*/
    ToMap(keyFunc, valFunc) {
        var result = {};
        for (let [index, item] of this.entries()) {
            result[keyFunc(item, index)] = valFunc(item, index);
        }
        return result;
    },
    Skip(count) {
        var result = [];
        for (let i = count; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    },
    Take(count) {
        var result = [];
        for (let i = 0; i < count && i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    },
    TakeLast(count) {
        var result = [];
        for (var i = 0; i < count && (this.length - 1) - i >= 0; i++) {
            result.push(this[(this.length - 1) - i]);
        }
        return result;
    },
    FindIndex(matchFunc) {
        for (let [index, item] of this.entries()) {
            if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
                return index;
            }
        }
        return -1;
    },
    /*FindIndex(matchFunc: (item: T)=>boolean) {
        for (let [index, item] of this.entries())
            if (matchFunc.call(item, item))
                    return index;
        return -1;
    };*/
    OrderBy(valFunc = (item, index) => item) {
        /*var temp = this.ToList();
        temp.sort((a, b)=>V.Compare(valFunc(a), valFunc(b)));
        return temp;*/
        return Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["StableSort"])(this, (a, b, aIndex, bIndex) => Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["Compare"])(valFunc(a, aIndex), valFunc(b, bIndex)));
    },
    OrderByDescending(valFunc = (item, index) => item) {
        return ArrayCES.OrderBy(this, (item, index) => -valFunc(item, index));
    },
    Distinct() {
        const result = [];
        /*for (const i in this) {
            if (!this.hasOwnProperty(i)) continue;*/
        for (let i = 0; i < this.length; i++) {
            if (!ArrayCES.Contains(result, this[i])) {
                result.push(this[i]);
            }
        }
        return result;
    },
    Except: (function (...args) {
        let opt, excludeItems;
        if (Object(_Utils_Types__WEBPACK_IMPORTED_MODULE_2__["IsObject"])(args[0]) && "excludeEachOnlyOnce" in args[0])
            [opt, ...excludeItems] = args;
        else
            excludeItems = args;
        if (opt && opt.excludeEachOnlyOnce) {
            const result = this.slice();
            for (const excludeItem of excludeItems) {
                ArrayCES.Remove(result, excludeItem);
            }
            return result;
        }
        return this.filter(a => !ArrayCES.Contains(excludeItems, a));
    }),
    IfEmptyThen(valIfSelfIsEmpty) {
        return this.length == 0 ? valIfSelfIsEmpty : this;
    },
    //JoinUsing(separator) { return this.join(separator);};
    Min(valFunc, asNumbers = false) {
        // only set asNumbers to true if providing a number[] array
        if (asNumbers) {
            /*const values = valFunc ? this.map(valFunc) : this;
            return Math.min(...values);*/
            Object(_Utils_Assert__WEBPACK_IMPORTED_MODULE_1__["Assert"])(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
            return Math.min(...this);
        }
        return ArrayCES.OrderBy(this, valFunc)[0];
    },
    Max(valFunc, asNumbers = false) {
        // only set asNumbers to true if providing a number[] array
        if (asNumbers) {
            /*const values = valFunc ? this.map(valFunc) : this;
            return Math.max(...values);*/
            Object(_Utils_Assert__WEBPACK_IMPORTED_MODULE_1__["Assert"])(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
            return Math.max(...this);
        }
        return ArrayCES.LastOrX(ArrayCES.OrderBy(this, valFunc));
    },
    Sum() {
        let total = 0;
        for (const item of this) {
            total += item;
        }
        return total;
    },
    Average() {
        const total = ArrayCES.Sum(this);
        return total / this.length;
    },
    Median() {
        const ordered = ArrayCES.OrderBy(this, a => a);
        if (this.length % 2 == 0) { // if even number of elements, average two middlest ones
            return ordered[(this.length / 2) - 1] + ordered[this.length / 2];
        }
        return ordered[this.length / 2]; // otherwise, return the exactly-middle one
    },
    Random() {
        let index = Math.floor(Math.random() * this.length);
        return this[index];
    },
    //oldJoin: [].join,
    Join(separator = ",") {
        if (this.length == 0)
            return "";
        //let result = "" + this[0];
        let result = this[0] != null ? "" + this[0] : ""; // to match behavior of native join
        for (var i = 1, len = this.length; i < len; i++) {
            result += separator;
            result += this[i] != null ? "" + this[i] : "";
        }
        /*let oldResult = oldJoin.apply(this, arguments);
        if (oldResult != result) debugger;*/
        return result;
    },
};
const ArrayCE = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["CreateProxyForClassExtensions"])(ArrayCE_funcs);
const ArrayCES = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["WithFuncsStandalone"])(ArrayCE_funcs);
/*var ArrayIterator = [].entries().constructor;
export class ArrayIteratorCEProxy {
    ToArray(this: ArrayIterator) {
        return Array.from(this);
    }
}
export const ArrayIteratorCE = CreateProxyForClassExtensions(ArrayIteratorCEProxy);*/
/*export class NodeListCEProxy {
    ToArray(this: NodeList) {
        return Array.from(this);
    }
}
export const NodeListCE = CreateProxyForClassExtensions(NodeListCEProxy);*/ 
//# sourceMappingURL=CE_Array.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Auto.js":
/*!*********************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Auto.js ***!
  \*********************************************************************/
/*! exports provided: CE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CE", function() { return CE; });
/* harmony import */ var _CE_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");
/* harmony import */ var _CE_Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CE_Number */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Number.js");
/* harmony import */ var _CE_Object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CE_Object */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js");
/* harmony import */ var _CE_String__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CE_String */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_String.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
/* harmony import */ var _Utils_Types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Utils/Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js");
/* harmony import */ var _CE_Others__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CE_Others */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js");







/*interface CE_Auto_I {
    (obj: Array<any>): typeof ArrayCE;
    (obj: Element): typeof ElementCE;
    (obj: number): typeof NumberCE;
    (obj: Object): typeof ObjectCE;
    (obj: string): typeof StringCE;
}

export const CE_Auto = ((obj)=> {
}) as CE_Auto_I;*/
let classExtensionMap = {
    Number: _CE_Number__WEBPACK_IMPORTED_MODULE_1__["NumberCE"],
    String: _CE_String__WEBPACK_IMPORTED_MODULE_3__["StringCE"],
    Date: _CE_Others__WEBPACK_IMPORTED_MODULE_6__["DateCE"],
    Element: ___WEBPACK_IMPORTED_MODULE_4__["ElementCE"],
    Function: _CE_Others__WEBPACK_IMPORTED_MODULE_6__["FunctionCE"],
    Array: _CE_Array__WEBPACK_IMPORTED_MODULE_0__["ArrayCE"],
    Object: _CE_Object__WEBPACK_IMPORTED_MODULE_2__["ObjectCE"],
};
function CE(obj, checkForUncommonDerived = false) {
    // first, try to get class-extension func based on direct constructor name (most common case)
    let typeName = obj.constructor ? obj.constructor.name : null;
    if (typeName && classExtensionMap[typeName]) {
        return classExtensionMap[typeName](obj);
    }
    // else, check each option using "instanceof" and such (needed for derived classes)
    if (checkForUncommonDerived) {
        if (Object(_Utils_Types__WEBPACK_IMPORTED_MODULE_5__["IsNumber"])(obj, true))
            return Object(_CE_Number__WEBPACK_IMPORTED_MODULE_1__["NumberCE"])(obj);
        if (Object(_Utils_Types__WEBPACK_IMPORTED_MODULE_5__["IsString"])(obj, true))
            return Object(_CE_String__WEBPACK_IMPORTED_MODULE_3__["StringCE"])(obj);
        if (obj instanceof Date)
            return Object(_CE_Others__WEBPACK_IMPORTED_MODULE_6__["DateCE"])(obj);
        if (Object(_Utils_Types__WEBPACK_IMPORTED_MODULE_5__["IsFunction"])(obj))
            return Object(_CE_Others__WEBPACK_IMPORTED_MODULE_6__["FunctionCE"])(obj);
        if (Object(_Utils_Types__WEBPACK_IMPORTED_MODULE_5__["IsArray"])(obj))
            return Object(_CE_Array__WEBPACK_IMPORTED_MODULE_0__["ArrayCE"])(obj);
    }
    if (obj instanceof Element)
        return Object(___WEBPACK_IMPORTED_MODULE_4__["ElementCE"])(obj);
    /*if (IsObject(obj)) return ObjectCE(obj);
    throw new Error(`Could not find class-extension helper for type "${obj.constructor ? obj.constructor.name : "n/a"}".`);*/
    return Object(_CE_Object__WEBPACK_IMPORTED_MODULE_2__["ObjectCE"])(obj);
}
//# sourceMappingURL=CE_Auto.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Element.js":
/*!************************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Element.js ***!
  \************************************************************************/
/*! exports provided: ElementCE_funcs, ElementCE, ElementCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementCE_funcs", function() { return ElementCE_funcs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementCE", function() { return ElementCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementCES", function() { return ElementCES; });
/* harmony import */ var _Utils_General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");

const ElementCE_funcs = {
    GetParents(topDown = false) {
        let result = [];
        let currentParent = this.parentElement;
        while (currentParent) {
            result.push(currentParent);
            currentParent = currentParent.parentElement;
        }
        if (topDown)
            result.reverse();
        return result;
    },
    GetSelfAndParents(topDown = false) {
        let result = ElementCE(this).GetParents(topDown);
        return topDown ? result.concat([this]) : [this].concat(result);
    },
    /*QuerySelectorAll_BreadthFirst(this: HTMLElement, selector: string) {
        var $found = [];
        let currentSet = this.childNodes.ToArray();
        while (currentSet.length) {
            let found = currentSet.filter(a=>a.matches(selector));
            if ($found.length) break;
            // Get all children of the current set
            $currentSet = $currentSet.children();
        }
        return $found.first(); // Return first match of the collection
    }*/
    QuerySelector_BreadthFirst(selector) {
        let currentLayerElements = Array.from(this.childNodes);
        while (currentLayerElements.length) {
            let firstMatchInLayer = currentLayerElements.find(a => a["matches"] && a["matches"](selector));
            if (firstMatchInLayer)
                return firstMatchInLayer;
            //currentLayerElements = currentLayerElements.SelectMany(a=>[...a.childNodes]);
            currentLayerElements = currentLayerElements.reduce((acc, item) => acc.concat(Array.from(item.childNodes)), []);
        }
        return null;
    },
    $(queryStr) {
        return Array.from(this.querySelectorAll(queryStr));
    },
};
const ElementCE = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["CreateProxyForClassExtensions"])(ElementCE_funcs);
// maybe make ElementCE preserve the target-type, like ObjectCE and ArrayCE do (not needed atm, since the CE-methods don't make any/much use of the target's type-data)
//export const ElementCE = CreateProxyForClassExtensions(ElementCE_funcs) as <T>(nextThis: T)=>ElementCEProxy;
const ElementCES = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["WithFuncsStandalone"])(ElementCE_funcs);
//# sourceMappingURL=CE_Element.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Number.js":
/*!***********************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Number.js ***!
  \***********************************************************************/
/*! exports provided: NumberCE_funcs, NumberCE, NumberCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberCE_funcs", function() { return NumberCE_funcs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberCE", function() { return NumberCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberCES", function() { return NumberCES; });
/* harmony import */ var _CE_String__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CE_String */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_String.js");
/* harmony import */ var _Utils_General__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
/* harmony import */ var _Utils_Types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js");



// Note: Since JS coerces number primitives to the Number class when a property-access is attempted (https://javascriptrefined.io/the-wrapper-object-400311b29151)...
// ...calling the functions below using, eg. "(3).WrapToRange" *should* make the "this" variable be a Number class within the WrapToRange function.
// However, this is not the case! -- at least when I try it in the Chrome console, with the actual Webpack-added function. (if I add a function with the exact same source using the console, it is coerced to Number as expected)
// I think it might be a Chrome optimization or something.
// Anyway, the code below is based on how it *should* work, with the "this" var always being a Number wrapper. (we use "as number" in some places below, since valueOf gets auto-called to enable the primitive math ops anyway)
const NumberCE_funcs = {
    IfN1Then(valIfSelfIsNeg1) {
        return this == -1 ? valIfSelfIsNeg1 : this;
    },
    NaNTo(valIfSelfIsNaN) {
        return Object(_Utils_Types__WEBPACK_IMPORTED_MODULE_2__["IsNaN"])(this) ? valIfSelfIsNaN : this;
    },
    //RoundToMultipleOf(step) { return Math.round(new Number(this) / step) * step; }; //return this.lastIndexOf(str, 0) === 0; };
    ToPercent(roundTo_multiple = 1) {
        return NumberCES.RoundTo(this * 100, roundTo_multiple);
    },
    FromPercent() {
        return this / 100;
    },
    ToPercentStr(/** The number of digits after the decimal point. Example: (.12345).ToPercentStr(1) == "12.3%" */ precision) {
        let number = this * 100;
        if (precision != null)
            return number.toFixed(precision) + "%";
        return number.toString() + "%";
    },
    IsMultipleOf(multipleOf, maxDistToBeMultiple) {
        let valRoundedToMultiple = NumberCE(this).RoundTo(multipleOf);
        let distance = NumberCE(valRoundedToMultiple).Distance(this);
        return distance <= maxDistToBeMultiple;
    },
    RoundTo(multiple) {
        //return Math.round(this / multiple) * multiple;
        // Don't ask me why this works, but it does, and is faster. From: http://phrogz.net/round-to-nearest-via-modulus-division
        /*var half = multiple / 2;
        return (this + half) - ((this + half) % multiple);*/
        // Realign/scale the possible values/multiples, so that each value is given an integer slot. Place the actual value (this) within the appropriate slot using Math.round() int-rounding, then reverse the scaling to get the true rounded value.
        // (This version handles fractions better. Ex: (.2 + .1).RoundTo(.1) == .3 [NOT 0.3000000000000004, as the simpler approach gives])
        let multiple_inverted = 1 / multiple;
        return Math.round(this * multiple_inverted) / multiple_inverted;
    },
    RoundTo_Str(multipleOf, fractionDigits, removeEmptyFraction = true) {
        var resultValue = NumberCE(this).RoundTo(multipleOf);
        var result = resultValue.toFixed(fractionDigits != null ? fractionDigits : Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(multipleOf.toString()).TrimStart("0").length - 1); // - 0);
        if (removeEmptyFraction && Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(result).Contains(".")) {
            result = Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(result).TrimEnd("0")).TrimEnd(".");
        }
        return result;
    },
    FloorTo(multipleOf) { return Math.floor(new Number(this) / multipleOf) * multipleOf; },
    FloorTo_Str(multipleOf) {
        var resultValue = NumberCE(this).FloorTo(multipleOf);
        var result = resultValue.toFixed(Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(multipleOf.toString()).TrimStart("0").length); // - 1);
        if (Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(result).Contains("."))
            result = Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(result).TrimEnd("0")).TrimEnd(".");
        return result;
    },
    CeilingTo(multipleOf) { return Math.ceil(new Number(this) / multipleOf) * multipleOf; },
    CeilingTo_Str(multipleOf) {
        var resultValue = NumberCE(this).CeilingTo(multipleOf);
        var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
        if (Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(result).Contains("."))
            result = Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(Object(_CE_String__WEBPACK_IMPORTED_MODULE_0__["StringCE"])(result).TrimEnd("0")).TrimEnd(".");
        //result = TrimEnd(TrimEnd(result, "0"), ".");
        return result;
    },
    KeepAtLeast(min) {
        return Math.max(min, this);
    },
    KeepAtMost(max) {
        return Math.min(max, this);
    },
    IsBetween(min, max, allowFixMinMax = true) {
        if (min > max && allowFixMinMax) {
            [min, max] = [max, min];
        }
        return this >= min && this <= max;
    },
    KeepBetween(min, max, allowFixMinMax = true) {
        if (min > max && allowFixMinMax) {
            [min, max] = [max, min];
        }
        if (this < min)
            return min;
        if (this > max)
            return max;
        return this;
    },
    WrapToRange(min, max, maxOut = true) {
        let val = this;
        let size = max - min;
        while (val < min)
            val += size;
        while (maxOut ? val >= max : val > max)
            val -= size;
        return val;
    },
    Distance(other) {
        return Math.abs(this - other);
    },
    ToPower(power) {
        return Math.pow(this, power);
    },
};
const NumberCE = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_1__["CreateProxyForClassExtensions"])(NumberCE_funcs);
const NumberCES = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_1__["WithFuncsStandalone"])(NumberCE_funcs);
//# sourceMappingURL=CE_Number.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js":
/*!***********************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js ***!
  \***********************************************************************/
/*! exports provided: ObjectCE_funcs, ObjectCE, ObjectCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectCE_funcs", function() { return ObjectCE_funcs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectCE", function() { return ObjectCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectCES", function() { return ObjectCES; });
/* harmony import */ var _Utils_General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
/* harmony import */ var _CE_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");
/* harmony import */ var _Utils_Types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js");
/* harmony import */ var _CE_Others__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CE_Others */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js");




/*export type WithFuncThisArgsAsXOrWrapped_Type<Source> = {
    [P in keyof Source]:
        Source[P] extends (this: infer ThisArgType, ...args)=>any ? (this: XOrWrapped<ThisArgType>, ...args: Parameters<Source[P]>)=>ReturnType<Source[P]> :
        Source[P];
};
export function WithFuncThisArgsAsXOrWrapped<Source>(source: Source): WithFuncThisArgsAsXOrWrapped_Type<Source> {
    return source as any;
}*/
//export const specialKeys = ["_", "_key", "_id"];
const ObjectCE_funcs = {
    // base
    // ==========
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem(name, value, forceAdd = false) {
        if (name == null || name.length == 0)
            throw new Error("No prop-name was specified for _AddItem() call.");
        if (name in this)
            delete this[name];
        if (name in this && !forceAdd)
            return; // workaround for some properties not being deleted
        Object.defineProperty(this, name, {
            configurable: true,
            value: value
        });
        /*if (this[name] == null)
            throw new Error(`Failed to add property "${name}" to type "${this}".`);*/
    },
    _AddFunction(name, func) {
        //this._AddItem(func.name || func.toString().match(/^function\s*([^\s(]+)/)[1], func);
        ObjectCES._AddItem(this, name, func);
    },
    // the below helps you do stuff like this:
    //		Array.prototype._AddGetterSetter("AddX", null, function(value) { this.push(value); }); [].AddX = "newItem";
    _AddGetterSetter(name, getter, setter) {
        //var name = (getter || setter).name || (getter || setter).toString().match(/^function\s*([^\s(]+)/)[1];
        if (name in this)
            delete this[name];
        if (name in this)
            return; // workaround for some properties not being deleted
        let info = { configurable: true };
        if (getter)
            info.get = getter;
        if (setter)
            info.set = setter;
        Object.defineProperty(this, name, info);
    },
    // the below helps you do stuff like this:
    //		Array.prototype._AddFunction_Inline = function AddX(value) { this.push(value); }; [].AddX = "newItem";
    set _AddFunction_Inline(func) {
        ObjectCES._AddFunction(this, Object(_CE_Others__WEBPACK_IMPORTED_MODULE_3__["FunctionCE"])(func).GetName(), func);
    },
    set _AddGetter_Inline(func) {
        ObjectCES._AddGetterSetter(this, Object(_CE_Others__WEBPACK_IMPORTED_MODULE_3__["FunctionCE"])(func).GetName(), func, null);
    },
    set _AddSetter_Inline(func) {
        ObjectCES._AddGetterSetter(this, Object(_CE_Others__WEBPACK_IMPORTED_MODULE_3__["FunctionCE"])(func).GetName(), null, func);
    },
    // normal
    // ==========
    /* Helper for if you want the result of calling x.SomeMethod(), but you also need access to the x-var for one of its arguments. */
    VGet(func) {
        return func.call(this, this);
    },
    SafeGet: (function (pathOrPathGetterFunc, resultIfNull) {
        let pathSegments = typeof pathOrPathGetterFunc == "string" ? pathOrPathGetterFunc : Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["ConvertPathGetterFuncToPropChain"])(pathOrPathGetterFunc);
        return Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["DeepGet"])(this, pathSegments, resultIfNull);
    }),
    // todo: maybe remove/merge these
    Extend(x, copyNonEnumerable = false) {
        if (x != null) {
            for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)) {
                var value = x[key];
                this[key] = value;
            }
        }
        return this;
    },
    Extended(x, copyNonEnumerable = false) {
        let result = this instanceof Array ? [] : {};
        for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](this)) {
            result[key] = this[key];
        }
        if (x != null) {
            for (const key of Object[copyNonEnumerable ? "getOwnPropertyNames" : "keys"](x)) {
                result[key] = x[key];
            }
        }
        return result;
    },
    // more advanced version of ObjectCE.Extend
    VSet: (function (...args) {
        let props, propName, propValue, opt;
        if (Object(_Utils_Types__WEBPACK_IMPORTED_MODULE_2__["IsString"])(args[0]) || Object(_Utils_Types__WEBPACK_IMPORTED_MODULE_2__["IsSymbol"])(args[0]))
            [propName, propValue, opt] = args;
        else
            [props, opt] = args;
        opt = Object.assign({}, { copyNonEnumerable: true, copySymbolKeys: true, copyGetterSettersAs: "value", callSetters: "auto" }, opt);
        const SetProp = (name, descriptor, value) => {
            // only process operators if: 1) js-engine supports Symbols (for security), or 2) caller allows string-operators
            if (Object(_Utils_Types__WEBPACK_IMPORTED_MODULE_2__["IsSymbol"])(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["OMIT"]) || opt.allowStringOperators) {
                if (value === _Utils_General__WEBPACK_IMPORTED_MODULE_0__["OMIT"] || (opt.allowStringOperators && value == _Utils_General__WEBPACK_IMPORTED_MODULE_0__["OMIT"].toString()))
                    return;
                if (value === _Utils_General__WEBPACK_IMPORTED_MODULE_0__["DEL"] || (opt.allowStringOperators && value == _Utils_General__WEBPACK_IMPORTED_MODULE_0__["DEL"].toString())) {
                    delete this[name];
                    return;
                }
            }
            let isGetterSetter = descriptor && (descriptor.get != null || descriptor.set != null);
            let asGetterSetter = isGetterSetter && opt.copyGetterSettersAs == "getterSetter";
            // descriptorCustomized: whether the descriptor has customizations that would be lost by using a simple set-op
            let descriptorCustomized = descriptor && (descriptor.enumerable == false || descriptor.writable == false || descriptor.configurable == false || asGetterSetter);
            let useSimpleSet_final = opt.callSetters == "always" || (opt.callSetters == "auto" && !descriptorCustomized);
            if (useSimpleSet_final) {
                this[name] = value;
            }
            else {
                // we default configurable to true, since it's the better default imo; it's more compatible -- conf:false can break "correct code", whereas conf:true at worst allows mistakes
                const finalDescriptor = Object.assign({ configurable: true }, descriptor);
                // if placing a value (rather than copying a getter-setter), clear get/set fields, and set value field 
                if (!asGetterSetter) {
                    delete finalDescriptor.get;
                    delete finalDescriptor.set;
                    finalDescriptor.value = value;
                }
                Object.defineProperty(this, name, finalDescriptor);
            }
        };
        if (propName) {
            SetProp(propName, opt.prop, propValue);
        }
        else if (props != null) {
            /*for (let key in props) {
                if (!props.hasOwnProperty(key)) continue;*/
            let keys = Object.getOwnPropertyNames(props);
            if (opt.copySymbolKeys)
                keys = keys.concat(Object.getOwnPropertySymbols(props));
            for (const key of keys) {
                let descriptor = Object.getOwnPropertyDescriptor(props, key);
                if (!descriptor.enumerable && !opt.copyNonEnumerable)
                    continue;
                let isGetterSetter = descriptor.get != null || descriptor.set != null;
                if (isGetterSetter && opt.copyGetterSettersAs == "ignore")
                    continue; // for "ignore" case: short-circuit, so we don't even call getter
                const value = !isGetterSetter || opt.copyGetterSettersAs == "value" ? props[key] : undefined;
                SetProp(key, descriptor, value);
            }
        }
        return this;
    }),
    VAct(func) {
        func.call(this, this);
        return this;
    },
    As(type) {
        Object.setPrototypeOf(this, type.prototype);
        return this;
    },
    Strip() {
        Object.setPrototypeOf(this, Object.getPrototypeOf({}));
        return this;
    },
    //Including(...keys: string[]) {
    Including(...keys) {
        var result = this instanceof Array ? [] : {};
        for (let key of keys) {
            //if (!this.hasOwnProperty(key)) continue;
            if (!(key in this))
                continue; // we include the value, even if from prototype (user wouldn't list in keys array if didn't want it)
            result[key] = this[key];
        }
        return result;
    },
    //Excluding(...keys: string[]) {
    Excluding(...keys) {
        //var result = Clone(this); // doesn't work with funcs
        /*var result = Object.assign(this instanceof Array ? [] : {}, this as any);
        for (let key of keys) {
            delete result[key];
        }*/
        var result = this instanceof Array ? [] : {};
        for (let key of Object.keys(this)) {
            if (Object(_CE_Array__WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(keys).Contains(key))
                continue;
            result[key] = this[key];
        }
        return result;
    },
    IsOneOf(...values) {
        if (Object(_CE_Array__WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(values).Contains(this)) {
            return true;
        }
        // if the value-list contains the primitive-version of self, consider it a match -- otherwise calling "test1".IsOneOf("test1", "test2") would fail
        let isObjectFormOfPrimitive = this instanceof Boolean || this instanceof Number || this instanceof String;
        if (isObjectFormOfPrimitive && Object(_CE_Array__WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(values).Contains(this.valueOf())) {
            return true;
        }
        return false;
    },
    Pairs: (function () {
        var result = [];
        let keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            //if (excludeSpecialKeys && (key == "_" || key == "_key" || key == "_id")) continue;
            let entry = { index: i, key, keyNum: Number(key), value: this instanceof Map ? this.get(key) : this[key] };
            if (Object(_Utils_Types__WEBPACK_IMPORTED_MODULE_2__["IsNaN"])(entry.keyNum))
                delete entry.keyNum;
            result.push(entry);
        }
        return result;
    }),
    VKeys: (function () {
        //if (excludeSpecialKeys) return this.Pairs(true).map(a=>a.key);
        let keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        //if (excludeSpecialKeys) keys = ArrayCE(keys).Except(specialKeys);
        return keys;
    }),
    VValues: (function () {
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
        return ObjectCES.VKeys(this).map(key => this instanceof Map ? this.get(key) : this[key]);
    }),
    // for symbols
    /*Pairs_Sym() {
    };*/
    Sym(symbolName) {
        let symbols = Object.getOwnPropertySymbols(this);
        let symbol = symbols.find(a => a.toString() == `Symbol(${symbolName})`);
        return this[symbol];
    },
};
//export const ObjectCE = WithFuncsStandalone(ObjectCEProxy.prototype);
//export const ObjectCE = CreateProxyForClassExtensions(ObjectCEProxy);
const ObjectCE = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["CreateProxyForClassExtensions"])(ObjectCE_funcs);
const ObjectCES = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["WithFuncsStandalone"])(ObjectCE_funcs);
//# sourceMappingURL=CE_Object.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js":
/*!***********************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js ***!
  \***********************************************************************/
/*! exports provided: FunctionCE_funcs, FunctionCE, FunctionCES, DateCE_funcs, DateCE, DateCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionCE_funcs", function() { return FunctionCE_funcs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionCE", function() { return FunctionCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionCES", function() { return FunctionCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCE_funcs", function() { return DateCE_funcs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCE", function() { return DateCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCES", function() { return DateCES; });
/* harmony import */ var _Utils_General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");

/*
There are two ways to make a class-extension<or>standalone-functions system:
1) Define the functions as class methods, and create a typescript extractor that creates versions of those methods, with an added first parameter that is used as the this-arg.
2) Define them as standalone functions, and create a typescript extractor that creates versions of those methods, with a real this-arg that is extracted and supplied as the first parameter.
The "Extract" function below shows how to do approach 2. (we currently instead use approach 1, since I use them as class methods more frequently, and only the source approach allows function overloads)
*/
/*function Test1(a, b: string, c) {}

/*type ExtractArgs2Plus<T> = FirstParameterType<T>;
export function Extract(func: (...args: any[])=>any) {
    return (...args: Parameters<typeof func>)=>any;
}
export const Test1_Next = Extract(Test1);
type FirstParameterType<T> = T extends (a: infer U, ...args: infer T2) => any ? T2 : unknown;*#/

type Extract_Type<T> =
        //T extends (...args)=>any ? (thisArg: Object, ...args: Parameters<T>)=>ReturnType<T> :
        T extends (firstParam: infer FirstParam, ...args: infer RestOfParams)=>any ? (...args: RestOfParams)=>ReturnType<T> :
        T;
export function Extract<T>(source: T): Extract_Type<T> {
    return null as any;
}

const Test2 = Extract(Test1);
export type exports1 = {Test2: typeof Test2};

declare global {
    interface String extends exports1 {}
}
"".Test2("", 5);*/
const FunctionCE_funcs = {
    GetName() {
        //return this.name_fake || this.name || this.toString().match(/^function\s*([^\s(]+)/)[1];
        //return this["name_fake"] || this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
        return this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
    },
    SetName(name) {
        //this["name_fake"] = name;
        Object.defineProperty(this, "name", { value: name, configurable: true }); // can only set func.name using Object.defineProperty
        return this;
    },
    AddTag(tag) {
        if (this["tags"] == null)
            this["tags"] = [];
        this["tags"].push(tag);
        return this;
    },
    /*Function.prototype._AddFunction_Inline = function AddTags(/*o:*#/ tags___) { // (already implemented in VDF.js file)
        if (this.tags == null)
            this.tags = [];
        for (var i in arguments)
            this.tags.push(arguments[i]);
        return this;
    };*/
    /*function AddTags() {
        var tags = V.Slice(arguments, 0, arguments.length - 1);
        var func = V.Slice(arguments).Last();
        func.AddTags.apply(func, tags);
    };*/
    GetTags(type) {
        return (this["tags"] || []).Where(a => type == null || a instanceof type);
    },
    //AsStr(...args) { return require("../../V/V").Multiline(this, ...args); };
    //AsStr(useExtraPreprocessing) { return require("../../V/V").Multiline(this, useExtraPreprocessing); };
    RunThenReturn(...args) {
        this.apply(null, args);
        return this;
    },
};
const FunctionCE = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["CreateProxyForClassExtensions"])(FunctionCE_funcs);
const FunctionCES = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["WithFuncsStandalone"])(FunctionCE_funcs);
function isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}
function getDaysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}
const DateCE_funcs = {
    get MonthDate() {
        return new Date(this.getFullYear(), this.getMonth(), 1);
    },
    IsLeapYear() {
        return isLeapYear(this.getFullYear());
    },
    GetDaysInMonth() {
        return getDaysInMonth(this.getFullYear(), this.getMonth());
    },
    AddMonths(value) {
        var n = this.getDate();
        this.setDate(1);
        this.setMonth(this.getMonth() + value);
        this.setDate(Math.min(n, DateCE(this).GetDaysInMonth()));
        return this;
    },
    Clone() {
        return new Date(this.getTime());
    },
};
const DateCE = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["CreateProxyForClassExtensions"])(DateCE_funcs);
const DateCES = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_0__["WithFuncsStandalone"])(DateCE_funcs);
/*export class ErrorCEProxy {
    get Stack() {
        // this causes the full stack-trace to be attached to the Error object (in Chrome)
        if ((Error as any).captureStackTrace) {
            //(Error as any).captureStackTrace(instance, GetStackTraceStr);
            (Error as any).captureStackTrace(this);
        }
        return this.stack;
    }
}
export const ErrorCE = CreateProxyForClassExtensions(ErrorCEProxy);*/ 
//# sourceMappingURL=CE_Others.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_String.js":
/*!***********************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_String.js ***!
  \***********************************************************************/
/*! exports provided: StringCE_funcs, StringCE, StringCES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringCE_funcs", function() { return StringCE_funcs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringCE", function() { return StringCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringCES", function() { return StringCES; });
/* harmony import */ var _CE_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");
/* harmony import */ var _Utils_General__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");


const StringCE_funcs = {
    TrimStart(...chars) {
        // fix for if called by VDF (which has a different signature)
        //if (arguments[0] instanceof Array) chars = arguments[0];
        for (var iOfFirstToKeep = 0; iOfFirstToKeep < this.length && Object(_CE_Array__WEBPACK_IMPORTED_MODULE_0__["ArrayCE"])(chars).Contains(this[iOfFirstToKeep]); iOfFirstToKeep++)
            ;
        return this.slice(iOfFirstToKeep, this.length);
    },
    TrimEnd(...chars) {
        for (var iOfLastToKeep = this.length - 1; iOfLastToKeep >= 0 && Object(_CE_Array__WEBPACK_IMPORTED_MODULE_0__["ArrayCE"])(chars).Contains(this[iOfLastToKeep]); iOfLastToKeep--)
            ;
        return this.substr(0, iOfLastToKeep + 1);
    },
    Contains(str, startIndex) {
        return this.indexOf(str, startIndex) !== -1;
    },
    hashCode() {
        var hash = 0;
        for (var i = 0; i < this.length; i++) {
            var char = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // convert to 32-bit integer
        }
        return hash;
    },
    Matches: (function (strOrRegex) {
        if (typeof strOrRegex == "string") {
            let str = strOrRegex;
            let result = [];
            let lastMatchIndex = -1;
            while (true) {
                let matchIndex = this.indexOf(str, lastMatchIndex + 1);
                if (matchIndex == -1)
                    break; // if another match was not found
                result.push({ index: matchIndex });
                lastMatchIndex = matchIndex;
            }
            return result;
        }
        let regex = strOrRegex;
        if (!regex.global) {
            //throw new Error("Regex must have the 'g' flag added. (otherwise an infinite loop occurs)");
            regex = new RegExp(regex.source, regex.flags + "g");
        }
        let result = [];
        let match;
        while (match = regex.exec(this)) {
            result.push(match);
        }
        return result;
    }),
    /*matches_group(regex, /*o:*#/ groupIndex) {
        if (!regex.global)
            throw new Error("Regex must have the 'g' flag added. (otherwise an infinite loop occurs)");

        groupIndex = groupIndex || 0; // default to the first capturing group
        var matches = [];
        var match;
        while (match = regex.exec(this))
            matches.push(match[groupIndex]);
        return matches;
    }*/
    /** indexX is 0-based */
    IndexOf_X(str, indexX) {
        var currentPos = -1;
        for (var i = 0; i <= indexX; i++) {
            var subIndex = this.indexOf(str, currentPos + 1);
            if (subIndex == -1)
                return -1; // no such xth index
            currentPos = subIndex;
        }
        return currentPos;
    },
    /** indexFromLastX is 0-based */
    IndexOf_XFromLast(str, indexFromLastX) {
        var currentPos = (this.length - str.length) + 1; // index just after the last-index-where-match-could-occur
        for (var i = 0; i <= indexFromLastX; i++) {
            var subIndex = this.lastIndexOf(str, currentPos - 1);
            if (subIndex == -1)
                return -1; // no such xth index
            currentPos = subIndex;
        }
        return currentPos;
    },
    IndexOfAny(...strings) {
        var lowestIndex = -1;
        for (let str of strings) {
            var indexOfChar = this.indexOf(str);
            if (indexOfChar != -1 && (indexOfChar < lowestIndex || lowestIndex == -1))
                lowestIndex = indexOfChar;
        }
        return lowestIndex;
    },
    LastIndexOfAny(...strings) {
        var highestIndex = -1;
        for (let str of strings) {
            var indexOfChar = this.lastIndexOf(str);
            if (indexOfChar > highestIndex)
                highestIndex = indexOfChar;
        }
        return highestIndex;
    },
    StartsWithAny(...strings) {
        return Object(_CE_Array__WEBPACK_IMPORTED_MODULE_0__["ArrayCE"])(strings).Any(str => this.startsWith(str));
    },
    EndsWithAny(...strings) {
        return Object(_CE_Array__WEBPACK_IMPORTED_MODULE_0__["ArrayCE"])(strings).Any(str => this.endsWith(str));
    },
    ContainsAny(...strings) {
        return Object(_CE_Array__WEBPACK_IMPORTED_MODULE_0__["ArrayCE"])(strings).Any(str => StringCE(this).Contains(str));
    },
    /** Separator-strings must be escaped. (they're passed into a regular-expression) */
    SplitByAny(...separators) {
        /*var splitStr = "/";
        for (let sep of separators)
            splitStr += (splitStr.length > 1 ? "|" : "") + sep;
        splitStr += "/";
        return this.split(splitStr);*/
        let regex = new RegExp(separators.map(a => `\\${a}`).join("|"));
        return this.split(regex);
    },
    SplitAt(index, includeCharAtIndex = false) {
        if (index == -1) // if no split-index, pass source-string as part2 (makes more sense for paths and such)
            return ["", this];
        let part1 = this.substr(0, index);
        let part2 = includeCharAtIndex ? this.substr(index) : this.substr(index + 1);
        return [part1, part2];
    },
    Splice(index, removeCount, insert) {
        return this.slice(0, index) + insert + this.slice(index + Math.abs(removeCount));
    },
    Indent(indentCount) {
        var indentStr = "\t".repeat(indentCount);
        return this.replace(/^|(\n)/g, "$1" + indentStr);
    },
    KeepAtMost(maxLength, moreMarkerStr = "...") {
        if (this.length <= maxLength)
            return this;
        return this.substr(0, maxLength - moreMarkerStr.length) + moreMarkerStr;
    },
    // for firebase entry keys
    /*interface String { readonly KeyToInt: number; }
    String.prototype._AddGetter_Inline = function KeyToInt() {
        return parseInt((this as string).substr(1));
    }
    interface Number { readonly IntToKey: string; }
    Number.prototype._AddGetter_Inline = function IntToKey() {
        return "e" + this;
    }*/
    /** Creates a function from "func", setting its name to the "this" string's value. */
    Func(func) {
        func.SetName(this);
        return func;
    },
    // special; creates a function with the given name, but also caches it per caller-line,
    //   so every call from that line returns the same function instance
    // REMOVED, because: we need to create new funcs to capture new closure values
    /*var oneFuncCache = {};
    OneFunc(func) {
        var funcName = this;
        var callerLineStr = new Error().stack.split("\n")[3];
        var funcKey = `${funcName}@${callerLineStr}`;
        if (oneFuncCache[funcKey] == null) {
            func.SetName(this);
            //func.cached = true;
            oneFuncCache[funcKey] = func;
        }
        return oneFuncCache[funcKey];
    }*/
    /**
     * Reformats a multi-line string to represent the actual intended "block" of text.
     * @param desiredIndent How much to indent each line. (after removal of the first-non-empty-line indent-length from each of them)
     * @param removeLineStr A special string which, if found in a line, will cause that line to be removed from the result.
     */
    AsMultiline(desiredIndent = null, removeLineStr = "@RL") {
        let result = this.substring(this.indexOf("\n") + 1, this.lastIndexOf("\n"));
        if (desiredIndent != null) {
            let firstLineIndent = (result.match(/^\t+/) || [""])[0].length;
            if (firstLineIndent) {
                let lines = result.split("\n");
                // remove X tabs from start of each line (where X is firstLineIndent)
                lines = lines.map(line => line.replace(new RegExp(`^\t{0,${firstLineIndent}}`), ""));
                // add the desired indent
                lines = lines.map(line => "\t".repeat(desiredIndent) + line);
                // filter out lines with the special remove-line string
                lines = lines.filter(a => !a.includes(removeLineStr));
                result = lines.join("\n");
            }
        }
        return result;
    },
    Substring(start, end) {
        if (end < 0)
            end = this.length + end;
        return this.substring(start, end);
    },
    ToInt() { return parseInt(Number(this) + ""); },
    ToFloat() { return Number(this); },
};
const StringCE = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_1__["CreateProxyForClassExtensions"])(StringCE_funcs);
const StringCES = Object(_Utils_General__WEBPACK_IMPORTED_MODULE_1__["WithFuncsStandalone"])(StringCE_funcs);
//# sourceMappingURL=CE_String.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/JSVE.js":
/*!**************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/JSVE.js ***!
  \**************************************************/
/*! exports provided: JSVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSVE", function() { return JSVE; });
class JSVE {
}
//# sourceMappingURL=JSVE.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/@Internal.js":
/*!*************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/@Internal.js ***!
  \*************************************************************/
/*! exports provided: g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return g; });
const g = typeof window == "object" ? window : global;
//# sourceMappingURL=@Internal.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Assert.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Assert.js ***!
  \**********************************************************/
/*! exports provided: Assert, AssertWarn, A, A_NotEqualTo_Wrapper, A_OfType_Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assert", function() { return Assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertWarn", function() { return AssertWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_NotEqualTo_Wrapper", function() { return A_NotEqualTo_Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A_OfType_Wrapper", function() { return A_OfType_Wrapper; });
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");

function Assert(condition, messageOrMessageFunc, triggerDebugger = true) {
    if (condition)
        return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    //JSVE.logFunc(`Assert failed) ${message}\n\nStackTrace) ${GetStackTraceStr()}`);
    //console.error("Assert failed) " + message);
    let skipError = false; // add flag which you can use to skip the error, when paused in debugger
    if (triggerDebugger) {
        debugger;
    }
    if (!skipError)
        throw new Error("Assert failed) " + message);
}
function AssertWarn(condition, messageOrMessageFunc) {
    if (condition)
        return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    console.warn(`Assert-warn failed) ${message}\n\nStackTrace) ${Object(_General__WEBPACK_IMPORTED_MODULE_0__["GetStackTraceStr"])()}`);
}
// this version throws an error with only the provided message -- for ones the user may well see, and which don't need the stack (or "Assert failed) " text)
/*g.Extend({AssertSimple});
export function AssertSimple(condition, messageOrMessageFunc?: string | Function) {
    if (condition) return;

    var message = (messageOrMessageFunc as any) instanceof Function ? (messageOrMessageFunc as any)() : messageOrMessageFunc;

    Log(`Assert failed) ${message}\n\nStackTrace) ${V.GetStackTraceStr()}`);
    console.error("Assert failed) " + message);
    debugger;
    throw new Error(message);
}*/
class A {
    static get NonNull_() {
        return function (value) {
            Assert(value != null, () => `Value cannot be null. (provided value: ${value})`);
            return value;
        };
    }
    static set NonNull(value) {
        A.NonNull_(value);
    }
    static NotEqualTo(val1) {
        return new A_NotEqualTo_Wrapper(val1);
    }
}
class A_NotEqualTo_Wrapper {
    constructor(val1) { this.val1 = val1; }
    set a(val2) { Assert(val2 != this.val1); }
}
class A_OfType_Wrapper {
    constructor(type) { this.type = type; }
    set a(val) { Assert(val != null && val.GetType().IsDerivedFrom(this.type)); }
}
//# sourceMappingURL=Assert.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Bridge.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Bridge.js ***!
  \**********************************************************/
/*! exports provided: BridgeMessage, Bridge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BridgeMessage", function() { return BridgeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bridge", function() { return Bridge; });
/* harmony import */ var _Timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timers */ "./node_modules/js-vextensions/Dist/Utils/Timers.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BridgeMessage {
    constructor(initialData) {
        Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this).Extend(initialData);
    }
}
/*export class Bridge_Options {
    receiveChannelMessageFunc_adder: (receiveDataFunc: (channelMessage: string | Object)=>any)=>any;
    receiveChannelMessageFunc_addImmediately? = true;
    sendChannelMessageFunc: (channelMessage: string | Object)=>any;
    channel_wrapBridgeMessage? = true;
    channel_stringifyChannelMessageObj? = true;
    channel_safeCallbacks? = false;
}*/
class Bridge {
    /** Don't worry about having to discard some calls before receiveTextFunc receives it. We automatically discard entries that aren't valid bridge-messages. */
    constructor(options) {
        /** Useful to ensure we ignore non-jsve-bridge messages. (the channel might be used by other systems as well) */
        this.channel_wrapBridgeMessage = true;
        /** Needed if the channel only supports strings being sent/received. */
        this.channel_stringifyChannelMessageObj = true;
        /** Needed if the channel has >2 members; makes-so call-ids are random-numbers, and are filtered by each member to just the ones it knows it initiated. */
        this.channel_safeCallbacks = false;
        // for receiving function-calls (and callbacks) from external bridge
        // ==========
        this.functionMains = {};
        this.functionExtras = {};
        this.requireMainFuncForCalls = true;
        // callback system (for when passing a function as an argument, or awaiting the result of a remote call)
        // ==========
        this.lastCallbackID = -1;
        this.callbacks = {};
        Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this).Extend(Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(options).Excluding("receiveChannelMessageFunc_addImmediately"));
        if (options.receiveChannelMessageFunc_addImmediately != false)
            this.SetUpReceiver();
    }
    // low level data-transfer
    // ==========
    SetUpReceiver() {
        // add our own receive-text-func right now
        this.receiveChannelMessageFunc = channelMessage => {
            let channelMessageObj;
            if (this.channel_stringifyChannelMessageObj && Object(___WEBPACK_IMPORTED_MODULE_1__["IsString"])(channelMessage))
                channelMessageObj = Object(_Timers__WEBPACK_IMPORTED_MODULE_0__["TryCall"])(() => Object(___WEBPACK_IMPORTED_MODULE_1__["FromJSON"])(channelMessage)) || {};
            if (!this.channel_stringifyChannelMessageObj && Object(___WEBPACK_IMPORTED_MODULE_1__["IsObject"])(channelMessage))
                channelMessageObj = channelMessage;
            let bridgeMessage = this.channel_wrapBridgeMessage ? channelMessageObj && channelMessageObj["JSVE_Bridge_message"] : channelMessageObj;
            if (!Object(___WEBPACK_IMPORTED_MODULE_1__["IsObject"])(bridgeMessage))
                return;
            this.DeserializeFuncsIn(bridgeMessage);
            if (bridgeMessage.callFunction_name)
                this.OnReceiveFunctionCall(bridgeMessage);
            if (bridgeMessage.callCallback_id != null)
                this.OnReceiveCallback(bridgeMessage);
        };
        this.receiveChannelMessageFunc_adder(this.receiveChannelMessageFunc);
    }
    SendBridgeMessage(bridgeMessage) {
        this.SerializeFuncsIn(bridgeMessage);
        let channelMessageObj = this.channel_wrapBridgeMessage ? { JSVE_Bridge_message: bridgeMessage } : bridgeMessage;
        let channelMessage = this.channel_stringifyChannelMessageObj ? Object(___WEBPACK_IMPORTED_MODULE_1__["ToJSON"])(channelMessageObj) : channelMessageObj;
        this.sendChannelMessageFunc(channelMessage);
    }
    RegisterFunction(name, func, asMain = true) {
        if (asMain) {
            if (this.functionMains[name])
                throw new Error(`Cannot register a second main-func for the same function-name: "${name}"`);
            this.functionMains[name] = func;
        }
        else {
            if (this.functionExtras[name] == null) {
                this.functionExtras[name] = [];
            }
            this.functionExtras[name].push(func);
        }
    }
    /** If `func` is left null, removes only the entry in `functionMains`. */
    UnregisterFunction(name, func) {
        let funcRemoved = false;
        if (func) {
            if (this.functionMains[name] == func) {
                delete this.functionMains[name];
                funcRemoved = true;
            }
            if (this.functionExtras[name]) {
                Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(this.functionExtras[name]).Remove(func);
                funcRemoved = true;
            }
        }
        else {
            if (name in this.functionMains) {
                delete this.functionMains[name];
                funcRemoved = true;
            }
        }
        return funcRemoved;
    }
    OnReceiveFunctionCall(bridgeMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.Local_CallFunc(bridgeMessage.callFunction_name, ...bridgeMessage.callFunction_args);
            this.CallCallback(bridgeMessage.callFunction_callbackID, result);
        });
    }
    // we use async/await here, to support waiting for the registered function if it happens to be async (if it isn't, that's fine -- the async/await doesn't hurt anything)
    Local_CallFunc(funcName, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            let mainFunc = this.functionMains[funcName];
            let result;
            if (mainFunc) {
                result = yield mainFunc(...args);
            }
            else {
                if (this.requireMainFuncForCalls) {
                    throw new Error(`Cannot find main-func for function-call with name "${funcName}".`);
                }
            }
            for (let extraFunc of this.functionExtras[funcName] || []) {
                extraFunc(...args);
            }
            return result;
        });
    }
    OnReceiveCallback(bridgeMessage) {
        this.Local_CallCallback(bridgeMessage.callCallback_id, bridgeMessage.callCallback_args);
    }
    Local_CallCallback(callbackID, callbackArgs) {
        let callback = this.callbacks[callbackID];
        if (callback == null) {
            if (this.channel_safeCallbacks)
                return;
            Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(false, `Cannot find callback with id ${callbackID}!`);
        }
        callback(...callbackArgs);
    }
    RegisterCallback(callback) {
        let callbackID = this.channel_safeCallbacks ? Math.random() : this.lastCallbackID + 1;
        this.lastCallbackID = callbackID;
        this.callbacks[callbackID] = callback;
        return callbackID;
    }
    // technically, this just prepares the functions in the tree for serialization (by setting a toJSON key, which JSON.stringify uses)
    SerializeFuncsIn(argTree) {
        let nodes = Object(_General__WEBPACK_IMPORTED_MODULE_2__["GetTreeNodesInObjTree"])(argTree);
        for (let node of nodes) {
            if (Object(___WEBPACK_IMPORTED_MODULE_1__["IsFunction"])(node.Value)) {
                let callbackID = this.RegisterCallback(node.Value);
                node.Value.toJSON = () => ({ serializedFunc_callbackID: callbackID });
            }
        }
    }
    DeserializeFuncsIn(argTree) {
        let nodes = Object(_General__WEBPACK_IMPORTED_MODULE_2__["GetTreeNodesInObjTree"])(argTree);
        for (let node of nodes) {
            if (node.Value != null && node.Value.serializedFunc_callbackID != null) {
                let callbackID = node.Value.serializedFunc_callbackID;
                let proxyFunc = (...args) => {
                    this.CallCallback(callbackID, ...args);
                };
                node.Value = proxyFunc;
            }
        }
    }
    // for sending function-calls to external bridge
    // ==========
    Call(funcName, ...args) {
        return new Promise((resolve, reject) => {
            let awaitReturn_callbackID = this.RegisterCallback(resolve);
            let bridgeMessage = new BridgeMessage({ callFunction_callbackID: awaitReturn_callbackID, callFunction_name: funcName, callFunction_args: args });
            this.SendBridgeMessage(bridgeMessage);
        });
    }
    CallCallback(callbackID, ...args) {
        let bridgeMessage = new BridgeMessage({ callCallback_id: callbackID, callCallback_args: args });
        this.SendBridgeMessage(bridgeMessage);
    }
}
//# sourceMappingURL=Bridge.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Changes.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Changes.js ***!
  \***********************************************************/
/*! exports provided: GetPropChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPropChanges", function() { return GetPropChanges; });
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
/* harmony import */ var _ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClassExtensions/CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");


function GetPropChanges(oldObj, newObj, returnNullIfSame = false, useJSONCompare = false) {
    oldObj = oldObj || {}, newObj = newObj || {};
    let keys = Object(_ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(Object.keys(oldObj).concat(Object.keys(newObj))).Distinct();
    let result = [];
    for (let key of keys) {
        let newVal_forComparison = useJSONCompare ? Object(_General__WEBPACK_IMPORTED_MODULE_0__["ToJSON"])(newObj[key]) : newObj[key];
        let oldVal_forComparison = useJSONCompare ? Object(_General__WEBPACK_IMPORTED_MODULE_0__["ToJSON"])(oldObj[key]) : oldObj[key];
        if (newVal_forComparison !== oldVal_forComparison) {
            result.push({ key, oldVal: oldObj[key], newVal: newObj[key] });
        }
    }
    if (result.length == 0 && returnNullIfSame)
        return null;
    return result;
}
/*export function GetUpdates(oldData, newData, useNullInsteadOfUndefined = true) {
    const result = {};
    for (const key of oldData.VKeys(true).concat(newData.VKeys(true))) {
        if (newData[key] !== oldData[key]) {
            result[key] = newData[key];
            if (newData[key] === undefined && useNullInsteadOfUndefined) {
                result[key] = null;
            }
        }
    }
    return RemoveHelpers(result);
}*/ 
//# sourceMappingURL=Changes.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/General.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/General.js ***!
  \***********************************************************/
/*! exports provided: DoNothing, DN, QuickIncrement, emptyObj, emptyArray, emptyArray_forLoading, IsSpecialEmptyObjOrArray, IsSpecialEmptyObj, IsSpecialEmptyArray, EmptyArrayFor, E, WrapWithGo, ShallowEquals, ShallowChanged, CopyText, FromJSON, ToJSON, ToJSON_Advanced_Options, AddSpacesAt_Options, ToJSON_Advanced, Clone, CloneWithPrototypes, Range, Global, IDProvider, nl, AsArray, Slice, Multiline, Multiline_NotCommented, StableSort, Compare, Lerp, GetPercentFromXToY, GetXToY, GetXToYOut, CloneObject, CloneArray, Bind, GetContentSize, GetContentWidth, GetContentHeight, autoElements, GetAutoElement, TreeNode, GetTreeNodesInObjTree, GetTreeNodesInPath, VisitTreeNodesInPath, ConvertPathGetterFuncToPropChain, DeepGet, DeepSet, WithDeepSet, GetStackTraceStr, GetErrorMessagesUnderElement, CreateSymbol, OMIT, DEL, OmitIfFalsy, OmitIfNull, DelIfFalsy, DelIfNull, FindDOM, FindDOMAll, stringModifiers, ModifyString, StartDownload, StartUpload, TransferPrototypeProps, WithFuncsStandalone, CreateProxyForClassExtensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoNothing", function() { return DoNothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DN", function() { return DN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickIncrement", function() { return QuickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyObj", function() { return emptyObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyArray", function() { return emptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyArray_forLoading", function() { return emptyArray_forLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSpecialEmptyObjOrArray", function() { return IsSpecialEmptyObjOrArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSpecialEmptyObj", function() { return IsSpecialEmptyObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSpecialEmptyArray", function() { return IsSpecialEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyArrayFor", function() { return EmptyArrayFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapWithGo", function() { return WrapWithGo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShallowEquals", function() { return ShallowEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShallowChanged", function() { return ShallowChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyText", function() { return CopyText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromJSON", function() { return FromJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToJSON", function() { return ToJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToJSON_Advanced_Options", function() { return ToJSON_Advanced_Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpacesAt_Options", function() { return AddSpacesAt_Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToJSON_Advanced", function() { return ToJSON_Advanced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clone", function() { return Clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneWithPrototypes", function() { return CloneWithPrototypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDProvider", function() { return IDProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nl", function() { return nl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsArray", function() { return AsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return Slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiline", function() { return Multiline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiline_NotCommented", function() { return Multiline_NotCommented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StableSort", function() { return StableSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compare", function() { return Compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lerp", function() { return Lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPercentFromXToY", function() { return GetPercentFromXToY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetXToY", function() { return GetXToY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetXToYOut", function() { return GetXToYOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneObject", function() { return CloneObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneArray", function() { return CloneArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bind", function() { return Bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContentSize", function() { return GetContentSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContentWidth", function() { return GetContentWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetContentHeight", function() { return GetContentHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoElements", function() { return autoElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoElement", function() { return GetAutoElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return TreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTreeNodesInObjTree", function() { return GetTreeNodesInObjTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTreeNodesInPath", function() { return GetTreeNodesInPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitTreeNodesInPath", function() { return VisitTreeNodesInPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertPathGetterFuncToPropChain", function() { return ConvertPathGetterFuncToPropChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepGet", function() { return DeepGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepSet", function() { return DeepSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithDeepSet", function() { return WithDeepSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStackTraceStr", function() { return GetStackTraceStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetErrorMessagesUnderElement", function() { return GetErrorMessagesUnderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSymbol", function() { return CreateSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OMIT", function() { return OMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEL", function() { return DEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmitIfFalsy", function() { return OmitIfFalsy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmitIfNull", function() { return OmitIfNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelIfFalsy", function() { return DelIfFalsy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelIfNull", function() { return DelIfNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindDOM", function() { return FindDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindDOMAll", function() { return FindDOMAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringModifiers", function() { return stringModifiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyString", function() { return ModifyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartDownload", function() { return StartDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartUpload", function() { return StartUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPrototypeProps", function() { return TransferPrototypeProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithFuncsStandalone", function() { return WithFuncsStandalone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProxyForClassExtensions", function() { return CreateProxyForClassExtensions; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
/* harmony import */ var _Internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@Internal */ "./node_modules/js-vextensions/Dist/Utils/@Internal.js");



if (Number.MIN_SAFE_INTEGER == null) {
    Number.MIN_SAFE_INTEGER = -9007199254740991;
}
if (Number.MAX_SAFE_INTEGER == null) {
    Number.MAX_SAFE_INTEGER = 9007199254740991;
}
_Internal__WEBPACK_IMPORTED_MODULE_2__["g"]["G"] = G;
function G(...globalHolders) {
    for (let globalHolder of globalHolders) {
        Object.assign(_Internal__WEBPACK_IMPORTED_MODULE_2__["g"], globalHolder);
    }
}
function DoNothing(...args) { }
function DN(...args) { }
//var quickIncrementValues = {};
//export function QuickIncrement(name = new Error().stack.split("\n")[2]) { // this doesn't always work, fsr
function QuickIncrement(name = "default") {
    QuickIncrement["values"][name] = (QuickIncrement["values"][name] | 0) + 1;
    return QuickIncrement["values"][name];
}
QuickIncrement["values"] = [];
// use singletons for empty-obj and empty-array (that way shallow-compare systems in react, redux, etc. work with them)
const emptyObj = {};
//export const eo = emptyObj as any; // used for (maybeNullVar || eo).prop;
const emptyArray = [];
const emptyArray_forLoading = []; // like emptyArray, except signifies that the cause of the emptiness is that data is still loading
function IsSpecialEmptyObjOrArray(val) {
    return IsSpecialEmptyObj(val) || IsSpecialEmptyArray(val);
}
function IsSpecialEmptyObj(obj) {
    return obj == emptyObj;
}
function IsSpecialEmptyArray(array) {
    return array == emptyArray || array == emptyArray_forLoading;
}
/** To be used with mobx-firelink (in "if null" block): undefined means still-loading, so return emptyArray_forLoading; null means data doesn't exist, so return emptyArray. */
function EmptyArrayFor(base) {
    if (base === undefined)
        return emptyArray_forLoading;
    if (base === null)
        return emptyArray;
    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])("Cannot get empty-array for base that is not null or undefined.");
}
function E(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20) {
    var result = {};
    for (let extend of Array.from(arguments)) {
        if (!Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsObject"])(extend))
            continue;
        //Object.assign(result, extend);
        // use VSet, for its extra options (eg. using E({someKey: false ? "someValue" : OMIT}) to omit "someKey" entirely)
        Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(result).VSet(extend);
    }
    // if result is empty, return the same empty-obj each time so it doesn't trigger react-js rerenders
    if (emptyObj && Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(result).VKeys().length == 0) {
        return emptyObj;
    }
    return result;
    //return StyleSheet.create(result);
}
function WrapWithGo(func) {
    Object.defineProperty(func, "Go", {
        /*set: arg1=>{
            func(arg1);
        },*/
        set: func,
    });
    return func;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
// Performs equality by iterating through keys on an object and returning false when any key has values which are not strictly equal between the arguments.
// Returns true when the values of all keys are strictly equal.
function ShallowEquals(objA, objB) {
    if (Object.is(objA, objB))
        return true;
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null)
        return false;
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length)
        return false;
    // test for A's keys different from B
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
function ShallowChanged(objA, objB) {
    return !ShallowEquals(objA, objB);
}
function CopyText(text) {
    /*
    //var note = $(`<input type="text">`).appendTo("body");
    var note = document.createElement("textarea");
    document.body.appendChild(note);
    note.innerHTML = text;

    note.focus();
    var range = document.createRange();
    range.setStart(note, 0);
    range.setEnd(note, 1);
    //range.setEnd(note2, 0);

    //range.setEnd(e("notesEnder"), 0); // adds one extra new-line; that's okay, right?
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    document.execCommand("copy");*/
    document.oncopy = function (event) {
        event.clipboardData.setData("text/plain", text);
        event.preventDefault();
        document.oncopy = null;
    };
    document.execCommand("copy", false, null);
}
// methods: serialization
// ==========
// object-Json
function FromJSON(json) { return JSON.parse(json); }
/*export function ToJSON(obj, replacerFunc?: (this: any, key: string, value: any)=>any, spacing?: number, stringifyUndefinedAs = null): string {
    if (stringifyUndefinedAs !== undefined) {
        Assert(replacerFunc == null, "Cannot supply replacerFunc if stringifyUndefinedAs is !== undefined.");
        replacerFunc = (key, value)=> {
            if (value === undefined) return stringifyUndefinedAs;
            return value;
        };
    }
    return JSON.stringify(obj, replacerFunc, spacing);
}*/
function ToJSON(obj, replacerFunc, spacing) {
    return JSON.stringify(obj, replacerFunc, spacing);
}
class ToJSON_Advanced_Options {
    constructor() {
        this.keysToIgnore = [];
        this.stringifyUndefinedAs = null;
        this.trimDuplicates = false;
        this.trimDuplicates_replaceStr = "[circular/duplicate] ";
        this.catchErrors = false;
        this.catchErrors_replaceStr = "[converting to JSON failed]";
    }
}
class AddSpacesAt_Options {
    constructor() {
        this.insideObjectBraces = false;
        this.insideArrayBrackets = false;
        this.betweenPropsOrItems = true;
        this.betweenPropNameAndValue = true;
    }
}
function ToJSON_Advanced(obj, opt) {
    opt = E(new ToJSON_Advanced_Options(), opt);
    let cache = new Set();
    //let foundDuplicates = false;
    try {
        var result = JSON.stringify(obj, (key, value) => {
            if (Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(opt.keysToIgnore).Contains(key))
                return;
            if (opt.trimDuplicates && typeof value == 'object' && value != null) {
                // if duplicate found, ignore key (for more advanced, see: flatted, json-stringify-safe, etc.)
                if (cache.has(value)) {
                    //foundDuplicates = true;
                    return opt.trimDuplicates_replaceStr;
                }
                cache.add(value);
            }
            if (value === undefined && opt.stringifyUndefinedAs !== undefined) {
                return opt.stringifyUndefinedAs;
            }
            return value;
        }, opt.addSpacesAt != null ? 1 : null);
    }
    catch (ex) {
        if (opt.catchErrors) {
            return opt.catchErrors_replaceStr;
        }
        throw ex;
    }
    if (opt.addSpacesAt) {
        result = result.replace(/^ +/gm, " "); // remove all but the first space for each line
        result = result.replace(/\n/g, ""); // remove line-breaks
        if (!opt.addSpacesAt.insideObjectBraces)
            result = result.replace(/{ /g, "{").replace(/ }/g, "}");
        if (!opt.addSpacesAt.insideArrayBrackets)
            result = result.replace(/\[ /g, "[").replace(/ \]/g, "]");
        if (!opt.addSpacesAt.betweenPropsOrItems)
            result = result.replace(/, /g, ",");
        if (!opt.addSpacesAt.betweenPropNameAndValue)
            result = result.replace(/": /g, `":`);
    }
    //cache = null; // enable garbage collection
    /*if (opt.trimCircular && foundDuplicates) {
        result = opt.trimCircular_replaceStr + result;
    }*/
    return result;
}
function Clone(obj, keepPrototype = false) {
    if (obj == null)
        return obj;
    let result = FromJSON(ToJSON(obj));
    if (keepPrototype == true) {
        Object.setPrototypeOf(result, Object.getPrototypeOf(obj));
    }
    return result;
}
/** Variant of Clone which preserves prototypes, non-enumerable properties, and circular links (if enabled). */
function CloneWithPrototypes(originalObject, keepCircularLinks = false) {
    if (originalObject == null)
        return originalObject;
    let copies = [{
            source: originalObject,
            target: Array.isArray(originalObject) ? [] : Object.create(Object.getPrototypeOf(originalObject)),
        }];
    let cloneObject = copies[0].target;
    let sourceReferences = [originalObject];
    let targetReferences = [cloneObject];
    // first in, first out
    let current;
    while (current = copies.shift()) {
        let keys = Object.getOwnPropertyNames(current.source);
        for (let propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
            // Save the source's descriptor
            let descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
            if (!descriptor.value || typeof descriptor.value !== 'object') {
                Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                continue;
            }
            let nextSource = descriptor.value;
            descriptor.value = Array.isArray(nextSource) ? [] : Object.create(Object.getPrototypeOf(nextSource));
            if (keepCircularLinks) {
                let indexOf = sourceReferences.indexOf(nextSource);
                if (indexOf !== -1) {
                    // The source is already referenced, just assign reference
                    descriptor.value = targetReferences[indexOf];
                    Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                    continue;
                }
                sourceReferences.push(nextSource);
                targetReferences.push(descriptor.value);
            }
            Object.defineProperty(current.target, keys[propertyIndex], descriptor);
            copies.push({ source: nextSource, target: descriptor.value });
        }
    }
    return cloneObject;
}
/*export function Range(min, max, step = 1, includeMax = true) {
    var result: number[] = [];
    for (let i = min; includeMax ? i <= max : i < max; i += step)
        result.push(i);
    return result;
}*/
/**
 * Gets an array of the numbers between min and max.
 * @param min
 * @param max
 * @param step (default: 1)
 * @param includeMax (default: true)
 * @param roundToStep (default: true)
 */
function Range(min, max, step = 1, includeMax = true, roundToStep = true) {
    var result = [];
    for (let i = min; includeMax ? i <= max : i < max; i = roundToStep ? Object(___WEBPACK_IMPORTED_MODULE_1__["NumberCE"])(i + step).RoundTo(step) : i + step) {
        result.push(i);
    }
    return result;
}
function Global(target) {
    //var name = (target as any).GetName();
    var name = target["name_fake"] || target.name || (target.toString().match(/^function\s*([^\s(]+)/) || [])[1];
    //console.log("Globalizing: " + name);
    _Internal__WEBPACK_IMPORTED_MODULE_2__["g"][name] = target;
}
class IDProvider {
    constructor() {
        this.lastID = -1;
    }
    GetID() {
        return ++this.lastID;
    }
}
const nl = "\n";
/*export function AsObj(obj: any) {
    if (typeof obj == "object") return obj;
    if (obj != null) return ArrayCE(ObjectCE(obj).Pairs()).ToMap(a=>a.key, a=>a.value);
    return {};
}*/
function AsArray(args) { return Slice(args, 0); }
;
//s.ToArray = function(args) { return s.Slice(args, 0); };
function Slice(args, start, end) { return Array.prototype.slice.call(args, start != null ? start : 0, end); }
;
/*static startupInfo = null;
static startupInfoRequested = false;
static postStartupInfoReceivedFuncs = [];
static WaitForStartupInfoThenRun(func) {
    if (startupInfo)
        func(startupInfo);
    else
        V.postStartupInfoReceivedFuncs.push(func);
}*/
// example:
// var multilineText = V.Multiline(function() {/*
//		Text that...
//		spans multiple...
//		lines.
// */});
function Multiline(functionWithInCommentMultiline, useExtraPreprocessing) {
    useExtraPreprocessing = useExtraPreprocessing != null ? useExtraPreprocessing : true;
    var text = functionWithInCommentMultiline.toString().replace(/\r/g, "");
    // some extra preprocessing
    if (useExtraPreprocessing) {
        text = text.replace(/@@.*/g, ""); // remove single-line comments
        //text = text.replace(/@\**?\*@/g, ""); // remove multi-line comments
        text = text.replace(/@\*/g, "/*").replace(/\*@/g, "*/"); // fix multi-line comments
    }
    var firstCharPos = text.indexOf("\n", text.indexOf("/*")) + 1;
    return text.substring(firstCharPos, text.lastIndexOf("\n"));
}
function Multiline_NotCommented(functionWithCode) {
    var text = functionWithCode.toString().replace(/\r/g, "");
    var firstCharOfSecondLinePos = text.indexOf("\n") + 1;
    var enderOfSecondLastLine = text.lastIndexOf("\n");
    var result = text.substring(firstCharOfSecondLinePos, enderOfSecondLastLine);
    result = result.replace(/\t/g, "    ");
    // replace the start and end tokens of special string-containers (used for keeping comments in-tact)
    result = result.replace(/['"]@((?:.|\n)+)@['"];(\n(?=\n))?/g, (match, sub1) => sub1.replace(/\\n/, "\n"));
    return result;
}
function StableSort(array, compare) {
    var array2 = array.map((item, index) => ({ index, item }));
    array2.sort((a, b) => {
        var r = compare(a.item, b.item, a.index, b.index);
        return r != 0 ? r : Compare(a.index, b.index);
    });
    return array2.map(pack => pack.item);
}
function Compare(a, b, caseSensitive = true) {
    if (!caseSensitive && typeof a == "string" && typeof b == "string") {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    return a < b ? -1 : (a > b ? 1 : 0);
}
// just use the word 'percent', even though value is represented as fraction (e.g. 0.5, rather than 50[%])
function Lerp(from, to, percentFromXToY, keepResultInRange = true) {
    let result = from + ((to - from) * percentFromXToY);
    if (keepResultInRange)
        result = Object(___WEBPACK_IMPORTED_MODULE_1__["NumberCE"])(result).KeepBetween(from, to);
    return result;
}
function GetPercentFromXToY(start, end, val, keepResultInRange = true) {
    // distance-from-x / distance-from-x-required-for-result-'1'
    var result = (val - start) / (end - start);
    if (keepResultInRange)
        result = Object(___WEBPACK_IMPORTED_MODULE_1__["NumberCE"])(result).KeepBetween(0, 1);
    return result;
}
function GetXToY(minX, maxY, interval = 1) {
    var result = [];
    for (var val = minX; val <= maxY; val += interval) {
        result.push(val);
    }
    return result;
}
function GetXToYOut(minX, maxOutY, interval = 1) {
    var result = [];
    for (var val = minX; val < maxOutY; val += interval) {
        result.push(val);
    }
    return result;
}
function CloneObject(obj, propMatchFunc, depth = 0) {
    /*var Assert = require("../../Frame/General/Assert").Assert;
    Assert(depth < 100, "CloneObject cannot work past depth 100! (probably circular ref)");*/
    if (obj == null)
        return null;
    if (Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsPrimitive"])(obj))
        return obj;
    //if (obj.GetType() == Array)
    if (obj.constructor == Array)
        return CloneArray(obj);
    /*if (obj instanceof List)
        return List.apply(null, [obj.itemType].concat(V.CloneArray(obj)));
        if (obj instanceof Dictionary) {
            let result = new Dictionary(obj.keyType, obj.valueType);
            for (let pair of obj.Pairs)
                result.Add(pair.key, pair.value);
            return result;
        }*/
    let result = {};
    for (let pair of Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(obj).Pairs()) {
        if (!(pair.value instanceof Function) && (propMatchFunc == null || propMatchFunc.call(obj, pair.key, pair.value)))
            result[pair.key] = CloneObject(pair.value, propMatchFunc, depth + 1);
    }
    return result;
}
function CloneArray(array) {
    //array.slice(0); //deep: JSON.parse(JSON.stringify(array));
    return Array.prototype.slice.call(array, 0);
}
/*static IsEqual(a, b) {
    function _equals(a, b) { return JSON.stringify(a) === JSON.stringify($.extend(true, {}, a, b)); }
    return _equals(a, b) && _equals(b, a);
};*/
function Bind(func, newThis) {
    return func.bind(newThis);
}
/*static ForEachChildInTreeXDoY(treeX: any, actionY: (value, key: string)=>void) {
    for (let key in treeX) {
        let value = treeX[key];
        actionY(value, key);
        if (typeof value == "object" || value instanceof Array)
            V.ForEachChildInTreeXDoY(value, actionY);
    }
}*/
function GetHiddenHolder() {
    let holder = document.querySelector("#jsve_hiddenContainer");
    if (holder == null) {
        holder = document.createElement("div");
        holder.id = "jsve_hiddenContainer";
        Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(holder.style).Extend({ position: "absolute", left: `-1000px`, top: `-1000px`, width: `1000px`, height: `1000px`, overflow: "hidden" });
        document.body.appendChild(holder);
    }
    return holder;
}
let GetContentSize_cache = {};
function GetContentSize(content, includeMargin = false, createClone = false, allowCache = true) {
    /*var holder = $("#jsve_hiddenContainer");
    var contentClone = content.clone();
    holder.append(contentClone);
    var width = contentClone.outerWidth();
    var height = contentClone.outerHeight();
    contentClone.remove();*/
    let cacheStore = Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsString"])(content) ? GetContentSize_cache : (content["GetContentSize_cache"] = content["GetContentSize_cache"] || {});
    let currentHTML = Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsString"])(content) ? content : content.outerHTML;
    let result = cacheStore[currentHTML];
    if (result == null) {
        let holder = GetHiddenHolder();
        let testElement = Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsString"])(content) ? $(content) : (createClone ? $(content).clone() : $(content));
        holder.appendChild(testElement[0]);
        var width = testElement.outerWidth(includeMargin);
        var height = testElement.outerHeight(includeMargin);
        testElement.remove();
        result = { width, height };
        if (allowCache) {
            cacheStore[currentHTML] = result;
        }
    }
    return result;
}
function GetContentWidth(content, includeMargin = false, createClone = false, allowCache = true) {
    return GetContentSize(content, includeMargin, createClone, allowCache).width;
}
function GetContentHeight(content, includeMargin = false, createClone = false, allowCache = true) {
    return GetContentSize(content, includeMargin, createClone, allowCache).height;
}
let autoElements = {};
function GetAutoElement(startHTML) {
    if (autoElements[startHTML] == null) {
        let holder = GetHiddenHolder();
        let element = $(startHTML)[0];
        holder.appendChild(element);
        autoElements[startHTML] = element;
    }
    return autoElements[startHTML];
}
class TreeNode {
    constructor(ancestorNodes, obj, prop) {
        this.ancestorNodes = ancestorNodes;
        this.obj = obj;
        this.prop = prop;
    }
    get PathNodes() {
        if (this.prop == "_root")
            return [];
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(this.ancestorNodes).Select(a => a.prop).concat(this.prop);
    }
    get PathStr() {
        return this.PathNodes.join("/");
    }
    get PathStr_Updeep() {
        return this.PathNodes.join(".");
    }
    //value;
    get Value() {
        if (this.obj == null)
            return undefined;
        return this.obj[this.prop];
    }
    set Value(newVal) {
        this.obj[this.prop] = newVal;
    }
}
function GetTreeNodesInObjTree(obj, includeRootNode = false, _ancestorNodes = []) {
    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(_ancestorNodes.length <= 300, "Cannot traverse more than 300 levels into object tree. (probably circular)");
    let result = [];
    if (includeRootNode)
        result.push(new TreeNode([], { _root: obj }, "_root"));
    /*for (let key in obj) {
        if (!obj.hasOwnProperty(key)) continue;*/
    for (const key of Object.keys(obj)) {
        let value = obj[key];
        let currentNode = new TreeNode(_ancestorNodes, obj, key);
        result.push(currentNode);
        if (value != null && Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsObject"])(value)) {
            Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(result).AddRange(GetTreeNodesInObjTree(value, false, _ancestorNodes.concat(currentNode)));
        }
    }
    return result;
}
/*export function CloneTreeDownToXWhileReplacingXValue(treeRoot, pathToX: string, newValueForX) {
    let pathNodes = pathToX.split("/");
    let currentPathNode = pathNodes[0];
    let currentPathNode_newValue = pathNodes.length > 1
        ? CloneTreeDownToXWhileReplacingXValue(treeRoot[currentPathNode], pathNodes.Skip(1).join("/"), newValueForX)
        : newValueForX;
    return {...treeRoot, [currentPathNode]: currentPathNode_newValue};
}*/
function GetTreeNodesInPath(treeRoot, pathNodesOrStr, includeRootNode = false, _ancestorNodes = []) {
    let descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
    let childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
    var result = [];
    if (includeRootNode) {
        result.push(new TreeNode([], { _root: treeRoot }, "_root"));
    }
    result.push(childTreeNode);
    if (descendantPathNodes.length > 1) { // if the path goes deeper than the current child-tree-node
        result.push(...GetTreeNodesInPath(childTreeNode ? childTreeNode.Value : null, Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(descendantPathNodes).Skip(1).join("/"), false, _ancestorNodes.concat(childTreeNode)));
    }
    return result;
}
/*export function GetTreeNodesInPath_WithRoot(treeRoot, path: string) {
    return GetTreeNodesInPath({root: treeRoot}, "root/" + path).Skip(1);
}*/
function VisitTreeNodesInPath(treeRoot, pathNodesOrStr, visitFunc, visitRootNode = false, _ancestorNodes = []) {
    if (visitRootNode) {
        visitFunc(new TreeNode([], { _root: treeRoot }, "_root"));
    }
    let descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
    let childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
    visitFunc(childTreeNode);
    if (descendantPathNodes.length > 1) { // if the path goes deeper than the current child-tree-node
        VisitTreeNodesInPath(childTreeNode.Value, Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(descendantPathNodes).Skip(1).join("/"), visitFunc, false, _ancestorNodes.concat(childTreeNode));
    }
    return treeRoot;
}
/*export function VisitTreeNodesInPath_WithRoot(treeRoot, path: string, visitFunc: (node: TreeNode)=>any) {
    VisitTreeNodesInPath({root: treeRoot}, "root/" + path, visitFunc);
    return treeRoot;
}*/
// probably todo: make this either handle, or warn about, path-getter-func's containing method-calls
function ConvertPathGetterFuncToPropChain(pathGetterFunc) {
    let funcStr = pathGetterFunc.toString();
    Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(!funcStr.includes("["), "Path-getter-func cannot contain bracket-based property-access.");
    /*const pathStr = funcStr.match(/return [^.]+\.(.+?);/)[1] as string;
    //let result = pathStr.replace(/\./g, "/");
    const result = pathStr.split(".");*/
    let parts = funcStr.split(".").slice(1); // remove first segment, since it's just the "return xxx." part
    parts[parts.length - 1] = parts[parts.length - 1].match(/^([a-zA-Z0-9_$]+)/)[1]; // remove semicolon (or whatever else) at the end
    return parts;
}
/** @param sepChar Default: "/" */
function DeepGet(obj, pathOrPathSegments, resultIfNull = null, sepChar = "/") {
    let pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    let result = obj;
    for (let pathNode of pathSegments) {
        if (result == null)
            break;
        result = result[pathNode];
    }
    if (result == null)
        return resultIfNull;
    return result;
}
/** @param sepChar Default: "/" */
function DeepSet(obj, pathOrPathSegments, newValue, sepChar = "/", createPathSegmentsIfMissing = true, deleteUndefined = false) {
    let pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    let deepObj = obj;
    // tunnel down to the object holding the path-specified prop
    pathSegments.slice(0, -1).forEach(segment => {
        if (deepObj[segment] == null) {
            if (createPathSegmentsIfMissing) {
                deepObj[segment] = {};
            }
            else {
                Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(false, `The given path (${pathSegments.join("/")}) had a missing segment (${segment}), so the deep-set failed.`);
            }
        }
        deepObj = deepObj[segment];
    });
    if (newValue === undefined && deleteUndefined) {
        delete deepObj[Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(pathSegments).Last()];
    }
    else {
        deepObj[Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(pathSegments).Last()] = newValue;
    }
}
/** @param sepChar Default: "/" */
/*export function WithDeepSet(baseObj, pathOrPathSegments: string | (string | number)[], newValue, sepChar = "/") {
    let pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);

    let result;
    let result_deep;
    let baseObj_deep = baseObj;
    // tunnel down to the given path, overwriting the result_deep and baseObj_deep variables along the way
    pathSegments.forEach((segment, index)=> {
        // initialize with correct constructor for special cases (there might be some others, but this is sufficient for now)
        result_deep = baseObj_deep instanceof Array ? [...baseObj_deep] : {...baseObj_deep};
        Object.setPrototypeOf(result_deep, Object.getPrototypeOf(baseObj_deep)); // set the prototype to match
        result = result || result_deep;

        if (index < pathSegments.length - 1) {
            // tunnel down, for next iteration
            result_deep = result_deep[segment];
            baseObj_deep = baseObj_deep[segment];
        } else {
            result_deep[segment] = newValue;
        }
    });
    return result;
}*/
function WithDeepSet(baseObj, pathOrPathSegments, newValue, sepChar = "/") {
    let pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    return Object.assign(Object.assign({}, baseObj), { [pathSegments[0]]: pathSegments.length > 1 ? WithDeepSet(baseObj[pathSegments[0]], pathSegments.slice(1), newValue) : newValue });
}
//@((()=> { if (g.onclick == null) g.onclick = ()=>console.log(V.GetStackTraceStr()); }) as any)
function GetStackTraceStr(...args) {
    var stackTrace, sourceStackTrace = true;
    if (Object(_Types__WEBPACK_IMPORTED_MODULE_0__["IsString"])(args[0]))
        [stackTrace, sourceStackTrace] = args;
    else
        [sourceStackTrace] = args;
    //stackTrace = stackTrace || new Error()[sourceStackTrace ? "Stack" : "stack"];
    //stackTrace = stackTrace || (sourceStackTrace ? StackTrace.get().then(stack=>stackTrace = stack.map(a=>a.toString()).join("\n")) : new Error().stack);
    //stackTrace = stackTrace || new Error().stack;
    if (stackTrace == null) {
        //let fakeError = {}.VAct(a=>Error.captureStackTrace(a));
        let oldStackLimit = Error.stackTraceLimit;
        Error.stackTraceLimit = Infinity;
        let fakeError = new Error();
        stackTrace = fakeError.stack;
        Error.stackTraceLimit = oldStackLimit;
    }
    return stackTrace.substr(Object(___WEBPACK_IMPORTED_MODULE_1__["StringCE"])(stackTrace).IndexOf_X("\n", 1)); // remove "Error" line and first stack-frame (that of this method)
}
function GetErrorMessagesUnderElement(element) {
    //return element.querySelectorAll(":invalid").ToList().map(node=>node.validationMessage || `Invalid value.`);
    return Array.from(element.querySelectorAll(":invalid")).map(node => node.validationMessage || `Invalid value.`);
}
function CreateSymbol(name) {
    if (typeof Symbol != "undefined")
        return Symbol(name);
    //return `FakeSymbol(${name})`;
    // match how real Symbols get stringified, so we can always do, eg. DEL.toString() to send over network, for end-points that accept it using: baseData.VSet(sentData, {allowStringOperators: true})
    return `Symbol(${name})`;
}
const OMIT = CreateSymbol("$JSVE_SYMBOL_OMIT");
const DEL = CreateSymbol("$JSVE_SYMBOL_DELETE");
function OmitIfFalsy(value) {
    if (!value)
        return OMIT;
    return value;
}
function OmitIfNull(value) {
    if (value == null)
        return OMIT;
    return value;
}
function DelIfFalsy(value) {
    if (!value)
        return DEL;
    return value;
}
function DelIfNull(value) {
    if (value == null)
        return DEL;
    return value;
}
function FindDOM(selector) {
    return document.querySelector(selector);
}
function FindDOMAll(selector) {
    return Array.from(document.querySelectorAll(selector));
}
/*export enum CapScheme {
    /** examplePropNameWithDuoWord *#/ PropName,
    /** Example Title With Duo-Word *#/ Title,
    /** Example sentence with duo-word *#/ Sentence,
}
export function ChangeCapitalization(text: string, fromScheme: CapScheme, toScheme: CapScheme) {
    let inStandardScheme = ConvertFromSchemeXToStandardScheme(text, fromScheme);
    return ConvertFromStandardSchemeToSchemeX(inStandardScheme, toScheme);
}

// "standard scheme" is currently CapitalizeScheme.Sentence
function ConvertFromSchemeXToStandardScheme(text: string, fromScheme: CapScheme) {
    if (fromScheme == CapScheme.PropName) {
        // demo string: somePropName
        return text
            // somePropName -> some prop name
            .replace(/[A-Z]/g, a=>" " + a.toLowerCase())
            // some prop name -> Some prop name
            .replace(/^./, a=>a.toUpperCase());
    } else if (fromScheme == CapScheme.Title) {
        Assert(false, "Not yet implemented.");
    } else if (fromScheme == CapScheme.Sentence) {
        return text;
    }
}
function ConvertFromStandardSchemeToSchemeX(text: string, toScheme: CapScheme) {
    if (toScheme == CapScheme.PropName) {
        Assert(false, "Not yet implemented.");
    } else if (toScheme == CapScheme.Title) {
        Assert(false, "Not yet implemented.");
    } else if (toScheme == CapScheme.Sentence) {
        return text;
    }
}*/
// roughly ordered by average position in string at which mod would be applied
const stringModifiers = {
    /** some prop name -> Some prop name */
    startLower_to_upper: str => str.replace(/^./, a => a.toUpperCase()),
    /** Some prop name -> some prop name */
    startUpper_to_lower: str => str.replace(/^./, a => a.toLowerCase()),
    // lower to upper
    /** some prop name -> some Prop Name */
    spaceLower_to_spaceUpper: str => str.replace(/ ([a-z])/g, (m, sub1) => ` ${sub1.toUpperCase()}`),
    /** some-prop-name -> some-Prop-Name */
    hyphenLower_to_hyphenUpper: str => str.replace(/-([a-z])/g, (m, sub1) => `-${sub1.toUpperCase()}`),
    // upper to lower
    /** somePropName -> some prop name */
    lowerUpper_to_lowerSpaceLower: str => str.replace(/([a-z])([A-Z])/g, (m, sub1, sub2) => `${sub1} ${sub2.toLowerCase()}`),
    /** some prop Name -> somepropName */
    removeSpaces: str => str.replace(/ /g, (m, sub1) => ""),
    /** some-prop-Name -> somepropName */
    removeHyphens: str => str.replace(/-/g, (m, sub1) => ""),
};
function ModifyString(text, modifiersGetter) {
    let result = text;
    let chosenModifiers = modifiersGetter(stringModifiers);
    for (let mod of chosenModifiers) {
        result = mod(result);
    }
    return result;
}
/**
Downloads the given content to disk. Call must be triggered by an input event, or run from the console.
Very large strings may fail to download directly, but can be resolved by placing in a Blob:
StartDownload(new Blob(["someVeryLongString"]), "Backup.txt");
*/
function StartDownload(content, filename, dataTypeStr = "data:application/octet-stream,", encodeContentAsURIComp = true) {
    var link = document.createElement("a");
    Object.assign(link.style, { display: "none" });
    link.innerText = "Save to disk";
    if (content instanceof Blob) {
        // todo: make sure this works correctly, even for different data-types (since data-type args are ignored if Blob supplied)
        link.setAttribute("href", URL.createObjectURL(content));
    }
    else {
        link.setAttribute("href", dataTypeStr + (encodeContentAsURIComp ? encodeURIComponent(content) : content));
    }
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
function StartUpload() {
    return new Promise(resolve => {
        let fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.style.display = "none";
        fileInput.onchange = e => {
            var file = e.target["files"][0];
            if (!file)
                return;
            var reader = new FileReader();
            reader.onload = e => {
                var contents = e.target["result"];
                //Assert(typeof contents == "string")
                resolve(contents);
            };
            reader.readAsText(file);
        };
        document.body.appendChild(fileInput);
        fileInput.click();
    });
}
function TransferPrototypeProps(target, source, descriptorBase, descriptorOverride) {
    //for (let [name, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(source))) {
    for (let name of Object.getOwnPropertyNames(source)) {
        if (name == "constructor")
            continue;
        let descriptor = Object.getOwnPropertyDescriptor(source, name);
        Object.defineProperty(target, name, Object.assign({}, descriptorBase, descriptor, descriptorOverride));
    }
}
function WithFuncsStandalone(source) {
    let result = {};
    for (const key of Object.getOwnPropertyNames(source)) {
        if (key == "constructor")
            continue; // no reason to call the wrapper's constructor
        const descriptor = Object.getOwnPropertyDescriptor(source, key);
        const newDescriptor = Object.assign({}, descriptor);
        if (descriptor.value instanceof Function) {
            const oldFunc = descriptor.value;
            newDescriptor.value = (thisArg, ...callArgs) => {
                return oldFunc.apply(thisArg, callArgs);
            };
        }
        Object.defineProperty(result, key, newDescriptor);
    }
    return result;
}
/*export type WithFuncThisArgsAsAny_Type<T> = {
    [P in keyof T]:
        T[P] extends (this: any, ...args)=>any ? (this: any, ...args: Parameters<T[P]>)=>ReturnType<T[P]> :
        T[P];
};
export function WithFuncThisArgsAsAny<T>(source: T): WithFuncThisArgsAsAny_Type<T> {
    return source as any;
}*/
/*export type WithFuncThisArgTypesWrappedBy_Type<T> = {
    [P in keyof T]:
        T[P] extends (this: infer T2, ...args)=>any ? (this: T<T2>, ...args: Parameters<T[P]>)=>ReturnType<T[P]> :
        T[P];
};
export function WithFuncThisArgTypesWrappedBy<T>(source: T): WithFuncThisArgTypesWrappedBy_Type<T> {
    return source as any;
}*/
// use this simpler variant for class-extensions of target-types, where the class-extension methods don't need the type-generics of the target-type
/*export function CreateProxyForClassExtensions_ThisAsAny<T>(sourceClass: new(...args: any[])=>T) {
    return CreateProxyForClassExtensions<WithFuncThisArgsAsAny_Type<T>>(sourceClass as any);
}*/
//export function CreateProxyForClassExtensions<T>(sourceClass: new(...args: any[])=>T) {
//export function CreateProxyForClassExtensions(sourceClass_prototype: any) {
// old comment: we don't use this (specifying types at time of proxy-creation), as it would cause loss/simplifying of type-data for function calls
function CreateProxyForClassExtensions(sourceClass_prototype) {
    // proxy approach; nicer, but I don't like potential slowdown from creating new proxy each time a class-extension method is called!
    /*return (thisArg: any)=> {
        return new Proxy({}, {
            get(target, key, receiver?) {
                if (key == "constructor") return Reflect.get(target, key, receiver); // no reason to call the wrapper's constructor
                let descriptor = Object.getOwnPropertyDescriptor(sourceClass.prototype, key);
                if (descriptor.value instanceof Function) {
                    let oldFunc = descriptor.value as Function;
                    return (...callArgs)=> {
                        return oldFunc.apply(thisArg, callArgs);
                    };
                }
            }
        //}) as T;
        }) as WithFuncThisArgsAsAny_Type<T>;
    };*/
    // Static proxy approach -- a bit faster since it doesn't create any functions, closures, or proxies per wrap/CE-method-call.
    //	(Limitation: you can't store the result of "ObjectCE(something)" and call a method attached to it more than once, since each method-call removes the supplied this-arg from the stack.)
    /*let proxy = {} as any;
    const thisArgStack = [];*/
    let proxy = {};
    const thisArgStack = [];
    for (const key of Object.getOwnPropertyNames(sourceClass_prototype)) {
        if (key == "constructor")
            continue; // no reason to call the wrapper's constructor
        const descriptor = Object.getOwnPropertyDescriptor(sourceClass_prototype, key);
        const newDescriptor = Object.assign({}, descriptor);
        if (descriptor.value instanceof Function) {
            const oldFunc = descriptor.value;
            newDescriptor.value = (...callArgs) => {
                const thisArg = thisArgStack[thisArgStack.length - 1];
                const result = oldFunc.apply(thisArg, callArgs);
                //thisArgStack.length--;
                thisArgStack.splice(thisArgStack.length - 1, 1);
                return result;
            };
        }
        Object.defineProperty(proxy, key, newDescriptor);
    }
    //return (nextThis: any)=> {
    return (nextThis) => {
        thisArgStack.push(nextThis);
        return proxy;
    };
}
//# sourceMappingURL=General.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Promises.js":
/*!************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Promises.js ***!
  \************************************************************/
/*! exports provided: WaitTillDataPathIsSet, WaitTillPropertyIsSet, AwaitTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitTillDataPathIsSet", function() { return WaitTillDataPathIsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitTillPropertyIsSet", function() { return WaitTillPropertyIsSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwaitTree", function() { return AwaitTree; });
/* harmony import */ var _ClassExtensions_CE_Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClassExtensions/CE_Object */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function WaitTillDataPathIsSet(rootObj, dataPath) {
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let dataPathParts = dataPath.split(".");
        let currentParent = rootObj;
        for (let part of dataPathParts) {
            while (currentParent[part] == null) {
                yield WaitTillPropertyIsSet(currentParent, part);
            }
            currentParent = currentParent[part];
        }
        resolve();
    }));
}
function WaitTillPropertyIsSet(obj, prop) {
    return new Promise((resolve, reject) => {
        Object(_ClassExtensions_CE_Object__WEBPACK_IMPORTED_MODULE_0__["ObjectCE"])(obj)._AddGetterSetter(prop, () => { }, value => {
            delete obj[prop]; // remove this hook
            obj[prop] = value; // set to provided value
            resolve();
        });
    });
}
/**
Example:
(async()=> {
    let a = {hi: null as Promise<string>};
    let b = await AwaitTree(a);
    b.hi; // type is "string", both in typescript and runtime
})();
 */
function AwaitTree(obj) {
    return __awaiter(this, void 0, void 0, function* () {
        const pairs = Object(_ClassExtensions_CE_Object__WEBPACK_IMPORTED_MODULE_0__["ObjectCE"])(obj).Pairs();
        const awaitedResults = yield Promise.all(pairs.map((pair) => {
            let valueAsPromise = pair.value instanceof Promise ? pair.value : Promise.resolve(pair.value);
            return valueAsPromise;
        }));
        const result = {};
        for (const pair of pairs) {
            result[pair.key] = awaitedResults[pair.index];
        }
        return result;
    });
}
//# sourceMappingURL=Promises.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Timers.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Timers.js ***!
  \**********************************************************/
/*! exports provided: TimerContext, TryCall, TryCall_OnX, WaitXThenRun, WaitUntilXThenRun, SleepAsync, SleepAsyncUntil, DoNothingXTimesThenDoY, Timer, TimerS, BufferAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerContext", function() { return TimerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryCall", function() { return TryCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryCall_OnX", function() { return TryCall_OnX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitXThenRun", function() { return WaitXThenRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitUntilXThenRun", function() { return WaitUntilXThenRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepAsync", function() { return SleepAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SleepAsyncUntil", function() { return SleepAsyncUntil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoNothingXTimesThenDoY", function() { return DoNothingXTimesThenDoY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerS", function() { return TimerS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferAction", function() { return BufferAction; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
/* harmony import */ var _Internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@Internal */ "./node_modules/js-vextensions/Dist/Utils/@Internal.js");


class TimerContext {
    constructor() {
        this.timers = [];
    }
    Reset() {
        for (let timer of this.timers) {
            timer.Stop();
        }
        this.timers = [];
    }
    // Can be useful on platforms (eg. Android) where setInterval() and setTimeout() stop working when the screen is off.
    // Just have the Android code call the js every second or so, running this method; this will force the timer-functions to be manually triggered once they've passed the expected tick-time.
    ManuallyTriggerOverdueTimers() {
        for (let timer of this.timers) {
            if (timer.NextTickFuncOverdue) {
                timer.nextTickFunc();
            }
        }
    }
}
TimerContext.default = new TimerContext();
TimerContext.default_autoAddAll = false;
// methods
// ==========
function TryCall(func, ...args) {
    //if (!(func instanceof Function)) return;
    if (typeof func != "function")
        return;
    try {
        return func.apply(this, args);
    }
    catch (ex) { }
}
function TryCall_OnX(obj, func, ...args) {
    if (typeof func != "function")
        return;
    try {
        return func.apply(obj, args);
    }
    catch (ex) { }
}
/*let oldTimeout = setTimeout;
g.setTimeout = function(func: Function, delayInMS = 0, ...args) {
    // setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
    // on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms
    if (delayInMS == 0)
        return setImmediate(func, ...args);
    return oldTimeout(func, delayInMS, ...args);
}*/
/*export function Sleep(ms) {
    var startTime = new Date().getTime();
    while (new Date().getTime() - startTime < ms) {}
}*/
const maxTimeoutLength = 0x7FFFFFFF; // setTimeout limit is MAX_INT32=(2^31-1)
function WaitXThenRun(delayInMS, func, ...args) {
    Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(delayInMS <= maxTimeoutLength, `Cannot wait for longer than ${maxTimeoutLength} ms. (use WaitUntilXThenRun, if a long-delay is needed)`);
    // setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
    // on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms
    if (delayInMS == 0 && _Internal__WEBPACK_IMPORTED_MODULE_1__["g"].setImmediate) {
        return _Internal__WEBPACK_IMPORTED_MODULE_1__["g"].setImmediate(func, ...args); // same as below
    }
    return setTimeout(func, delayInMS, ...args); // "as any": maybe temp; used to allow source-importing from NodeJS
}
function WaitUntilXThenRun(targetDateTimeInMS, func, ...args) {
    var now = Date.now();
    var diff = Object(___WEBPACK_IMPORTED_MODULE_0__["NumberCE"])(targetDateTimeInMS - now).KeepAtLeast(0);
    if (diff > maxTimeoutLength) {
        WaitXThenRun(maxTimeoutLength, () => WaitUntilXThenRun(targetDateTimeInMS, func));
    }
    else {
        WaitXThenRun(diff, func);
    }
}
function SleepAsync(timeMS) {
    return new Promise((resolve, reject) => {
        WaitXThenRun(timeMS, resolve);
    });
}
function SleepAsyncUntil(targetDateTimeInMS) {
    return new Promise((resolve, reject) => {
        WaitUntilXThenRun(targetDateTimeInMS, resolve);
    });
}
var DoNothingXTimesThenDoY_counters = {};
function DoNothingXTimesThenDoY(doNothingCount, func, key = "default") {
    if (DoNothingXTimesThenDoY_counters[key] == null) {
        DoNothingXTimesThenDoY_counters[key] = 0;
    }
    if (DoNothingXTimesThenDoY_counters[key] >= doNothingCount) {
        func();
    }
    DoNothingXTimesThenDoY_counters[key]++;
}
// interval is in seconds (can be decimal)
class Timer {
    constructor(intervalInMS, func, maxCallCount = -1) {
        this.timerID = -1;
        this.callCount_thisRun = 0;
        this.callCount_total = 0;
        Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(Object(___WEBPACK_IMPORTED_MODULE_0__["IsNumber"])(intervalInMS), "Interval must be a number.");
        this.intervalInMS = intervalInMS;
        this.func = func;
        this.maxCallCount = maxCallCount;
        if (TimerContext.default_autoAddAll) {
            TimerContext.default.timers.push(this);
        }
    }
    SetContext(timerContext) {
        Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(timerContext, "TimerContext cannot be null.");
        this.timerContexts = (this.timerContexts || []).concat(timerContext);
        timerContext.timers.push(this);
        return this;
    }
    RemoveFromContext(timerContext) {
        Object(___WEBPACK_IMPORTED_MODULE_0__["ArrayCE"])(this.timerContexts).Remove(timerContext);
        Object(___WEBPACK_IMPORTED_MODULE_0__["ArrayCE"])(timerContext.timers).Remove(this);
    }
    ClearContexts() {
        for (let context of this.timerContexts) {
            this.RemoveFromContext(context);
        }
    }
    get IsRunning() { return this.timerID != -1; }
    get NextTickFuncOverdue() {
        return this.nextTickTime != null && Date.now() > this.nextTickTime && this.nextTickFunc != null;
    }
    Start(initialDelayOverride = null) {
        // if start is called when it's already running, stop the timer first (thus we restart the timer instead of causing overlapping setIntervals/delayed-func-calls)
        if (this.IsRunning)
            this.Stop();
        this.startTime = Date.now();
        const StartRegularInterval = () => {
            this.nextTickTime = this.startTime + this.intervalInMS;
            this.timerID = setInterval(this.nextTickFunc = () => {
                this.callCount_thisRun++;
                this.callCount_total++;
                this.func();
                if (this.maxCallCount != -1 && this.callCount_thisRun >= this.maxCallCount) {
                    this.Stop();
                }
                else {
                    //this.nextTickTime += this.intervalInMS;
                    this.nextTickTime = Date.now() + this.intervalInMS; // using Date.now() prevents the prop from getting out-of-sync (from sleep-mode)
                }
            }, this.intervalInMS); // "as any": maybe temp; used to allow source-importing from NodeJS
        };
        if (initialDelayOverride != null) {
            this.nextTickTime = this.startTime + initialDelayOverride;
            this.timerID = setTimeout(this.nextTickFunc = () => {
                this.callCount_thisRun++;
                this.callCount_total++;
                this.func();
                if (this.maxCallCount != -1 && this.callCount_thisRun >= this.maxCallCount) {
                    this.Stop();
                }
                else {
                    StartRegularInterval();
                }
            }, initialDelayOverride); // "as any": maybe temp; used to allow source-importing from NodeJS
        }
        else {
            StartRegularInterval();
        }
        return this; // enable chaining, for SetContext() call
    }
    Stop() {
        clearInterval(this.timerID);
        //this.startTime = null;
        this.nextTickTime = null;
        this.nextTickFunc = null;
        this.timerID = -1;
        this.callCount_thisRun = 0;
    }
}
class TimerS extends Timer {
    constructor(interval_decimal, func, maxCallCount = -1) {
        super(interval_decimal * 1000, func, maxCallCount);
    }
}
var funcLastScheduledRunTimes = {};
function BufferAction(...args) {
    if (args.length == 2)
        var [minInterval, func] = args, key = null;
    else if (args.length == 3)
        var [key, minInterval, func] = args;
    var lastScheduledRunTime = funcLastScheduledRunTimes[key] || 0;
    var now = new Date().getTime();
    var timeSinceLast = now - lastScheduledRunTime;
    if (timeSinceLast >= minInterval) { // if we've waited enough since last run, run right now
        func();
        funcLastScheduledRunTimes[key] = now;
    }
    else {
        let waitingForNextRunAlready = lastScheduledRunTime > now;
        if (!waitingForNextRunAlready) { // else, if we're not already waiting for next-run, schedule next-run
            var nextRunTime = lastScheduledRunTime + minInterval;
            var timeTillNextRun = nextRunTime - now;
            WaitXThenRun(timeTillNextRun, func);
            funcLastScheduledRunTimes[key] = nextRunTime;
        }
    }
}
//# sourceMappingURL=Timers.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Types.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Types.js ***!
  \*********************************************************/
/*! exports provided: bool, int, double, string, IsPrimitive, IsBool, ToBool, IsNumberString, IsNumber, ToNumber, IsInt, ToInt, IsNaN, IsString, ToString, IsSymbol, IsFunction, IsArray, IsObject, IsTypeX, IsConstructor, GetEntries, GetValues, GetValues_ForSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bool", function() { return bool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "double", function() { return double; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsPrimitive", function() { return IsPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsBool", function() { return IsBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToBool", function() { return ToBool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumberString", function() { return IsNumberString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumber", function() { return IsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToNumber", function() { return ToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsInt", function() { return IsInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToInt", function() { return ToInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNaN", function() { return IsNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsString", function() { return IsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToString", function() { return ToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSymbol", function() { return IsSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFunction", function() { return IsFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsArray", function() { return IsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsObject", function() { return IsObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsTypeX", function() { return IsTypeX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsConstructor", function() { return IsConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEntries", function() { return GetEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetValues", function() { return GetValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetValues_ForSchema", function() { return GetValues_ForSchema; });
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");

// standard types
// ----------
/*export class bool extends Boolean {}
export class int extends Number {}
export class double extends Number {}
export var string = "string" as any as (new(..._)=>string);*/
var bool = () => "bool";
var int = () => "int";
var double = () => "double";
var string = () => "string";
function IsPrimitive(obj) { return IsBool(obj) || IsNumber(obj) || IsString(obj); }
function IsBool(obj) { return typeof obj == "boolean"; } //|| obj instanceof Boolean
function ToBool(boolStr) { return boolStr == "true" ? true : false; }
function IsNumberString(obj, allowNaN = false) { return IsString(obj) && obj.length && IsNumber(Number(obj), false, allowNaN); }
function IsNumber(obj, allowNumberObj = false, allowNaN = false) {
    if (!allowNaN && IsNaN(obj))
        return false;
    return typeof obj == "number" || (allowNumberObj && obj instanceof Number);
}
/** Basically the same as Number(...), accepting numbers, and converting number-strings of these forms:
1) "010" -> 10 [ES5+], 8 [<ES5]
2) "0x10" -> 16
3) "5e3" -> 5000
Does *not* convert values of these forms (instead returns valIfConversionFails -- by default NaN):
4) null -> ?
5) "" -> ?*/
function ToNumber(stringOrFloatVal, valIfConversionFails = NaN) {
    if (!IsString(stringOrFloatVal) && !IsNumber(stringOrFloatVal))
        return valIfConversionFails;
    if (IsString(stringOrFloatVal) && stringOrFloatVal.length == 0)
        return valIfConversionFails;
    return Number(stringOrFloatVal);
}
function IsInt(obj) { return IsNumber(obj) && parseInt(obj) == obj; }
function ToInt(stringOrFloatVal, valIfConversionFails = NaN) { return parseInt(ToNumber(stringOrFloatVal, valIfConversionFails) + ""); }
/*export function IsFloat(obj) : obj is number { return typeof obj == "number" && parseFloat(obj as any) != parseInt(obj as any); }
export function ToFloat(stringOrIntVal) { return parseFloat(stringOrIntVal); }*/
function IsNaN(obj) { return typeof obj == "number" && obj != obj; }
function IsString(obj, allowStringObj = false) {
    return typeof obj == "string" || (allowStringObj && obj instanceof String);
}
function ToString(val) { return "" + val; }
function IsSymbol(obj, allowSymbolObj = false) {
    return typeof obj == "symbol" || (allowSymbolObj && typeof Symbol != undefined && obj instanceof Symbol);
}
function IsFunction(obj) {
    //return obj instanceof Function;
    return typeof obj == "function";
}
function IsArray(obj) { return Array.isArray(obj); } // for briefness and/or consistency
function IsObject(obj) { return typeof obj == "object"; }
//export function IsObjectOf<T>(obj) : obj is T { return typeof obj == "object"; }
//export function IsOfType<T>(obj, typeConstructor: new()=>T) : obj is T { return obj.constructor.name == typeConstructor.name; }
function IsTypeX(obj, typeConstructor) { return obj instanceof typeConstructor; }
function IsConstructor(obj) {
    //return obj instanceof Function && obj.name;
    return typeof obj == "function" && obj.name;
}
/*function TypeOrNameOrGetter_ToName<T>(typeOrNameOrGetter?: string | (new(..._)=>T) | ((_?)=>new(..._)=>T)): string {
    return typeOrNameOrGetter instanceof Function && typeOrNameOrGetter.name ? typeOrNameOrGetter.name :
        typeOrNameOrGetter instanceof Function ? (typeOrNameOrGetter as any)().name :
        typeOrNameOrGetter;
}*/
// classes/enums
// ==========
/*var constructorHelper = function() {};
export function CreateClass(baseClass, classMembers) {
    baseClass = baseClass || Object;

    var result;

    if (classMembers && classMembers.hasOwnProperty("constructor"))
        result = classMembers.constructor;
    else
        result = function () { return baseClass.apply(this, arguments); };

    constructorHelper.prototype = baseClass.prototype;
    result.prototype = new constructorHelper();

    if (classMembers)
        result.prototype.Extend(classMembers);

    result.prototype.constructor = result;
    result.__super__ = baseClass.prototype;

    return result;
}*/
// enums
// ==========
/**
 * Typescript enums compile to an object with each `key = value` pair converted into two props: key->value, value->key
 * This function returns just the key->value pairs. (with each entry having the form {name: string, value: number | null})
 */
function GetEntries(enumType, nameModifierFunc) {
    if (nameModifierFunc == "ui")
        nameModifierFunc = name => Object(_General__WEBPACK_IMPORTED_MODULE_0__["ModifyString"])(name, m => [m.lowerUpper_to_lowerSpaceLower]);
    //let entryNames = Object.keys(enumType).filter(a=>a.match(/^\D/) != null);
    // valid enum values are numbers and null, so any props other than those are the name->value props we want
    /*let nameValuePairs = enumType.Pairs().filter(pair=>!IsNumberString(pair.key) && pair.key != "null");
    return nameValuePairs.map(pair=>({name: nameModifierFunc ? nameModifierFunc(pair.key) : pair.key, value: pair.value as number}));*/
    // valid enum values are numbers and null, so any keys other than those are the ones we want (they're the keys for the key->value pairs)
    let entryNames = Object.keys(enumType).filter(key => !IsNumberString(key) && key != "null");
    return entryNames.map(name => ({ name: nameModifierFunc instanceof Function ? nameModifierFunc(name) : name, value: enumType[name] }));
}
function GetValues(enumType) {
    return GetEntries(enumType).map(a => a.value);
}
function GetValues_ForSchema(enumType) {
    return GetValues(enumType).map(value => ({ const: value }));
}
//# sourceMappingURL=Types.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/URLs.js":
/*!********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/URLs.js ***!
  \********************************************************/
/*! exports provided: ToAbsoluteUrl, JumpToHash, GetCurrentURLString, GetUrlParts, VURL, QueryVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToAbsoluteUrl", function() { return ToAbsoluteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpToHash", function() { return JumpToHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentURLString", function() { return GetCurrentURLString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUrlParts", function() { return GetUrlParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VURL", function() { return VURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryVar", function() { return QueryVar; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");

// Note: It's fine to use `window` instead of `g` in the below, since it fails outside of browsers anyway.
function ToAbsoluteUrl(url) {
    // Handle absolute URLs (with protocol-relative prefix)
    // Example: //domain.com/file.png
    if (url.search(/^\/\//) != -1) {
        return window.location.protocol + url;
    }
    // Handle absolute URLs (with explicit origin)
    // Example: http://domain.com/file.png
    if (url.search(/:\/\//) != -1) {
        return url;
    }
    // Handle absolute URLs (without explicit origin)
    // Example: /file.png
    if (url.search(/^\//) != -1) {
        return window.location.origin + url;
    }
    // Handle relative URLs
    // Example: file.png
    var base = window.location.href.match(/(.*\/)/)[0];
    return base + url;
}
function JumpToHash(hashStr) {
    var url = location.href; // Save down the URL without hash.
    location.href = "#" + hashStr; // Go to the target element.
    history.replaceState(null, null, url); // Don't like hashes. Changing it back.
    //document.getElementById(hashStr).scrollIntoView(); //Even IE6 supports this
}
/** Returns [domainStr, pathStr, varsStr, hashStr], without the separator-chars. */
function GetCurrentURLString() {
    return window.location.href.replace(/%22/, "\"");
}
function GetUrlParts(url) {
    url = url || GetCurrentURLString();
    let [domainStr, pathStr, varsStr, hashStr] = Array(4).fill(0).map(a => "");
    let urlToProcess = url;
    if (urlToProcess.includes("#") && !varsStr.includes("runJS=")) {
        [urlToProcess, hashStr] = Object(___WEBPACK_IMPORTED_MODULE_0__["StringCE"])(urlToProcess).SplitAt(urlToProcess.indexOf("#"));
    }
    if (urlToProcess.includes("?")) {
        [urlToProcess, varsStr] = Object(___WEBPACK_IMPORTED_MODULE_0__["StringCE"])(urlToProcess).SplitAt(urlToProcess.indexOf("?"));
    }
    //if (urlToProcess.Matches("/").length == )
    let splitAtSlash_pos = Object(___WEBPACK_IMPORTED_MODULE_0__["NumberCE"])(Object(___WEBPACK_IMPORTED_MODULE_0__["StringCE"])(urlToProcess).IndexOf_X("/", 2)).IfN1Then(urlToProcess.length);
    [domainStr, pathStr] = Object(___WEBPACK_IMPORTED_MODULE_0__["StringCE"])(urlToProcess).SplitAt(splitAtSlash_pos);
    return [domainStr, pathStr, varsStr, hashStr];
}
function GetUrlPath(url, fromDomain = true) {
    /*let [pathStr, varsStr, hashStr] = GetUrlParts(url);
    if (fromDomain)
        pathStr = pathStr.SplitAt(pathStr.IndexOf_X("/", 2).IfN1Then(pathStr.length))[1];
    if (pathStr.endsWith("/"))
        pathStr = pathStr.substr(0, pathStr.length - 1);*/
    let [_, pathStr] = GetUrlParts(url);
    if (pathStr.endsWith("/"))
        pathStr = pathStr.slice(0, -1);
    return pathStr;
}
function GetUrlVars(url, allowQuestionMarkAsVarSep = true) {
    let varSeparators = allowQuestionMarkAsVarSep ? ["&", "?"] : ["&"];
    let [_, __, varsStr] = GetUrlParts(url);
    var vars = {}; //{[key: string]: string};
    var parts = Object(___WEBPACK_IMPORTED_MODULE_0__["StringCE"])(varsStr).SplitByAny(...varSeparators).filter(a => a);
    for (let part of parts) {
        let [key, value] = Object(___WEBPACK_IMPORTED_MODULE_0__["StringCE"])(part).SplitAt(part.indexOf("="));
        vars[key] = value;
    }
    return vars;
}
/*export function GetCurrentURL(fromAddressBar = false) {
    return fromAddressBar ? URL.Parse(GetCurrentURLString()) : URL.FromState(State("router"));
}*/
class VURL {
    constructor(domain = "", pathNodes = [], queryVars = [], hash = "") {
        this.domain = domain;
        this.pathNodes = pathNodes;
        this.queryVars = queryVars;
        this.hash = hash;
    }
    static Parse(urlStr, useCurrentDomainIfMissing = true, allowQuestionMarkAsVarSep = true) {
        if (useCurrentDomainIfMissing && !urlStr.startsWith("http"))
            urlStr = window.location.origin + (urlStr.startsWith("/") ? "" : "/") + urlStr;
        let [domainStr, pathStr, varsStr, hashStr] = GetUrlParts(urlStr);
        let queryVarsMap = GetUrlVars(urlStr, allowQuestionMarkAsVarSep);
        let result = new VURL();
        result.domain = domainStr;
        result.pathNodes = pathStr.length ? pathStr.split("/") : [];
        for (let key of Object.keys(queryVarsMap)) {
            result.queryVars.push(new QueryVar(key, queryVarsMap[key]));
        }
        result.hash = hashStr;
        return result;
    }
    static FromLocationObject(location) {
        // todo: have this support all Location properties, not just those used by connected-react-router
        let result = VURL.Parse(location ? (location.pathname || "") + (location.search || "") + (location.hash || "") : "");
        //if (normalize) result = result.Normalized();
        return result;
    }
    // doesn't supply all the properties of a Location object, but supplies the most common
    ToLocationObject() {
        return {
            pathname: this.toString({ domain: false, path: true, queryVars: false, hash: false }),
            search: this.toString({ domain: false, pathStartSlash: false, path: false, queryVars: true, hash: false }),
            hash: this.toString({ domain: false, pathStartSlash: false, path: false, queryVars: false, hash: true }),
            key: "URLKey_" + Date.now(),
        };
    }
    DomainStr(withProtocol = true) {
        return withProtocol ? this.domain : this.DomainWithoutProtocol;
    }
    get Protocol() { return this.domain && Object(___WEBPACK_IMPORTED_MODULE_0__["StringCE"])(this.domain).Contains("://") ? this.domain.substr(0, this.domain.indexOf("://")) : null; }
    get DomainWithoutProtocol() { return this.domain && Object(___WEBPACK_IMPORTED_MODULE_0__["StringCE"])(this.domain).Contains("://") ? this.domain.substr(this.domain.indexOf("://") + 3) : this.domain; }
    PathStr(pathStartSlash) {
        let result = "";
        if (pathStartSlash) {
            result += "/";
        }
        // path-nodes
        if (this.pathNodes.length)
            result += this.pathNodes.join("/");
        return result;
    }
    get QueryStr() {
        let result = "";
        for (let [index, queryVar] of this.queryVars.entries()) {
            result += (index == 0 ? "?" : "&") + queryVar.name + "=" + queryVar.value;
        }
        return result;
    }
    GetQueryVar(name) {
        let entry = this.queryVars.find(a => a.name == name);
        return entry ? entry.value : undefined;
    }
    SetQueryVar(name, value) {
        let existingEntry = this.queryVars.find(a => a.name == name);
        if (existingEntry) {
            existingEntry.value = value;
        }
        else {
            this.queryVars.push(new QueryVar(name, value));
        }
    }
    get HashStr() {
        if (!this.hash)
            return "";
        return "#" + this.hash;
    }
    Clone() {
        return new VURL(this.domain, this.pathNodes.slice(), this.queryVars.map(a => a.Clone()), this.hash);
    }
    /*Normalized() {
        let result = this.Clone();
        if (!rootPages.Contains(result.pathNodes[0])) {
            result.pathNodes.Insert(0, "home");
        }
        if (result.pathNodes[1] == null && rootPageDefaultChilds[result.pathNodes[0]]) {
            result.pathNodes.Insert(1, rootPageDefaultChilds[result.pathNodes[0]]);
        }
        return result;
    }*/
    toString(options) {
        options = Object(___WEBPACK_IMPORTED_MODULE_0__["E"])({ domain: true, domain_protocol: true, pathStartSlash: "auto", path: true, queryVars: true, hash: true }, options);
        let result = "";
        // domain
        if (options.domain)
            result += this.DomainStr(options.domain_protocol);
        //if (options.forceSlashAfterDomain || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash))
        let pathStartSlash_auto = result.length == 0 || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash);
        let pathStartSlash = options.pathStartSlash == true || (options.pathStartSlash == "auto" && pathStartSlash_auto);
        if (pathStartSlash) {
            result += "/";
        }
        if (options.path)
            result += this.PathStr(false);
        if (options.queryVars)
            result += this.QueryStr;
        if (options.hash)
            result += this.HashStr;
        Object(___WEBPACK_IMPORTED_MODULE_0__["Assert"])(!result.startsWith("//"), `URL toString() result cannot start with "//". (it's probably an error)`);
        return result;
    }
    toString_OptIn(options) {
        options = Object(___WEBPACK_IMPORTED_MODULE_0__["E"])({ domain: false, path: false, queryVars: false, hash: false }, options);
        return this.toString(options);
    }
}
function AsPartial(obj) { return obj; }
class QueryVar {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    Clone() {
        return new QueryVar(this.name, this.value);
    }
}
// todo: merge this functionality into the URL class
/*export function GetPathNodes(path = GetUrlPath(), makeFull = true) {
    /*let location = State().router;
    if (location == null) return "/";
    return location.pathname.split("/")[1];*#/
    
    let pathNodes = path.split("/").Where(a=>a.length > 0);
    if (makeFull) {
        if (!rootPages.Contains(pathNodes[0]))
            pathNodes.Insert(0, "home");
        if (pathNodes[1] == null)
            pathNodes.Insert(1, rootPageDefaultChilds[pathNodes[0]]);
    }
    return pathNodes;
}
export function GetPath(path = GetUrlPath(), makeFull = true) {
    return GetPathNodes(path, makeFull).join("/");
}*/ 
//# sourceMappingURL=URLs.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/VCache.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/VCache.js ***!
  \**********************************************************/
/*! exports provided: Storage, storages, GetStorageForCachedTransform, CachedTransform, CombineDynamicPropMaps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storages", function() { return storages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStorageForCachedTransform", function() { return GetStorageForCachedTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachedTransform", function() { return CachedTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineDynamicPropMaps", function() { return CombineDynamicPropMaps; });
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
/* harmony import */ var _ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClassExtensions/CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");


class Storage {
    constructor() {
        this.resultUpdateCount = 0;
    }
}
let storages = {};
function GetStorageForCachedTransform(transformType, staticProps) {
    //let storageKey = transformType + "|" + JSON.stringify(staticProps);
    let storageKey = transformType + "|" + staticProps.join("|");
    let storage = storages[storageKey] || (storages[storageKey] = new Storage());
    return storage;
}
/**
 * Basically, by wrapping code in this function, you're saying:
 *		"Do not re-evaluate the code below unless the dynamic-props have changed since the last time we were here."
 *		(with the transformType and staticProps defining what "here" means)
 * @param transformType The name of the transformation; usually a function-name like "GetSomeThing", or "connectProp_processX". (used, along with static-props, to form a "storage key", where cache is checked for and stored)
 * @param staticProps An array.
 * @param dynamicProps Can be either an object or array.
 * @param transformFunc The data-transformer. Whenever a dynamic-prop changes, this will be called, and the new result will be cached.
 */
//export function CachedTransform<T, T2, T3>(transformType: string, staticProps: T, dynamicProps: T2, transformFunc: (staticProps: T, dynamicProps: T2)=>T3): T3 {
function CachedTransform(transformType, staticProps, dynamicProps, transformFunc) {
    //Assert(dynamicProps != null);
    let storage = GetStorageForCachedTransform(transformType, staticProps);
    if (!Object(_General__WEBPACK_IMPORTED_MODULE_0__["ShallowEquals"])(dynamicProps, storage.lastDynamicProps) || storage.resultUpdateCount == 0) {
        /*MaybeLog(a=>a.cacheUpdates,
            ()=>`Recalculating cache. @Type:${transformType} @StaticProps:${ToJSON(staticProps)} @DynamicProps:${ToJSON(dynamicProps)} @TransformFunc:${transformFunc}`);*/
        storage.lastDynamicProps = dynamicProps;
        storage.lastDebugInfo = {};
        storage.lastResult = transformFunc(storage.lastDebugInfo, staticProps, dynamicProps);
        storage.resultUpdateCount++;
    }
    return storage.lastResult;
}
function CombineDynamicPropMaps(...maps) {
    var result = {};
    Object(_ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(maps).ForEach((map, mapIndex) => {
        if (map == null)
            return "continue";
        Object.keys(map).forEach(key => {
            result[mapIndex + "_" + key] = map[key];
        });
    });
    return result;
}
//# sourceMappingURL=VCache.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/VectorStructs.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/VectorStructs.js ***!
  \*****************************************************************/
/*! exports provided: IsVector2iShape, Vector2, IsVector3Shape, Vector3, IsVRectShape, VRect, VBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsVector2iShape", function() { return IsVector2iShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return Vector2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsVector3Shape", function() { return IsVector3Shape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3", function() { return Vector3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsVRectShape", function() { return IsVRectShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VRect", function() { return VRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBounds", function() { return VBounds; });
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Vector2_1, Vector3_1, VRect_1;


function IsNullOrNaN(value) {
    return value === null || Object(___WEBPACK_IMPORTED_MODULE_1__["IsNaN"])(value);
}
function IsVector2iShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y");
}
let Vector2 = Vector2_1 = class Vector2 {
    constructor(...args) {
        var x = 0, y = 0;
        if (typeof args[0] == "number")
            [x, y] = args;
        else if (args[0] && args[0].x != null)
            [x, y] = [args[0].x, args[0].y];
        else if (args[0] && args[0].left != null)
            [x, y] = [args[0].left, args[0].top];
        Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(!IsNullOrNaN(x) && !IsNullOrNaN(y), "Cannot initialize Vector2i's x/y to null/NaN. (if needed, initialize to undefined)");
        this.x = x;
        this.y = y;
    }
    static get zero() { return new Vector2_1(0, 0); }
    static get one() { return new Vector2_1(1, 1); }
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    toString() { return this.x + " " + this.y; }
    Equals(other) { return other && this.toString() == other.toString(); }
    NewX(xOrFunc) { return new Vector2_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y); }
    NewY(yOrFunc) { return new Vector2_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc); }
    Plus(...args) {
        let [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args;
        return new Vector2_1(this.x + x, this.y + y);
    }
    Minus(...args) {
        let [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args;
        return new Vector2_1(this.x - x, this.y - y);
    }
    Times(...args) {
        var [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] :
            args.length == 1 ? [args[0], args[0]] :
                args;
        return new Vector2_1(this.x * x, this.y * y);
    }
    DividedBy(...args) {
        var [x, y] = IsVector2iShape(args[0]) ? [args[0].x, args[0].y] :
            args.length == 1 ? [args[0], args[0]] :
                args;
        return new Vector2_1(this.x / x, this.y / y);
    }
    DistanceTo(other) {
        return Math.sqrt(Object(___WEBPACK_IMPORTED_MODULE_1__["NumberCE"])(other.x - this.x).ToPower(2) + Object(___WEBPACK_IMPORTED_MODULE_1__["NumberCE"])(other.y - this.y).ToPower(2));
    }
};
Vector2 = Vector2_1 = __decorate([
    _General__WEBPACK_IMPORTED_MODULE_0__["Global"]
], Vector2);

function IsVector3Shape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("z");
}
let Vector3 = Vector3_1 = class Vector3 {
    constructor(x = null, y = null, z = null) {
        Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(z), "Cannot initialize Vector3i's x/y/z to null/NaN. (if needed, initialize to undefined)");
        this.x = x != null ? x : 0;
        this.y = y != null ? y : 0;
        this.z = z != null ? z : 0;
    }
    static get zero() { return new Vector3_1(0, 0, 0); }
    static get one() { return new Vector3_1(1, 1, 1); }
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
        this.z = parseInt(strParts[2]);
    }
    //VDFSerialize() { return this.toString(); } //Swapped().toString(); }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    toString() { return this.x + " " + this.y + " " + this.z; }
    NewX(xOrFunc) { return new Vector3_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y, this.z); }
    NewY(yOrFunc) { return new Vector3_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc, this.z); }
    NewZ(zOrFunc) { return new Vector3_1(this.x, this.y, zOrFunc instanceof Function ? zOrFunc(this.z) : zOrFunc); }
    Minus(...args) {
        let [x, y, z] = IsVector3Shape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args;
        return new Vector3_1(this.x - x, this.y - y, this.z - z);
    }
    Plus(...args) {
        let [x, y, z] = IsVector3Shape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args;
        return new Vector3_1(this.x + x, this.y + y, this.z + z);
    }
    Times(...args) {
        var [x, y, z] = IsVector3Shape(args[0]) ? [args[0].x, args[0].y, args[0].z] :
            args.length == 1 ? [args[0], args[0], args[0]] :
                args;
        return new Vector3_1(this.x * x, this.y * y, this.z * z);
    }
};
Vector3 = Vector3_1 = __decorate([
    _General__WEBPACK_IMPORTED_MODULE_0__["Global"]
], Vector3);

function IsVRectShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("width") && obj.hasOwnProperty("height");
}
let VRect = VRect_1 = class VRect {
    constructor(...args) {
        let x, y, width, height, y0IsBottom;
        if (args.length == 2 || args.length == 3)
            [x, y, width, height, y0IsBottom] = [args[0].x, args[0].y, args[1].x, args[1].y, args[2]];
        else
            [x, y, width, height, y0IsBottom] = args;
        Object(___WEBPACK_IMPORTED_MODULE_1__["Assert"])(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(width) && !IsNullOrNaN(height), "Cannot initialize VRect's x/y/width/height to null/NaN. (if needed, initialize to undefined)");
        this.x = x;
        this.y = y;
        this.width = width != null ? width : 0;
        this.height = height != null ? height : 0;
        //this.y0IsBottom = y0IsBottom != null ? y0IsBottom : false;
        if (y0IsBottom)
            this.y0IsBottom = y0IsBottom;
    }
    static FromLTWH(rect, y0IsBottom = false) {
        return new VRect_1(rect.left, rect.top, rect.width, rect.height, y0IsBottom);
    }
    get Left() { return this.x; }
    set Left(val) {
        var oldRight = this.Right;
        this.x = val;
        this.Right = oldRight;
    }
    get Right() { return this.x + this.width; }
    set Right(val) { this.width = val - this.x; }
    get Bottom() { return this.y0IsBottom ? this.y : this.y + this.height; }
    set Bottom(val) {
        if (this.y0IsBottom) {
            var oldTop = this.Top;
            this.y = val;
            this.Top = oldTop;
        }
        else {
            this.height = val - this.y;
        }
    }
    get Top() { return this.y0IsBottom ? this.y + this.height : this.y; }
    set Top(val) {
        if (this.y0IsBottom) {
            this.height = val - this.y;
        }
        else {
            let oldBottom = this.Bottom;
            this.y = val;
            this.Bottom = oldBottom;
        }
    }
    get Position() { return new Vector2(this.x, this.y); }
    set Position(val) {
        this.x = val.x;
        this.y = val.y;
    }
    get Size() { return new Vector2(this.width, this.height); }
    set Size(val) {
        this.width = val.x;
        this.height = val.y;
    }
    get Center() { return new Vector2(this.x + (this.width / 2), this.y + (this.height / 2)); }
    set Center(val) {
        let offset = val.Minus(this.Center);
        this.Position = this.Position.Plus(offset);
    }
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
        this.width = parseInt(strParts[2]);
        this.height = parseInt(strParts[3]);
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    toString() { return this.x + " " + this.y + " " + this.width + " " + this.height; }
    Equals(other) {
        if (!(other instanceof VRect_1))
            return false;
        return this.toString() == other.toString();
    }
    NewX(valOrFunc) {
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this.Clone()).VSet({ x: valOrFunc instanceof Function ? valOrFunc(this.x) : valOrFunc });
    }
    NewLeft(valOrFunc) {
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this.Clone()).VSet({ Left: valOrFunc instanceof Function ? valOrFunc(this.Left) : valOrFunc });
    }
    NewRight(valOrFunc) {
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this.Clone()).VSet({ Right: valOrFunc instanceof Function ? valOrFunc(this.Right) : valOrFunc });
    }
    NewY(valOrFunc) {
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this.Clone()).VSet({ y: valOrFunc instanceof Function ? valOrFunc(this.y) : valOrFunc });
    }
    NewBottom(valOrFunc) {
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this.Clone()).VSet({ Bottom: valOrFunc instanceof Function ? valOrFunc(this.Bottom) : valOrFunc });
    }
    NewTop(valOrFunc) {
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this.Clone()).VSet({ Top: valOrFunc instanceof Function ? valOrFunc(this.Top) : valOrFunc });
    }
    NewPosition(valOrFunc) {
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this.Clone()).VSet({ Position: valOrFunc instanceof Function ? valOrFunc(this.Position) : valOrFunc });
    }
    NewWidth(valOrFunc) {
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this.Clone()).VSet({ width: valOrFunc instanceof Function ? valOrFunc(this.width) : valOrFunc });
    }
    NewHeight(valOrFunc) {
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this.Clone()).VSet({ height: valOrFunc instanceof Function ? valOrFunc(this.height) : valOrFunc });
    }
    NewSize(valOrFunc) {
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ObjectCE"])(this.Clone()).VSet({ Size: valOrFunc instanceof Function ? valOrFunc(this.Size) : valOrFunc });
    }
    Grow(amountOnEachSide) {
        return new VRect_1(this.x - amountOnEachSide, this.y - amountOnEachSide, this.width + (amountOnEachSide * 2), this.height + (amountOnEachSide * 2));
    }
    Encapsulating(rect) {
        var posX = Math.min(this.x, rect.x);
        var posY = Math.min(this.y, rect.y);
        return new VRect_1(posX, posY, Math.max(this.x + this.width, rect.x + rect.width) - posX, Math.max(this.y + this.height, rect.y + rect.height) - posY);
    }
    Encapsulate(rect) {
        var oldRight = this.x + this.width;
        var oldBottom = this.y + this.height;
        this.x = Math.min(this.x, rect.x);
        this.y = Math.min(this.y, rect.y);
        this.width = Math.max(oldRight, rect.x + rect.width) - this.x;
        this.height = Math.max(oldBottom, rect.y + rect.height) - this.y;
    }
    Intersects(other, countTouchAsIntersect = false) {
        //return this.Right > other.Left && this.Left < other.Right && this.Bottom > other.Top && this.Top < other.Bottom;
        if (countTouchAsIntersect)
            return this.Left <= other.Right && this.Right >= other.Left && this.Top <= other.Bottom && this.Bottom >= other.Top;
        return this.Left < other.Right && this.Right > other.Left && this.Top < other.Bottom && this.Bottom > other.Top;
    }
    /** Returns true if rect would intersect the other, when wrapped to the 2/8 potential "other-sides" of given frame/backdrop. (-x, +x, -y, +y, -x -y, -x +y, +x -y, +x +y)
     * (note that it does the checks "stupidly", ie. just checking all possible switch-side variants, without checking if "switched side" version is actually on or even near the actual frame/backdrop) */
    Intersects_Advanced(other, options) {
        let variantsToCompare = [this];
        if (options.xWrappedBy) {
            variantsToCompare.push(...Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(variantsToCompare).SelectMany(base => {
                return [base, base.NewX(x => x - options.xWrappedBy), base.NewX(x => x + options.xWrappedBy)];
            }));
        }
        if (options.yWrappedBy) {
            variantsToCompare.push(...Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(variantsToCompare).SelectMany(base => {
                return [base, base.NewY(y => y - options.yWrappedBy), base.NewY(y => y + options.yWrappedBy)];
            }));
        }
        return Object(___WEBPACK_IMPORTED_MODULE_1__["ArrayCE"])(variantsToCompare).Any(a => a.Intersects(other));
    }
    Clone() {
        return new VRect_1(this.x, this.y, this.width, this.height);
    }
};
VRect = VRect_1 = __decorate([
    _General__WEBPACK_IMPORTED_MODULE_0__["Global"]
], VRect);

let VBounds = class VBounds {
    constructor(position, size) {
        this.position = position;
        this.size = size;
    }
    /*@_VDFDeserialize() Deserialize(node) {
        var parts = node.primitiveValue.split("|");
        var posParts = parts[0].split(" ");
        this.position = new VVector3(parseFloat(posParts[0]), parseFloat(posParts[1]), parseFloat(posParts[2]));
        var sizeParts = parts[1].split(" ");
        this.size = new VVector3(parseFloat(sizeParts[0]), parseFloat(sizeParts[1]), parseFloat(sizeParts[2]));
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    toString() { return this.position.x + " " + this.position.y + " " + this.position.z + "|" + this.size.x + " " + this.size.y + " " + this.size.z; }
};
VBounds = __decorate([
    _General__WEBPACK_IMPORTED_MODULE_0__["Global"]
], VBounds);

//# sourceMappingURL=VectorStructs.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/index.js ***!
  \***************************************************/
/*! exports provided: ArrayCE_funcs, ArrayCE, ArrayCES, ElementCE_funcs, ElementCE, ElementCES, NumberCE_funcs, NumberCE, NumberCES, ObjectCE_funcs, ObjectCE, ObjectCES, FunctionCE_funcs, FunctionCE, FunctionCES, DateCE_funcs, DateCE, DateCES, StringCE_funcs, StringCE, StringCES, Assert, AssertWarn, A, A_NotEqualTo_Wrapper, A_OfType_Wrapper, DoNothing, DN, QuickIncrement, emptyObj, emptyArray, emptyArray_forLoading, IsSpecialEmptyObjOrArray, IsSpecialEmptyObj, IsSpecialEmptyArray, EmptyArrayFor, E, WrapWithGo, ShallowEquals, ShallowChanged, CopyText, FromJSON, ToJSON, ToJSON_Advanced_Options, AddSpacesAt_Options, ToJSON_Advanced, Clone, CloneWithPrototypes, Range, Global, IDProvider, nl, AsArray, Slice, Multiline, Multiline_NotCommented, StableSort, Compare, Lerp, GetPercentFromXToY, GetXToY, GetXToYOut, CloneObject, CloneArray, Bind, GetContentSize, GetContentWidth, GetContentHeight, autoElements, GetAutoElement, TreeNode, GetTreeNodesInObjTree, GetTreeNodesInPath, VisitTreeNodesInPath, ConvertPathGetterFuncToPropChain, DeepGet, DeepSet, WithDeepSet, GetStackTraceStr, GetErrorMessagesUnderElement, CreateSymbol, OMIT, DEL, OmitIfFalsy, OmitIfNull, DelIfFalsy, DelIfNull, FindDOM, FindDOMAll, stringModifiers, ModifyString, StartDownload, StartUpload, TransferPrototypeProps, WithFuncsStandalone, CreateProxyForClassExtensions, bool, int, double, string, IsPrimitive, IsBool, ToBool, IsNumberString, IsNumber, ToNumber, IsInt, ToInt, IsNaN, IsString, ToString, IsSymbol, IsFunction, IsArray, IsObject, IsTypeX, IsConstructor, GetEntries, GetValues, GetValues_ForSchema, CE, JSVE, BridgeMessage, Bridge, GetPropChanges, WaitTillDataPathIsSet, WaitTillPropertyIsSet, AwaitTree, TimerContext, TryCall, TryCall_OnX, WaitXThenRun, WaitUntilXThenRun, SleepAsync, SleepAsyncUntil, DoNothingXTimesThenDoY, Timer, TimerS, BufferAction, ToAbsoluteUrl, JumpToHash, GetCurrentURLString, GetUrlParts, VURL, QueryVar, Storage, storages, GetStorageForCachedTransform, CachedTransform, CombineDynamicPropMaps, IsVector2iShape, Vector2, IsVector3Shape, Vector3, IsVRectShape, VRect, VBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassExtensions/CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayCE_funcs", function() { return _ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_0__["ArrayCE_funcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayCE", function() { return _ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_0__["ArrayCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayCES", function() { return _ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_0__["ArrayCES"]; });

/* harmony import */ var _ClassExtensions_CE_Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassExtensions/CE_Element */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementCE_funcs", function() { return _ClassExtensions_CE_Element__WEBPACK_IMPORTED_MODULE_1__["ElementCE_funcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementCE", function() { return _ClassExtensions_CE_Element__WEBPACK_IMPORTED_MODULE_1__["ElementCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementCES", function() { return _ClassExtensions_CE_Element__WEBPACK_IMPORTED_MODULE_1__["ElementCES"]; });

/* harmony import */ var _ClassExtensions_CE_Number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClassExtensions/CE_Number */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberCE_funcs", function() { return _ClassExtensions_CE_Number__WEBPACK_IMPORTED_MODULE_2__["NumberCE_funcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberCE", function() { return _ClassExtensions_CE_Number__WEBPACK_IMPORTED_MODULE_2__["NumberCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberCES", function() { return _ClassExtensions_CE_Number__WEBPACK_IMPORTED_MODULE_2__["NumberCES"]; });

/* harmony import */ var _ClassExtensions_CE_Object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClassExtensions/CE_Object */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectCE_funcs", function() { return _ClassExtensions_CE_Object__WEBPACK_IMPORTED_MODULE_3__["ObjectCE_funcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectCE", function() { return _ClassExtensions_CE_Object__WEBPACK_IMPORTED_MODULE_3__["ObjectCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectCES", function() { return _ClassExtensions_CE_Object__WEBPACK_IMPORTED_MODULE_3__["ObjectCES"]; });

/* harmony import */ var _ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClassExtensions/CE_Others */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionCE_funcs", function() { return _ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_4__["FunctionCE_funcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionCE", function() { return _ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_4__["FunctionCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionCES", function() { return _ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_4__["FunctionCES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateCE_funcs", function() { return _ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_4__["DateCE_funcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateCE", function() { return _ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_4__["DateCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateCES", function() { return _ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_4__["DateCES"]; });

/* harmony import */ var _ClassExtensions_CE_String__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClassExtensions/CE_String */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_String.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringCE_funcs", function() { return _ClassExtensions_CE_String__WEBPACK_IMPORTED_MODULE_5__["StringCE_funcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringCE", function() { return _ClassExtensions_CE_String__WEBPACK_IMPORTED_MODULE_5__["StringCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringCES", function() { return _ClassExtensions_CE_String__WEBPACK_IMPORTED_MODULE_5__["StringCES"]; });

/* harmony import */ var _ClassExtensions_CE_Auto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClassExtensions/CE_Auto */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Auto.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CE", function() { return _ClassExtensions_CE_Auto__WEBPACK_IMPORTED_MODULE_6__["CE"]; });

/* harmony import */ var _JSVE__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./JSVE */ "./node_modules/js-vextensions/Dist/JSVE.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JSVE", function() { return _JSVE__WEBPACK_IMPORTED_MODULE_7__["JSVE"]; });

/* harmony import */ var _Utils_Assert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Utils/Assert */ "./node_modules/js-vextensions/Dist/Utils/Assert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Assert", function() { return _Utils_Assert__WEBPACK_IMPORTED_MODULE_8__["Assert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssertWarn", function() { return _Utils_Assert__WEBPACK_IMPORTED_MODULE_8__["AssertWarn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _Utils_Assert__WEBPACK_IMPORTED_MODULE_8__["A"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A_NotEqualTo_Wrapper", function() { return _Utils_Assert__WEBPACK_IMPORTED_MODULE_8__["A_NotEqualTo_Wrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A_OfType_Wrapper", function() { return _Utils_Assert__WEBPACK_IMPORTED_MODULE_8__["A_OfType_Wrapper"]; });

/* harmony import */ var _Utils_Bridge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Utils/Bridge */ "./node_modules/js-vextensions/Dist/Utils/Bridge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BridgeMessage", function() { return _Utils_Bridge__WEBPACK_IMPORTED_MODULE_9__["BridgeMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bridge", function() { return _Utils_Bridge__WEBPACK_IMPORTED_MODULE_9__["Bridge"]; });

/* harmony import */ var _Utils_Changes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Utils/Changes */ "./node_modules/js-vextensions/Dist/Utils/Changes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPropChanges", function() { return _Utils_Changes__WEBPACK_IMPORTED_MODULE_10__["GetPropChanges"]; });

/* harmony import */ var _Utils_General__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DoNothing", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["DoNothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DN", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["DN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuickIncrement", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["QuickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyObj", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["emptyObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyArray", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["emptyArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyArray_forLoading", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["emptyArray_forLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsSpecialEmptyObjOrArray", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["IsSpecialEmptyObjOrArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsSpecialEmptyObj", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["IsSpecialEmptyObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsSpecialEmptyArray", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["IsSpecialEmptyArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyArrayFor", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["EmptyArrayFor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "E", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["E"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapWithGo", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["WrapWithGo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShallowEquals", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["ShallowEquals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShallowChanged", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["ShallowChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyText", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["CopyText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FromJSON", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["FromJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToJSON", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["ToJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToJSON_Advanced_Options", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["ToJSON_Advanced_Options"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddSpacesAt_Options", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["AddSpacesAt_Options"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToJSON_Advanced", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["ToJSON_Advanced"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clone", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["Clone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloneWithPrototypes", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["CloneWithPrototypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["Range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["Global"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDProvider", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["IDProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nl", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["nl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsArray", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["AsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["Slice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multiline", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["Multiline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multiline_NotCommented", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["Multiline_NotCommented"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StableSort", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["StableSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compare", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["Compare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lerp", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["Lerp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPercentFromXToY", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetPercentFromXToY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetXToY", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetXToY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetXToYOut", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetXToYOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloneObject", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["CloneObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloneArray", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["CloneArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bind", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["Bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetContentSize", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetContentSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetContentWidth", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetContentWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetContentHeight", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetContentHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoElements", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["autoElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAutoElement", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetAutoElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["TreeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTreeNodesInObjTree", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetTreeNodesInObjTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetTreeNodesInPath", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetTreeNodesInPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisitTreeNodesInPath", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["VisitTreeNodesInPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConvertPathGetterFuncToPropChain", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["ConvertPathGetterFuncToPropChain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeepGet", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["DeepGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeepSet", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["DeepSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithDeepSet", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["WithDeepSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetStackTraceStr", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetStackTraceStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetErrorMessagesUnderElement", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["GetErrorMessagesUnderElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSymbol", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["CreateSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OMIT", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["OMIT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEL", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["DEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OmitIfFalsy", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["OmitIfFalsy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OmitIfNull", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["OmitIfNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelIfFalsy", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["DelIfFalsy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelIfNull", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["DelIfNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindDOM", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["FindDOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindDOMAll", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["FindDOMAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringModifiers", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["stringModifiers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModifyString", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["ModifyString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartDownload", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["StartDownload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartUpload", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["StartUpload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransferPrototypeProps", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["TransferPrototypeProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithFuncsStandalone", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["WithFuncsStandalone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateProxyForClassExtensions", function() { return _Utils_General__WEBPACK_IMPORTED_MODULE_11__["CreateProxyForClassExtensions"]; });

/* harmony import */ var _Utils_Promises__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Utils/Promises */ "./node_modules/js-vextensions/Dist/Utils/Promises.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitTillDataPathIsSet", function() { return _Utils_Promises__WEBPACK_IMPORTED_MODULE_12__["WaitTillDataPathIsSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitTillPropertyIsSet", function() { return _Utils_Promises__WEBPACK_IMPORTED_MODULE_12__["WaitTillPropertyIsSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AwaitTree", function() { return _Utils_Promises__WEBPACK_IMPORTED_MODULE_12__["AwaitTree"]; });

/* harmony import */ var _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Utils/Timers */ "./node_modules/js-vextensions/Dist/Utils/Timers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerContext", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["TimerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryCall", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["TryCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryCall_OnX", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["TryCall_OnX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitXThenRun", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["WaitXThenRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaitUntilXThenRun", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["WaitUntilXThenRun"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SleepAsync", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["SleepAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SleepAsyncUntil", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["SleepAsyncUntil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DoNothingXTimesThenDoY", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["DoNothingXTimesThenDoY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["Timer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerS", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["TimerS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferAction", function() { return _Utils_Timers__WEBPACK_IMPORTED_MODULE_13__["BufferAction"]; });

/* harmony import */ var _Utils_Types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Utils/Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bool", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["bool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "int", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["int"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "double", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["double"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsPrimitive", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsBool", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsBool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToBool", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["ToBool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsNumberString", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsNumberString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsNumber", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToNumber", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["ToNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsInt", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToInt", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["ToInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsNaN", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsString", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToString", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["ToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsSymbol", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsSymbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsFunction", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsArray", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsObject", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsTypeX", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsTypeX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsConstructor", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["IsConstructor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetEntries", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["GetEntries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetValues", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["GetValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetValues_ForSchema", function() { return _Utils_Types__WEBPACK_IMPORTED_MODULE_14__["GetValues_ForSchema"]; });

/* harmony import */ var _Utils_URLs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Utils/URLs */ "./node_modules/js-vextensions/Dist/Utils/URLs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToAbsoluteUrl", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_15__["ToAbsoluteUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JumpToHash", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_15__["JumpToHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetCurrentURLString", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_15__["GetCurrentURLString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUrlParts", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_15__["GetUrlParts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VURL", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_15__["VURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryVar", function() { return _Utils_URLs__WEBPACK_IMPORTED_MODULE_15__["QueryVar"]; });

/* harmony import */ var _Utils_VCache__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Utils/VCache */ "./node_modules/js-vextensions/Dist/Utils/VCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _Utils_VCache__WEBPACK_IMPORTED_MODULE_16__["Storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storages", function() { return _Utils_VCache__WEBPACK_IMPORTED_MODULE_16__["storages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetStorageForCachedTransform", function() { return _Utils_VCache__WEBPACK_IMPORTED_MODULE_16__["GetStorageForCachedTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CachedTransform", function() { return _Utils_VCache__WEBPACK_IMPORTED_MODULE_16__["CachedTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CombineDynamicPropMaps", function() { return _Utils_VCache__WEBPACK_IMPORTED_MODULE_16__["CombineDynamicPropMaps"]; });

/* harmony import */ var _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Utils/VectorStructs */ "./node_modules/js-vextensions/Dist/Utils/VectorStructs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsVector2iShape", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_17__["IsVector2iShape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_17__["Vector2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsVector3Shape", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_17__["IsVector3Shape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector3", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_17__["Vector3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsVRectShape", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_17__["IsVRectShape"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VRect", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_17__["VRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VBounds", function() { return _Utils_VectorStructs__WEBPACK_IMPORTED_MODULE_17__["VBounds"]; });

//import "./ClassExtensions";
//export * from "./ClassExtensions/@ApplyCode";
//export * from "./ClassExtensions/@ApplyTypes"; // if desired, user project should import directly (from Source folder)


















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Helpers/@ApplyCECode.js":
/*!*************************************************************!*\
  !*** ./node_modules/js-vextensions/Helpers/@ApplyCECode.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Dist */ "./node_modules/js-vextensions/Dist/index.js");
/* harmony import */ var _Dist_ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dist/ClassExtensions/CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");
/* harmony import */ var _Dist_ClassExtensions_CE_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dist/ClassExtensions/CE_Element */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Element.js");
/* harmony import */ var _Dist_ClassExtensions_CE_Number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dist/ClassExtensions/CE_Number */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Number.js");
/* harmony import */ var _Dist_ClassExtensions_CE_Object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dist/ClassExtensions/CE_Object */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js");
/* harmony import */ var _Dist_ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Dist/ClassExtensions/CE_Others */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js");
/* harmony import */ var _Dist_ClassExtensions_CE_String__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dist/ClassExtensions/CE_String */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_String.js");
// @ts-check









function ClassExtensions_ApplyCode() {
	Object(_Dist__WEBPACK_IMPORTED_MODULE_0__["TransferPrototypeProps"])(Array.prototype, _Dist_ClassExtensions_CE_Array__WEBPACK_IMPORTED_MODULE_1__["ArrayCE_funcs"], {}, {configurable: true, enumerable: false});
	if (typeof Element != "undefined") {
		Object(_Dist__WEBPACK_IMPORTED_MODULE_0__["TransferPrototypeProps"])(Element.prototype, _Dist_ClassExtensions_CE_Element__WEBPACK_IMPORTED_MODULE_2__["ElementCE_funcs"], {}, {configurable: true, enumerable: false});
	}
	Object(_Dist__WEBPACK_IMPORTED_MODULE_0__["TransferPrototypeProps"])(Number.prototype, _Dist_ClassExtensions_CE_Number__WEBPACK_IMPORTED_MODULE_3__["NumberCE_funcs"], {}, {configurable: true, enumerable: false});
	Object(_Dist__WEBPACK_IMPORTED_MODULE_0__["TransferPrototypeProps"])(Object.prototype, _Dist_ClassExtensions_CE_Object__WEBPACK_IMPORTED_MODULE_4__["ObjectCE_funcs"], {}, {configurable: true, enumerable: false});
	Object(_Dist__WEBPACK_IMPORTED_MODULE_0__["TransferPrototypeProps"])(Function.prototype, _Dist_ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_5__["FunctionCE_funcs"], {}, {configurable: true, enumerable: false});
	Object(_Dist__WEBPACK_IMPORTED_MODULE_0__["TransferPrototypeProps"])(Date.prototype, _Dist_ClassExtensions_CE_Others__WEBPACK_IMPORTED_MODULE_5__["DateCE_funcs"], {}, {configurable: true, enumerable: false});
	//TransferPrototypeProps(Error.prototype, ErrorCE_funcs, {}, {configurable: true, enumerable: false});
	Object(_Dist__WEBPACK_IMPORTED_MODULE_0__["TransferPrototypeProps"])(String.prototype, _Dist_ClassExtensions_CE_String__WEBPACK_IMPORTED_MODULE_6__["StringCE_funcs"], {}, {configurable: true, enumerable: false});
}

// this file is only imported if user manually imports it; if so, apply immediately when imported
ClassExtensions_ApplyCode();

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

/***/ "ffi-napi":
/*!***************************!*\
  !*** external "ffi-napi" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ffi-napi");

/***/ }),

/***/ "iohook":
/*!*************************!*\
  !*** external "iohook" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("iohook");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),

/***/ "ref-napi":
/*!***************************!*\
  !*** external "ref-napi" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ref-napi");

/***/ }),

/***/ "ref-struct-di":
/*!********************************!*\
  !*** external "ref-struct-di" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ref-struct-di");

/***/ }),

/***/ "win32-api":
/*!****************************!*\
  !*** external "win32-api" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("win32-api");

/***/ })

/******/ });
});
//# sourceMappingURL=Main.js.map