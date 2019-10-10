//import ioHook from "iohook";
//const hook = require(`node-iohook`)
//import gkm from "gkm";

// library 1
// ==========

// keyCode->boolean
/*let keysDown = {};
ioHook.on("keydown", e=> {
	keysDown[e.keycode] = true;
});
ioHook.on("keyup", e=> {
	keysDown[e.keycode] = false;
});
export function RegisterHotkeys() {
	// register and start hook
	ioHook.start();
}*/

// library 2
// ==========

/*hook.on(`keydown`, function(msg){
    console.log(msg);
});
export function RegisterHotkeys() {
	// register and start hook
	hook.start();
}*/

// library 3
// ==========

/*type Events = "key.pressed" | "key.released" | "mouse.moved" | "mouse.pressed" | "mouse.released" | "mouse.clicked";
/*gkm.events.on("mouse.*", function(data) {
	let event = this.event;
});*#/
let keysDown = {};
gkm.events.on("key.pressed", function(key) {
	key = key[0].toLowerCase();
	console.log("KeyDown: " + key);
	keysDown[key] = true;

	for (let hotkey of hotkeys) {
		if (hotkey.keysDown.Contains(key) && hotkey.keysDown.All(a=>keysDown[a])) {
			hotkey.func();
		}
	}
});
gkm.events.on("key.released", function(key) {
	key = key[0].toLowerCase();
	console.log("KeyUp: " + key);
	keysDown[key] = false;
});

export function RegisterHotkeys() {
}

// hotkeys
// ==========

export type Key = "enter" | "numpad multiply" | "numpad subtract" | "numpad add";
export class Hotkey {
	constructor(options: Partial<Hotkey>) {
		this.Extend(options);
	}
	keys: Key[];
	func: Function;
}

let hotkeys = [] as Hotkey[];
export function AddHotkey(options: Partial<Hotkey>) {
	let hotkey = new Hotkey(options);
	hotkeys.push(hotkey);
}*/




/*import gui from "nw/gui";

// Create a shortcut with |option|.
var shortcut = new gui.Shortcut(option);

// Register global desktop shortcut, which can work without focus.
gui.App.registerGlobalHotKey(shortcut);

// If register |shortcut| successfully and user struck "Ctrl+Shift+A", |shortcut|
// will get an "active" event.

// You can also add listener to shortcut`s active and failed event.
shortcut.on(`active`, function() {
  console.log("Global desktop keyboard shortcut: " + this.key + " active."); 
});

shortcut.on(`failed`, function(msg) {
  console.log(msg);
});

// Unregister the global desktop shortcut.
gui.App.unregisterGlobalHotKey(shortcut);*/




/*import {app, globalShortcut} from "electron";

app.on(`ready`, () => {
  // Register a `CommandOrControl+X` shortcut listener.
  const ret = globalShortcut.register(`CommandOrControl+X`, () => {
    console.log(`CommandOrControl+X is pressed`)
  })

  if (!ret) {
    console.log(`registration failed`)
  }

  // Check whether a shortcut is registered.
  console.log(globalShortcut.isRegistered(`CommandOrControl+X`))
})

app.on(`will-quit`, () => {
  // Unregister a shortcut.
  globalShortcut.unregister(`CommandOrControl+X`)

  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})*/