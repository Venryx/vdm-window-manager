import ffi from "ffi-napi";
import ref from "ref-napi";
import {extraKeys} from "./ExtraKeys";
import keycode from "keycode";
import { GetStackTraceStr, Vector2, Assert } from "js-vextensions";
import {ConvertByteArrayToInt} from "../General/General";
import { StartEventLoop, StopEventLoop } from "./EventLoop";

/*function ToBinaryText(text){
   return new g.Buffer(text, `ucs2`).toString(`binary`);
}
var userResponse = user32.MessageBoxW(0, ToBinaryText(`I am Node.JS!`), ToBinaryText(`Hello, World!`), 1);*/

var intPtr = ref.refType("int");
var intPtr_variantForHook = ref.refType({
	size: (ref as any).sizeof.int64 * 2,
  	indirection: 1,
	/*get: (buffer, offset)=>buffer,
	set: (buffer, offset, value)=> {
		var val = value.toString();
		return ref.writeInt64(buffer, offset || 0, val);
	}*/
} as any);

//var hookCallbackSignature = ffi.Function("int", ['int', "int", intPtr]);
var user32 = new ffi.Library("user32", {
   //SetWindowsHookExA: [intPtr, ["int", hookCallbackSignature, intPtr, "int"]],
   SetWindowsHookExA: [intPtr, ["int", "pointer", intPtr, "uint"]], // hookID; hookType, callback, moduleHandle, threadID
   UnhookWindowsHookEx: ["bool", [intPtr]],
   CallNextHookEx: [intPtr, [intPtr, "int", "int", "int"]],
	MessageBoxW: ["int32", ["int32", "string", "string", "int32"]],
   GetAsyncKeyState: ["int", ["int"]],
});
var kernel32 = new ffi.Library("kernel32", {
   GetModuleHandleA: [intPtr, ["string"]],
	LoadLibraryA: [intPtr, ["string"]],
	GetCurrentThreadId: ["uint", []],
});

// hook types
// ==========

const WH_KEYBOARD = 2; // keyboard
const WH_KEYBOARD_LL = 13; // keyboard-low-level
const WH_MOUSE = 7;
const WH_MOUSE_LL = 14;

// event types
// ==========

export const WM_KEYDOWN = 0x0100; // key-down
export const WM_KEYUP = 0x0101; // key-up
export const WM_SYSKEYDOWN = 0x0104; // key-down (for alt-key)
export const WM_SYSKEYUP = 0x0105; // key-up (for alt-key)

const WM_MOUSE_MOVE = 512;
const WM_MOUSE_LEFT_BUTTON_DOWN = 513;
const WM_MOUSE_LEFT_BUTTON_UP = 514;
const WM_MOUSE_MIDDLE_BUTTON_DOWN = 519;
const WM_MOUSE_MIDDLE_BUTTON_UP = 520;
const WM_MOUSEWHEEL = 522;
const WM_MOUSE_RIGHT_BUTTON_DOWN = 516;
const WM_MOUSE_RIGHT_BUTTON_UP = 517;
const WM_MOUSE_OTHER_BUTTON_DOWN = 523;
const WM_MOUSE_OTHER_BUTTON_UP = 524;

export var keyboardHook_callback = ffi.Callback("int", ["int", "int", intPtr_variantForHook],
	function(nCode, eventType, data) {
		var captured = false;
		//console.log(`nCode: ${nCode} eventType: ${eventType} data: ${data.join(",")}`);
		if (nCode >= 0 && (eventType == WM_KEYDOWN || eventType == WM_SYSKEYDOWN)) {
			captured = OnKeyPressed(data[0], data);
		} else if (nCode >= 0 && (eventType == WM_KEYUP || WM_SYSKEYDOWN)) {
			captured = OnKeyReleased(data[0], data);
		}

		/*if (eventType == SendMessage_Flags.WM_CHAR) {
			captured = true;
		}*/

		/*let isAltDown = (user32.GetAsyncKeyState(extraKeys.leftAlt) & 0x8000) != 0;
		let wasAltDown = keysDown[extraKeys.leftAlt];
		if (isAltDown != wasAltDown) {
			if (isAltDown) {
				OnKeyPressed(extraKeys.leftAlt, []);
			} else {
				OnKeyReleased(extraKeys.leftAlt, []);
			}
		}*/

		// if event handled in application, do not hand off to other listeners
		if (captured) return -1;

		return user32.CallNextHookEx(keyboard_hookID, nCode, eventType, data); // call the next hook
	});

