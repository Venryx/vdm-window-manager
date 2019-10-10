import robot from "robotjs";
import keycode from "keycode";
import {IgnoreNextKeyRelease, IgnoreNextKeyPress, WM_SYSKEYUP, WM_SYSKEYDOWN, keysDown} from "./HotkeyManager";
import ffi from "ffi";
import {extraKeys} from "./ExtraKeys";
import { GetForegroundWindowHandle } from "../General/Windows";
import ref from "ref";
import StructType from "ref-struct";
import {SleepAsync, Assert} from "js-vextensions";
var ArrayType = require("ref-array");
var arch = require("os").arch();

var intPtr = ref.refType("int");

var Input = StructType({
	"type": "int",
	"???": "int", // for some reason, the wScan value is only recognized as the wScan value when we add this filler slot
	"wVK": "short",
	"wScan": "short",
	"dwFlags": "int",
	"time": "int",
	"dwExtraInfo": "int64"
	//"dwExtraInfo": "int"
});
var InputPtr = ref.refType(Input);

var user32 = ffi.Library("user32", {
   keybd_event: ["void", ["int32", "int32", "int32", "int32"]],
	SendMessageA: ["int32", ["long", "int32", "long", "int32"]],
	PostMessageA: ["int32", ["long", "int32", "long", "int32"]],
	SendInput: ["int", ["int", Input, "int"]],
	//SendInput: ["int", ["uint", ArrayType(keyboardInputPtr, 10), "int"]],
	//MapVirtualKeyEx: ["uint", ["uint", "uint", intPtr]],

	// external use
   GetKeyState: ["short", ["int"]], // not really needed, since we track each key ourselves
});

// external use
// ==========

export function GetKeyState(keyCode: number) {
	return user32.GetKeyState(keyCode);
}

// general
// ==========

enum keybd_event_flags {
	KEYEVENTF_EXTENDEDKEY = 0x0001, // key-down flag (kind of)
	KEYEVENTF_KEYUP = 0x0002, // key-up flag
}
export enum SendMessage_Flags {
	WM_KEYDOWN = 0x0100,
	WM_KEYUP = 0x0101,
	WM_CHAR = 0x0102,
}

export function KeyToggle(keyCode: number, type = "down" as "down" | "up") {
	/*if (keyCode == extraKeys.leftControl) user32.PostMessageA(GetForegroundWindowHandle(), messageType, keyCode, 0);
	else if (keyCode == extraKeys.leftShift) user32.PostMessageA(GetForegroundWindowHandle(), messageType, keyCode, 0);
	else*/

	/*if (keyCode == extraKeys.leftControl) return void robot.keyToggle("control", type);
	if (keyCode == extraKeys.leftShift) return void robot.keyToggle("shift", type);
	if (keyCode == extraKeys.leftAlt) return void robot.keyToggle("alt", type);*/

	/*if (keyCode == keycode.codes.ctrl || keyCode == extraKeys.leftShift || keyCode == extraKeys.leftAlt) {
		user32.keybd_event(keyCode, 0, type == "down" ? 0 : keybd_event_flags.KEYEVENTF_KEYUP, 0);
		return;
	}*/

	/*if (keyCode == extraKeys.leftControl) keyCode = keycode.codes.ctrl;
	else if (keyCode == extraKeys.leftControl) keyCode = keycode.codes.shift;
	else if (keyCode == extraKeys.leftAlt) keyCode = keycode.codes.alt;*/

	let messageType = type == "down" ? SendMessage_Flags.WM_KEYDOWN : SendMessage_Flags.WM_KEYUP;
	//if (keyCode == extraKeys.leftControl || keyCode == extraKeys.leftShift || keyCode == extraKeys.leftAlt) {
	if (keyCode == extraKeys.leftAlt) {
		messageType = type == "down" ? WM_SYSKEYDOWN : WM_SYSKEYUP;
	}

	user32.PostMessageA(GetForegroundWindowHandle(), messageType, keyCode, 0);
}
export function KeyTap(keyCode: number, includeCharEvent = false) {
	/*IgnoreNextKeyPress(keyCode);
	IgnoreNextKeyRelease(keyCode);
	robot.keyTap(keyName);*/
	KeyToggle(keyCode, "down");
	/*if (includeCharEvent) {
		user32.PostMessageA(GetForegroundWindowHandle(), SendMessage_Flags.WM_CHAR, keyCode, 0x00390001);
	}*/
	KeyToggle(keyCode, "up");
}

const INPUT_KEYBOARD = 1;

const KEYEVENTF_EXTENDEDKEY = 0x0001;
const KEYEVENTF_KEYUP       = 0x0002;
const KEYEVENTF_UNICODE     = 0x0004;
const KEYEVENTF_SCANCODE    = 0x0008;

const MAPVK_VK_TO_VSC = 0;

