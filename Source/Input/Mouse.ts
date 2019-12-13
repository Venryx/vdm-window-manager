import ffi from "ffi";
import ref from "ref";
import {IgnoreNextKeyPress, IgnoreNextKeyRelease, keysDown} from "./HotkeyManager";
import Struct from "ref-struct";
import {extraKeys, MouseButton} from "./ExtraKeys";
import { GetForegroundWindowHandle } from "../General/Windows";
import { Vector2i } from "js-vextensions";
import keycode from "keycode";

declare var Buffer;
var IntPtr = ref.refType("int");
var PointStruct = Struct({
	x: ffi.types.long,
	y: ffi.types.long,
});
var RectStruct = Struct({
	left: ffi.types.long,
	top: ffi.types.long,
	right: ffi.types.long,
	bottom: ffi.types.long
});
var RectPtr = ref.refType(RectStruct) as any;

var user32 = ffi.Library("user32", {
	ClipCursor: ["bool", [RectStruct]],
	//ClipCursor: ["bool", [RectPtr]],
	mouse_event: ["void", ["int32", "int32", "int32", "int32", "int32"]],
	GetCursorPos: ["bool", [ref.refType(PointStruct)]],
	SetCursorPos: ["long", ["long", "long"]],
	//SendMessageA: ["int64", ["int32", "uint32", "int32", "int32"]]
	SendMessageA: ['int32', ['long', 'int32', 'long', 'int32']],
	//WindowFromPoint: ["int", [PointStruct]],
});

export function GetForegroundWindowText() {
	 var buffer = new Buffer(256);
	 buffer.type = ref.types.CString;
    var handle = user32.GetForegroundWindow();
    let length = user32.GetWindowTextA(handle, buffer, 256);
    return buffer.toString().substr(0, length);
}

enum MouseEventFlags {
	Move = 0x00000001,
	Absolute = 0x00008000,
	Left_Down = 0x00000002,
	Left_Up = 0x00000004,
	Right_Down = 0x00000008,
	Right_Up = 0x00000010,
	Middle_Down = 0x00000020,
	Middle_Up = 0x00000040,
}

let screenWidth = 1920;
let screenHeight = 1080;

export function GetMousePos() {
	/*let buffer = GetCursorPos_resultBuffer;
	var p = user32.GetCursorPos(buffer);
	return new Vector2i(buffer[0] + (buffer[1] * 256), buffer[4] + (buffer[5] * 256));*/
	let mousePosBuffer = ref.alloc(PointStruct);
	var success = user32.GetCursorPos(mousePosBuffer);
	let mousePos = mousePosBuffer["deref"]() as {x: number, y: number};
	return new Vector2i(mousePos.x, mousePos.y);
}

export function MoveMouse(x: number, y: number) {
	let x_final = (((x|0) / screenWidth) * 65535)|0;
	let y_final = (((y|0) / screenHeight) * 65535)|0;
	/*let currentMousePos = robot.getMousePos();
	let x_final = ((((x|0) / screenWidth) * 65535)|0) - currentMousePos.x;
	let y_final = ((((y|0) / screenHeight) * 65535)|0) - currentMousePos.y;*/

	//user32.SetCursorPos(x_final, y_final);

	// todo: add way of having mouse-move event ignored
	//for (var i = 0; i < 2; i++) {
	user32.mouse_event(MouseEventFlags.Absolute | MouseEventFlags.Move, x_final, y_final, 0, 0);
	//user32.mouse_event(MouseEventFlags.Move, x_final, y_final, 0, 0);

	//Log(`Moved...${x_final},${y_final}`);
}

/*let mouseButtonEventFlags = {
	[MouseButton.Left]: MouseEventFlags.Left_Down | MouseEventFlags.Left_Up,
	[MouseButton.Middle]: MouseEventFlags.Middle_Down | MouseEventFlags.Middle_Up,
	[MouseButton.Right]: MouseEventFlags.Right_Down | MouseEventFlags.Right_Up,
}*/
const BM_CLICK = 0x00F5;

var WMessages = {
	/*WM_LBUTTONDOWN : 0x0201,
	Left_Up : 0x0202,*/
	Left_Down : 0x0201,
	Left_Up : 0x0202,
	WM_LBUTTONDBLCLK : 0x203,
	/*WM_RBUTTONDOWN : 0x204,
	WM_RBUTTONUP : 0x205,*/
	Right_Down : 0x204,
	Right_Up : 0x205,
	WM_RBUTTONDBLCLK : 0x206,
	WM_GETTEXT : 0x000D,
	WM_GETTEXTLENGTH : 0x000E,
	WM_SETTEXT : 0x000C,
	WM_SETFOCUS : 0x0007,
	WM_KEYUP : 0x0101,
	WM_KEYDOWN : 0x0100,
	WM_PASTE : 0x0302,
};

function MAKELPARAM(p, p_2) {
	return ((p_2 << 16) | (p & 0xFFFF));
}

