import { Vector2i } from "js-vextensions";
export declare const WM_KEYDOWN = 256;
export declare const WM_KEYUP = 257;
export declare const WM_SYSKEYDOWN = 260;
export declare const WM_SYSKEYUP = 261;
export declare var keyboardHook_callback: Buffer;
export declare function GetMousePos(): Vector2i;
export declare type MouseMoveListener = (mousePos: Vector2i) => void;
export declare function AddMouseMoveListener(func: MouseMoveListener): void;
export declare var mouseHook_callback: Buffer;
export declare function AddHook(): any;
export declare function RemoveHooks(): void;
export declare function IsKeyDown(keyCode: number): any;
export declare function IsKeyDown_External(keyCode: number): boolean;
export declare function WaitTillKeyIsDown(keyCode: number): Promise<unknown>;
export declare function WaitTillKeyIsUp(keyCode: number): Promise<unknown>;
export declare var keyPressesToIgnore: {};
export declare function IgnoreNextKeyPress(keyCode: number): void;
export declare var keyReleasesToIgnore: {};
export declare function IgnoreNextKeyRelease(keyCode: number): void;
export declare var logKeys: boolean;
export declare function SetLogKeys(newVal: boolean): void;
export declare function GetKeyName(keyCode: number): string;
export declare let keysDown: {};
export declare function OnKeyPressed(keyCode: number, fullData: number[]): boolean;
export declare function OnKeyReleased(keyCode: number, fullData: number[]): boolean;
export declare enum CaptureType {
    Pass = 0,
    Capture = 1,
    CaptureAndBreak = 2
}
export declare class Hotkey {
    constructor(options: Partial<Hotkey>);
    keys: number[];
    countModifiersAsPress: boolean;
    ignoreUnless?: () => boolean;
    capture: CaptureType;
    priority: number;
    onDown: () => CaptureType | boolean | void | Promise<any>;
}
export declare function AddHotkey(options: Partial<Hotkey>): void;
