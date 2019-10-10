import ioHook from "iohook";
import {extraKeys} from "../Input/ExtraKeys";

ioHook.useRawcode(true); // use rawcodes for shortcuts/hotkeys

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
const id = ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadEnd], (keys) => {
	console.log('Shortcut called with keys: ', keys);
});

// init
// ==========

// register and start hook
ioHook.start(false);
Log("Added listeners");