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
/*! exports provided: WindowInfo, GetWindowHandles, GetForegroundWindowHandle, GetForegroundWindowText, GetWindowText, GetWindowRect, SuspendState, SetSuspendState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowInfo", function() { return WindowInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWindowHandles", function() { return GetWindowHandles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetForegroundWindowHandle", function() { return GetForegroundWindowHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetForegroundWindowText", function() { return GetForegroundWindowText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWindowText", function() { return GetWindowText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetWindowRect", function() { return GetWindowRect; });
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




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
  for (var _iterator = win32_api__WEBPACK_IMPORTED_MODULE_0__["User32"].apiDef.Pairs()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
/*Buffer.prototype.Int = function() {
    return ref.address(this);
}
Number.prototype.Buf = function() {
    //return ref.alloc(ref.types.int, this);
    //return ref.alloc(ref.types.int32, this);
    /*let valBuf = ref.alloc(ref.types.long, this);
    return valBuf;*/
//let valBuf = ref.alloc(ref.types.int32, this);

/*let a = Uint8Array.from([1,2,3,7,4,8]);
Object.setPrototypeOf(a, Buffer.prototype);
return a as Buffer;*/

/*let valBuf = ref.alloc(ref.types.uint64, this);
ref.writePointer(valBuf, 0, ref.alloc(ref.types.int, this));
let size = user32.GetForegroundWindow().byteLength
//ref.writePointer(valBuf, 0, );
return valBuf;*#/

var buf = ref.alloc('pointer');
ref.writePointer(buf, 0, Buffer.from([1,2,3,4,5,6])); // pointer or memory address
return buf;
}*/

/*export function Swap(val: Buffer): number;
export function Swap(val: number): Buffer;
export function Swap(val: number | Buffer) {
    if (val instanceof Buffer) return ref.address(val);
    //return ref.alloc(ref.types.int32, )
    return ref.alloc(ref.types.int, val);
}*/

Object.prototype["Int"] = function () {
  if (this instanceof Buffer) return ref__WEBPACK_IMPORTED_MODULE_2___default.a.address(this); // convert
  //if (typeof this == "number")

  return this; // handle is already number -- just return
};

Object.prototype["Buf"] = function () {
  //if (typeof this == "number") return ...; // convert (don't know how)
  //if (typeof this == "number")
  return this; // handle is already number (matching modified definition-array) -- just return
};

var user32_extra = new ffi__WEBPACK_IMPORTED_MODULE_1___default.a.Library("user32", {
  //EnumWindows: ['bool', [voidPtr, 'int32']],
  //GetForegroundWindow: ["int32", []],
  GetWindowTextA: ["int32", ["int32", "string", "int32"]],
  //GetWindowTextA : ['long', ['long', stringPtr, 'long']]
  //GetWindowTextW: ["int32", ["int32", ref.refType("string"), "int32"]],
  GetWindowTextLengthW: ["int32", ["int32"]],
  GetWindowRect: ['bool', ['int32', "pointer"]]
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
  return user32.GetForegroundWindow().Int(); //return user32.GetForegroundWindow() as any as number;
}
function GetForegroundWindowText() {
  var handle = GetForegroundWindowHandle();
  return GetWindowText(handle);
} // Note: This function can cause an info-less crash, if: 1) using the W variant, 2) the buffer length is in a certain range [~8-280], 3) the program is launched using "node --inspect"

function GetWindowText(handle) {
  //let length = user32_extra.GetWindowTextLengthW(handle as any);
  var buffer = new Buffer(256); //buffer.type = ref.types.CString;
  //let length = user32.GetWindowTextW(user32.GetForegroundWindow(), buffer, 256);
  //let length = user32_extra.GetWindowTextA(handle, buffer, 256);
  //let length = user32.GetWindowTextA(handle, buffer, 256);

  var length = user32.GetWindowTextW(handle.Buf(), buffer, 256); //let length = user32.GetWindowTextW(handle as any, buffer, 256);
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
/* harmony import */ var _General_Windows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../General/Windows */ "./Source/General/Windows.ts");


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
  //console.log('Shortcut called with keys: ', keys);
  //Log("Got text: " + GetForegroundWindowText());
  var windows = Object(_General_Windows__WEBPACK_IMPORTED_MODULE_2__["GetWindowHandles"])();
  windows.forEach(function (handle) {
    //let text = null, rect = null;
    var text = Object(_General_Windows__WEBPACK_IMPORTED_MODULE_2__["GetWindowText"])(handle);
    var rect = Object(_General_Windows__WEBPACK_IMPORTED_MODULE_2__["GetWindowRect"])(handle);
    console.log("Found window. @Handle(".concat(handle, ") @Title(").concat(text, ") @Rect(").concat(rect, ")"));
    /*let text = GetWindowText(handle.Int());
    let rect = GetWindowRect(handle.Int());*/
    //console.log(`Found window. @Handle(${handle.Int()}) @Title(${text}) @Rect(${rect})`);

    /*var buf = ref.alloc('pointer');
    ref.writePointer(buf, 0, handle); // pointer or memory address*/

    /*let a = Uint8Array.from([1,2,3,7,4,8]) as Buffer;
    Object.setPrototypeOf(a, Buffer.prototype);
    a.type = "pointer";
    
    console.log(`Found window. @Old(${handle.Int()}) @New(${handle.Int().Buf().Int()}) @Test(${a.address()})`);*/
  });
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