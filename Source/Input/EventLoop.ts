import ffi from "ffi-napi";
import ref from "ref-napi";
import { keyboardHook_callback, mouseHook_callback } from "./HotkeyManager";

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

var user32 = new ffi.Library("user32", {
	GetMessageA: ["bool", ["pointer", intPtr, "uint", "uint"]], // code; message, windowHandle, messageFilterMin, messageFilterMax
	PeekMessageA: ["bool", ["pointer", intPtr, "uint", "uint", "uint"]], // code; message, windowHandle, messageFilterMin, messageFilterMax, flags (0: keep message, 1: remove)
});

var eventCheckTimer;
// windows event-checker timer
export function StartEventLoop() {
	eventCheckTimer = setInterval(()=> {
		// keep callbacks from being disposed
		keyboardHook_callback;
		mouseHook_callback;

		/*
		//var message = user32.GetMessageA(outString, null, 0, 0);
		var outString = ref.alloc('string'); // allocate a 4-byte (32-bit) chunk for the output data
		var result = user32.PeekMessageA(outString, null, WM_KEYDOWN, WM_KEYUP, 0);
		console.log(`Result: ${result} outString: ${outString.join(",")}`);*/

		/*var text = "";
		var outString = g.Buffer("", `ucs2`); // allocate a 4-byte (32-bit) chunk for the output data
		//var outString = ref.alloc('string'); // allocate a 4-byte (32-bit) chunk for the output data
		//var outString = ref.alloc('string'); // allocate a 4-byte (32-bit) chunk for the output data
		var done;
		while (!(done = user32.PeekMessageA(outString, null, 0, 0, 1))) {
			text += outString.join(",");
		}
		console.log(`Text: ${text}`);*/

		user32.PeekMessageA(null, null, 0, 0, 0); // this causes the [keyboard/mouse]-hook callbacks to actually get called
	}, 1);
}
export function StopEventLoop() {
	clearInterval(eventCheckTimer);
}
/*async function StartEventLoop() {
	while (!shuttingDown) {
		user32.PeekMessageA(null, null, 0, 0, 0);
		await SleepAsync(1);
	}
}
StartEventLoop();*/