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
/* harmony import */ var ffi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ffi */ "ffi");
/* harmony import */ var ffi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ffi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ref */ "ref");
/* harmony import */ var ref__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ref__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-vextensions */ "js-vextensions");
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_vextensions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ref_struct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ref-struct */ "ref-struct");
/* harmony import */ var ref_struct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ref_struct__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





 // mod win32-api to use number-based handles (instead of Buffers)
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
var POINT = ref_struct__WEBPACK_IMPORTED_MODULE_4___default()({
  'x': 'long',
  'y': 'long'
});
var RECT = ref_struct__WEBPACK_IMPORTED_MODULE_4___default()({
  'left': 'long',
  'top': 'long',
  'right': 'long',
  'bottom': 'long'
});
var WINDOWPLACEMENT = ref_struct__WEBPACK_IMPORTED_MODULE_4___default()({
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
var user32_extra = new ffi__WEBPACK_IMPORTED_MODULE_1___default.a.Library("user32", {
  //EnumWindows: ['bool', [voidPtr, 'int32']],
  //GetForegroundWindow: ["int32", []],
  GetWindowTextA: ["int32", ["int32", "string", "int32"]],
  //GetWindowTextA : ['long', ['long', stringPtr, 'long']]
  //GetWindowTextW: ["int32", ["int32", ref.refType("string"), "int32"]],
  GetWindowTextLengthW: ["int32", ["int32"]],
  GetWindowRect: ['bool', ['int32', "pointer"]],
  GetWindowPlacement: ["bool", ["int32", ref__WEBPACK_IMPORTED_MODULE_2___default.a.refType(WINDOWPLACEMENT)]],
  SetWindowPlacement: ["bool", ["int32", ref__WEBPACK_IMPORTED_MODULE_2___default.a.refType(WINDOWPLACEMENT)]],
  ShowWindow: ['bool', ['int32', 'int32']]
});
var WindowInfo = function WindowInfo() {
  _classCallCheck(this, WindowInfo);
};
function GetWindowHandles() {
  var result = [];
  var onFoundWindow = ffi__WEBPACK_IMPORTED_MODULE_1___default.a.Callback('bool', ['long', 'int32'], function (handle, lParam) {
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
  var placementRef = ref__WEBPACK_IMPORTED_MODULE_2___default.a.alloc(WINDOWPLACEMENT);
  user32_extra.GetWindowPlacement(handle, placementRef);
  return placementRef.deref();
}
function SetWindowPlacement(handle, placement) {
  /*var placementRef = ref.alloc(WINDOWPLACEMENT);
  placementRef.writeObject(0, state.placement);*/
  var placementRef = ref__WEBPACK_IMPORTED_MODULE_2___default.a.alloc(WINDOWPLACEMENT, placement);
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

var powrprof = ffi__WEBPACK_IMPORTED_MODULE_1___default.a.Library('powrprof.dll', {
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
/* harmony import */ var js_vextensions_Helpers_ApplyCECode_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_vextensions_Helpers_ApplyCECode_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-vextensions */ "js-vextensions");
/* harmony import */ var js_vextensions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_vextensions__WEBPACK_IMPORTED_MODULE_3__);
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

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
var Assert_1 = __webpack_require__(/*! ../Utils/Assert */ "./node_modules/js-vextensions/Dist/Utils/Assert.js");
//type ArrayLike_Unwrap<T> = ThisFor<XOrWrapped<T>>;
//type ArrayLike_Unwrap<T> =
/*type Unwrapped<T> =
    T extends Array<infer ItemT> ? ItemT[] :
    T extends ArrayCEProxy<infer ItemT> ? ItemT[] :
    never;*/
exports.ArrayCE_funcs = {
    ForEach: function (func) {
        var _loop_1 = function (i) {
            var shouldBreak = false;
            var shouldContinue = false;
            var extras = { index: i, Break: function () { return shouldBreak = true; }, Continue: function () { return shouldContinue = true; } };
            func(this_1[i], extras);
            if (shouldBreak)
                return "break";
            if (shouldContinue)
                return "continue";
        };
        var this_1 = this;
        for (var i = 0; i < this.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    },
    ForEachAsync: function (func) {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_2, this_2, i, state_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_2 = function (i) {
                            var shouldBreak, shouldContinue, extras;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        shouldBreak = false;
                                        shouldContinue = false;
                                        extras = { index: i, Break: function () { return shouldBreak = true; }, Continue: function () { return shouldContinue = true; } };
                                        return [4 /*yield*/, func(this_2[i], extras)];
                                    case 1:
                                        _a.sent();
                                        if (shouldBreak)
                                            return [2 /*return*/, "break"];
                                        if (shouldContinue)
                                            return [2 /*return*/, "continue"];
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_2(i)];
                    case 2:
                        state_2 = _a.sent();
                        if (state_2 === "break")
                            return [3 /*break*/, 4];
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    /*declare global { interface Array<T> { ForEachAsyncParallel(func: (value: T, index: number, array: T[])): Promise<void>; } }
    Array.prototype.ForEachAsync_Parallel = async function (this: Array<any>, fn) {
        await Promise.all(this.map(fn));
    },*/
    Contains: function (item) {
        return this.indexOf(item) != -1;
    },
    ContainsAny: function () {
        var e_1, _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                if (this.indexOf(item) != -1) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
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
    Prepend: function () {
        var newItems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newItems[_i] = arguments[_i];
        }
        this.splice.apply(this, __spread([0, 0], newItems));
    },
    Add: function (item) {
        return this.push(item);
    },
    CAdd: function (item) {
        this.push(item);
        return this;
    },
    TAdd: function (item) {
        this.push(item);
        return item;
    },
    AddRange: function (array) {
        var e_2, _a;
        try {
            //this.push(...array);
            // use loop, since sending them all as arguments fails when there are ~10000+ items
            for (var array_1 = __values(array), array_1_1 = array_1.next(); !array_1_1.done; array_1_1 = array_1.next()) {
                var item = array_1_1.value;
                this.push(item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this;
    },
    Remove: function (item) {
        var itemIndex = this.indexOf(item);
        if (itemIndex == -1)
            return false;
        this.splice(itemIndex, 1);
        return true;
    },
    RemoveAll: function (items) {
        var e_3, _a;
        try {
            for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                var item = items_2_1.value;
                exports.ArrayCES.Remove(this, item);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (items_2_1 && !items_2_1.done && (_a = items_2.return)) _a.call(items_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
    },
    RemoveAt: function (index) {
        return this.splice(index, 1)[0];
    },
    Insert: function (index, obj) {
        this.splice(index, 0, obj);
    },
    SetItems: function (items) {
        this.splice.apply(this, __spread([0, this.length], items));
        return this;
    },
    Reversed: function () {
        var clone = this.slice(0);
        clone.reverse();
        return clone;
    },
    //Object.prototype._AddFunction_Inline = function AsRef() { return new NodeReference_ByPath(this); }
    // Linq replacements
    // ----------
    Any: function (matchFunc) {
        var e_4, _a;
        try {
            for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                if (matchFunc == null || matchFunc.call(item, item, index)) {
                    return true;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return false;
    },
    All: function (matchFunc) {
        var e_5, _a;
        try {
            for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                if (!matchFunc.call(item, item, index)) {
                    return false;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return true;
    },
    Where: function (matchFunc) {
        var e_6, _a;
        var result = [];
        try {
            for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
                    result.push(item);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return result;
    },
    Select: function (selectFunc) {
        var e_7, _a;
        var result = [];
        try {
            for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                result.push(selectFunc.call(item, item, index));
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return result;
    },
    SelectMany: function (selectFunc) {
        var e_8, _a;
        //return [...this.entries()].reduce((acc, [index, item])=>acc.concat(selectFunc.call(item, item, index)), []);
        var result = [];
        try {
            for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                exports.ArrayCES.AddRange(result, selectFunc.call(item, item, index));
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return result;
    },
    //Count(matchFunc) { return this.Where(matchFunc).length; };
    //Count(matchFunc) { return this.Where(matchFunc).length; }; // needed for items to be added properly to custom classes that extend Array
    // needed for items to be added properly to custom classes that extend Array
    Count: function () {
        return this.length;
    },
    VCount: function (matchFunc) {
        return exports.ArrayCES.Where(this, matchFunc).length;
    },
    Clear: function () {
        /*while (this.length > 0)
            this.pop();*/
        this.splice(0, this.length);
    },
    /* interface Array<T> { /** Same as forEach, except breaks the loop when "true" is returned. *#/ forEach_break(callbackfn: (value: any, index: number, array: any[]) => boolean, thisArg?: any); }
    forEach_break(...args) { return this.some(...args); } */
    First: function (matchFunc) {
        var result = exports.ArrayCES.FirstOrX(this, matchFunc);
        if (result == null) {
            throw new Error("Matching item not found.");
        }
        return result;
    },
    FirstOrX: function (matchFunc, x) {
        var e_9, _a;
        if (x === void 0) { x = null; }
        if (matchFunc) {
            try {
                for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                    if (matchFunc.call(item, item, index)) {
                        return item;
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        else if (this.length > 0) {
            return this[0];
        }
        return x;
    },
    //FirstWithPropValue(propName, propValue) { return this.Where(function() { return this[propName] == propValue; })[0]; };
    FirstWith: function (propName, propValue) {
        return exports.ArrayCES.Where(this, function () { return this[propName] == propValue; })[0];
    },
    Last: function (matchFunc) {
        var result = exports.ArrayCES.LastOrX(this, matchFunc);
        if (result === undefined) {
            throw new Error("Matching item not found.");
        }
        return result;
    },
    LastOrX: function (matchFunc, x) {
        if (x === void 0) { x = null; }
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
    XFromLast: function (x) {
        return this[(this.length - 1) - x];
    },
    Move: function (item, newIndex, newIndexAsPreRemovalIndexVSFinalIndex) {
        if (newIndexAsPreRemovalIndexVSFinalIndex === void 0) { newIndexAsPreRemovalIndexVSFinalIndex = false; }
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
        if (newIndexAsPreRemovalIndexVSFinalIndex) {
            exports.ArrayCES.Insert(this, newIndex, item);
            if (oldIndex != -1) {
                var oldEntry_currentIndex = newIndex <= oldIndex ? oldIndex + 1 : oldIndex; // if we just inserted the new version before the old entry, fix the old-entry's index by adding 1
                exports.ArrayCES.RemoveAt(this, oldEntry_currentIndex);
            }
        }
        else {
            if (oldIndex != -1) {
                exports.ArrayCES.RemoveAt(this, oldIndex);
            }
            exports.ArrayCES.Insert(this, newIndex, item);
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
    ToMap: function (keyFunc, valFunc) {
        var e_10, _a;
        var result = {};
        try {
            for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                result[keyFunc(item, index)] = valFunc(item, index);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return result;
    },
    Skip: function (count) {
        var result = [];
        for (var i = count; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    },
    Take: function (count) {
        var result = [];
        for (var i = 0; i < count && i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    },
    TakeLast: function (count) {
        var result = [];
        for (var i = 0; i < count && (this.length - 1) - i >= 0; i++) {
            result.push(this[(this.length - 1) - i]);
        }
        return result;
    },
    FindIndex: function (matchFunc) {
        var e_11, _a;
        try {
            for (var _b = __values(this.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), index = _d[0], item = _d[1];
                if (matchFunc.call(item, item, index)) { // call, having the item be "this", as well as the first argument
                    return index;
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return -1;
    },
    /*FindIndex(matchFunc: (item: T)=>boolean) {
        for (let [index, item] of this.entries())
            if (matchFunc.call(item, item))
                    return index;
        return -1;
    };*/
    OrderBy: function (valFunc) {
        if (valFunc === void 0) { valFunc = function (item, index) { return item; }; }
        /*var temp = this.ToList();
        temp.sort((a, b)=>V.Compare(valFunc(a), valFunc(b)));
        return temp;*/
        return General_1.StableSort(this, function (a, b, aIndex, bIndex) { return General_1.Compare(valFunc(a, aIndex), valFunc(b, bIndex)); });
    },
    OrderByDescending: function (valFunc) {
        if (valFunc === void 0) { valFunc = function (item, index) { return item; }; }
        return exports.ArrayCES.OrderBy(this, function (item, index) { return -valFunc(item, index); });
    },
    Distinct: function () {
        var result = [];
        for (var i in this) {
            if (!this.hasOwnProperty(i))
                continue;
            if (!exports.ArrayCES.Contains(result, this[i])) {
                result.push(this[i]);
            }
        }
        return result;
    },
    Except: (function () {
        var _a, e_12, _b;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var opt, excludeItems;
        if (args[0] && "excludeEachOnlyOnce" in args[0])
            _a = __read(args, 2), opt = _a[0], excludeItems = _a[1];
        else
            excludeItems = args;
        if (opt.excludeEachOnlyOnce) {
            var result = this.slice();
            try {
                for (var excludeItems_1 = __values(excludeItems), excludeItems_1_1 = excludeItems_1.next(); !excludeItems_1_1.done; excludeItems_1_1 = excludeItems_1.next()) {
                    var excludeItem = excludeItems_1_1.value;
                    exports.ArrayCES.Remove(result, excludeItem);
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (excludeItems_1_1 && !excludeItems_1_1.done && (_b = excludeItems_1.return)) _b.call(excludeItems_1);
                }
                finally { if (e_12) throw e_12.error; }
            }
            return result;
        }
        return this.filter(function (a) { return !exports.ArrayCES.Contains(excludeItems, a); });
    }),
    IfEmptyThen: function (valIfSelfIsEmpty) {
        return this.length == 0 ? valIfSelfIsEmpty : this;
    },
    //JoinUsing(separator) { return this.join(separator);};
    Min: function (valFunc, asNumbers) {
        if (asNumbers === void 0) { asNumbers = false; }
        if (asNumbers) {
            /*let values = valFunc ? this.map(valFunc) : this;
            return Math.min(...values);*/
            Assert_1.Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
            return Math.min.apply(Math, __spread(this));
        }
        return exports.ArrayCES.OrderBy(this, valFunc)[0];
    },
    Max: function (valFunc, asNumbers) {
        if (asNumbers === void 0) { asNumbers = false; }
        if (asNumbers) {
            /*let values = valFunc ? this.map(valFunc) : this;
            return Math.max(...values);*/
            Assert_1.Assert(valFunc == null, "Cannot use valFunc if asNumbers is set to true.");
            return Math.max.apply(Math, __spread(this));
        }
        return exports.ArrayCES.LastOrX(exports.ArrayCES.OrderBy(this, valFunc));
    },
    Sum: function () {
        var e_13, _a;
        var total = 0;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                total += item;
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return total;
    },
    Average: function () {
        var total = exports.ArrayCES.Sum(this);
        return total / this.length;
    },
    Median: function () {
        var ordered = exports.ArrayCES.OrderBy(this, function (a) { return a; });
        if (this.length % 2 == 0) { // if even number of elements, average two middlest ones
            return ordered[(this.length / 2) - 1] + ordered[this.length / 2];
        }
        return ordered[this.length / 2]; // otherwise, return the exactly-middle one
    },
    Random: function () {
        var index = Math.floor(Math.random() * this.length);
        return this[index];
    },
    //oldJoin: [].join,
    join: function (separator) {
        if (separator === void 0) { separator = ","; }
        if (this.length == 0)
            return "";
        //let result = "" + this[0];
        var result = this[0] != null ? "" + this[0] : ""; // to match behavior of native join
        for (var i = 1, len = this.length; i < len; i++) {
            result += separator;
            result += this[i] != null ? "" + this[i] : "";
        }
        /*let oldResult = oldJoin.apply(this, arguments);
        if (oldResult != result) debugger;*/
        return result;
    },
};
exports.ArrayCE = General_1.CreateProxyForClassExtensions(exports.ArrayCE_funcs);
exports.ArrayCES = General_1.WithFuncsStandalone(exports.ArrayCE_funcs);
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CE_Array_1 = __webpack_require__(/*! ./CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");
var CE_Number_1 = __webpack_require__(/*! ./CE_Number */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Number.js");
var CE_Object_1 = __webpack_require__(/*! ./CE_Object */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js");
var CE_String_1 = __webpack_require__(/*! ./CE_String */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_String.js");
var __1 = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
var Types_1 = __webpack_require__(/*! ../Utils/Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js");
var CE_Others_1 = __webpack_require__(/*! ./CE_Others */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js");
/*interface CE_Auto_I {
    (obj: Array<any>): typeof ArrayCE;
    (obj: Element): typeof ElementCE;
    (obj: number): typeof NumberCE;
    (obj: Object): typeof ObjectCE;
    (obj: string): typeof StringCE;
}

export const CE_Auto = ((obj)=> {
}) as CE_Auto_I;*/
var classExtensionMap = {
    Number: CE_Number_1.NumberCE,
    String: CE_String_1.StringCE,
    Date: CE_Others_1.DateCE,
    Element: __1.ElementCE,
    Function: CE_Others_1.FunctionCE,
    Array: CE_Array_1.ArrayCE,
    Object: CE_Object_1.ObjectCE,
};
function CE(obj, checkForUncommonDerived) {
    if (checkForUncommonDerived === void 0) { checkForUncommonDerived = false; }
    // first, try to get class-extension func based on direct constructor name (most common case)
    var typeName = obj.constructor ? obj.constructor.name : null;
    if (typeName && classExtensionMap[typeName]) {
        return classExtensionMap[typeName](obj);
    }
    // else, check each option using "instanceof" and such (needed for derived classes)
    if (checkForUncommonDerived) {
        if (Types_1.IsNumber(obj, true))
            return CE_Number_1.NumberCE(obj);
        if (Types_1.IsString(obj, true))
            return CE_String_1.StringCE(obj);
        if (obj instanceof Date)
            return CE_Others_1.DateCE(obj);
        if (Types_1.IsFunction(obj))
            return CE_Others_1.FunctionCE(obj);
        if (Types_1.IsArray(obj))
            return CE_Array_1.ArrayCE(obj);
    }
    if (obj instanceof Element)
        return __1.ElementCE(obj);
    /*if (IsObject(obj)) return ObjectCE(obj);
    throw new Error(`Could not find class-extension helper for type "${obj.constructor ? obj.constructor.name : "n/a"}".`);*/
    return CE_Object_1.ObjectCE(obj);
}
exports.CE = CE;
//# sourceMappingURL=CE_Auto.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Element.js":
/*!************************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
exports.ElementCE_funcs = {
    GetParents: function (topDown) {
        if (topDown === void 0) { topDown = false; }
        var result = [];
        var currentParent = this.parentElement;
        while (currentParent) {
            result.push(currentParent);
            currentParent = currentParent.parentElement;
        }
        if (topDown)
            result.reverse();
        return result;
    },
    GetSelfAndParents: function (topDown) {
        if (topDown === void 0) { topDown = false; }
        var result = exports.ElementCE(this).GetParents(topDown);
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
    QuerySelector_BreadthFirst: function (selector) {
        var currentLayerElements = Array.from(this.childNodes);
        while (currentLayerElements.length) {
            var firstMatchInLayer = currentLayerElements.find(function (a) { return a["matches"] && a["matches"](selector); });
            if (firstMatchInLayer)
                return firstMatchInLayer;
            //currentLayerElements = currentLayerElements.SelectMany(a=>[...a.childNodes]);
            currentLayerElements = currentLayerElements.reduce(function (acc, item) { return acc.concat(Array.from(item.childNodes)); }, []);
        }
        return null;
    },
    $: function (queryStr) {
        return Array.from(this.querySelectorAll(queryStr));
    },
};
exports.ElementCE = General_1.CreateProxyForClassExtensions(exports.ElementCE_funcs);
// maybe make ElementCE preserve the target-type, like ObjectCE and ArrayCE do (not needed atm, since the CE-methods don't make any/much use of the target's type-data)
//export const ElementCE = CreateProxyForClassExtensions(ElementCE_funcs) as <T>(nextThis: T)=>ElementCEProxy;
exports.ElementCES = General_1.WithFuncsStandalone(exports.ElementCE_funcs);
//# sourceMappingURL=CE_Element.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Number.js":
/*!***********************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Number.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CE_String_1 = __webpack_require__(/*! ./CE_String */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_String.js");
var General_1 = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
var Types_1 = __webpack_require__(/*! ../Utils/Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js");
// Note: Since JS coerces number primitives to the Number class when a property-access is attempted (https://javascriptrefined.io/the-wrapper-object-400311b29151)...
// ...calling the functions below using, eg. "(3).WrapToRange" *should* make the "this" variable be a Number class within the WrapToRange function.
// However, this is not the case! -- at least when I try it in the Chrome console, with the actual Webpack-added function. (if I add a function with the exact same source using the console, it is coerced to Number as expected)
// I think it might be a Chrome optimization or something.
// Anyway, the code below is based on how it *should* work, with the "this" var always being a Number wrapper. (we use "as number" in some places below, since valueOf gets auto-called to enable the primitive math ops anyway)
exports.NumberCE_funcs = {
    IfN1Then: function (valIfSelfIsNeg1) {
        return this == -1 ? valIfSelfIsNeg1 : this;
    },
    NaNTo: function (valIfSelfIsNaN) {
        return Types_1.IsNaN(this) ? valIfSelfIsNaN : this;
    },
    //RoundToMultipleOf(step) { return Math.round(new Number(this) / step) * step; }; //return this.lastIndexOf(str, 0) === 0; };
    ToPercentStr: function (precision) {
        var number = this * 100;
        if (precision != null)
            return number.toFixed(precision) + "%";
        return number.toString() + "%";
    },
    IsMultipleOf: function (multipleOf, maxDistToBeMultiple) {
        var valRoundedToMultiple = exports.NumberCE(this).RoundTo(multipleOf);
        var distance = exports.NumberCE(valRoundedToMultiple).Distance(this);
        return distance <= maxDistToBeMultiple;
    },
    RoundTo: function (multiple) {
        //return Math.round(this / multiple) * multiple;
        // Don't ask me why this works, but it does, and is faster. From: http://phrogz.net/round-to-nearest-via-modulus-division
        /*var half = multiple / 2;
        return (this + half) - ((this + half) % multiple);*/
        // Realign/scale the possible values/multiples, so that each value is given an integer slot. Place the actual value (this) within the appropriate slot using Math.round() int-rounding, then reverse the scaling to get the true rounded value.
        // (This version handles fractions better. Ex: (.2 + .1).RoundTo(.1) == .3 [NOT 0.3000000000000004, as the simpler approach gives])
        var multiple_inverted = 1 / multiple;
        return Math.round(this * multiple_inverted) / multiple_inverted;
    },
    RoundTo_Str: function (multipleOf, fractionDigits, removeEmptyFraction) {
        if (fractionDigits === void 0) { fractionDigits = null; }
        if (removeEmptyFraction === void 0) { removeEmptyFraction = true; }
        var resultValue = exports.NumberCE(this).RoundTo(multipleOf);
        var result = resultValue.toFixed(fractionDigits != null ? fractionDigits : multipleOf.toString().TrimStart("0").length - 1); // - 0);
        if (removeEmptyFraction && CE_String_1.StringCE(result).Contains(".")) {
            result = CE_String_1.StringCE(CE_String_1.StringCE(result).TrimEnd("0")).TrimEnd(".");
        }
        return result;
    },
    FloorTo: function (multipleOf) { return Math.floor(new Number(this) / multipleOf) * multipleOf; },
    FloorTo_Str: function (multipleOf) {
        var resultValue = exports.NumberCE(this).FloorTo(multipleOf);
        var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
        if (CE_String_1.StringCE(result).Contains("."))
            result = CE_String_1.StringCE(CE_String_1.StringCE(result).TrimEnd("0")).TrimEnd(".");
        return result;
    },
    CeilingTo: function (multipleOf) { return Math.ceil(new Number(this) / multipleOf) * multipleOf; },
    CeilingTo_Str: function (multipleOf) {
        var resultValue = exports.NumberCE(this).CeilingTo(multipleOf);
        var result = resultValue.toFixed(multipleOf.toString().TrimStart("0").length); // - 1);
        if (CE_String_1.StringCE(result).Contains("."))
            result = CE_String_1.StringCE(CE_String_1.StringCE(result).TrimEnd("0")).TrimEnd(".");
        //result = TrimEnd(TrimEnd(result, "0"), ".");
        return result;
    },
    KeepAtLeast: function (min) {
        return Math.max(min, this);
    },
    KeepAtMost: function (max) {
        return Math.min(max, this);
    },
    KeepBetween: function (min, max, allowFixMinMax) {
        var _a;
        if (allowFixMinMax === void 0) { allowFixMinMax = true; }
        if (min > max && allowFixMinMax) {
            _a = __read([max, min], 2), min = _a[0], max = _a[1];
        }
        if (this < min)
            return min;
        if (this > max)
            return max;
        return this;
    },
    WrapToRange: function (min, max, maxOut) {
        if (maxOut === void 0) { maxOut = true; }
        var val = this;
        var size = max - min;
        while (val < min)
            val += size;
        while (maxOut ? val >= max : val > max)
            val -= size;
        return val;
    },
    Distance: function (other) {
        return Math.abs(this - other);
    },
    ToPower: function (power) {
        return Math.pow(this, power);
    },
};
exports.NumberCE = General_1.CreateProxyForClassExtensions(exports.NumberCE_funcs);
exports.NumberCES = General_1.WithFuncsStandalone(exports.NumberCE_funcs);
//# sourceMappingURL=CE_Number.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js":
/*!***********************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
var CE_Array_1 = __webpack_require__(/*! ./CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");
var Types_1 = __webpack_require__(/*! ../Utils/Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js");
var CE_Others_1 = __webpack_require__(/*! ./CE_Others */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js");
/*export type WithFuncThisArgsAsXOrWrapped_Type<Source> = {
    [P in keyof Source]:
        Source[P] extends (this: infer ThisArgType, ...args)=>any ? (this: XOrWrapped<ThisArgType>, ...args: Parameters<Source[P]>)=>ReturnType<Source[P]> :
        Source[P];
};
export function WithFuncThisArgsAsXOrWrapped<Source>(source: Source): WithFuncThisArgsAsXOrWrapped_Type<Source> {
    return source as any;
}*/
exports.specialKeys = ["_", "_key", "_id"];
exports.ObjectCE_funcs = {
    // base
    // ==========
    /** Helps you do stuff like this:
        Array.prototype._AddFunction(function AddX(value) { this.push(value); }); []._AddX("newItem"); */
    _AddItem: function (name, value, forceAdd) {
        if (forceAdd === void 0) { forceAdd = false; }
        if (name == null || name.length == 0)
            throw new Error("No prop-name was specified for _AddItem() call.");
        if (name in this)
            delete this[name];
        if (name in this && !forceAdd)
            return; // workaround for some properties not being deleted
        Object.defineProperty(this, name, {
            configurable: true,
            enumerable: false,
            value: value
        });
        /*if (this[name] == null)
            throw new Error(`Failed to add property "${name}" to type "${this}".`);*/
    },
    _AddFunction: function (name, func) {
        //this._AddItem(func.name || func.toString().match(/^function\s*([^\s(]+)/)[1], func);
        exports.ObjectCES._AddItem(this, name, func);
    },
    // the below helps you do stuff like this:
    //		Array.prototype._AddGetterSetter("AddX", null, function(value) { this.push(value); }); [].AddX = "newItem";
    _AddGetterSetter: function (name, getter, setter) {
        //var name = (getter || setter).name || (getter || setter).toString().match(/^function\s*([^\s(]+)/)[1];
        if (name in this)
            delete this[name];
        if (name in this)
            return; // workaround for some properties not being deleted
        var info = { configurable: true, enumerable: false };
        if (getter)
            info.get = getter;
        if (setter)
            info.set = setter;
        Object.defineProperty(this, name, info);
    },
    // the below helps you do stuff like this:
    //		Array.prototype._AddFunction_Inline = function AddX(value) { this.push(value); }; [].AddX = "newItem";
    set _AddFunction_Inline(func) {
        exports.ObjectCES._AddFunction(this, CE_Others_1.FunctionCE(func).GetName(), func);
    },
    set _AddGetter_Inline(func) {
        exports.ObjectCES._AddGetterSetter(this, CE_Others_1.FunctionCE(func).GetName(), func, null);
    },
    set _AddSetter_Inline(func) {
        exports.ObjectCES._AddGetterSetter(this, CE_Others_1.FunctionCE(func).GetName(), null, func);
    },
    // normal
    // ==========
    //Object.prototype._AddSetter_Inline = function ExtendWith_Inline(value) { this.ExtendWith(value); };
    //ExtendWith(value) { $.extend(this, value); };
    /*GetItem_SetToXIfNull(itemName, /*;optional:*#/ defaultValue) {
        if (!this[itemName])
            this[itemName] = defaultValue;
        return this[itemName];
    };*/
    // must also do it on window/global, for some reason
    /*g.Extend = function(x) {
        for (var name in x) {
            var value = x[name];
            //if (value !== undefined)
            this[name] = value;
        }
        return this;
    };*/
    Extend: function (x) {
        for (var key in x) {
            if (!x.hasOwnProperty(key))
                continue;
            var value = x[key];
            //if (value !== undefined)
            this[key] = value;
        }
        return this;
    },
    // as replacement for C#'s "new MyClass() {prop = true}"
    /*VSet<T>(this: T, propName: string, propValue, options?: VSet_Options): TargetTFor<T>;
    //VSet<T extends RealThis>(this: T, props: any, options?: VSet_Options): T; // variant for ObjectCE(obj).X calls (those types only uses the last declaration, and they need "extend RealThis" since we any-ify the this-param)
    VSet<T>(this: T, props: any, options?: VSet_Options): TargetTFor<T>; // this one needs to be last (best override for the CE(...) wrapper, and it can only extract the last one)*/
    VSet: (function () {
        var _a, _b;
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var props, options, propName, propValue;
        if (typeof args[0] == "object")
            _a = __read(args, 2), props = _a[0], options = _a[1];
        else
            _b = __read(args, 3), propName = _b[0], propValue = _b[1], options = _b[2];
        options = options || {};
        var SetProp = function (name, value) {
            if (value === General_1.DEL || (value === undefined && options.deleteUndefined) || (value === null && options.deleteNull) || (value === "" && options.deleteEmpty)) {
                delete _this[name];
                return;
            }
            if (options.prop) {
                Object.defineProperty(_this, name, Object.assign({ configurable: true }, options.prop, { value: value }));
            }
            else {
                _this[name] = value;
            }
        };
        if (props) {
            for (var key in props) {
                if (!props.hasOwnProperty(key))
                    continue;
                SetProp(key, props[key]);
            }
        }
        else {
            SetProp(propName, propValue);
        }
        return this;
    }),
    Extended: function (x) {
        // maybe temp; explicit unwrapping, to fix odd "instantiation is excessively deep" ts-error (when calling .Extended from user project)
        /*Extended<T, T2>(this: T, x: T2): T & T2;
        Extended<T, T2>(this: ObjectCEProxy<T>, x: T2): T & T2;
        Extended(x: any) {*/
        //Extended<T, T2>(this: ObjectCEProxy<T> | T, x: T2): T & T2 {
        var result = this instanceof Array ? [] : {};
        for (var key in this) {
            if (!this.hasOwnProperty(key))
                continue;
            result[key] = this[key];
        }
        if (x) {
            for (var key in x) {
                if (!x.hasOwnProperty(key))
                    continue;
                result[key] = x[key];
            }
        }
        return result;
    },
    /*interface Object { Extended2<T>(this, x: T): T; }
    Extended2(x) {
        return this.Extended(x);
    };*/
    //E(x) { return this.Extended(x); };
    SafeGet: (function (pathOrPathGetterFunc, resultIfNull) {
        var pathSegments = typeof pathOrPathGetterFunc == "string" ? pathOrPathGetterFunc : General_1.ConvertPathGetterFuncToPropChain(pathOrPathGetterFunc);
        return General_1.DeepGet(this, pathSegments, resultIfNull);
    }),
    VAct: function (func) {
        func.call(this, this);
        return this;
    },
    As: function (type) {
        Object.setPrototypeOf(this, type.prototype);
        return this;
    },
    Strip: function () {
        Object.setPrototypeOf(this, Object.getPrototypeOf({}));
        return this;
    },
    Including: function () {
        var e_1, _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var result = this instanceof Array ? [] : {};
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                //if (!this.hasOwnProperty(key)) continue;
                if (!(key in this))
                    continue; // we include the value, even if from prototype (user wouldn't list in keys array if didn't want it)
                result[key] = this[key];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    },
    Excluding: function () {
        var e_2, _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        //var result = Clone(this); // doesn't work with funcs
        var result = Object.assign(this instanceof Array ? [] : {}, this);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                delete result[key];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_a = keys_2.return)) _a.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    },
    IsOneOf: function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        if (CE_Array_1.ArrayCE(values).Contains(this)) {
            return true;
        }
        // if the value-list contains the primitive-version of self, consider it a match -- otherwise calling "test1".IsOneOf("test1", "test2") would fail
        var isObjectFormOfPrimitive = this instanceof Boolean || this instanceof Number || this instanceof String;
        if (isObjectFormOfPrimitive && CE_Array_1.ArrayCE(values).Contains(this.valueOf())) {
            return true;
        }
        return false;
    },
    // todo: probably remove Props(), and instead just use Pairs(), since Props() sounds odd when used on arrays
    /*declare global {
        interface Object {
            Props<T>(this: {[key: number]: T} | {[key: string]: T}, excludeSpecialProps?: boolean): {index: number, name: string, value: T}[];
            Props<T>(excludeSpecialProps?: boolean): {index: number, name: string, value: T}[];
        }
    }
    //interface Object { Props<ValueType>(excludeSpecialProps?: boolean): {index: number, name: string, value: ValueType}[]; }
    Props(excludeSpecialProps = false) {
        var result = [];
        var i = 0;
        for (var propName in this) {
            if (excludeSpecialProps && (propName == "_" || propName == "_key" || propName == "_id")) continue;
            //result.push({index: i++, key: propName, name: propName, value: this[propName]});
            result.push({index: i++, name: propName, value: this[propName]});
        }
        return result;
    },*/
    Pairs: (function (excludeSpecialKeys) {
        var e_3, _a;
        if (excludeSpecialKeys === void 0) { excludeSpecialKeys = false; }
        var result = [];
        var i = 0;
        var keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        try {
            for (var keys_3 = __values(keys), keys_3_1 = keys_3.next(); !keys_3_1.done; keys_3_1 = keys_3.next()) {
                var key = keys_3_1.value;
                if (excludeSpecialKeys && (key == "_" || key == "_key" || key == "_id"))
                    continue;
                var entry = { index: i++, key: key, keyNum: Number(key), value: this instanceof Map ? this.get(key) : this[key] };
                if (Types_1.IsNaN(entry.keyNum))
                    delete entry.keyNum;
                result.push(entry);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (keys_3_1 && !keys_3_1.done && (_a = keys_3.return)) _a.call(keys_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    }),
    VKeys: (function (excludeSpecialKeys) {
        if (excludeSpecialKeys === void 0) { excludeSpecialKeys = false; }
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.name);
        var keys = this instanceof Map ? Array.from(this.keys()) : Object.keys(this);
        if (excludeSpecialKeys)
            keys = CE_Array_1.ArrayCE(keys).Except(exports.specialKeys);
        return keys;
    }),
    VValues: (function (excludeSpecialKeys) {
        var _this = this;
        if (excludeSpecialKeys === void 0) { excludeSpecialKeys = false; }
        //if (excludeSpecialKeys) return this.Props(true).map(a=>a.value);
        return exports.ObjectCES.VKeys(this, excludeSpecialKeys).map(function (key) { return _this instanceof Map ? _this.get(key) : _this[key]; });
    }),
    // for symbols
    /*Pairs_Sym() {
    };*/
    Sym: function (symbolName) {
        var symbols = Object.getOwnPropertySymbols(this);
        var symbol = symbols.find(function (a) { return a.toString() == "Symbol(" + symbolName + ")"; });
        return this[symbol];
    },
};
//export const ObjectCE = WithFuncsStandalone(ObjectCEProxy.prototype);
//export const ObjectCE = CreateProxyForClassExtensions(ObjectCEProxy);
exports.ObjectCE = General_1.CreateProxyForClassExtensions(exports.ObjectCE_funcs);
exports.ObjectCES = General_1.WithFuncsStandalone(exports.ObjectCE_funcs);
//# sourceMappingURL=CE_Object.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js":
/*!***********************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
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
exports.FunctionCE_funcs = {
    GetName: function () {
        //return this.name_fake || this.name || this.toString().match(/^function\s*([^\s(]+)/)[1];
        return this["name_fake"] || this.name || (this.toString().match(/^function\s*([^\s(]+)/) || [])[1];
    },
    SetName: function (val) {
        this["name_fake"] = name;
        return this;
    },
    AddTag: function (tag) {
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
    GetTags: function (type) {
        return (this["tags"] || []).Where(function (a) { return type == null || a instanceof type; });
    },
    //AsStr(...args) { return require("../../V/V").Multiline(this, ...args); };
    //AsStr(useExtraPreprocessing) { return require("../../V/V").Multiline(this, useExtraPreprocessing); };
    RunThenReturn: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.apply(null, args);
        return this;
    },
};
exports.FunctionCE = General_1.CreateProxyForClassExtensions(exports.FunctionCE_funcs);
exports.FunctionCES = General_1.WithFuncsStandalone(exports.FunctionCE_funcs);
function isLeapYear(year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
}
function getDaysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}
exports.DateCE_funcs = {
    get MonthDate() {
        return new Date(this.getFullYear(), this.getMonth(), 1);
    },
    IsLeapYear: function () {
        return isLeapYear(this.getFullYear());
    },
    GetDaysInMonth: function () {
        return getDaysInMonth(this.getFullYear(), this.getMonth());
    },
    AddMonths: function (value) {
        var n = this.getDate();
        this.setDate(1);
        this.setMonth(this.getMonth() + value);
        this.setDate(Math.min(n, exports.DateCE(this).GetDaysInMonth()));
        return this;
    },
    Clone: function () {
        return new Date(this.getTime());
    },
};
exports.DateCE = General_1.CreateProxyForClassExtensions(exports.DateCE_funcs);
exports.DateCES = General_1.WithFuncsStandalone(exports.DateCE_funcs);
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var CE_Array_1 = __webpack_require__(/*! ./CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");
var General_1 = __webpack_require__(/*! ../Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
exports.StringCE_funcs = {
    TrimStart: function () {
        // fix for if called by VDF (which has a different signature)
        //if (arguments[0] instanceof Array) chars = arguments[0];
        var chars = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            chars[_i] = arguments[_i];
        }
        for (var iOfFirstToKeep = 0; iOfFirstToKeep < this.length && CE_Array_1.ArrayCE(chars).Contains(this[iOfFirstToKeep]); iOfFirstToKeep++)
            ;
        return this.slice(iOfFirstToKeep, this.length);
    },
    TrimEnd: function () {
        var chars = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            chars[_i] = arguments[_i];
        }
        for (var iOfLastToKeep = this.length - 1; iOfLastToKeep >= 0 && CE_Array_1.ArrayCE(chars).Contains(this[iOfLastToKeep]); iOfLastToKeep--)
            ;
        return this.substr(0, iOfLastToKeep + 1);
    },
    Contains: function (str, startIndex) {
        return this.indexOf(str, startIndex) !== -1;
    },
    hashCode: function () {
        var hash = 0;
        for (var i = 0; i < this.length; i++) {
            var char = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // convert to 32-bit integer
        }
        return hash;
    },
    Matches: function (strOrRegex) {
        if (typeof strOrRegex == "string") {
            var str = strOrRegex;
            var result_1 = [];
            var lastMatchIndex = -1;
            while (true) {
                var matchIndex = this.indexOf(str, lastMatchIndex + 1);
                if (matchIndex == -1)
                    break; // if another match was not found
                result_1.push({ index: matchIndex });
                lastMatchIndex = matchIndex;
            }
            return result_1;
        }
        var regex = strOrRegex;
        if (!regex.global) {
            throw new Error("Regex must have the 'g' flag added. (otherwise an infinite loop occurs)"); // todo: make alternate solution, like setting flag ourselves
        }
        var result = [];
        var match;
        while (match = regex.exec(this)) {
            result.push(match);
        }
        return result;
    },
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
    IndexOf_X: function (str, indexX) {
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
    IndexOf_XFromLast: function (str, indexFromLastX) {
        var currentPos = (this.length - str.length) + 1; // index just after the last-index-where-match-could-occur
        for (var i = 0; i <= indexFromLastX; i++) {
            var subIndex = this.lastIndexOf(str, currentPos - 1);
            if (subIndex == -1)
                return -1; // no such xth index
            currentPos = subIndex;
        }
        return currentPos;
    },
    IndexOfAny: function () {
        var e_1, _a;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        var lowestIndex = -1;
        try {
            for (var strings_1 = __values(strings), strings_1_1 = strings_1.next(); !strings_1_1.done; strings_1_1 = strings_1.next()) {
                var str = strings_1_1.value;
                var indexOfChar = this.indexOf(str);
                if (indexOfChar != -1 && (indexOfChar < lowestIndex || lowestIndex == -1))
                    lowestIndex = indexOfChar;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (strings_1_1 && !strings_1_1.done && (_a = strings_1.return)) _a.call(strings_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return lowestIndex;
    },
    LastIndexOfAny: function () {
        var e_2, _a;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        var highestIndex = -1;
        try {
            for (var strings_2 = __values(strings), strings_2_1 = strings_2.next(); !strings_2_1.done; strings_2_1 = strings_2.next()) {
                var str = strings_2_1.value;
                var indexOfChar = this.lastIndexOf(str);
                if (indexOfChar > highestIndex)
                    highestIndex = indexOfChar;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (strings_2_1 && !strings_2_1.done && (_a = strings_2.return)) _a.call(strings_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return highestIndex;
    },
    StartsWithAny: function () {
        var _this = this;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        return CE_Array_1.ArrayCE(strings).Any(function (str) { return _this.startsWith(str); });
    },
    EndsWithAny: function () {
        var _this = this;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        return CE_Array_1.ArrayCE(strings).Any(function (str) { return _this.endsWith(str); });
    },
    ContainsAny: function () {
        var _this = this;
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        return CE_Array_1.ArrayCE(strings).Any(function (str) { return exports.StringCE(_this).Contains(str); });
    },
    /** Separator-strings must be escaped. (they're passed into a regular-expression) */
    SplitByAny: function () {
        var separators = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            separators[_i] = arguments[_i];
        }
        /*var splitStr = "/";
        for (let sep of separators)
            splitStr += (splitStr.length > 1 ? "|" : "") + sep;
        splitStr += "/";
        return this.split(splitStr);*/
        var regex = new RegExp(separators.map(function (a) { return "\\" + a; }).join("|"));
        return this.split(regex);
    },
    SplitAt: function (index, includeCharAtIndex) {
        if (includeCharAtIndex === void 0) { includeCharAtIndex = false; }
        if (index == -1) // if no split-index, pass source-string as part2 (makes more sense for paths and such)
            return ["", this];
        var part1 = this.substr(0, index);
        var part2 = includeCharAtIndex ? this.substr(index) : this.substr(index + 1);
        return [part1, part2];
    },
    Splice: function (index, removeCount, insert) {
        return this.slice(0, index) + insert + this.slice(index + Math.abs(removeCount));
    },
    Indent: function (indentCount) {
        var indentStr = "\t".repeat(indentCount);
        return this.replace(/^|(\n)/g, "$1" + indentStr);
    },
    KeepAtMost: function (maxLength, moreMarkerStr) {
        if (moreMarkerStr === void 0) { moreMarkerStr = "..."; }
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
    Func: function (func) {
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
    AsMultiline: function (desiredIndent, removeLineStr) {
        if (desiredIndent === void 0) { desiredIndent = null; }
        if (removeLineStr === void 0) { removeLineStr = "@RL"; }
        var result = this.substring(this.indexOf("\n") + 1, this.lastIndexOf("\n"));
        if (desiredIndent != null) {
            var firstLineIndent_1 = (result.match(/^\t+/) || [""])[0].length;
            if (firstLineIndent_1) {
                var lines = result.split("\n");
                // remove X tabs from start of each line (where X is firstLineIndent)
                lines = lines.map(function (line) { return line.replace(new RegExp("^\t{0," + firstLineIndent_1 + "}"), ""); });
                // add the desired indent
                lines = lines.map(function (line) { return "\t".repeat(desiredIndent) + line; });
                // filter out lines with the special remove-line string
                lines = lines.filter(function (a) { return !a.includes(removeLineStr); });
                result = lines.join("\n");
            }
        }
        return result;
    },
    Substring: function (start, end) {
        if (end < 0)
            end = this.length + end;
        return this.substring(start, end);
    },
    ToInt: function () { return parseInt(Number(this) + ""); },
    ToFloat: function () { return Number(this); },
};
exports.StringCE = General_1.CreateProxyForClassExtensions(exports.StringCE_funcs);
exports.StringCES = General_1.WithFuncsStandalone(exports.StringCE_funcs);
//# sourceMappingURL=CE_String.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/JSVE.js":
/*!**************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/JSVE.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JSVE = /** @class */ (function () {
    function JSVE() {
    }
    JSVE.logFunc = console.log;
    return JSVE;
}());
exports.JSVE = JSVE;
//# sourceMappingURL=JSVE.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Assert.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Assert.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
var JSVE_1 = __webpack_require__(/*! ../JSVE */ "./node_modules/js-vextensions/Dist/JSVE.js");
function Assert(condition, messageOrMessageFunc) {
    if (condition)
        return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    JSVE_1.JSVE.logFunc("Assert failed) " + message + "\n\nStackTrace) " + General_1.GetStackTraceStr());
    console.error("Assert failed) " + message);
    var skipError = false; // add flag which you can use to skip the error, when paused in debugger
    debugger;
    if (!skipError)
        throw new Error("Assert failed) " + message);
}
exports.Assert = Assert;
function AssertWarn(condition, messageOrMessageFunc) {
    if (condition)
        return;
    var message = messageOrMessageFunc instanceof Function ? messageOrMessageFunc() : messageOrMessageFunc;
    console.warn("Assert-warn failed) " + message + "\n\nStackTrace) " + General_1.GetStackTraceStr());
}
exports.AssertWarn = AssertWarn;
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
var A = /** @class */ (function () {
    function A() {
    }
    Object.defineProperty(A, "NonNull_", {
        get: function () {
            return function (value) {
                Assert(value != null, function () { return "Value cannot be null. (provided value: " + value + ")"; });
                return value;
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(A, "NonNull", {
        set: function (value) {
            A.NonNull_(value);
        },
        enumerable: true,
        configurable: true
    });
    A.NotEqualTo = function (val1) {
        return new A_NotEqualTo_Wrapper(val1);
    };
    return A;
}());
exports.A = A;
var A_NotEqualTo_Wrapper = /** @class */ (function () {
    function A_NotEqualTo_Wrapper(val1) {
        this.val1 = val1;
    }
    Object.defineProperty(A_NotEqualTo_Wrapper.prototype, "a", {
        set: function (val2) { Assert(val2 != this.val1); },
        enumerable: true,
        configurable: true
    });
    return A_NotEqualTo_Wrapper;
}());
exports.A_NotEqualTo_Wrapper = A_NotEqualTo_Wrapper;
var A_OfType_Wrapper = /** @class */ (function () {
    function A_OfType_Wrapper(type) {
        this.type = type;
    }
    Object.defineProperty(A_OfType_Wrapper.prototype, "a", {
        set: function (val) { Assert(val != null && val.GetType().IsDerivedFrom(this.type)); },
        enumerable: true,
        configurable: true
    });
    return A_OfType_Wrapper;
}());
exports.A_OfType_Wrapper = A_OfType_Wrapper;
//# sourceMappingURL=Assert.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Bridge.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Bridge.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var Timers_1 = __webpack_require__(/*! ./Timers */ "./node_modules/js-vextensions/Dist/Utils/Timers.js");
var __1 = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
var General_1 = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
var BridgeMessage = /** @class */ (function () {
    function BridgeMessage(initialData) {
        __1.ObjectCE(this).Extend(initialData);
    }
    return BridgeMessage;
}());
exports.BridgeMessage = BridgeMessage;
/*export class Bridge_Options {
    receiveChannelMessageFunc_adder: (receiveDataFunc: (channelMessage: string | Object)=>any)=>any;
    receiveChannelMessageFunc_addImmediately? = true;
    sendChannelMessageFunc: (channelMessage: string | Object)=>any;
    channel_wrapBridgeMessage? = true;
    channel_stringifyChannelMessageObj? = true;
    channel_safeCallbacks? = false;
}*/
var Bridge = /** @class */ (function () {
    /** Don't worry about having to discard some calls before receiveTextFunc receives it. We automatically discard entries that aren't valid bridge-messages. */
    function Bridge(options) {
        /** Useful to ensure we ignore non-jsve-bridge messages. (the channel might be used by other systems as well) */
        this.channel_wrapBridgeMessage = true;
        /** Needed if the channel only supports strings being sent/received. */
        this.channel_stringifyChannelMessageObj = true;
        /** Needed if the channel has >2 members; makes-so call-ids are random-numbers, and are filtered by each member to just the ones it knows it initiated. */
        this.channel_safeCallbacks = false;
        // for receiving function-calls (and callbacks) from external bridge
        // ==========
        this.functions = {};
        this.ignoreMissingFunctions = false;
        // callback system (for when passing a function as an argument, or awaiting the result of a remote call)
        // ==========
        this.lastCallbackID = -1;
        this.callbacks = {};
        __1.ObjectCE(this).Extend(__1.ObjectCE(options).Excluding("receiveChannelMessageFunc_addImmediately"));
        if (options.receiveChannelMessageFunc_addImmediately != false)
            this.SetUpReceiver();
    }
    // low level data-transfer
    // ==========
    Bridge.prototype.SetUpReceiver = function () {
        var _this = this;
        // add our own receive-text-func right now
        this.receiveChannelMessageFunc = function (channelMessage) {
            var channelMessageObj;
            if (_this.channel_stringifyChannelMessageObj && __1.IsString(channelMessage))
                channelMessageObj = Timers_1.TryCall(function () { return __1.FromJSON(channelMessage); }) || {};
            if (!_this.channel_stringifyChannelMessageObj && __1.IsObject(channelMessage))
                channelMessageObj = channelMessage;
            var bridgeMessage = _this.channel_wrapBridgeMessage ? channelMessageObj && channelMessageObj["JSVE_Bridge_message"] : channelMessageObj;
            if (!__1.IsObject(bridgeMessage))
                return;
            _this.DeserializeFuncsIn(bridgeMessage);
            if (bridgeMessage.callFunction_name)
                _this.OnReceiveFunctionCall(bridgeMessage);
            if (bridgeMessage.callCallback_id != null)
                _this.OnReceiveCallback(bridgeMessage);
        };
        this.receiveChannelMessageFunc_adder(this.receiveChannelMessageFunc);
    };
    Bridge.prototype.SendBridgeMessage = function (bridgeMessage) {
        this.SerializeFuncsIn(bridgeMessage);
        var channelMessageObj = this.channel_wrapBridgeMessage ? { JSVE_Bridge_message: bridgeMessage } : bridgeMessage;
        var channelMessage = this.channel_stringifyChannelMessageObj ? __1.ToJSON(channelMessageObj) : channelMessageObj;
        this.sendChannelMessageFunc(channelMessage);
    };
    Bridge.prototype.RegisterFunction = function (name, func) {
        if (this.functions[name])
            throw new Error("Cannot register the same function-name twice: \"" + name + "\"");
        this.functions[name] = func;
    };
    Bridge.prototype.UnregisterFunction = function (name) {
        delete this.functions[name];
    };
    Bridge.prototype.OnReceiveFunctionCall = function (bridgeMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Local_CallFunc.apply(this, __spread([bridgeMessage.callFunction_name], bridgeMessage.callFunction_args))];
                    case 1:
                        result = _a.sent();
                        this.CallCallback(bridgeMessage.callFunction_callbackID, result);
                        return [2 /*return*/];
                }
            });
        });
    };
    // we use async/await here, to support waiting for the registered function if it happens to be async (if it isn't, that's fine -- the async/await doesn't hurt anything)
    Bridge.prototype.Local_CallFunc = function (funcName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var func;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        func = this.functions[funcName];
                        if (this.ignoreMissingFunctions && func == null)
                            return [2 /*return*/];
                        __1.Assert(func, "Cannot find function \"" + funcName + "\".");
                        return [4 /*yield*/, func.apply(void 0, __spread(args))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Bridge.prototype.OnReceiveCallback = function (bridgeMessage) {
        this.Local_CallCallback(bridgeMessage.callCallback_id, bridgeMessage.callCallback_args);
    };
    Bridge.prototype.Local_CallCallback = function (callbackID, callbackArgs) {
        var callback = this.callbacks[callbackID];
        if (callback == null) {
            if (this.channel_safeCallbacks)
                return;
            __1.Assert(false, "Cannot find callback with id " + callbackID + "!");
        }
        callback.apply(void 0, __spread(callbackArgs));
    };
    Bridge.prototype.RegisterCallback = function (callback) {
        var callbackID = this.channel_safeCallbacks ? Math.random() : this.lastCallbackID + 1;
        this.lastCallbackID = callbackID;
        this.callbacks[callbackID] = callback;
        return callbackID;
    };
    // technically, this just prepares the functions in the tree for serialization (by setting a toJSON key, which JSON.stringify uses)
    Bridge.prototype.SerializeFuncsIn = function (argTree) {
        var e_1, _a;
        var nodes = General_1.GetTreeNodesInObjTree(argTree);
        var _loop_1 = function (node) {
            if (__1.IsFunction(node.Value)) {
                var callbackID_1 = this_1.RegisterCallback(node.Value);
                node.Value.toJSON = function () { return ({ serializedFunc_callbackID: callbackID_1 }); };
            }
        };
        var this_1 = this;
        try {
            for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                var node = nodes_1_1.value;
                _loop_1(node);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Bridge.prototype.DeserializeFuncsIn = function (argTree) {
        var e_2, _a;
        var _this = this;
        var nodes = General_1.GetTreeNodesInObjTree(argTree);
        var _loop_2 = function (node) {
            if (node.Value != null && node.Value.serializedFunc_callbackID != null) {
                var callbackID_2 = node.Value.serializedFunc_callbackID;
                var proxyFunc = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _this.CallCallback.apply(_this, __spread([callbackID_2], args));
                };
                node.Value = proxyFunc;
            }
        };
        try {
            for (var nodes_2 = __values(nodes), nodes_2_1 = nodes_2.next(); !nodes_2_1.done; nodes_2_1 = nodes_2.next()) {
                var node = nodes_2_1.value;
                _loop_2(node);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (nodes_2_1 && !nodes_2_1.done && (_a = nodes_2.return)) _a.call(nodes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    // for sending function-calls to external bridge
    // ==========
    Bridge.prototype.Call = function (funcName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            var awaitReturn_callbackID = _this.RegisterCallback(resolve);
            var bridgeMessage = new BridgeMessage({ callFunction_callbackID: awaitReturn_callbackID, callFunction_name: funcName, callFunction_args: args });
            _this.SendBridgeMessage(bridgeMessage);
        });
    };
    Bridge.prototype.CallCallback = function (callbackID) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var bridgeMessage = new BridgeMessage({ callCallback_id: callbackID, callCallback_args: args });
        this.SendBridgeMessage(bridgeMessage);
    };
    return Bridge;
}());
exports.Bridge = Bridge;
//# sourceMappingURL=Bridge.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Changes.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Changes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
function GetPropsChanged(oldObj, newObj, returnNullIfSame, useJSONCompare) {
    var e_1, _a;
    if (returnNullIfSame === void 0) { returnNullIfSame = true; }
    if (useJSONCompare === void 0) { useJSONCompare = false; }
    oldObj = oldObj || {}, newObj = newObj || {};
    var keys = oldObj.VKeys().concat(newObj.VKeys()).Distinct();
    var result = [];
    try {
        for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            var newVal_forComparison = useJSONCompare ? General_1.ToJSON(newObj[key]) : newObj[key];
            var oldVal_forComparison = useJSONCompare ? General_1.ToJSON(oldObj[key]) : oldObj[key];
            if (newVal_forComparison !== oldVal_forComparison) {
                result.push({ key: key, oldVal: oldObj[key], newVal: newObj[key] });
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (result.length == 0 && returnNullIfSame)
        return null;
    return result;
}
exports.GetPropsChanged = GetPropsChanged;
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = __webpack_require__(/*! ./Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js");
var __1 = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
var g = typeof window == "object" ? window : global;
if (Number.MIN_SAFE_INTEGER == null) {
    Number.MIN_SAFE_INTEGER = -9007199254740991;
}
if (Number.MAX_SAFE_INTEGER == null) {
    Number.MAX_SAFE_INTEGER = 9007199254740991;
}
g["G"] = G;
function G() {
    var e_1, _a;
    var globalHolders = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        globalHolders[_i] = arguments[_i];
    }
    try {
        for (var globalHolders_1 = __values(globalHolders), globalHolders_1_1 = globalHolders_1.next(); !globalHolders_1_1.done; globalHolders_1_1 = globalHolders_1.next()) {
            var globalHolder = globalHolders_1_1.value;
            Object.assign(g, globalHolder);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (globalHolders_1_1 && !globalHolders_1_1.done && (_a = globalHolders_1.return)) _a.call(globalHolders_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function DoNothing() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
exports.DoNothing = DoNothing;
function DN() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
exports.DN = DN;
//var quickIncrementValues = {};
//export function QuickIncrement(name = new Error().stack.split("\n")[2]) { // this doesn't always work, fsr
function QuickIncrement(name) {
    if (name === void 0) { name = "default"; }
    QuickIncrement["values"][name] = (QuickIncrement["values"][name] | 0) + 1;
    return QuickIncrement["values"][name];
}
exports.QuickIncrement = QuickIncrement;
QuickIncrement["values"] = [];
exports.emptyObj = {};
exports.eo = exports.emptyObj; // used for (maybeNullVar || eo).prop;
exports.emptyArray = [];
exports.emptyArray_forLoading = [];
function E(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20) {
    var e_2, _a;
    var result = {};
    try {
        for (var _b = __values(Array.from(arguments)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var extend = _c.value;
            Object.assign(result, extend);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    // if result is empty, return the same empty-obj each time so it doesn't trigger react-js rerenders
    if (exports.emptyObj && result.VKeys().length == 0) {
        return exports.emptyObj;
    }
    return result;
    //return StyleSheet.create(result);
}
exports.E = E;
function WrapWithGo(func) {
    Object.defineProperty(func, "Go", {
        /*set: arg1=>{
            func(arg1);
        },*/
        set: func,
    });
    return func;
}
exports.WrapWithGo = WrapWithGo;
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
exports.ShallowEquals = ShallowEquals;
function ShallowChanged(objA, objB) {
    return !ShallowEquals(objA, objB);
}
exports.ShallowChanged = ShallowChanged;
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
exports.CopyText = CopyText;
// methods: serialization
// ==========
// object-Json
function FromJSON(json) { return JSON.parse(json); }
exports.FromJSON = FromJSON;
/*declare global { function ToJSON(obj, ...excludePropNames): string; } g.Extend({ToJSON});
export function ToJSON(obj, ...excludePropNames): string {
    try {
        if (arguments.length > 1) {
            return JSON.stringify(obj, function(key, value) {
                if (excludePropNames.Contains(key))
                    return;
                return value;
            });
        }
        return JSON.stringify(obj);
    }
    catch (ex) {
        if (ex.toString() == "TypeError: Converting circular structure to JSON")
            return ToJSON_Safe.apply(this, arguments);
        throw ex;
    }
}*/
function ToJSON(obj, replacerFunc, spacing) {
    try {
        return JSON.stringify(obj, replacerFunc, spacing);
    }
    catch (ex) {
        if (ex.toString() == "TypeError: Converting circular structure to JSON")
            return ToJSON_Safe.apply(this, arguments);
        throw ex;
    }
}
exports.ToJSON = ToJSON;
var ToJSON_WithSpaces_Options = /** @class */ (function () {
    function ToJSON_WithSpaces_Options() {
        this.insideObjectBraces = false;
        this.insideArrayBrackets = false;
        this.betweenPropsOrItems = true;
        this.betweenPropNameAndValue = true;
    }
    return ToJSON_WithSpaces_Options;
}());
exports.ToJSON_WithSpaces_Options = ToJSON_WithSpaces_Options;
function ToJSON_WithSpaces(obj, options) {
    options = E(new ToJSON_WithSpaces_Options(), options);
    var result = JSON.stringify(obj, null, 1); // stringify, with line-breaks and indents
    result = result.replace(/^ +/gm, " "); // remove all but the first space for each line
    result = result.replace(/\n/g, ""); // remove line-breaks
    if (!options.insideObjectBraces)
        result = result.replace(/{ /g, "{").replace(/ }/g, "}");
    if (!options.insideArrayBrackets)
        result = result.replace(/\[ /g, "[").replace(/ \]/g, "]");
    if (!options.betweenPropsOrItems)
        result = result.replace(/, /g, ",");
    if (!options.betweenPropNameAndValue)
        result = result.replace(/": /g, "\":");
    return result;
}
exports.ToJSON_WithSpaces = ToJSON_WithSpaces;
function ToJSON_Safe(obj) {
    var excludePropNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excludePropNames[_i - 1] = arguments[_i];
    }
    var cache = [];
    var foundDuplicates = false;
    var result = JSON.stringify(obj, function (key, value) {
        if (__1.ArrayCE(excludePropNames).Contains(key))
            return;
        if (typeof value == 'object' && value !== null) {
            // if circular reference found, discard key
            if (cache.indexOf(value) !== -1) {
                foundDuplicates = true;
                return;
            }
            cache.push(value); // store value in our cache
        }
        return value;
    });
    //cache = null; // enable garbage collection
    if (foundDuplicates)
        result = "[was circular]" + result;
    return result;
}
exports.ToJSON_Safe = ToJSON_Safe;
function ToJSON_Try() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    try {
        return ToJSON.apply(this, args);
    }
    catch (ex) { }
    return "[converting to JSON failed]";
}
exports.ToJSON_Try = ToJSON_Try;
function Clone(obj, keepPrototype) {
    if (keepPrototype === void 0) { keepPrototype = false; }
    if (obj == null)
        return obj;
    var result = FromJSON(ToJSON(obj));
    if (keepPrototype == true) {
        Object.setPrototypeOf(result, Object.getPrototypeOf(obj));
    }
    return result;
}
exports.Clone = Clone;
function CloneWithPrototypes(originalObject, keepCircularLinks) {
    if (keepCircularLinks === void 0) { keepCircularLinks = false; }
    if (originalObject == null)
        return originalObject;
    var copies = [{
            source: originalObject,
            target: Array.isArray(originalObject) ? [] : Object.create(Object.getPrototypeOf(originalObject)),
        }];
    var cloneObject = copies[0].target;
    var sourceReferences = [originalObject];
    var targetReferences = [cloneObject];
    // First in, first out
    var current;
    while (current = copies.shift()) {
        var keys = Object.getOwnPropertyNames(current.source);
        for (var propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
            // Save the source's descriptor
            var descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
            if (!descriptor.value || typeof descriptor.value !== 'object') {
                Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                continue;
            }
            var nextSource = descriptor.value;
            descriptor.value = Array.isArray(nextSource) ? [] : Object.create(Object.getPrototypeOf(nextSource));
            if (keepCircularLinks) {
                var indexOf = sourceReferences.indexOf(nextSource);
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
exports.CloneWithPrototypes = CloneWithPrototypes;
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
function Range(min, max, step, includeMax, roundToStep) {
    if (step === void 0) { step = 1; }
    if (includeMax === void 0) { includeMax = true; }
    if (roundToStep === void 0) { roundToStep = true; }
    var result = [];
    for (var i = min; includeMax ? i <= max : i < max; i = roundToStep ? __1.NumberCE(i + step).RoundTo(step) : i + step) {
        result.push(i);
    }
    return result;
}
exports.Range = Range;
function Global(target) {
    //var name = (target as any).GetName();
    var name = target["name_fake"] || target.name || (target.toString().match(/^function\s*([^\s(]+)/) || [])[1];
    //console.log("Globalizing: " + name);
    g[name] = target;
}
exports.Global = Global;
var IDProvider = /** @class */ (function () {
    function IDProvider() {
        this.lastID = -1;
    }
    IDProvider.prototype.GetID = function () {
        return ++this.lastID;
    };
    return IDProvider;
}());
exports.IDProvider = IDProvider;
exports.nl = "\n";
function AsObj(obj) {
    if (typeof obj == "object")
        return obj;
    if (obj != null)
        return obj.Props().ToMap(function (a) { return a.name; }, function (a) { return a.value; });
    return {};
}
exports.AsObj = AsObj;
function AsArray(args) { return Slice(args, 0); }
exports.AsArray = AsArray;
;
//s.ToArray = function(args) { return s.Slice(args, 0); };
function Slice(args, start, end) { return Array.prototype.slice.call(args, start != null ? start : 0, end); }
exports.Slice = Slice;
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
exports.Multiline = Multiline;
function Multiline_NotCommented(functionWithCode) {
    var text = functionWithCode.toString().replace(/\r/g, "");
    var firstCharOfSecondLinePos = text.indexOf("\n") + 1;
    var enderOfSecondLastLine = text.lastIndexOf("\n");
    var result = text.substring(firstCharOfSecondLinePos, enderOfSecondLastLine);
    result = result.replace(/\t/g, "    ");
    // replace the start and end tokens of special string-containers (used for keeping comments in-tact)
    result = result.replace(/['"]@((?:.|\n)+)@['"];(\n(?=\n))?/g, function (match, sub1) { return sub1.replace(/\\n/, "\n"); });
    return result;
}
exports.Multiline_NotCommented = Multiline_NotCommented;
function StableSort(array, compare) {
    var array2 = array.map(function (item, index) { return ({ index: index, item: item }); });
    array2.sort(function (a, b) {
        var r = compare(a.item, b.item, a.index, b.index);
        return r != 0 ? r : Compare(a.index, b.index);
    });
    return array2.map(function (pack) { return pack.item; });
}
exports.StableSort = StableSort;
function Compare(a, b, caseSensitive) {
    if (caseSensitive === void 0) { caseSensitive = true; }
    if (!caseSensitive && typeof a == "string" && typeof b == "string") {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    return a < b ? -1 : (a > b ? 1 : 0);
}
exports.Compare = Compare;
// just use the word 'percent', even though value is represented as fraction (e.g. 0.5, rather than 50[%])
function Lerp(from, to, percentFromXToY, keepResultInRange) {
    if (keepResultInRange === void 0) { keepResultInRange = true; }
    var result = from + ((to - from) * percentFromXToY);
    if (keepResultInRange)
        result = __1.NumberCE(result).KeepBetween(from, to);
    return result;
}
exports.Lerp = Lerp;
function GetPercentFromXToY(start, end, val, keepResultInRange) {
    if (keepResultInRange === void 0) { keepResultInRange = true; }
    // distance-from-x / distance-from-x-required-for-result-'1'
    var result = (val - start) / (end - start);
    if (keepResultInRange)
        result = __1.NumberCE(result).KeepBetween(0, 1);
    return result;
}
exports.GetPercentFromXToY = GetPercentFromXToY;
function GetXToY(minX, maxY, interval) {
    if (interval === void 0) { interval = 1; }
    var result = [];
    for (var val = minX; val <= maxY; val += interval) {
        result.push(val);
    }
    return result;
}
exports.GetXToY = GetXToY;
function GetXToYOut(minX, maxOutY, interval) {
    if (interval === void 0) { interval = 1; }
    var result = [];
    for (var val = minX; val < maxOutY; val += interval) {
        result.push(val);
    }
    return result;
}
exports.GetXToYOut = GetXToYOut;
function CloneObject(obj, propMatchFunc, depth) {
    /*var Assert = require("../../Frame/General/Assert").Assert;
    Assert(depth < 100, "CloneObject cannot work past depth 100! (probably circular ref)");*/
    var e_3, _a;
    if (depth === void 0) { depth = 0; }
    if (obj == null)
        return null;
    if (Types_1.IsPrimitive(obj))
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
    var result = {};
    try {
        for (var _b = __values(obj.Props()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var prop = _c.value;
            if (!(prop.value instanceof Function) && (propMatchFunc == null || propMatchFunc.call(obj, prop.name, prop.value)))
                result[prop.name] = CloneObject(prop.value, propMatchFunc, depth + 1);
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
exports.CloneObject = CloneObject;
function CloneArray(array) {
    //array.slice(0); //deep: JSON.parse(JSON.stringify(array));
    return Array.prototype.slice.call(array, 0);
}
exports.CloneArray = CloneArray;
/*static IsEqual(a, b) {
    function _equals(a, b) { return JSON.stringify(a) === JSON.stringify($.extend(true, {}, a, b)); }
    return _equals(a, b) && _equals(b, a);
};*/
function Bind(func, newThis) {
    return func.bind(newThis);
}
exports.Bind = Bind;
/*static ForEachChildInTreeXDoY(treeX: any, actionY: (value, key: string)=>void) {
    for (let key in treeX) {
        let value = treeX[key];
        actionY(value, key);
        if (typeof value == "object" || value instanceof Array)
            V.ForEachChildInTreeXDoY(value, actionY);
    }
}*/
function GetHiddenHolder() {
    var holder = document.querySelector("#jsve_hiddenContainer");
    if (holder == null) {
        holder = document.createElement("div");
        holder.id = "jsve_hiddenContainer";
        __1.ObjectCE(holder.style).Extend({ position: "absolute", left: "-1000px", top: "-1000px", width: "1000px", height: "1000px", overflow: "hidden" });
        document.body.appendChild(holder);
    }
    return holder;
}
var GetContentSize_cache = {};
function GetContentSize(content, includeMargin, createClone, allowCache) {
    /*var holder = $("#jsve_hiddenContainer");
    var contentClone = content.clone();
    holder.append(contentClone);
    var width = contentClone.outerWidth();
    var height = contentClone.outerHeight();
    contentClone.remove();*/
    if (includeMargin === void 0) { includeMargin = false; }
    if (createClone === void 0) { createClone = false; }
    if (allowCache === void 0) { allowCache = true; }
    var cacheStore = Types_1.IsString(content) ? GetContentSize_cache : (content["GetContentSize_cache"] = content["GetContentSize_cache"] || {});
    var currentHTML = Types_1.IsString(content) ? content : content.outerHTML;
    var result = cacheStore[currentHTML];
    if (result == null) {
        var holder = GetHiddenHolder();
        var testElement = Types_1.IsString(content) ? $(content) : (createClone ? $(content).clone() : $(content));
        holder.appendChild(testElement[0]);
        var width = testElement.outerWidth(includeMargin);
        var height = testElement.outerHeight(includeMargin);
        testElement.remove();
        result = { width: width, height: height };
        if (allowCache) {
            cacheStore[currentHTML] = result;
        }
    }
    return result;
}
exports.GetContentSize = GetContentSize;
function GetContentWidth(content, includeMargin, createClone, allowCache) {
    if (includeMargin === void 0) { includeMargin = false; }
    if (createClone === void 0) { createClone = false; }
    if (allowCache === void 0) { allowCache = true; }
    return GetContentSize(content, includeMargin, createClone, allowCache).width;
}
exports.GetContentWidth = GetContentWidth;
function GetContentHeight(content, includeMargin, createClone, allowCache) {
    if (includeMargin === void 0) { includeMargin = false; }
    if (createClone === void 0) { createClone = false; }
    if (allowCache === void 0) { allowCache = true; }
    return GetContentSize(content, includeMargin, createClone, allowCache).height;
}
exports.GetContentHeight = GetContentHeight;
exports.autoElements = {};
function GetAutoElement(startHTML) {
    if (exports.autoElements[startHTML] == null) {
        var holder = GetHiddenHolder();
        var element = $(startHTML)[0];
        holder.appendChild(element);
        exports.autoElements[startHTML] = element;
    }
    return exports.autoElements[startHTML];
}
exports.GetAutoElement = GetAutoElement;
var TreeNode = /** @class */ (function () {
    function TreeNode(ancestorNodes, obj, prop) {
        this.ancestorNodes = ancestorNodes;
        this.obj = obj;
        this.prop = prop;
    }
    Object.defineProperty(TreeNode.prototype, "PathNodes", {
        get: function () {
            if (this.prop == "_root")
                return [];
            return __1.ArrayCE(this.ancestorNodes).Select(function (a) { return a.prop; }).concat(this.prop);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "PathStr", {
        get: function () {
            return this.PathNodes.join("/");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "PathStr_Updeep", {
        get: function () {
            return this.PathNodes.join(".");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "Value", {
        //value;
        get: function () {
            if (this.obj == null)
                return undefined;
            return this.obj[this.prop];
        },
        set: function (newVal) {
            this.obj[this.prop] = newVal;
        },
        enumerable: true,
        configurable: true
    });
    return TreeNode;
}());
exports.TreeNode = TreeNode;
function GetTreeNodesInObjTree(obj, includeRootNode, _ancestorNodes) {
    if (includeRootNode === void 0) { includeRootNode = false; }
    if (_ancestorNodes === void 0) { _ancestorNodes = []; }
    __1.Assert(_ancestorNodes.length <= 300, "Cannot traverse more than 300 levels into object tree. (probably circular)");
    var result = [];
    if (includeRootNode)
        result.push(new TreeNode([], { _root: obj }, "_root"));
    for (var key in obj) {
        if (!obj.hasOwnProperty(key))
            continue;
        var value = obj[key];
        var currentNode = new TreeNode(_ancestorNodes, obj, key);
        result.push(currentNode);
        if (typeof value == "object") {
            __1.ArrayCE(result).AddRange(GetTreeNodesInObjTree(value, false, _ancestorNodes.concat(currentNode)));
        }
    }
    return result;
}
exports.GetTreeNodesInObjTree = GetTreeNodesInObjTree;
/*export function CloneTreeDownToXWhileReplacingXValue(treeRoot, pathToX: string, newValueForX) {
    let pathNodes = pathToX.split("/");
    let currentPathNode = pathNodes[0];
    let currentPathNode_newValue = pathNodes.length > 1
        ? CloneTreeDownToXWhileReplacingXValue(treeRoot[currentPathNode], pathNodes.Skip(1).join("/"), newValueForX)
        : newValueForX;
    return {...treeRoot, [currentPathNode]: currentPathNode_newValue};
}*/
function GetTreeNodesInPath(treeRoot, pathNodesOrStr, includeRootNode, _ancestorNodes) {
    if (includeRootNode === void 0) { includeRootNode = false; }
    if (_ancestorNodes === void 0) { _ancestorNodes = []; }
    var descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
    var childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
    var result = [];
    if (includeRootNode)
        result.push(new TreeNode([], { _root: treeRoot }, "_root"));
    result.push(childTreeNode);
    if (descendantPathNodes.length > 1) // if the path goes deeper than the current child-tree-node
        result.push.apply(// if the path goes deeper than the current child-tree-node
        result, __spread(GetTreeNodesInPath(childTreeNode ? childTreeNode.Value : null, __1.ArrayCE(descendantPathNodes).Skip(1).join("/"), false, _ancestorNodes.concat(childTreeNode))));
    return result;
}
exports.GetTreeNodesInPath = GetTreeNodesInPath;
/*export function GetTreeNodesInPath_WithRoot(treeRoot, path: string) {
    return GetTreeNodesInPath({root: treeRoot}, "root/" + path).Skip(1);
}*/
function VisitTreeNodesInPath(treeRoot, pathNodesOrStr, visitFunc, visitRootNode, _ancestorNodes) {
    if (visitRootNode === void 0) { visitRootNode = false; }
    if (_ancestorNodes === void 0) { _ancestorNodes = []; }
    if (visitRootNode)
        visitFunc(new TreeNode([], { _root: treeRoot }, "_root"));
    var descendantPathNodes = pathNodesOrStr instanceof Array ? pathNodesOrStr : pathNodesOrStr.split("/");
    var childTreeNode = new TreeNode(_ancestorNodes, treeRoot, descendantPathNodes[0]);
    visitFunc(childTreeNode);
    if (descendantPathNodes.length > 1) // if the path goes deeper than the current child-tree-node
        VisitTreeNodesInPath(childTreeNode.Value, __1.ArrayCE(descendantPathNodes).Skip(1).join("/"), visitFunc, false, _ancestorNodes.concat(childTreeNode));
    return treeRoot;
}
exports.VisitTreeNodesInPath = VisitTreeNodesInPath;
/*export function VisitTreeNodesInPath_WithRoot(treeRoot, path: string, visitFunc: (node: TreeNode)=>any) {
    VisitTreeNodesInPath({root: treeRoot}, "root/" + path, visitFunc);
    return treeRoot;
}*/
function ConvertPathGetterFuncToPropChain(pathGetterFunc) {
    var funcStr = pathGetterFunc.toString();
    __1.Assert(!funcStr.includes("["), "State-getter-func cannot contain bracket-based property-access.\n" + exports.nl + "For variable inclusion, use multiple segments as in: ...ToPropChain(\"main\", \"mapViews\", mapID)");
    /*const pathStr = funcStr.match(/return [^.]+\.(.+?);/)[1] as string;
    //let result = pathStr.replace(/\./g, "/");
    const result = pathStr.split(".");*/
    var parts = funcStr.split(".").slice(1); // remove first segment, since it's just the "return xxx." part
    parts[parts.length - 1] = parts[parts.length - 1].match(/^([a-zA-Z0-9_$]+)/)[1]; // remove semicolon (or whatever else) at the end
    return parts;
}
exports.ConvertPathGetterFuncToPropChain = ConvertPathGetterFuncToPropChain;
/** @param sepChar Default: "/" */
function DeepGet(obj, pathOrPathSegments, resultIfNull, sepChar) {
    var e_4, _a;
    if (resultIfNull === void 0) { resultIfNull = null; }
    if (sepChar === void 0) { sepChar = "/"; }
    var pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    var result = obj;
    try {
        for (var pathSegments_1 = __values(pathSegments), pathSegments_1_1 = pathSegments_1.next(); !pathSegments_1_1.done; pathSegments_1_1 = pathSegments_1.next()) {
            var pathNode = pathSegments_1_1.value;
            if (result == null)
                break;
            result = result[pathNode];
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (pathSegments_1_1 && !pathSegments_1_1.done && (_a = pathSegments_1.return)) _a.call(pathSegments_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    if (result == null)
        return resultIfNull;
    return result;
}
exports.DeepGet = DeepGet;
/** @param sepChar Default: "/" */
function DeepSet(obj, pathOrPathSegments, newValue, sepChar, createPathSegmentsIfMissing, deleteUndefined) {
    if (sepChar === void 0) { sepChar = "/"; }
    if (createPathSegmentsIfMissing === void 0) { createPathSegmentsIfMissing = true; }
    if (deleteUndefined === void 0) { deleteUndefined = false; }
    var pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    var deepObj = obj;
    // tunnel down to the object holding the path-specified prop
    pathSegments.slice(0, -1).forEach(function (segment) {
        if (deepObj[segment] == null) {
            if (createPathSegmentsIfMissing) {
                deepObj[segment] = {};
            }
            else {
                __1.Assert(false, "The given path (" + pathSegments.join("/") + ") had a missing segment (" + segment + "), so the deep-set failed.");
            }
        }
        deepObj = deepObj[segment];
    });
    if (newValue === undefined && deleteUndefined) {
        delete deepObj[__1.ArrayCE(pathSegments).Last()];
    }
    else {
        deepObj[__1.ArrayCE(pathSegments).Last()] = newValue;
    }
}
exports.DeepSet = DeepSet;
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
function WithDeepSet(baseObj, pathOrPathSegments, newValue, sepChar) {
    var _a;
    if (sepChar === void 0) { sepChar = "/"; }
    var pathSegments = pathOrPathSegments instanceof Array ? pathOrPathSegments : pathOrPathSegments.split(sepChar);
    return __assign(__assign({}, baseObj), (_a = {}, _a[pathSegments[0]] = pathSegments.length > 1 ? WithDeepSet(baseObj[pathSegments[0]], pathSegments.slice(1), newValue) : newValue, _a));
}
exports.WithDeepSet = WithDeepSet;
//@((()=> { if (g.onclick == null) g.onclick = ()=>console.log(V.GetStackTraceStr()); }) as any)
function GetStackTraceStr() {
    var _a, _b;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var stackTrace, sourceStackTrace = true;
    if (Types_1.IsString(args[0]))
        _a = __read(args, 2), stackTrace = _a[0], sourceStackTrace = _a[1];
    else
        _b = __read(args, 1), sourceStackTrace = _b[0];
    //stackTrace = stackTrace || new Error()[sourceStackTrace ? "Stack" : "stack"];
    //stackTrace = stackTrace || (sourceStackTrace ? StackTrace.get().then(stack=>stackTrace = stack.map(a=>a.toString()).join("\n")) : new Error().stack);
    //stackTrace = stackTrace || new Error().stack;
    if (stackTrace == null) {
        //let fakeError = {}.VAct(a=>Error.captureStackTrace(a));
        var oldStackLimit = Error.stackTraceLimit;
        Error.stackTraceLimit = Infinity;
        var fakeError = new Error();
        stackTrace = fakeError.stack;
        Error.stackTraceLimit = oldStackLimit;
    }
    return stackTrace.substr(__1.StringCE(stackTrace).IndexOf_X("\n", 1)); // remove "Error" line and first stack-frame (that of this method)
}
exports.GetStackTraceStr = GetStackTraceStr;
function GetErrorMessagesUnderElement(element) {
    //return element.querySelectorAll(":invalid").ToList().map(node=>node.validationMessage || `Invalid value.`);
    return Array.from(element.querySelectorAll(":invalid")).map(function (node) { return node.validationMessage || "Invalid value."; });
}
exports.GetErrorMessagesUnderElement = GetErrorMessagesUnderElement;
exports.DEL = "JS_VEXTENSIONS_SPECIAL_DELETE_KEY";
function FindDOM(selector) {
    return document.querySelector(selector);
}
exports.FindDOM = FindDOM;
function FindDOMAll(selector) {
    return Array.from(document.querySelectorAll(selector));
}
exports.FindDOMAll = FindDOMAll;
function WaitTillDataPathIsSet(dataPath) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var dataPathParts, currentParent, dataPathParts_1, dataPathParts_1_1, part, e_5_1;
        var e_5, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    dataPathParts = dataPath.split(".");
                    currentParent = g;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 8, 9, 10]);
                    dataPathParts_1 = __values(dataPathParts), dataPathParts_1_1 = dataPathParts_1.next();
                    _b.label = 2;
                case 2:
                    if (!!dataPathParts_1_1.done) return [3 /*break*/, 7];
                    part = dataPathParts_1_1.value;
                    _b.label = 3;
                case 3:
                    if (!(currentParent[part] == null)) return [3 /*break*/, 5];
                    return [4 /*yield*/, WaitTillPropertyIsSet(currentParent, part)];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 5:
                    currentParent = currentParent[part];
                    _b.label = 6;
                case 6:
                    dataPathParts_1_1 = dataPathParts_1.next();
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_5_1 = _b.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (dataPathParts_1_1 && !dataPathParts_1_1.done && (_a = dataPathParts_1.return)) _a.call(dataPathParts_1);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 10:
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.WaitTillDataPathIsSet = WaitTillDataPathIsSet;
function WaitTillPropertyIsSet(obj, prop) {
    return new Promise(function (resolve, reject) {
        __1.ObjectCE(obj)._AddGetterSetter(prop, function () { }, function (value) {
            delete obj[prop]; // remove this hook
            obj[prop] = value; // set to provided value
            resolve();
        });
    });
}
exports.WaitTillPropertyIsSet = WaitTillPropertyIsSet;
var CapScheme;
(function (CapScheme) {
    /** examplePropNameWithDuoWord */ CapScheme[CapScheme["PropName"] = 0] = "PropName";
    /** Example Title With Duo-Word */ CapScheme[CapScheme["Title"] = 1] = "Title";
    /** Example sentence with duo-word */ CapScheme[CapScheme["Sentence"] = 2] = "Sentence";
})(CapScheme = exports.CapScheme || (exports.CapScheme = {}));
function ChangeCapitalization(text, fromScheme, toScheme) {
    var inStandardScheme = ConvertFromSchemeXToStandardScheme(text, fromScheme);
    return ConvertFromStandardSchemeToSchemeX(inStandardScheme, toScheme);
}
exports.ChangeCapitalization = ChangeCapitalization;
// "standard scheme" is currently CapitalizeScheme.Sentence
function ConvertFromSchemeXToStandardScheme(text, fromScheme) {
    if (fromScheme == CapScheme.PropName) {
        // demo string: somePropName
        return text
            // somePropName -> some prop name
            .replace(/[A-Z]/g, function (a) { return " " + a.toLowerCase(); })
            // some prop name -> Some prop name
            .replace(/^./, function (a) { return a.toUpperCase(); });
    }
    else if (fromScheme == CapScheme.Title) {
        __1.Assert(false, "Not yet implemented.");
    }
    else if (fromScheme == CapScheme.Sentence) {
        return text;
    }
}
function ConvertFromStandardSchemeToSchemeX(text, toScheme) {
    if (toScheme == CapScheme.PropName) {
        __1.Assert(false, "Not yet implemented.");
    }
    else if (toScheme == CapScheme.Title) {
        __1.Assert(false, "Not yet implemented.");
    }
    else if (toScheme == CapScheme.Sentence) {
        return text;
    }
}
function StartDownload(content, filename, dataTypeStr, encodeContentAsURIComp) {
    if (dataTypeStr === void 0) { dataTypeStr = "data:application/octet-stream,"; }
    if (encodeContentAsURIComp === void 0) { encodeContentAsURIComp = true; }
    var link = document.createElement("a");
    Object.assign(link.style, { display: "none" });
    link.innerText = "Save to disk";
    link.setAttribute("href", dataTypeStr + (encodeContentAsURIComp ? encodeURIComponent(content) : content));
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
}
exports.StartDownload = StartDownload;
function StartUpload() {
    return new Promise(function (resolve) {
        var fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.style.display = "none";
        fileInput.onchange = function (e) {
            var file = e.target["files"][0];
            if (!file)
                return;
            var reader = new FileReader();
            reader.onload = function (e) {
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
exports.StartUpload = StartUpload;
function TransferPrototypeProps(target, source, descriptorBase, descriptorOverride) {
    var e_6, _a;
    try {
        for (var _b = __values(Object.entries(Object.getOwnPropertyDescriptors(source))), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), name_1 = _d[0], descriptor = _d[1];
            if (name_1 == "constructor")
                continue;
            Object.defineProperty(target, name_1, Object.assign({}, descriptorBase, descriptor, descriptorOverride));
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
exports.TransferPrototypeProps = TransferPrototypeProps;
function WithFuncsStandalone(source) {
    var e_7, _a;
    var result = {};
    var _loop_1 = function (key) {
        if (key == "constructor")
            return "continue"; // no reason to call the wrapper's constructor
        var descriptor = Object.getOwnPropertyDescriptor(source, key);
        var newDescriptor = Object.assign({}, descriptor);
        if (descriptor.value instanceof Function) {
            var oldFunc_1 = descriptor.value;
            newDescriptor.value = function (thisArg) {
                var callArgs = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    callArgs[_i - 1] = arguments[_i];
                }
                return oldFunc_1.apply(thisArg, callArgs);
            };
        }
        Object.defineProperty(result, key, newDescriptor);
    };
    try {
        for (var _b = __values(Object.getOwnPropertyNames(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_1(key);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return result;
}
exports.WithFuncsStandalone = WithFuncsStandalone;
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
    var e_8, _a;
    // Static proxy approach -- a bit faster since it doesn't create any functions, closures, or proxies per wrap/CE-method-call.
    //	(Limitation: you can't store the result of "ObjectCE(something)" and call a method attached to it more than once, since each method-call removes the supplied this-arg from the stack.)
    /*let proxy = {} as any;
    const thisArgStack = [];*/
    var proxy = {};
    var thisArgStack = [];
    var _loop_2 = function (key) {
        if (key == "constructor")
            return "continue"; // no reason to call the wrapper's constructor
        var descriptor = Object.getOwnPropertyDescriptor(sourceClass_prototype, key);
        var newDescriptor = Object.assign({}, descriptor);
        if (descriptor.value instanceof Function) {
            var oldFunc_2 = descriptor.value;
            newDescriptor.value = function () {
                var callArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    callArgs[_i] = arguments[_i];
                }
                var thisArg = thisArgStack[thisArgStack.length - 1];
                var result = oldFunc_2.apply(thisArg, callArgs);
                //thisArgStack.length--;
                thisArgStack.splice(thisArgStack.length - 1, 1);
                return result;
            };
        }
        Object.defineProperty(proxy, key, newDescriptor);
    };
    try {
        for (var _b = __values(Object.getOwnPropertyNames(sourceClass_prototype)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_2(key);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
    //return (nextThis: any)=> {
    return function (nextThis) {
        thisArgStack.push(nextThis);
        return proxy;
    };
}
exports.CreateProxyForClassExtensions = CreateProxyForClassExtensions;
//# sourceMappingURL=General.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Timers.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Timers.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
var TimerContext = /** @class */ (function () {
    function TimerContext() {
        this.timers = [];
    }
    TimerContext.prototype.Reset = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.timers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var timer = _c.value;
                timer.Stop();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.timers = [];
    };
    // Can be useful on platforms (eg. Android) where setInterval() and setTimeout() stop working when the screen is off.
    // Just have the Android code call the js every second or so, running this method; this will force the timer-functions to be manually triggered once they've passed the expected tick-time.
    TimerContext.prototype.ManuallyTriggerOverdueTimers = function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.timers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var timer = _c.value;
                if (timer.NextTickFuncOverdue) {
                    timer.nextTickFunc();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    TimerContext.default = new TimerContext();
    TimerContext.default_autoAddAll = false;
    return TimerContext;
}());
exports.TimerContext = TimerContext;
// methods
// ==========
function TryCall(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    //if (!(func instanceof Function)) return;
    if (typeof func != "function")
        return;
    try {
        return func.apply(this, args);
    }
    catch (ex) { }
}
exports.TryCall = TryCall;
function TryCall_OnX(obj, func) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (typeof func != "function")
        return;
    try {
        return func.apply(obj, args);
    }
    catch (ex) { }
}
exports.TryCall_OnX = TryCall_OnX;
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
var maxTimeoutLength = 0x7FFFFFFF; // setTimeout limit is MAX_INT32=(2^31-1)
function WaitXThenRun(delayInMS, func) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    __1.Assert(delayInMS <= maxTimeoutLength, "Cannot wait for longer than " + maxTimeoutLength + " ms. (use WaitUntilXThenRun, if a long-delay is needed)");
    // setTimeout can take really long on Chrome mobile (eg. while scrolling), for some reason (like, 1.5 seconds)
    // on desktop, setImmediate is better as well, since it takes ~0ms instead of 1-15ms
    if (delayInMS == 0) {
        return window["setImmediate"].apply(window, __spread([func], args)); // same as below
    }
    return setTimeout.apply(void 0, __spread([func, delayInMS], args)); // "as any": maybe temp; used to allow source-importing from NodeJS
}
exports.WaitXThenRun = WaitXThenRun;
function WaitUntilXThenRun(targetDateTimeInMS, func) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var now = Date.now();
    var diff = __1.NumberCE(targetDateTimeInMS - now).KeepAtLeast(0);
    if (diff > maxTimeoutLength) {
        WaitXThenRun(maxTimeoutLength, function () { return WaitUntilXThenRun(targetDateTimeInMS, func); });
    }
    else {
        WaitXThenRun(diff, func);
    }
}
exports.WaitUntilXThenRun = WaitUntilXThenRun;
function SleepAsync(timeMS) {
    return new Promise(function (resolve, reject) {
        WaitXThenRun(timeMS, resolve);
    });
}
exports.SleepAsync = SleepAsync;
function SleepAsyncUntil(targetDateTimeInMS) {
    return new Promise(function (resolve, reject) {
        WaitUntilXThenRun(targetDateTimeInMS, resolve);
    });
}
exports.SleepAsyncUntil = SleepAsyncUntil;
var DoNothingXTimesThenDoY_counters = {};
function DoNothingXTimesThenDoY(doNothingCount, func, key) {
    if (key === void 0) { key = "default"; }
    if (DoNothingXTimesThenDoY_counters[key] == null) {
        DoNothingXTimesThenDoY_counters[key] = 0;
    }
    if (DoNothingXTimesThenDoY_counters[key] >= doNothingCount) {
        func();
    }
    DoNothingXTimesThenDoY_counters[key]++;
}
exports.DoNothingXTimesThenDoY = DoNothingXTimesThenDoY;
// interval is in seconds (can be decimal)
var Timer = /** @class */ (function () {
    function Timer(intervalInMS, func, maxCallCount) {
        if (maxCallCount === void 0) { maxCallCount = -1; }
        this.timerID = -1;
        this.callCount_thisRun = 0;
        this.callCount_total = 0;
        __1.Assert(__1.IsNumber(intervalInMS), "Interval must be a number.");
        this.intervalInMS = intervalInMS;
        this.func = func;
        this.maxCallCount = maxCallCount;
        if (TimerContext.default_autoAddAll) {
            TimerContext.default.timers.push(this);
        }
    }
    Timer.prototype.SetContext = function (timerContext) {
        __1.Assert(timerContext, "TimerContext cannot be null.");
        this.timerContexts = (this.timerContexts || []).concat(timerContext);
        timerContext.timers.push(this);
        return this;
    };
    Timer.prototype.RemoveFromContext = function (timerContext) {
        __1.ArrayCE(this.timerContexts).Remove(timerContext);
        __1.ArrayCE(timerContext.timers).Remove(this);
    };
    Timer.prototype.ClearContexts = function () {
        var e_3, _a;
        try {
            for (var _b = __values(this.timerContexts), _c = _b.next(); !_c.done; _c = _b.next()) {
                var context = _c.value;
                this.RemoveFromContext(context);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Object.defineProperty(Timer.prototype, "IsRunning", {
        get: function () { return this.timerID != -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timer.prototype, "NextTickFuncOverdue", {
        get: function () {
            return this.nextTickTime != null && Date.now() > this.nextTickTime && this.nextTickFunc != null;
        },
        enumerable: true,
        configurable: true
    });
    Timer.prototype.Start = function (initialDelayOverride) {
        var _this = this;
        if (initialDelayOverride === void 0) { initialDelayOverride = null; }
        // if start is called when it's already running, stop the timer first (thus we restart the timer instead of causing overlapping setIntervals/delayed-func-calls)
        if (this.IsRunning)
            this.Stop();
        this.startTime = Date.now();
        var StartRegularInterval = function () {
            _this.nextTickTime = _this.startTime + _this.intervalInMS;
            _this.timerID = setInterval(_this.nextTickFunc = function () {
                _this.callCount_thisRun++;
                _this.callCount_total++;
                _this.func();
                if (_this.maxCallCount != -1 && _this.callCount_thisRun >= _this.maxCallCount) {
                    _this.Stop();
                }
                else {
                    //this.nextTickTime += this.intervalInMS;
                    _this.nextTickTime = Date.now() + _this.intervalInMS; // using Date.now() prevents the prop from getting out-of-sync (from sleep-mode)
                }
            }, _this.intervalInMS); // "as any": maybe temp; used to allow source-importing from NodeJS
        };
        if (initialDelayOverride != null) {
            this.nextTickTime = this.startTime + initialDelayOverride;
            this.timerID = setTimeout(this.nextTickFunc = function () {
                _this.callCount_thisRun++;
                _this.callCount_total++;
                _this.func();
                if (_this.maxCallCount != -1 && _this.callCount_thisRun >= _this.maxCallCount) {
                    _this.Stop();
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
    };
    Timer.prototype.Stop = function () {
        clearInterval(this.timerID);
        //this.startTime = null;
        this.nextTickTime = null;
        this.nextTickFunc = null;
        this.timerID = -1;
        this.callCount_thisRun = 0;
    };
    return Timer;
}());
exports.Timer = Timer;
var TimerS = /** @class */ (function (_super) {
    __extends(TimerS, _super);
    function TimerS(interval_decimal, func, maxCallCount) {
        if (maxCallCount === void 0) { maxCallCount = -1; }
        return _super.call(this, interval_decimal * 1000, func, maxCallCount) || this;
    }
    return TimerS;
}(Timer));
exports.TimerS = TimerS;
var funcLastScheduledRunTimes = {};
function BufferAction() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length == 2)
        var _a = __read(args, 2), minInterval = _a[0], func = _a[1], key = null;
    else if (args.length == 3)
        var _b = __read(args, 3), key = _b[0], minInterval = _b[1], func = _b[2];
    var lastScheduledRunTime = funcLastScheduledRunTimes[key] || 0;
    var now = new Date().getTime();
    var timeSinceLast = now - lastScheduledRunTime;
    if (timeSinceLast >= minInterval) { // if we've waited enough since last run, run right now
        func();
        funcLastScheduledRunTimes[key] = now;
    }
    else {
        var waitingForNextRunAlready = lastScheduledRunTime > now;
        if (!waitingForNextRunAlready) { // else, if we're not already waiting for next-run, schedule next-run
            var nextRunTime = lastScheduledRunTime + minInterval;
            var timeTillNextRun = nextRunTime - now;
            WaitXThenRun(timeTillNextRun, func);
            funcLastScheduledRunTimes[key] = nextRunTime;
        }
    }
}
exports.BufferAction = BufferAction;
//# sourceMappingURL=Timers.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/Types.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/Types.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// standard types
// ----------
Object.defineProperty(exports, "__esModule", { value: true });
/*export class bool extends Boolean {}
export class int extends Number {}
export class double extends Number {}
export var string = "string" as any as (new(..._)=>string);*/
exports.bool = function () { return "bool"; };
exports.int = function () { return "int"; };
exports.double = function () { return "double"; };
exports.string = function () { return "string"; };
function IsNaN(obj) { return typeof obj == "number" && obj != obj; }
exports.IsNaN = IsNaN;
function IsPrimitive(obj) { return IsBool(obj) || IsNumber(obj) || IsString(obj); }
exports.IsPrimitive = IsPrimitive;
function IsBool(obj) { return typeof obj == "boolean"; } //|| obj instanceof Boolean
exports.IsBool = IsBool;
function ToBool(boolStr) { return boolStr == "true" ? true : false; }
exports.ToBool = ToBool;
function IsArray(obj) { return Array.isArray(obj); } // for briefness and/or consistency
exports.IsArray = IsArray;
function IsObject(obj) { return typeof obj == "object"; }
exports.IsObject = IsObject;
//export function IsObjectOf<T>(obj) : obj is T { return typeof obj == "object"; }
//export function IsOfType<T>(obj, typeConstructor: new()=>T) : obj is T { return obj.constructor.name == typeConstructor.name; }
function IsTypeX(obj, typeConstructor) { return obj instanceof typeConstructor; }
exports.IsTypeX = IsTypeX;
function IsNumberString(obj, allowNaN) {
    if (allowNaN === void 0) { allowNaN = false; }
    return IsString(obj) && obj.length && IsNumber(Number(obj), false, allowNaN);
}
exports.IsNumberString = IsNumberString;
function IsNumber(obj, allowNumberObj, allowNaN) {
    if (allowNumberObj === void 0) { allowNumberObj = false; }
    if (allowNaN === void 0) { allowNaN = false; }
    if (!allowNaN && IsNaN(obj))
        return false;
    return typeof obj == "number" || (allowNumberObj && obj instanceof Number);
}
exports.IsNumber = IsNumber;
/** Basically the same as Number(...), accepting numbers, and converting number-strings of these forms:
1) "010" -> 10 [ES5+], 8 [<ES5]
2) "0x10" -> 16
3) "5e3" -> 5000
Does *not* convert values of these forms (instead returns valIfConversionFails -- by default NaN):
4) null -> ?
5) "" -> ?*/
function ToNumber(stringOrFloatVal, valIfConversionFails) {
    if (valIfConversionFails === void 0) { valIfConversionFails = NaN; }
    if (!IsString(stringOrFloatVal) && !IsNumber(stringOrFloatVal))
        return valIfConversionFails;
    if (IsString(stringOrFloatVal) && stringOrFloatVal.length == 0)
        return valIfConversionFails;
    return Number(stringOrFloatVal);
}
exports.ToNumber = ToNumber;
function IsInt(obj) { return IsNumber(obj) && parseInt(obj) == obj; }
exports.IsInt = IsInt;
function ToInt(stringOrFloatVal, valIfConversionFails) {
    if (valIfConversionFails === void 0) { valIfConversionFails = NaN; }
    return parseInt(ToNumber(stringOrFloatVal, valIfConversionFails) + "");
}
exports.ToInt = ToInt;
/*export function IsFloat(obj) : obj is number { return typeof obj == "number" && parseFloat(obj as any) != parseInt(obj as any); }
export function ToFloat(stringOrIntVal) { return parseFloat(stringOrIntVal); }*/
function IsString(obj, allowStringObj) {
    if (allowStringObj === void 0) { allowStringObj = false; }
    return typeof obj == "string" || (allowStringObj && obj instanceof String);
}
exports.IsString = IsString;
function ToString(val) { return "" + val; }
exports.ToString = ToString;
function IsFunction(obj) {
    //return obj instanceof Function;
    return typeof obj == "function";
}
exports.IsFunction = IsFunction;
function IsConstructor(obj) {
    //return obj instanceof Function && obj.name;
    return typeof obj == "function" && obj.name;
}
exports.IsConstructor = IsConstructor;
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
    //let entryNames = Object.keys(enumType).filter(a=>a.match(/^\D/) != null);
    // valid enum values are numbers and null, so any props other than those are the name->value props we want
    /*let nameValuePairs = enumType.Pairs().filter(pair=>!IsNumberString(pair.key) && pair.key != "null");
    return nameValuePairs.map(pair=>({name: nameModifierFunc ? nameModifierFunc(pair.key) : pair.key, value: pair.value as number}));*/
    // valid enum values are numbers and null, so any keys other than those are the ones we want (they're the keys for the key->value pairs)
    var entryNames = Object.keys(enumType).filter(function (key) { return !IsNumberString(key) && key != "null"; });
    return entryNames.map(function (name) { return ({ name: nameModifierFunc ? nameModifierFunc(name) : name, value: enumType[name] }); });
}
exports.GetEntries = GetEntries;
function GetValues(enumType) {
    return GetEntries(enumType).map(function (a) { return a.value; });
}
exports.GetValues = GetValues;
function GetValues_ForSchema(enumType) {
    return GetValues(enumType).map(function (value) { return ({ const: value }); });
}
exports.GetValues_ForSchema = GetValues_ForSchema;
//# sourceMappingURL=Types.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/URLs.js":
/*!********************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/URLs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
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
exports.ToAbsoluteUrl = ToAbsoluteUrl;
function JumpToHash(hashStr) {
    var url = location.href; // Save down the URL without hash.
    location.href = "#" + hashStr; // Go to the target element.
    history.replaceState(null, null, url); // Don't like hashes. Changing it back.
    //document.getElementById(hashStr).scrollIntoView(); //Even IE6 supports this
}
exports.JumpToHash = JumpToHash;
/** Returns [domainStr, pathStr, varsStr, hashStr], without the separator-chars. */
function GetCurrentURLString() {
    return window.location.href.replace(/%22/, "\"");
}
exports.GetCurrentURLString = GetCurrentURLString;
function GetUrlParts(url) {
    var _a, _b, _c;
    url = url || GetCurrentURLString();
    var _d = __read(Array(4).fill(0).map(function (a) { return ""; }), 4), domainStr = _d[0], pathStr = _d[1], varsStr = _d[2], hashStr = _d[3];
    var urlToProcess = url;
    if (urlToProcess.includes("#") && !varsStr.includes("runJS=")) {
        _a = __read(__1.StringCE(urlToProcess).SplitAt(urlToProcess.indexOf("#")), 2), urlToProcess = _a[0], hashStr = _a[1];
    }
    if (urlToProcess.includes("?")) {
        _b = __read(__1.StringCE(urlToProcess).SplitAt(urlToProcess.indexOf("?")), 2), urlToProcess = _b[0], varsStr = _b[1];
    }
    //if (urlToProcess.Matches("/").length == )
    var splitAtSlash_pos = __1.NumberCE(__1.StringCE(urlToProcess).IndexOf_X("/", 2)).IfN1Then(urlToProcess.length);
    _c = __read(__1.StringCE(urlToProcess).SplitAt(splitAtSlash_pos), 2), domainStr = _c[0], pathStr = _c[1];
    return [domainStr, pathStr, varsStr, hashStr];
}
exports.GetUrlParts = GetUrlParts;
function GetUrlPath(url, fromDomain) {
    if (fromDomain === void 0) { fromDomain = true; }
    /*let [pathStr, varsStr, hashStr] = GetUrlParts(url);
    if (fromDomain)
        pathStr = pathStr.SplitAt(pathStr.IndexOf_X("/", 2).IfN1Then(pathStr.length))[1];
    if (pathStr.endsWith("/"))
        pathStr = pathStr.substr(0, pathStr.length - 1);*/
    var _a = __read(GetUrlParts(url), 2), _ = _a[0], pathStr = _a[1];
    if (pathStr.endsWith("/"))
        pathStr = pathStr.slice(0, -1);
    return pathStr;
}
function GetUrlVars(url, allowQuestionMarkAsVarSep) {
    var _a, e_1, _b;
    if (allowQuestionMarkAsVarSep === void 0) { allowQuestionMarkAsVarSep = true; }
    var varSeparators = allowQuestionMarkAsVarSep ? ["&", "?"] : ["&"];
    var _c = __read(GetUrlParts(url), 3), _ = _c[0], __ = _c[1], varsStr = _c[2];
    var vars = {}; //{[key: string]: string};
    var parts = (_a = __1.StringCE(varsStr)).SplitByAny.apply(_a, __spread(varSeparators)).filter(function (a) { return a; });
    try {
        for (var parts_1 = __values(parts), parts_1_1 = parts_1.next(); !parts_1_1.done; parts_1_1 = parts_1.next()) {
            var part = parts_1_1.value;
            var _d = __read(__1.StringCE(part).SplitAt(part.indexOf("=")), 2), key = _d[0], value = _d[1];
            vars[key] = value;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (parts_1_1 && !parts_1_1.done && (_b = parts_1.return)) _b.call(parts_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return vars;
}
/*export function GetCurrentURL(fromAddressBar = false) {
    return fromAddressBar ? URL.Parse(GetCurrentURLString()) : URL.FromState(State("router"));
}*/
var VURL = /** @class */ (function () {
    function VURL(domain, pathNodes, queryVars, hash) {
        if (domain === void 0) { domain = ""; }
        if (pathNodes === void 0) { pathNodes = []; }
        if (queryVars === void 0) { queryVars = []; }
        if (hash === void 0) { hash = ""; }
        this.domain = domain;
        this.pathNodes = pathNodes;
        this.queryVars = queryVars;
        this.hash = hash;
    }
    VURL.Parse = function (urlStr, useCurrentDomainIfMissing, allowQuestionMarkAsVarSep) {
        var e_2, _a;
        if (useCurrentDomainIfMissing === void 0) { useCurrentDomainIfMissing = true; }
        if (allowQuestionMarkAsVarSep === void 0) { allowQuestionMarkAsVarSep = true; }
        if (useCurrentDomainIfMissing && !urlStr.startsWith("http"))
            urlStr = window.location.origin + (urlStr.startsWith("/") ? "" : "/") + urlStr;
        var _b = __read(GetUrlParts(urlStr), 4), domainStr = _b[0], pathStr = _b[1], varsStr = _b[2], hashStr = _b[3];
        var queryVarsMap = GetUrlVars(urlStr, allowQuestionMarkAsVarSep);
        var result = new VURL();
        result.domain = domainStr;
        result.pathNodes = pathStr.length ? pathStr.split("/") : [];
        try {
            for (var _c = __values(Object.keys(queryVarsMap)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                result.queryVars.push(new QueryVar(key, queryVarsMap[key]));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        result.hash = hashStr;
        return result;
    };
    VURL.FromLocationObject = function (location) {
        // todo: have this support all Location properties, not just those used by connected-react-router
        var result = VURL.Parse(location ? (location.pathname || "") + (location.search || "") + (location.hash || "") : "");
        //if (normalize) result = result.Normalized();
        return result;
    };
    // doesn't supply all the properties of a Location object, but supplies the most common
    VURL.prototype.ToLocationObject = function () {
        return {
            pathname: this.toString({ domain: false, path: true, queryVars: false, hash: false }),
            search: this.toString({ domain: false, pathStartSlash: false, path: false, queryVars: true, hash: false }),
            hash: this.toString({ domain: false, pathStartSlash: false, path: false, queryVars: false, hash: true }),
            key: "URLKey_" + Date.now(),
        };
    };
    VURL.prototype.DomainStr = function (withProtocol) {
        if (withProtocol === void 0) { withProtocol = true; }
        return withProtocol ? this.domain : this.DomainWithoutProtocol;
    };
    Object.defineProperty(VURL.prototype, "Protocol", {
        get: function () { return this.domain && __1.StringCE(this.domain).Contains("://") ? this.domain.substr(0, this.domain.indexOf("://")) : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VURL.prototype, "DomainWithoutProtocol", {
        get: function () { return this.domain && __1.StringCE(this.domain).Contains("://") ? this.domain.substr(this.domain.indexOf("://") + 3) : this.domain; },
        enumerable: true,
        configurable: true
    });
    VURL.prototype.PathStr = function (pathStartSlash) {
        var result = "";
        if (pathStartSlash) {
            result += "/";
        }
        // path-nodes
        if (this.pathNodes.length)
            result += this.pathNodes.join("/");
        return result;
    };
    Object.defineProperty(VURL.prototype, "QueryStr", {
        get: function () {
            var e_3, _a;
            var result = "";
            try {
                for (var _b = __values(this.queryVars.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), index = _d[0], queryVar = _d[1];
                    result += (index == 0 ? "?" : "&") + queryVar.name + "=" + queryVar.value;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    VURL.prototype.GetQueryVar = function (name) {
        var entry = this.queryVars.find(function (a) { return a.name == name; });
        return entry ? entry.value : undefined;
    };
    VURL.prototype.SetQueryVar = function (name, value) {
        var existingEntry = this.queryVars.find(function (a) { return a.name == name; });
        if (existingEntry) {
            existingEntry.value = value;
        }
        else {
            this.queryVars.push(new QueryVar(name, value));
        }
    };
    Object.defineProperty(VURL.prototype, "HashStr", {
        get: function () {
            if (!this.hash)
                return "";
            return "#" + this.hash;
        },
        enumerable: true,
        configurable: true
    });
    VURL.prototype.Clone = function () {
        return new VURL(this.domain, this.pathNodes.slice(), this.queryVars.map(function (a) { return a.Clone(); }), this.hash);
    };
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
    VURL.prototype.toString = function (options) {
        options = __1.E({ domain: true, domain_protocol: true, pathStartSlash: "auto", path: true, queryVars: true, hash: true }, options);
        var result = "";
        // domain
        if (options.domain)
            result += this.DomainStr(options.domain_protocol);
        //if (options.forceSlashAfterDomain || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash))
        var pathStartSlash_auto = result.length == 0 || (options.path && this.pathNodes.length) || (options.queryVars && this.queryVars.length) || (options.hash && this.hash);
        var pathStartSlash = options.pathStartSlash == true || (options.pathStartSlash == "auto" && pathStartSlash_auto);
        if (pathStartSlash) {
            result += "/";
        }
        if (options.path)
            result += this.PathStr(false);
        if (options.queryVars)
            result += this.QueryStr;
        if (options.hash)
            result += this.HashStr;
        __1.Assert(!result.startsWith("//"), "URL toString() result cannot start with \"//\". (it's probably an error)");
        return result;
    };
    VURL.prototype.toString_OptIn = function (options) {
        options = __1.E({ domain: false, path: false, queryVars: false, hash: false }, options);
        return this.toString(options);
    };
    return VURL;
}());
exports.VURL = VURL;
function AsPartial(obj) { return obj; }
var QueryVar = /** @class */ (function () {
    function QueryVar(name, value) {
        this.name = name;
        this.value = value;
    }
    QueryVar.prototype.Clone = function () {
        return new QueryVar(this.name, this.value);
    };
    return QueryVar;
}());
exports.QueryVar = QueryVar;
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
var Storage = /** @class */ (function () {
    function Storage() {
        this.resultUpdateCount = 0;
    }
    return Storage;
}());
exports.Storage = Storage;
exports.storages = {};
function GetStorageForCachedTransform(transformType, staticProps) {
    //let storageKey = transformType + "|" + JSON.stringify(staticProps);
    var storageKey = transformType + "|" + staticProps.join("|");
    var storage = exports.storages[storageKey] || (exports.storages[storageKey] = new Storage());
    return storage;
}
exports.GetStorageForCachedTransform = GetStorageForCachedTransform;
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
    var storage = GetStorageForCachedTransform(transformType, staticProps);
    if (!General_1.ShallowEquals(dynamicProps, storage.lastDynamicProps) || storage.resultUpdateCount == 0) {
        /*MaybeLog(a=>a.cacheUpdates,
            ()=>`Recalculating cache. @Type:${transformType} @StaticProps:${ToJSON(staticProps)} @DynamicProps:${ToJSON(dynamicProps)} @TransformFunc:${transformFunc}`);*/
        storage.lastDynamicProps = dynamicProps;
        storage.lastDebugInfo = {};
        storage.lastResult = transformFunc(storage.lastDebugInfo, staticProps, dynamicProps);
        storage.resultUpdateCount++;
    }
    return storage.lastResult;
}
exports.CachedTransform = CachedTransform;
function CombineDynamicPropMaps() {
    var e_1, _a;
    var maps = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        maps[_i] = arguments[_i];
    }
    var result = {};
    try {
        for (var _b = __values(maps.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), mapIndex = _d[0], map = _d[1];
            for (var key in map) {
                if (!map.hasOwnProperty(key))
                    continue;
                result[mapIndex + "_" + key] = map[key];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
exports.CombineDynamicPropMaps = CombineDynamicPropMaps;
//# sourceMappingURL=VCache.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/Utils/VectorStructs.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/Utils/VectorStructs.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var General_1 = __webpack_require__(/*! ./General */ "./node_modules/js-vextensions/Dist/Utils/General.js");
var __1 = __webpack_require__(/*! .. */ "./node_modules/js-vextensions/Dist/index.js");
function IsNullOrNaN(value) {
    return value === null || __1.IsNaN(value);
}
function IsVector2iShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y");
}
exports.IsVector2iShape = IsVector2iShape;
var Vector2i = /** @class */ (function () {
    function Vector2i() {
        var _a, _b, _c;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var x = 0, y = 0;
        if (typeof args[0] == "number")
            _a = __read(args, 2), x = _a[0], y = _a[1];
        else if (args[0] && args[0].x != null)
            _b = __read([args[0].x, args[0].y], 2), x = _b[0], y = _b[1];
        else if (args[0] && args[0].left != null)
            _c = __read([args[0].left, args[0].top], 2), x = _c[0], y = _c[1];
        __1.Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y), "Cannot initialize Vector2i's x/y to null/NaN. (if needed, initialize to undefined)");
        this.x = x;
        this.y = y;
    }
    Vector2i_1 = Vector2i;
    Object.defineProperty(Vector2i, "zero", {
        get: function () { return new Vector2i_1(0, 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2i, "one", {
        get: function () { return new Vector2i_1(1, 1); },
        enumerable: true,
        configurable: true
    });
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    Vector2i.prototype.toString = function () { return this.x + " " + this.y; };
    Vector2i.prototype.Equals = function (other) { return other && this.toString() == other.toString(); };
    Vector2i.prototype.NewX = function (xOrFunc) { return new Vector2i_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y); };
    Vector2i.prototype.NewY = function (yOrFunc) { return new Vector2i_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc); };
    Vector2i.prototype.Plus = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args, 2), x = _a[0], y = _a[1];
        return new Vector2i_1(this.x + x, this.y + y);
    };
    Vector2i.prototype.Minus = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector2iShape(args[0]) ? [args[0].x, args[0].y] : args, 2), x = _a[0], y = _a[1];
        return new Vector2i_1(this.x - x, this.y - y);
    };
    Vector2i.prototype.Times = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector2iShape(args[0]) ? [args[0].x, args[0].y] :
            args.length == 1 ? [args[0], args[0]] :
                args, 2), x = _a[0], y = _a[1];
        return new Vector2i_1(this.x * x, this.y * y);
    };
    Vector2i.prototype.DividedBy = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector2iShape(args[0]) ? [args[0].x, args[0].y] :
            args.length == 1 ? [args[0], args[0]] :
                args, 2), x = _a[0], y = _a[1];
        return new Vector2i_1(this.x / x, this.y / y);
    };
    Vector2i.prototype.DistanceTo = function (other) {
        return Math.sqrt(__1.NumberCE(other.x - this.x).ToPower(2) + __1.NumberCE(other.y - this.y).ToPower(2));
    };
    var Vector2i_1;
    Vector2i = Vector2i_1 = __decorate([
        General_1.Global
    ], Vector2i);
    return Vector2i;
}());
exports.Vector2i = Vector2i;
function IsVector3iShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("z");
}
exports.IsVector3iShape = IsVector3iShape;
var Vector3i = /** @class */ (function () {
    function Vector3i(x, y, z) {
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        if (z === void 0) { z = null; }
        __1.Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(z), "Cannot initialize Vector3i's x/y/z to null/NaN. (if needed, initialize to undefined)");
        this.x = x != null ? x : 0;
        this.y = y != null ? y : 0;
        this.z = z != null ? z : 0;
    }
    Vector3i_1 = Vector3i;
    Object.defineProperty(Vector3i, "zero", {
        get: function () { return new Vector3i_1(0, 0, 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector3i, "one", {
        get: function () { return new Vector3i_1(1, 1, 1); },
        enumerable: true,
        configurable: true
    });
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
        this.z = parseInt(strParts[2]);
    }
    //VDFSerialize() { return this.toString(); } //Swapped().toString(); }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    Vector3i.prototype.toString = function () { return this.x + " " + this.y + " " + this.z; };
    Vector3i.prototype.NewX = function (xOrFunc) { return new Vector3i_1(xOrFunc instanceof Function ? xOrFunc(this.x) : xOrFunc, this.y, this.z); };
    Vector3i.prototype.NewY = function (yOrFunc) { return new Vector3i_1(this.x, yOrFunc instanceof Function ? yOrFunc(this.y) : yOrFunc, this.z); };
    Vector3i.prototype.NewZ = function (zOrFunc) { return new Vector3i_1(this.x, this.y, zOrFunc instanceof Function ? zOrFunc(this.z) : zOrFunc); };
    Vector3i.prototype.Minus = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args, 3), x = _a[0], y = _a[1], z = _a[2];
        return new Vector3i_1(this.x - x, this.y - y, this.z - z);
    };
    Vector3i.prototype.Plus = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] : args, 3), x = _a[0], y = _a[1], z = _a[2];
        return new Vector3i_1(this.x + x, this.y + y, this.z + z);
    };
    Vector3i.prototype.Times = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(IsVector3iShape(args[0]) ? [args[0].x, args[0].y, args[0].z] :
            args.length == 1 ? [args[0], args[0], args[0]] :
                args, 3), x = _a[0], y = _a[1], z = _a[2];
        return new Vector3i_1(this.x * x, this.y * y, this.z * z);
    };
    var Vector3i_1;
    Vector3i = Vector3i_1 = __decorate([
        General_1.Global
    ], Vector3i);
    return Vector3i;
}());
exports.Vector3i = Vector3i;
function IsVRectShape(obj) {
    return obj.hasOwnProperty("x") && obj.hasOwnProperty("y") && obj.hasOwnProperty("width") && obj.hasOwnProperty("height");
}
exports.IsVRectShape = IsVRectShape;
var VRect = /** @class */ (function () {
    function VRect() {
        var _a, _b;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var x, y, width, height, y0IsBottom;
        if (args.length == 2 || args.length == 3)
            _a = __read([args[0].x, args[0].y, args[1].x, args[1].y, args[2]], 5), x = _a[0], y = _a[1], width = _a[2], height = _a[3], y0IsBottom = _a[4];
        else
            _b = __read(args, 5), x = _b[0], y = _b[1], width = _b[2], height = _b[3], y0IsBottom = _b[4];
        __1.Assert(!IsNullOrNaN(x) && !IsNullOrNaN(y) && !IsNullOrNaN(width) && !IsNullOrNaN(height), "Cannot initialize VRect's x/y/width/height to null/NaN. (if needed, initialize to undefined)");
        this.x = x;
        this.y = y;
        this.width = width != null ? width : 0;
        this.height = height != null ? height : 0;
        //this.y0IsBottom = y0IsBottom != null ? y0IsBottom : false;
        if (y0IsBottom)
            this.y0IsBottom = y0IsBottom;
    }
    VRect_1 = VRect;
    VRect.FromLTWH = function (rect, y0IsBottom) {
        if (y0IsBottom === void 0) { y0IsBottom = false; }
        return new VRect_1(rect.left, rect.top, rect.width, rect.height, y0IsBottom);
    };
    Object.defineProperty(VRect.prototype, "Left", {
        get: function () { return this.x; },
        set: function (val) {
            var oldRight = this.Right;
            this.x = val;
            this.Right = oldRight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Right", {
        get: function () { return this.x + this.width; },
        set: function (val) { this.width = val - this.x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Bottom", {
        get: function () { return this.y0IsBottom ? this.y : this.y + this.height; },
        set: function (val) {
            if (this.y0IsBottom) {
                var oldTop = this.Top;
                this.y = val;
                this.Top = oldTop;
            }
            else {
                this.height = val - this.y;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Top", {
        get: function () { return this.y0IsBottom ? this.y + this.height : this.y; },
        set: function (val) {
            if (this.y0IsBottom) {
                this.height = val - this.y;
            }
            else {
                var oldBottom = this.Bottom;
                this.y = val;
                this.Bottom = oldBottom;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Position", {
        get: function () { return new Vector2i(this.x, this.y); },
        set: function (val) {
            this.x = val.x;
            this.y = val.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Size", {
        get: function () { return new Vector2i(this.width, this.height); },
        set: function (val) {
            this.width = val.x;
            this.height = val.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VRect.prototype, "Center", {
        get: function () { return new Vector2i(this.x + (this.width / 2), this.y + (this.height / 2)); },
        set: function (val) {
            var offset = val.Minus(this.Center);
            this.Position = this.Position.Plus(offset);
        },
        enumerable: true,
        configurable: true
    });
    /*@_VDFDeserialize() Deserialize(node) {
        var strParts = node.primitiveValue.split(" ");
        this.x = parseInt(strParts[0]);
        this.y = parseInt(strParts[1]);
        this.width = parseInt(strParts[2]);
        this.height = parseInt(strParts[3]);
    }
    @_VDFSerialize() Serialize() { return new VDFNode(this.toString()); }*/
    VRect.prototype.toString = function () { return this.x + " " + this.y + " " + this.width + " " + this.height; };
    VRect.prototype.Equals = function (other) {
        if (!(other instanceof VRect_1))
            return false;
        return this.toString() == other.toString();
    };
    VRect.prototype.NewX = function (valOrFunc) {
        return __1.ObjectCE(this.Clone()).VSet({ x: valOrFunc instanceof Function ? valOrFunc(this.x) : valOrFunc });
    };
    VRect.prototype.NewLeft = function (valOrFunc) {
        return __1.ObjectCE(this.Clone()).VSet({ Left: valOrFunc instanceof Function ? valOrFunc(this.Left) : valOrFunc });
    };
    VRect.prototype.NewRight = function (valOrFunc) {
        return __1.ObjectCE(this.Clone()).VSet({ Right: valOrFunc instanceof Function ? valOrFunc(this.Right) : valOrFunc });
    };
    VRect.prototype.NewY = function (valOrFunc) {
        return __1.ObjectCE(this.Clone()).VSet({ y: valOrFunc instanceof Function ? valOrFunc(this.y) : valOrFunc });
    };
    VRect.prototype.NewBottom = function (valOrFunc) {
        return __1.ObjectCE(this.Clone()).VSet({ Bottom: valOrFunc instanceof Function ? valOrFunc(this.Bottom) : valOrFunc });
    };
    VRect.prototype.NewTop = function (valOrFunc) {
        return __1.ObjectCE(this.Clone()).VSet({ Top: valOrFunc instanceof Function ? valOrFunc(this.Top) : valOrFunc });
    };
    VRect.prototype.NewPosition = function (valOrFunc) {
        return __1.ObjectCE(this.Clone()).VSet({ Position: valOrFunc instanceof Function ? valOrFunc(this.Position) : valOrFunc });
    };
    VRect.prototype.NewWidth = function (valOrFunc) {
        return __1.ObjectCE(this.Clone()).VSet({ width: valOrFunc instanceof Function ? valOrFunc(this.width) : valOrFunc });
    };
    VRect.prototype.NewHeight = function (valOrFunc) {
        return __1.ObjectCE(this.Clone()).VSet({ height: valOrFunc instanceof Function ? valOrFunc(this.height) : valOrFunc });
    };
    VRect.prototype.NewSize = function (valOrFunc) {
        return __1.ObjectCE(this.Clone()).VSet({ Size: valOrFunc instanceof Function ? valOrFunc(this.Size) : valOrFunc });
    };
    VRect.prototype.Grow = function (amountOnEachSide) {
        return new VRect_1(this.x - amountOnEachSide, this.y - amountOnEachSide, this.width + (amountOnEachSide * 2), this.height + (amountOnEachSide * 2));
    };
    VRect.prototype.Encapsulating = function (rect) {
        var posX = Math.min(this.x, rect.x);
        var posY = Math.min(this.y, rect.y);
        return new VRect_1(posX, posY, Math.max(this.x + this.width, rect.x + rect.width) - posX, Math.max(this.y + this.height, rect.y + rect.height) - posY);
    };
    VRect.prototype.Encapsulate = function (rect) {
        var oldRight = this.x + this.width;
        var oldBottom = this.y + this.height;
        this.x = Math.min(this.x, rect.x);
        this.y = Math.min(this.y, rect.y);
        this.width = Math.max(oldRight, rect.x + rect.width) - this.x;
        this.height = Math.max(oldBottom, rect.y + rect.height) - this.y;
    };
    VRect.prototype.Intersects = function (other) {
        return this.Right > other.Left && this.Left < other.Right && this.Bottom > other.Top && this.Top < other.Bottom;
    };
    /** Returns true if rect would intersect the other, when wrapped to the 2/8 potential "other-sides" of given frame/backdrop. (-x, +x, -y, +y, -x -y, -x +y, +x -y, +x +y)
     * (note that it does the checks "stupidly", ie. just checking all possible switch-side variants, without checking if "switched side" version is actually on or even near the actual frame/backdrop) */
    VRect.prototype.Intersects_Advanced = function (other, options) {
        var variantsToCompare = [this];
        if (options.xWrappedBy) {
            variantsToCompare.push.apply(variantsToCompare, __spread(__1.ArrayCE(variantsToCompare).SelectMany(function (base) {
                return [base, base.NewX(function (x) { return x - options.xWrappedBy; }), base.NewX(function (x) { return x + options.xWrappedBy; })];
            })));
        }
        if (options.yWrappedBy) {
            variantsToCompare.push.apply(variantsToCompare, __spread(__1.ArrayCE(variantsToCompare).SelectMany(function (base) {
                return [base, base.NewY(function (y) { return y - options.yWrappedBy; }), base.NewY(function (y) { return y + options.yWrappedBy; })];
            })));
        }
        return __1.ArrayCE(variantsToCompare).Any(function (a) { return a.Intersects(other); });
    };
    VRect.prototype.Clone = function () {
        return new VRect_1(this.x, this.y, this.width, this.height);
    };
    var VRect_1;
    VRect = VRect_1 = __decorate([
        General_1.Global
    ], VRect);
    return VRect;
}());
exports.VRect = VRect;
var VBounds = /** @class */ (function () {
    function VBounds(position, size) {
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
    VBounds.prototype.toString = function () { return this.position.x + " " + this.position.y + " " + this.position.z + "|" + this.size.x + " " + this.size.y + " " + this.size.z; };
    VBounds = __decorate([
        General_1.Global
    ], VBounds);
    return VBounds;
}());
exports.VBounds = VBounds;
//# sourceMappingURL=VectorStructs.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/js-vextensions/Dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
//import "./ClassExtensions";
//export * from "./ClassExtensions/@ApplyCode";
//export * from "./ClassExtensions/@ApplyTypes"; // if desired, user project should import directly (from Source folder)
__export(__webpack_require__(/*! ./ClassExtensions/CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js"));
__export(__webpack_require__(/*! ./ClassExtensions/CE_Element */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Element.js"));
__export(__webpack_require__(/*! ./ClassExtensions/CE_Number */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Number.js"));
__export(__webpack_require__(/*! ./ClassExtensions/CE_Object */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js"));
__export(__webpack_require__(/*! ./ClassExtensions/CE_Others */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js"));
__export(__webpack_require__(/*! ./ClassExtensions/CE_String */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_String.js"));
__export(__webpack_require__(/*! ./ClassExtensions/CE_Auto */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Auto.js"));
__export(__webpack_require__(/*! ./JSVE */ "./node_modules/js-vextensions/Dist/JSVE.js"));
__export(__webpack_require__(/*! ./Utils/General */ "./node_modules/js-vextensions/Dist/Utils/General.js"));
__export(__webpack_require__(/*! ./Utils/Changes */ "./node_modules/js-vextensions/Dist/Utils/Changes.js"));
__export(__webpack_require__(/*! ./Utils/Assert */ "./node_modules/js-vextensions/Dist/Utils/Assert.js"));
__export(__webpack_require__(/*! ./Utils/Timers */ "./node_modules/js-vextensions/Dist/Utils/Timers.js"));
__export(__webpack_require__(/*! ./Utils/Types */ "./node_modules/js-vextensions/Dist/Utils/Types.js"));
__export(__webpack_require__(/*! ./Utils/VectorStructs */ "./node_modules/js-vextensions/Dist/Utils/VectorStructs.js"));
__export(__webpack_require__(/*! ./Utils/URLs */ "./node_modules/js-vextensions/Dist/Utils/URLs.js"));
__export(__webpack_require__(/*! ./Utils/VCache */ "./node_modules/js-vextensions/Dist/Utils/VCache.js"));
__export(__webpack_require__(/*! ./Utils/Bridge */ "./node_modules/js-vextensions/Dist/Utils/Bridge.js"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/js-vextensions/Helpers/@ApplyCECode.js":
/*!*************************************************************!*\
  !*** ./node_modules/js-vextensions/Helpers/@ApplyCECode.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @ts-check

const {TransferPrototypeProps} = __webpack_require__(/*! ../Dist */ "./node_modules/js-vextensions/Dist/index.js");
const {ArrayCE_funcs} = __webpack_require__(/*! ../Dist/ClassExtensions/CE_Array */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Array.js");
const {ElementCE_funcs} = __webpack_require__(/*! ../Dist/ClassExtensions/CE_Element */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Element.js");
const {NumberCE_funcs} = __webpack_require__(/*! ../Dist/ClassExtensions/CE_Number */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Number.js");
const {ObjectCE_funcs} = __webpack_require__(/*! ../Dist/ClassExtensions/CE_Object */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Object.js");
const {DateCE_funcs, FunctionCE_funcs} = __webpack_require__(/*! ../Dist/ClassExtensions/CE_Others */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_Others.js");
const {StringCE_funcs} = __webpack_require__(/*! ../Dist/ClassExtensions/CE_String */ "./node_modules/js-vextensions/Dist/ClassExtensions/CE_String.js");

function ClassExtensions_ApplyCode() {
	TransferPrototypeProps(Array.prototype, ArrayCE_funcs, {}, {configurable: true, enumerable: false});
	if (typeof Element != "undefined") {
		TransferPrototypeProps(Element.prototype, ElementCE_funcs, {}, {configurable: true, enumerable: false});
	}
	TransferPrototypeProps(Number.prototype, NumberCE_funcs, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(Object.prototype, ObjectCE_funcs, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(Function.prototype, FunctionCE_funcs, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(Date.prototype, DateCE_funcs, {}, {configurable: true, enumerable: false});
	//TransferPrototypeProps(Error.prototype, ErrorCE_funcs, {}, {configurable: true, enumerable: false});
	TransferPrototypeProps(String.prototype, StringCE_funcs, {}, {configurable: true, enumerable: false});
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

/***/ "ffi":
/*!**********************!*\
  !*** external "ffi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ffi");

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

/***/ }),

/***/ "ref":
/*!**********************!*\
  !*** external "ref" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ref");

/***/ }),

/***/ "ref-struct":
/*!*****************************!*\
  !*** external "ref-struct" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ref-struct");

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