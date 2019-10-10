import {Assert} from "js-vextensions";

export function ConvertByteArrayToInt(byteArray: number[]) {
	Assert(byteArray.length == 4, "Byte-array must have length of 4.");
	return byteArray[0] | (byteArray[1] << 8) | (byteArray[2] << 16) | (byteArray[3] << 24);
}