//var EntryArray = ArrayType(keyboardInput)
export function KeyToggle2(keyCode: number, type = "down" as "down" | "up", asScanCode = false) {
	let entry = new Input();
	entry.type = INPUT_KEYBOARD;
	entry.time = 0;
	entry.dwExtraInfo = 0;

	// (virtual) key-code approach (default)
	if (!asScanCode) {
		entry.dwFlags = type == "down" ? 0 : KEYEVENTF_KEYUP;
		entry.wVK = keyCode;
		//info.wScan = 0x0200;
		entry.wScan = 0;
	}
	// scan-code approach
	else {
		//keyCode = 16 + (keyCode - keycode.codes.a);
		//let scanCode = user32.MapVirtualKeyEx(keyCode, MAPVK_VK_TO_VSC);
		let scanCode = ConvertKeyCodeToScanCode(keyCode);
		let isExtendedKey = (scanCode & extendedKeyPrefix) == extendedKeyPrefix;

		entry.dwFlags = type == "down" ? KEYEVENTF_SCANCODE : KEYEVENTF_SCANCODE | KEYEVENTF_KEYUP;
		if (isExtendedKey) {
			entry.dwFlags = entry.dwFlags | KEYEVENTF_EXTENDEDKEY;
		}
		entry.wVK = 0;
		entry.wScan = isExtendedKey ? scanCode - extendedKeyPrefix : scanCode;
	}

	/*var array = new EntryArray(1) // by length 
	array[0] = entry;*/
	//var r = user32.SendInput(1, entry.ref(), 28);
	let result = user32.SendInput(1, entry, arch === "x64" ? 40 : 28);
	//console.log(result);
}
/*export async function KeyTap2(keyCode: number, asScanCode = false, delay = null as number) {
	KeyToggle2(keyCode, "down", asScanCode);
	if (delay != null) {
   	await SleepAsync(delay);
	}
	KeyToggle2(keyCode, "up", asScanCode);
}*/
export function KeyTap2(keyCode: number, asScanCode = false, delay = null as number): Promise<any> | null {
	if (delay != null) {
		return (async ()=> {
			KeyToggle2(keyCode, "down", asScanCode);
			await SleepAsync(delay);
			KeyToggle2(keyCode, "up", asScanCode);
		})();
	}

	KeyToggle2(keyCode, "down", asScanCode);
	KeyToggle2(keyCode, "up", asScanCode);
}

export function KeyToggle3(keyCode: number, type = "down" as "down" | "up") {
	let messageType = type == "down" ? SendMessage_Flags.WM_KEYDOWN : SendMessage_Flags.WM_KEYUP;
	//if (keyCode == extraKeys.leftControl || keyCode == extraKeys.leftShift || keyCode == extraKeys.leftAlt) {
	if (keyCode == extraKeys.leftAlt) {
		messageType = type == "down" ? WM_SYSKEYDOWN : WM_SYSKEYUP;
	}

	if (type == "down") {
		IgnoreNextKeyPress(keyCode);
		user32.keybd_event(keyCode, 0, 0, 0);
		//user32.keybd_event(keyCode, 0, keybd_event_flags.KEYEVENTF_EXTENDEDKEY, 0);

		user32.PostMessageA(GetForegroundWindowHandle(), SendMessage_Flags.WM_KEYDOWN, keyCode, 0);
	} else {
		IgnoreNextKeyRelease(keyCode);
		user32.keybd_event(keyCode, 0, keybd_event_flags.KEYEVENTF_KEYUP, 0);
		//user32.keybd_event(keyCode, 0, KEYEVENTF_EXTENDEDKEY | KEYEVENTF_KEYUP, 0);

		user32.PostMessageA(GetForegroundWindowHandle(), SendMessage_Flags.WM_KEYUP, keyCode, 0);
	}
}
export function KeyTap3(keyCode: number) {
	KeyToggle3(keyCode, "down");
	KeyToggle3(keyCode, "up");
}

let extendedKeyPrefix = 0xe000;

let c = keycode.codes;
// see here for list: https://qb64.org/wiki/Scancodes, https://www.qbasic.net/en/reference/general/scan-codes.htm
export function ConvertKeyCodeToScanCode(keyCode: number) {
	let specialKeys = {
		[c.tab]: 15, [c.enter]: 28, [c.home]: extendedKeyPrefix | 71, [c.space]: 57,
		[c["caps lock"]]: 58, [c["page up"]]: 49, [c["page down"]]: 51,
		[c.f1]: 59, [c.f2]: 60, [c.f3]: 61, [c.f4]: 62, [c.f5]: 63, [c.f6]: 64, [c.f7]: 65, [c.f8]: 66, [c.f9]: 67, [c.f10]: 68, [c.f11]: 69, [c.f12]: 70,
		// modifier keys
		[c.ctrl]: 29, [extraKeys.leftControl]: 29, [extraKeys.rightControl]: extendedKeyPrefix | 29,
		[c.shift]: 42, [extraKeys.leftShift]: 42, [extraKeys.rightShift]: extendedKeyPrefix | 42,
		[c.alt]: 56, [extraKeys.leftAlt]: 56, [extraKeys.rightAlt]: extendedKeyPrefix | 56,
	};
	if (specialKeys[keyCode]) {
		return specialKeys[keyCode];
	}

	let keys = "**1234567890-=**qwertyuiop[]**asdfghjkl;'`*\\zxcvbnm,./".split(""); // scan-code for a char equals its index in this list
	let keyChar = keycode.names[keyCode] || String.fromCharCode(keyCode).toLowerCase();
	
	let result = keys.indexOf(keyChar);
	Assert(result != -1, `Could not find scan-code for key ${keyCode} (${keycode.names[keyCode]}).`)
	return result;
}