let simpleMouseButtonEvents = {
	[WM_MOUSE_LEFT_BUTTON_DOWN]: [extraKeys.mouseLeft, "down"], [WM_MOUSE_LEFT_BUTTON_UP]: [extraKeys.mouseLeft, "up"],
	[WM_MOUSE_MIDDLE_BUTTON_DOWN]: [extraKeys.mouseMiddle, "down"], [WM_MOUSE_MIDDLE_BUTTON_UP]: [extraKeys.mouseMiddle, "up"],
	[WM_MOUSE_RIGHT_BUTTON_DOWN]: [extraKeys.mouseRight, "down"], [WM_MOUSE_RIGHT_BUTTON_UP]: [extraKeys.mouseRight, "up"],
};

//let mousePosition = new Vector2i(NaN, NaN);
let mousePosition = new Vector2(0, 0);
export function GetMousePos() {
	return mousePosition;
}

export type MouseMoveListener = (mousePos: Vector2)=>void;
let mouseMoveListeners = [] as MouseMoveListener[];
export function AddMouseMoveListener(func: MouseMoveListener) {
	mouseMoveListeners.push(func);
}

export var mouseHook_callback = ffi.Callback("int", ["int", "int", intPtr_variantForHook],
	function(nCode, eventType, data: number[]) {
		var captured = false;
		//console.log(`nCode: ${nCode} eventType: ${eventType} data: ${data.join(",")}`);

		let newMousePos = new Vector2(ConvertByteArrayToInt(data.slice(0, 4)), ConvertByteArrayToInt(data.slice(4, 8)));
		if (!newMousePos.Equals(mousePosition)) {
			mousePosition = newMousePos;
			for (let listener of mouseMoveListeners) {
				listener(mousePosition);
			}
		}

		if (simpleMouseButtonEvents[eventType]) {
			let [keyCode, type] = simpleMouseButtonEvents[eventType];
			captured = (type == "down" ? OnKeyPressed : OnKeyReleased)(keyCode, []);
		} else if (eventType == WM_MOUSE_OTHER_BUTTON_DOWN || eventType == WM_MOUSE_OTHER_BUTTON_UP) {
			let mouseButton = data[10];
			let keyForMouseButton = {2: extraKeys.mouseForward, 1: extraKeys.mouseBackward}[mouseButton];
			captured = (eventType == WM_MOUSE_OTHER_BUTTON_DOWN ? OnKeyPressed : OnKeyReleased)(keyForMouseButton, []);
		} else if (eventType == WM_MOUSEWHEEL) {
			let keyCode = data[10] == 120 ? extraKeys.mouseWheelUp : extraKeys.mouseWheelDown;
			captured = OnKeyPressed(keyCode, []);
			captured = OnKeyReleased(keyCode, []) || captured;
		}

		// if event handled in application, do not hand off to other listeners
		if (captured) return -1;

		return user32.CallNextHookEx(mouse_hookID, nCode, eventType, data); // call the next hook
	});

var shuttingDown = false;

var keyboard_hookID;
var mouse_hookID;

export function AddHook() {
	/*var moduleHandle = kernel32.GetModuleHandleA(`C:\\Program Files\\nodejs\\node.exe`);
	var moduleHandle = kernel32.GetModuleHandleA(`C:\\Windows\\System32\\user32.dll`);
	var moduleHandle = kernel32.LoadLibraryA("user32.dll");
	//_hookID = user32.SetWindowsHookExA(WH_KEYBOARD_LL, hookCallback, moduleHandle, 0);*/
	keyboard_hookID = user32.SetWindowsHookExA(WH_KEYBOARD_LL, keyboardHook_callback, null, 0);
	if (keyboard_hookID.isNull()) {
		/*var kernel32 = ffi.DynamicLibrary("kernel32");
		var glePtr = kernel32.get("GetLastError")
		var getLastError = ffi.ForeignFunction(glePtr, "uint", []);
		console.log(getLastError());*/
		console.log("Failed to add keyboard hook.");
		return;
	}

	mouse_hookID = user32.SetWindowsHookExA(WH_MOUSE_LL, mouseHook_callback, null, 0);
	if (mouse_hookID.isNull()) return void console.log("Failed to add mouse hook.");

	console.log(`Added keyboard and mouse hook.`);
}
export function RemoveHooks() {
	StopEventLoop();
	shuttingDown = true;

	var keyboardHook_result = user32.UnhookWindowsHookEx(keyboard_hookID);
	console.log(`Removal of keyboard-hook ${keyboardHook_result ? "succeeded" : "failed"}. (code: ${keyboardHook_result})`);
	var mouseHook_result = user32.UnhookWindowsHookEx(mouse_hookID);
	console.log(`Removal of mouse-hook ${mouseHook_result ? "succeeded" : "failed"}. (code: ${mouseHook_result})`);
}