export function ClickMouse(mouseButton = MouseButton.Left, position?: Vector2i, ctrlModifierAllowed = true, shiftModifierAllowed = true, altModifierAllowed = false) {
	position = position || GetMousePos();
	//let positionSupplied = x != null || y != null;

	/*let x_final = (((x|0) / screenWidth) * 65535)|0;
	let y_final = (((y|0) / screenHeight) * 65535)|0;*/
	/*let currentMousePos = robot.getMousePos();
	let x_final = ((((x|0) / screenWidth) * 65535)|0) - currentMousePos.x;
	let y_final = ((((y|0) / screenHeight) * 65535)|0) - currentMousePos.y;*/

	/*IgnoreNextKeyPress(mouseButton);
	IgnoreNextKeyRelease(mouseButton);*/
	/*let flags = MouseEventFlags[MouseButton[mouseButton] + "_Down"] | MouseEventFlags[MouseButton[mouseButton] + "_Up"];
	if (positionSupplied) {
		flags |= MouseEventFlags.Absolute | MouseEventFlags.Move;
	}
	user32.mouse_event(flags, x_final, y_final, 0, 0);*/
	/*if (positionSupplied) {
		user32.mouse_event(MouseEventFlags.ABSOLUTE | MouseEventFlags.MOVE, x_final, y_final, 0, 0);
		//user32.mouse_event(MouseEventFlags.MOVE, x_final, y_final, 0, 0);
	}
	user32.mouse_event(mouseButtonEventFlags[mouseButton], 0, 0, 0, 0);*/
	//user32.mouse_event(MouseEventFlags[MouseButton[mouseButton] + "_Down"] | (positionSupplied ? MouseEventFlags.Absolute | MouseEventFlags.Move : 0), x_final, y_final, 0, 0);
	//user32.mouse_event(MouseEventFlags[MouseButton[mouseButton] + "_Up"] | (positionSupplied ? MouseEventFlags.Absolute | MouseEventFlags.Move : 0), x_final, y_final, 0, 0);
	/*user32.mouse_event(MouseEventFlags[MouseButton[mouseButton] + "_Down"], 0, 0, 0, 0);
	user32.mouse_event(MouseEventFlags[MouseButton[mouseButton] + "_Up"], 0, 0, 0, 0);*/

	let handle = GetForegroundWindowHandle();
	if (handle) {
		//user32.SendMessageA(handle, BM_CLICK, 0, 0);
		//var clickPoint = positionSupplied ? MAKELPARAM(x, y) : null;
		let clickPoint = MAKELPARAM(position.x, position.y);
		let modifierFlags = GetModifierFlags(ctrlModifierAllowed, shiftModifierAllowed, altModifierAllowed);
		//user32.SendMessageA(handle, WMessages.Left_Down | WMessages.Left_Up, modifierFlags, clickPoint);
		user32.SendMessageA(handle, WMessages[MouseButton[mouseButton] + "_Down"], modifierFlags, clickPoint);
		user32.SendMessageA(handle, WMessages[MouseButton[mouseButton] + "_Up"], modifierFlags, clickPoint);
	}

	//Log(`Clicked...${x_final},${y_final}`);
}

export function MouseDown(mouseButton = MouseButton.Left, position?: Vector2i, ctrlModifierAllowed = true, shiftModifierAllowed = true, altModifierAllowed = false) {
	position = position || GetMousePos();
	let handle = GetForegroundWindowHandle();
	if (handle) {
		let clickPoint = MAKELPARAM(position.x, position.y);
		let modifierFlags = GetModifierFlags(ctrlModifierAllowed, shiftModifierAllowed, altModifierAllowed);
		user32.SendMessageA(handle, WMessages[MouseButton[mouseButton] + "_Down"], modifierFlags, clickPoint);
	}
}
export function MouseUp(mouseButton = MouseButton.Left, position?: Vector2i, ctrlModifierAllowed = true, shiftModifierAllowed = true, altModifierAllowed = false) {
	position = position || GetMousePos();
	let handle = GetForegroundWindowHandle();
	if (handle) {
		let clickPoint = MAKELPARAM(position.x, position.y);
		let modifierFlags = GetModifierFlags(ctrlModifierAllowed, shiftModifierAllowed, altModifierAllowed);
		user32.SendMessageA(handle, WMessages[MouseButton[mouseButton] + "_Up"], modifierFlags, clickPoint);
	}
}



const MK_CONTROL = 0x0008;
const MK_SHIFT = 0x0004;
function GetModifierFlags(ctrlModifierAllowed = true, shiftModifierAllowed = true, altModifierAllowed = false) {
	let result = 0;
	if (ctrlModifierAllowed && keysDown[extraKeys.leftControl]) result |= MK_CONTROL;
	if (shiftModifierAllowed && keysDown[extraKeys.leftShift]) result |= MK_SHIFT;
	//if (altModifierAllowed && keysDown[extraKeys.leftAlt]) result |= keycode.codes.alt;
	return result;
}

/*async function SetMousePos(x: number, y: number) {
	LockMousePos(x, y);
	UnlockMousePos();
}
function LockMousePos(x: number, y: number) {
	var rect = new RectStruct();
	rect.left = x;
	rect.top = y;
	rect.right = x + 1;
	rect.bottom = y + 1;
	var bool = user32.ClipCursor(rect);
}
function UnlockMousePos() {
	var rect = new RectStruct();
	rect.left = -99999;
	rect.top = -99999;
	rect.right = 99999;
	rect.bottom = 99999;
	var bool = user32.ClipCursor(rect);

	/*let rectPtr = new Buffer();
	rectPtr.type = RectPtr;
	rectPtr.set(rect);*/
	/*var rectPtr = ref.alloc(RectPtr, null, rect);
	var bool = user32.ClipCursor(rectPtr);*#/

	/*var buf = new Buffer(4);
	buf.writeInt32LE(0, 0)
	buf["type"] = ref.types.int;
	var bool2 = user32.ClipCursor(buf);*#/

	/*var rectPtr2 = ref.alloc(RectPtr, 0);
	var bool2 = user32.ClipCursor(rectPtr2);*#/
}*/