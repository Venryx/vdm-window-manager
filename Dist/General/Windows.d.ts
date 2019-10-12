import { User32 } from 'win32-api';
import { VRect } from 'js-vextensions';
import Struct from 'ref-struct';
export declare const user32: User32.Win32Fns;
declare type RealBuffer = Buffer;
declare module "win32-api/node_modules/win32-def/dist/lib/win-model/common" {
    type Buffer = number | RealBuffer;
}
export declare class Point {
    x: number;
    y: number;
}
export declare const POINT: Struct;
export declare class Rect {
    left: number;
    top: number;
    right: number;
    bottom: Point;
}
export declare const RECT: Struct;
export declare class WindowPlacement {
    length: number;
    flags: number;
    showCmd: number;
    ptMinPosition: Point;
    ptMaxPosition: Point;
    rcNormalPosition: Rect;
}
export declare const WINDOWPLACEMENT: Struct;
export declare const SW_SHOWNORMAL = 1;
export declare const SW_SHOWMINIMIZED = 2;
export declare const SW_HIDE = 0;
export declare const SW_SHOW = 5;
export declare const SW_MINIMIZE = 6;
export declare const SW_SHOWMINNOACTIVE = 7;
export declare const SW_SHOWNA = 8;
export declare const SW_RESTORE = 9;
export declare const user32_extra: any;
export declare class WindowInfo {
    handle: number;
    lParam: number;
}
export declare function GetWindowHandles(): number[];
export declare function GetForegroundWindowHandle(): number;
export declare function GetForegroundWindowText(): string;
export declare function GetWindowText(handle: number): string;
export declare function GetWindowRect(handle: number): VRect;
export declare function GetWindowPlacement(handle: number): WindowPlacement;
export declare function SetWindowPlacement(handle: number, placement: WindowPlacement): any;
export declare enum SuspendState {
    Sleep = 0
}
export declare function SetSuspendState(state: SuspendState): void;
export {};