export function IsKeyDown(keyCode: number) {
	return keysDown[keyCode];
}
export function IsKeyDown_External(keyCode: number) {
	return (user32.GetAsyncKeyState(keyCode) & 0x8000) != 0;
}

let keys_waitTillDownListeners = {} as {[key: string]: Function[]};
export function WaitTillKeyIsDown(keyCode: number) {
	return new Promise((resolve, reject)=> {
		keys_waitTillDownListeners[keyCode] = (keys_waitTillDownListeners[keyCode] || []).concat(resolve);
	});
}
let keys_waitTillUpListeners = {} as {[key: string]: Function[]};
//export function WaitTillKeyIsUp(keyCode: number, extraMSWait: number = null) {
export function WaitTillKeyIsUp(keyCode: number) {
	return new Promise((resolve, reject)=> {
		keys_waitTillUpListeners[keyCode] = (keys_waitTillUpListeners[keyCode] || []).concat(resolve);
		/*keys_waitTillUpListeners[keyCode] = (keys_waitTillUpListeners[keyCode] || []).concat(()=> {
			if (extraMSWait != null) {
				setTimeout(resolve, extraMSWait)
			} else {
				resolve();
			}
		});*/
	});
}

// hotkey system
// ==========

let modifierKeys = [
	extraKeys.leftControl, extraKeys.rightControl, keycode.codes.ctrl,
	extraKeys.leftShift, extraKeys.rightShift, keycode.codes.shift,
	extraKeys.leftAlt, extraKeys.rightAlt, keycode.codes.alt,
];

let keyAlts = {
	13: 108, // enter -> numpad-enter
};

// maybe temp
/*export var ignoreKeyEvents_depth = 0;
export function IgnoreKeyEvents() {
	ignoreKeyEvents_depth++;
}
export function UnignoreKeyEvents() {
	ignoreKeyEvents_depth--;
}*/
/*export var ignoreMouseEvents = false;
export function SetIgnoreMouseEvents(newVal: boolean) {
	ignoreMouseEvents = newVal;
}*/
export var keyPressesToIgnore = {};
export function IgnoreNextKeyPress(keyCode: number) {
	keyPressesToIgnore[keyCode] = (keyPressesToIgnore[keyCode]|0) + 1;
}
export var keyReleasesToIgnore = {};
export function IgnoreNextKeyRelease(keyCode: number) {
	keyReleasesToIgnore[keyCode] = (keyReleasesToIgnore[keyCode]|0) + 1;
}

export var logKeys = false;
export function SetLogKeys(newVal: boolean) {
	logKeys = newVal;
}

export function GetKeyName(keyCode: number) {
	let extraKeys_matchingPairs = extraKeys.Pairs().filter(a=>a.value == keyCode);
	if (extraKeys_matchingPairs.length) return extraKeys_matchingPairs[0].key;
	if (keycode.names[keyCode]) return keycode.names[keyCode];
	return null;
}

