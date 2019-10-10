import {Bridge} from "js-vextensions";

export function InDesktopApp() {
	//return window.top != window && window.top.name == "Venryx Desktop";
	//return window.top != window;
	//return inElectron;
	return process.argv[2] && process.argv[2] == "asVDM";
}

export const desktopBridge = new Bridge({
	receiveChannelMessageFunc_adder: receiveChannelMessageFunc=>{
		if (!InDesktopApp()) return;
		process.on("message", channelMessage=> {
			receiveChannelMessageFunc(channelMessage);
		});
	},
	sendChannelMessageFunc: channelMessage=>{
		if (!InDesktopApp()) return;
		process.send(channelMessage);
	},
	//channel_stringifyChannelMessageObj: false,
});

// for module system
// ==========

export let sideScreen = false;
desktopBridge.RegisterFunction("SetSideScreen", val=> {
	Log("SideScreen value received in window-manager module! Val: " + val);
	sideScreen = val;
});