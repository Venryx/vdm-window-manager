import ffi from "ffi";
import ref from "ref";

declare var Buffer;

var user32 = new ffi.Library("user32", {
   "GetForegroundWindow": ["int32", []],
   "GetWindowTextA": ["int32", ["int32", "string", "int32"]],
   //"GetWindowTextW": ["int32", ["int32", ref.refType("string"), "int32"]],
});

export function GetForegroundWindowHandle() {
	return user32.GetForegroundWindow();
}
export function GetForegroundWindowText() {
	 var buffer = new Buffer(256);
	 buffer.type = ref.types.CString;
    var handle = GetForegroundWindowHandle();
    let length = user32.GetWindowTextA(handle, buffer, 256);
    return buffer.toString().substr(0, length);
}

export enum SuspendState {
	Sleep,
}

var powrprof = ffi.Library('powrprof.dll', {
    SetSuspendState: ['int', ['int', 'int', 'int']]
});
export function SetSuspendState(state: SuspendState) {
	if (state == SuspendState.Sleep) {
		powrprof.SetSuspendState(0, 0, 0);
	}
}