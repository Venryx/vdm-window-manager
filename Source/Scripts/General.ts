import ioHook from "iohook";
import {extraKeys} from "../Input/ExtraKeys";
import {GetWindowHandles, GetWindowText, GetWindowRect, GetForegroundWindowText, user32, user32_extra, WINDOWPLACEMENT, WindowPlacement, GetWindowPlacement, SetWindowPlacement, SW_SHOWMINIMIZED, SW_RESTORE, SW_SHOW, SW_HIDE, SW_MINIMIZE, SW_SHOWNA, SW_SHOWMINNOACTIVE, WPF_ASYNCWINDOWPLACEMENT, SW_SHOWNOACTIVATE, SW_MAXIMIZE, SW_SHOWNORMAL} from "../General/Windows";
import {VRect, ToJSON, E, Clone} from "js-vextensions";

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

export function StoreStates() {
	windowStates = {};

	let windows = GetWindowHandles();
	windows.forEach(handle => {
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
}
export function ShowStoredStates() {
	for (let {key: handle, value: state} of windowStates.Pairs()) {
		Log(`Window state: @Handle(${handle}) @Title(${state.text}) @Rect(${state.rect}) @Placement(${ToJSON(state.placement)})`);
	}
}
export function RestoreStates() {
	let restoredWindows = 0;
	for (let {keyNum: handle, value: state} of windowStates.Pairs()) {
		let placement = GetWindowPlacement(handle);
		// if placement is exactly the same as before, don't do anything
		if (ToJSON(placement) == ToJSON(state.placement)) continue;

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
		let finalPlacement = Clone(state.placement);
		finalPlacement.flags = WPF_ASYNCWINDOWPLACEMENT;

		if (finalPlacement.showCmd == SW_MAXIMIZE) {
			// first, set show-state to "restored", since maximized windows otherwise refuse to change screen
			let restorePlacement = E(finalPlacement, {showCmd: SW_SHOWNOACTIVATE});
			SetWindowPlacement(handle, restorePlacement);

			finalPlacement.showCmd = SW_MAXIMIZE;
		} else if (finalPlacement.showCmd == SW_MINIMIZE || finalPlacement.showCmd == SW_SHOWMINIMIZED) {
			finalPlacement.showCmd = SW_SHOWMINNOACTIVE;
		} else if (finalPlacement.showCmd == SW_SHOWNORMAL) {
			finalPlacement.showCmd = SW_SHOWNOACTIVATE;
		}
		SetWindowPlacement(handle, finalPlacement);

		restoredWindows++;
	}
	Log(`States restored for ${restoredWindows} windows.`);
}

// hotkeys
// ==========

// If using iohook turns out insufficient (eg. not being able to capture keypresses for a desired hotkey), try using the Windows RegisterHotKey function:
// * https://stackoverflow.com/questions/14799035/node-webkit-winapi/58314436#58314436
// * https://www.fluxbytes.com/csharp/how-to-register-a-global-hotkey-for-your-application-in-c
// If that doesn't work, I guess you'll have the use the node-ffi hook approach, even though I think it causes more overhead/delay. (see HotkeyManager.ts)

ioHook.useRawcode(true); // use rawcodes for shortcuts/hotkeys

// logging
/*ioHook.on('keydown', event => {
	console.log(event); // { type: 'mousemove', x: 700, y: 400 }
});*/

ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadEnd], (keys) => StoreStates());
ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadDown], (keys) => ShowStoredStates());
ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadPageDown], (keys) => RestoreStates());

// register and start hook
ioHook.start(false);
Log("Added listeners");