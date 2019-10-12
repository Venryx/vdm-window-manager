import ioHook from "iohook";
import {extraKeys} from "../Input/ExtraKeys";
import {GetWindowHandles, GetWindowText, GetWindowRect, GetForegroundWindowText, user32, user32_extra, WINDOWPLACEMENT, WindowPlacement, GetWindowPlacement, SetWindowPlacement, SW_SHOWMINIMIZED, SW_RESTORE, SW_SHOW, SW_HIDE, SW_MINIMIZE, SW_SHOWNA, SW_SHOWMINNOACTIVE} from "../General/Windows";
import {VRect, ToJSON, E} from "js-vextensions";

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
	// not needing placement-restoring, for other reasons
	"Venryx Overlay",
];

export class WindowState {
	constructor(initialData: Partial<WindowState>) {
		this.Extend(initialData);
	}
	rect: VRect;
	text: string;
	placement: WindowPlacement;
}
let windowStates = {} as {[key: string]: WindowState};

// store states
ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadEnd], (keys) => {
	windowStates = {};

	let windows = GetWindowHandles();
	windows.forEach(handle=> {
		if (!user32.IsWindowVisible(handle)) return;
		
		let text = GetWindowText(handle);
		if (text.length == 0) return;
		if (windowTitlesToIgnore.Contains(text)) return;

		let rect = GetWindowRect(handle);
		let placement = GetWindowPlacement(handle);
		//Log(`Found window. @Handle(${handle}) @Title(${text}) @Rect(${rect})`);

		let state = new WindowState({rect, text, placement});
		windowStates[handle] = state;
	});
	Log(`States stored for ${windowStates.Pairs().length} windows.`);
});
// show stored info
ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadDown], (keys) => {
	for (let {key: handle, value: state} of windowStates.Pairs()) {
		Log(`Window state: @Handle(${handle}) @Title(${state.text}) @Rect(${state.rect}) @Placement(${ToJSON(state.placement)})`);
	}
});
// restore states
ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadPageDown], (keys) => {
	let restoredWindows = 0;
	for (let {keyNum: handle, value: state} of windowStates.Pairs()) {
		let placement = GetWindowPlacement(handle);
		// if placement is exactly the same as before, don't do anything
		if (ToJSON(placement) == ToJSON(state.placement)) continue;

		// in case the window just changed screens, have taskbar entry moved to match (by minimizing/restoring then the reverse)
		/*if (state.placement.showCmd == SW_SHOWMINIMIZED) {
			SetWindowPlacement(handle, state.placement); // apply while minimized, since more reliable
			user32.ShowWindow(handle, SW_RESTORE);
			//user32.ShowWindow(handle, SW_MINIMIZE);
			user32.ShowWindow(handle, state.placement.showCmd);
		} else {
			user32.ShowWindow(handle, SW_MINIMIZE);
			SetWindowPlacement(handle, E(state.placement, {showCmd: SW_SHOWMINIMIZED})); // apply while minimized, since more reliable
			SetWindowPlacement(handle, state.placement); // apply original showCmd, now that on correct screen
			user32.ShowWindow(handle, state.placement.showCmd);
		}*/

		//user32.ShowWindow(handle, SW_SHOWMINNOACTIVE); // first, set show-state to "minimized", since maximized windows otherwise refuse to change screen
		user32.ShowWindow(handle, SW_HIDE); // first, hide window (this seems to make the following steps get applied more quickly graphically)
		user32.ShowWindow(handle, SW_RESTORE); // set show-state to "restored", since maximized windows otherwise refuse to change screen
		//SetWindowPlacement(handle, state.placement); // now that guaranteed on correct screen, apply original show-state
		//SetWindowPlacement(handle, E(state.placement, {showCmd: SW_RESTORE})); // apply old-placement, except have show-state be "restored", since most reliable for getting on correct screen
		SetWindowPlacement(handle, state.placement); // now that in "moveable" state, apply old-placement
		//user32.ShowWindow(handle, state.placement.showCmd);

		// in case the window just changed screens, have taskbar entry moved to match
		/*user32.ShowWindow(handle, SW_HIDE);
		user32.ShowWindow(handle, SW_SHOWNA);*/
		//user32.ShowWindow(handle, SW_SHOWNA);

		restoredWindows++;
	}
	Log(`States restored for ${restoredWindows} windows.`);
});

// init
// ==========

// register and start hook
ioHook.start(false);
Log("Added listeners");