import ioHook from "iohook";
import {extraKeys} from "../Input/ExtraKeys";
import {GetWindowHandles, GetWindowText, GetWindowRect, GetForegroundWindowText, user32} from "../General/Windows";
import {VRect} from "js-vextensions";
import {User32} from "win32-api";

// If using iohook turns out insufficient (eg. not being able to capture keypresses for a desired hotkey), try using the Windows RegisterHotKey function:
// * https://stackoverflow.com/questions/14799035/node-webkit-winapi/58314436#58314436
// * https://www.fluxbytes.com/csharp/how-to-register-a-global-hotkey-for-your-application-in-c
// If that doesn't work, I guess you'll have the use the node-ffi hook approach, even though I think it causes more overhead/delay. (see HotkeyManager.ts)

ioHook.useRawcode(true); // use rawcodes for shortcuts/hotkeys

// logging
// ==========

/*ioHook.on('keydown', event => {
	console.log(event); // { type: 'mousemove', x: 700, y: 400 }
});*/

// hotkeys
// ==========

let windowTitlesToIgnore = [
	// never visible (as real window)
	"Program Manager",
	// not really visible (at least usually -- and for me)
	"Microsoft Text Input Application", "Backup and Sync", "Settings", "Microsoft Edge",
];

export class WindowState {
	constructor(initialData: Partial<WindowState>) {
		this.Extend(initialData);
	}
	rect: VRect;
	text: string;
}
let windowStates = {} as {[key: string]: WindowState};

// store states
ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadEnd], (keys) => {
	windowStates = {};

	let windows = GetWindowHandles();
	windows.forEach(handle=> {
		if (!user32.IsWindowVisible(handle)) return;
		
		let text = GetWindowText(handle);
		let rect = GetWindowRect(handle);
		if (text.length == 0) return;
		if (windowTitlesToIgnore.Contains(text)) return;
		//Log(`Found window. @Handle(${handle}) @Title(${text}) @Rect(${rect})`);

		let state = new WindowState({rect, text});
		windowStates[handle] = state;
	});
	Log(`States stored for ${windowStates.Pairs().length} windows.`);
});
// show stored info
ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadDown], (keys) => {
	for (let pair of windowStates.Pairs()) {
		Log(`	Window state: @Handle(${pair.key}) @Title(${pair.value.text}) @Rect(${pair.value.rect})`);
	}
});
// restore states
ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadPageDown], (keys) => {
	for (let pair of windowStates.Pairs()) {
		
	}
	Log(`States restored for ${windowStates.Pairs().length} windows.`);
});

// init
// ==========

// register and start hook
ioHook.start(false);
Log("Added listeners");