export let keysDown = {};
let keyDownCaptures_captureUpEventToo = {};
export function OnKeyPressed(keyCode: number, fullData: number[]) {
	//if (ignoreKeyEvents_depth > 0) return false; // maybe temp
	if (keyPressesToIgnore[keyCode] && keyPressesToIgnore[keyCode] > 0) {
		keyPressesToIgnore[keyCode]--;
		return false;
	}

	let isAlternateKey = fullData[8] == 1;
	if (isAlternateKey && keyCode in keyAlts) {
		keyCode = keyAlts[keyCode];
	}
	let isModifierKey = modifierKeys.Contains(keyCode);

	let keyAlreadyDown = keysDown[keyCode];
	keysDown[keyCode] = true;
	if (logKeys) {
		let key = String.fromCharCode(keyCode).toLowerCase();
		//console.log(`KeyDown: ${keyCode} (${key}) (${fullData.join(",")})`);
		console.log(`KeyDown: ${keyCode} (${key}) keys: ${keysDown.Pairs().filter(a=>a.value).map(a=>a.key).join(",")} AD:${keyAlreadyDown}`);
	}
	if (keys_waitTillDownListeners[keyCode]) {
		keys_waitTillDownListeners[keyCode].forEach(listener=>listener());
		delete keys_waitTillDownListeners[keyCode];
	}

	// if key was already held down
	if (keyAlreadyDown) {
		// if downing event was captured, capture this repeat as well
		if (keyDownCaptures_captureUpEventToo[keyCode]) return true;
		return false;
	}

	let hotkeysToTrigger = hotkeys.filter(hotkey=> {
		if (hotkey.ignoreUnless && hotkey.ignoreUnless() !== true) return false;

		let pressedKeyInHotkey = hotkey.onDown && hotkey.keys.Contains(keyCode);
		let countsAsKeyPress = (!isModifierKey || hotkey.countModifiersAsPress);
		let finalKeyPress = hotkey.keys.All(a=>keysDown[a]) && countsAsKeyPress;
		return pressedKeyInHotkey && finalKeyPress;
	});

	var captured = false;
	for (let hotkey of hotkeysToTrigger.OrderByDescending(a=>a.priority) as Hotkey[]) {
		let capture = hotkey.onDown();
		if (capture == null || capture instanceof Promise) { // a Promise result is equivalent to null (func with no immediate/explicit return value)
			capture = hotkey.capture;
		} else if (capture == false) {
			capture = CaptureType.Pass;
		} else if (capture == true) {
			capture = CaptureType.Capture;
		}

		if (capture == CaptureType.Capture || capture == CaptureType.CaptureAndBreak) {
			captured = true;
			keyDownCaptures_captureUpEventToo[keyCode] = true;
		}

		let funcStr = "";
		//let funcStr = ` Func:${hotkey.onDown}`;
		Log(`Running hotkey: ${hotkey.keys.join(",")} @KeyNames(${hotkey.keys.map(code=>GetKeyName(code)).join(",")}) @Capturing:${capture}${funcStr}`);

		if (capture == CaptureType.CaptureAndBreak) break;
	}
	return captured;
}
export function OnKeyReleased(keyCode: number, fullData: number[]) {
	//if (ignoreKeyEvents_depth > 0) return false; // maybe temp
	if (keyReleasesToIgnore[keyCode] && keyReleasesToIgnore[keyCode] > 0) {
		keyReleasesToIgnore[keyCode]--;
		return false;
	}

	let isAlternateKey = fullData[8] == 129;
	if (isAlternateKey && keyCode in keyAlts) {
		keyCode = keyAlts[keyCode];
	}

	var captured = false;
	let key = String.fromCharCode(keyCode).toLowerCase();
	keysDown[keyCode] = false;
	if (logKeys) {
		//console.log(`KeyUp: ${keyCode} (${key}) (${fullData.join(",")})`);
		console.log(`KeyUp: ${keyCode} (${key}) keys: ${keysDown.Pairs().filter(a=>a.value).map(a=>a.key).join(",")}`);
	}

	if (keys_waitTillUpListeners[keyCode]) {
		keys_waitTillUpListeners[keyCode].forEach(listener=>listener());
		delete keys_waitTillUpListeners[keyCode];
	}

	if (keyDownCaptures_captureUpEventToo[keyCode]) {
		delete keyDownCaptures_captureUpEventToo[keyCode];
		captured = true;
	}

	return captured;
}

// hotkey api
// ==========

export enum CaptureType {
	Pass,
	Capture,
	CaptureAndBreak,
}

export class Hotkey {
	constructor(options: Partial<Hotkey>) {
		this.Extend(options);
		Assert(this.keys instanceof Array, "Must supply a keys array.");
	}
	keys: number[];
	//keysUp: number[];
	countModifiersAsPress = false;
	ignoreUnless?: ()=>boolean;
	capture = CaptureType.Capture; // the default value, for if hotkey-func does not return true (for capture) or false (for do-not-capture)
	priority = 1; // default value; higher means runs earlier

	onDown: ()=>CaptureType | boolean | void | Promise<any>;
	//onUp: Function; // todo
}

let hotkeys = [] as Hotkey[];
export function AddHotkey(options: Partial<Hotkey>) {
	let hotkey = new Hotkey(options);
	hotkeys.push(hotkey);
}