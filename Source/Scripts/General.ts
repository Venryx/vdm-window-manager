import ioHook from "iohook";

/*ioHook.on('keydown', event => {
	console.log(event); // { type: 'mousemove', x: 700, y: 400 }
});*/

// if registerShortcut used the rawcodes this would work
/*const id = ioHook.registerShortcut([extraKeys.leftAlt, keycode.codes.f1], (keys) => {
	console.log('Shortcut called with keys:', keys);
});*/
const id = ioHook.registerShortcut([56, 3663], (keys) => {
	console.log('Shortcut called with keys: ', keys);
	// todo
});

// Register and start hook
ioHook.start(false);
Log("Added listeners");