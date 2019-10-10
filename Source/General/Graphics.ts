import robot from "robotjs";
import ffi from "ffi";
import chroma from "chroma-js";

/*export function GetPixelColor(x: number, y: number) {
	try {
		return robot.getPixelColor(x, y);
	} catch (ex) {
		return null;
	}
}*/

var user32 = new ffi.Library("user32", {
	"GetDC": ["int32", ["int32"]],
	"ReleaseDC": ["int32", ["int32", "int32"]],
});
var gdi32 = new ffi.Library("gdi32", {
	"GetPixel": ["uint32", ["int32", "int32", "int32"]],
});

export function GetPixelColor(x: number, y: number) {
	let hdc = user32.GetDC(0);
	let pixel = gdi32.GetPixel(hdc, x, y);
	user32.ReleaseDC(0, hdc);
	let color = chroma(pixel & 0x000000FF, (pixel & 0x0000FF00) >> 8, (pixel & 0x00FF0000) >> 16);
	return color.hex().substr(1); // to match with robotjs.getPixelColor() returns
}
//let timer = new Timer(1000, ()=>Log(GetPixelColor(0, 0))).Start();