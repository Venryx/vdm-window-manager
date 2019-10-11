import { VRect } from 'js-vextensions';
declare global {
    interface Buffer {
        Int(): number;
    }
    interface Number {
        Buf(): Buffer;
    }
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
