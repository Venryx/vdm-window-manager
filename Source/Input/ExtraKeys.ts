// full list here: http://cherrytree.at/misc/vk.htm
export const extraKeys = {
	leftShift: 160,
	rightShift: 161,
	leftControl: 162,
	rightControl: 163,
	leftAlt: 164,
	rightAlt: 165,

	meta_windows: 91,

	// custom
	mouseLeft: 1000 + 1,
	mouseRight: 1000 + 2,
	mouseMiddle: 1000 + 3,
	mouseForward: 1000 + 4,
	mouseBackward: 1000 + 5,
	mouseWheelUp: 1000 + 6,
	mouseWheelDown: 1000 + 7,

	// number row
	N1: 49,

	// slashes and such
	/*slash: 191,
	backslash: 220,*/

	volumeDown: 174, //0xAE,
	volumeUp: 175, //0xAF,

	// numpad keys
	// All of these, except for numpadCenter, are in regular keycode collection, but kept here too since naming is confusing.
	// (For example, [numpad insert] is same as [insert], but [numpad +] is not same as [+].)
	// ==========

	numpadDivide: 111,
	numpadHome: 36,
	numpadUp: 38,
	numpadInsert: 45,

	numpadCenter: 12, // not sure real name
	
	numpadMultiply: 106,
	numpadSubtract: 109,
	numpadAdd: 107,
	numpadEnter: 108,

	numpadEnd: 35,
	numpadDown: 40,
};

// smaller copy sets
export enum MouseButton {
	Left = extraKeys.mouseLeft,
	Right = extraKeys.mouseRight,
	Middle = extraKeys.mouseMiddle,
	Forward = extraKeys.mouseForward,
	Backward = extraKeys.mouseBackward,
}