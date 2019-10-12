import { User32, DTypes, DModel } from 'win32-api';
import ffi from "ffi";
import ref, {alloc} from "ref";
import {VRect, GetTreeNodesInObjTree, ToJSON} from 'js-vextensions';

// make-so any parameter or return type set to W.HWND ("HANDLE"), gets replaced with "int"
// For more info, see: https://github.com/waitingsong/node-win32-api/issues/16#issuecomment-540887760
/*let replacements = [
	{key: "HWND", oldValue: null, newValue: "int"},
];
replacements.forEach(a=> {
	a.oldValue = W[a.key];
	W[a.key] = a.newValue;
});*/
let replacements = [
	//{oldValue: "HANDLE", newValue: "int32"},
	{oldValue: "uint64*", newValue: "int32"}, // I thought the lib source-code specified "HANDLE", but apparently it gets converted into "uint64*" at some point (perhaps in gen_api_opts)

	//{oldValue: "uint16*", newValue: "string"},
];
for (let pair of User32.apiDef.Pairs()) {
	let definitionArray = pair.value;
	//Log(`Name(${pair.key}) Returns(${pair.value[0]}) Arguments(${pair.value[1]})`);

	let nodes = GetTreeNodesInObjTree(definitionArray);
	for (let node of nodes) {
		for (let replacement of replacements) {
			if (node.Value === replacement.oldValue) {
				node.Value = replacement.newValue;
				//Log(`Replacing ${replacement.oldValue} with ${replacement.newValue}... @Path(${node.PathStr})`);
			}
		}
	}
	//Log(`New Name(${pair.key}) Returns(${pair.value[0]}) Arguments(${pair.value[1]})`);
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

export const user32 = User32.load() as User32.Win32Fns;

// create extension of user32, which uses type "number" for each param that was of type "Buffer"
/*declare type ConvertModelFuncParams<T> = {
	//[K in keyof T]: T[K] extends (...args: any) => any ? (...args: ConvertFuncParams<T[K]>) => any : T[K];
	[K in keyof T]: T[K] extends (...args: any) => any ? ConvertFuncParams<T[K]> : T[K];
};
type ConvertFuncParams<
	T extends (...args: any) => any
> =
	//T extends (...args: (infer P)[]) => any ? (P extends Buffer ? number : P)[] : never;
	T extends (...args: (infer P)[]) => any ? (...args: (P extends Buffer ? number : P)[]) => any : never;
//type Test1 = ()=>Buffer;
/*type Test1 = typeof user32.GetWindowTextW;
type Test2 = ConvertFuncParams<Test1>;*#/
const user32_numbers = user32 as any as ConvertModelFuncParams<typeof user32>;
user32.GetWindowTextW();
user32_numbers.GetWindowTextW();*/

// add Typescript overloads for the functions which were modified to send/receive number-handles instead of Buffer-handles
/*declare module "win32-api/dist/lib/user32/api" {
	export interface Win32Fns {
		GetWindowTextW(hWnd: number, lpString: Buffer, nMaxCount: number): number
	}
}
user32.GetWindowTextW();*/

// add Typescript overloads for the functions which were modified to send/receive number-handles instead of Buffer-handles
/*declare module "win32-api/dist/lib/user32/api" {
	export namespace M {
		export type HWND = number;
	}
}*/
type RealBuffer = Buffer;
declare module "win32-api/node_modules/win32-def/dist/lib/win-model/common" {
	//type HWND = number;
	//type Buffer = number;
	type Buffer = number | RealBuffer;
}
//user32.GetWindowTextW();











//var voidPtr = ref.refType(ref.types.void);
//var stringPtr = ref.refType(ref.types.CString);

/*declare global {
	interface Buffer { Int(): number; }
	interface Number { Buf(): Buffer; }
}
Object.prototype["Int"] = function() {
	if (this instanceof Buffer) return ref.address(this); // convert
	//if (typeof this == "number")
	return this; // handle is already number -- just return
}
Object.prototype["Buf"] = function() {
	//if (typeof this == "number") return ...; // convert (don't know how)
	//if (typeof this == "number")
	return this; // handle is already number (matching modified definition-array) -- just return
}*/

var user32_extra = new ffi.Library("user32", {
	//EnumWindows: ['bool', [voidPtr, 'int32']],
	//GetForegroundWindow: ["int32", []],
   GetWindowTextA: ["int32", ["int32", "string", "int32"]],
   //GetWindowTextA : ['long', ['long', stringPtr, 'long']]
	//GetWindowTextW: ["int32", ["int32", ref.refType("string"), "int32"]],
	GetWindowTextLengthW: ["int32", ["int32"]],
	GetWindowRect: ['bool', ['int32', "pointer"]],
});

export class WindowInfo {
	handle: number;
	lParam: number;
}
export function GetWindowHandles() {
	let result = [] as number[];
	let onFoundWindow = ffi.Callback('bool', ['long', 'int32'], (handle: number, lParam: number)=> {
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

export function GetForegroundWindowHandle() {
	//return user32.GetForegroundWindow().Int();
	return user32.GetForegroundWindow() as number;
	//return user32.GetForegroundWindow() as any as number;
}
export function GetForegroundWindowText() {
	var handle = GetForegroundWindowHandle();
	return GetWindowText(handle);
}

// Note: This function can cause an info-less crash, if: 1) using the W variant, 2) the buffer length is in a certain range [~8-280], 3) the program is launched using "node --inspect"
export function GetWindowText(handle: number) {
	//let length = user32_extra.GetWindowTextLengthW(handle as any);
	var buffer = new Buffer(256);
	//buffer.type = ref.types.CString;
	//let length = user32.GetWindowTextW(user32.GetForegroundWindow(), buffer, 256);
	//let length = user32_extra.GetWindowTextA(handle, buffer, 256);
	//let length = user32.GetWindowTextA(handle, buffer, 256);
	//let length = user32.GetWindowTextW(handle.Buf(), buffer, 256);
	let length = user32.GetWindowTextW(handle, buffer, 256);
	//let length = user32.GetWindowTextW(handle as any, buffer, 256);
	//return ref.readCString(buffer, 0);
	//return buffer.toString().substr(0, length as any);
	return buffer.toString('ucs2').replace(/\0+$/, '');
}

export function GetWindowRect(handle: number) {
	//var rect = new rectStruct();
	//var rectPointer = ref.alloc(rectStructPointer);
	var rectPointer: Buffer = Buffer.alloc(4 * 4);
	//Log("Address: " + ref.address(handle));
	//var success = user32_extra.GetWindowRect(handle, rect);
	//var success = user32_extra.GetWindowRect(ref.address(handle), repbuffer);
	var success = user32_extra.GetWindowRect(handle, rectPointer);
	if (!success) return null;

	//let rect = ref.get(rectPointer, 0, rectStructPointer).deref();
	//let rect = ref.get(rectPointer.buffer, 0, rectStructPointer).deref();
	//var repbuffer = new Buffer(4 * 4);

	let rect = RectPointerToRect(rectPointer);
	//Log("Rect: " + ToJSON(rect) + ";" + success);
	return RectToVRect(rect);
}

function RectPointerToRect(rectPointer: Buffer) {
	let rect = {} as any;
	rect.left = rectPointer.readUInt32LE(0);
	rect.top = rectPointer.readUInt32LE(4);
	rect.right = rectPointer.readUInt32LE(8);
	rect.bottom = rectPointer.readUInt32LE(12);
	return rect;
}
function RectToVRect(rect: {left, top, right, bottom}) {
	return new VRect(rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top);
}

export enum SuspendState {
	Sleep,
}

var powrprof = ffi.Library('powrprof.dll', {
    SetSuspendState: ['int', ['int', 'int', 'int']]
});
export function SetSuspendState(state: SuspendState) {
	if (state == SuspendState.Sleep) {
		powrprof.SetSuspendState(0, 0, 0);
	}
}