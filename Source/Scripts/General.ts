import ioHook from "iohook";
import {extraKeys} from "../Input/ExtraKeys";
import {GetWindowHandles, GetWindowText, GetWindowRect, GetForegroundWindowText} from "../General/Windows";
import {ToJSON} from "js-vextensions";
import ref from "ref";

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

// if using keycodes
/*const id = ioHook.registerShortcut([56, 3663], (keys) => {
	console.log('Shortcut called with keys: ', keys);
	// todo
});*/

// if using rawcodes
const id = ioHook.registerShortcut([extraKeys.leftControl, extraKeys.leftAlt, extraKeys.numpadEnd], (keys) => {
	//console.log('Shortcut called with keys: ', keys);
	//Log("Got text: " + GetForegroundWindowText());

	let windows = GetWindowHandles();
	windows.forEach(handle=> {
		//let text = null, rect = null;
		let text = GetWindowText(handle as any);
		let rect = GetWindowRect(handle as any);
		console.log(`Found window. @Handle(${handle}) @Title(${text}) @Rect(${rect})`);

		/*let text = GetWindowText(handle.Int());
		let rect = GetWindowRect(handle.Int());*/
		//console.log(`Found window. @Handle(${handle.Int()}) @Title(${text}) @Rect(${rect})`);
		
		/*var buf = ref.alloc('pointer');
		ref.writePointer(buf, 0, handle); // pointer or memory address*/

		/*let a = Uint8Array.from([1,2,3,7,4,8]) as Buffer;
		Object.setPrototypeOf(a, Buffer.prototype);
		a.type = "pointer";
		
		console.log(`Found window. @Old(${handle.Int()}) @New(${handle.Int().Buf().Int()}) @Test(${a.address()})`);*/
	});
});

// init
// ==========

// register and start hook
ioHook.start(false);
Log("Added listeners");