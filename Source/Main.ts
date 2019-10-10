// "static" imports
import "./General/Start_0";
import "js-vextensions";
import "./General/ClassExtensions/CE_General";
import "./General/Logging";
//import "babel-core/register";
import "babel-polyfill";

import OnDeath from "death";
import process from "process";
//import { StartEventLoop, StopEventLoop } from "./Input/EventLoop";

//let addHotkeySystem = !process.argv.Contains("noHotkey");

require("./Utils/Bridge/Bridge_VDesktop");

// subscripts
// ==========

require("./Scripts/General");

// shutdown
// ==========

//OnDeath({uncaughtException: true, exit: true})((signal, error)=> {
var OffDeath = OnDeath({uncaughtException: true, exit: true})((signal, error)=> {
	ShutDown(signal, error);
	OffDeath();
});
function ShutDown(signal: string, error: Error) {
	console.log(`Signal: ${signal} Error: ${error}`);
	//StopEventLoop();
	//RemoveHooks();
}
// PreExit message is sent by venryx-desktop just before it closes (so we have chance to clean up) 
process.on("message", message=> {
	if (message == "PreExit") {
		ShutDown("PreExit", null);
	}
});

// launch
// ==========

/*if (addHotkeySystem) {
	AddHook();
}*/
//StartEventLoop();