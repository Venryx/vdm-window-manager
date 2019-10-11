import { VRect } from 'js-vextensions';
declare type RealBuffer = Buffer;
declare module "win32-api/node_modules/win32-def/dist/lib/win-model/common" {
    type Buffer = number | RealBuffer;
}
export declare class WindowInfo {
    handle: number;
    lParam: number;
}
export declare function GetWindowHandles(): number[];
export declare function GetForegroundWindowHandle(): number;
export declare function GetForegroundWindowText(): string;
export declare function GetWindowText(handle: number): string;
export declare function GetWindowRect(handle: number): VRect;
export declare enum SuspendState {
    Sleep = 0
}
export declare function SetSuspendState(state: SuspendState): void;
export {};
