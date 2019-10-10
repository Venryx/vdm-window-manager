export declare function GetKeyState(keyCode: number): any;
export declare enum SendMessage_Flags {
    WM_KEYDOWN = 256,
    WM_KEYUP = 257,
    WM_CHAR = 258
}
export declare function KeyToggle(keyCode: number, type?: "down" | "up"): void;
export declare function KeyTap(keyCode: number, includeCharEvent?: boolean): void;
export declare function KeyToggle2(keyCode: number, type?: "down" | "up", asScanCode?: boolean): void;
export declare function KeyTap2(keyCode: number, asScanCode?: boolean, delay?: number): Promise<any> | null;
export declare function KeyToggle3(keyCode: number, type?: "down" | "up"): void;
export declare function KeyTap3(keyCode: number): void;
export declare function ConvertKeyCodeToScanCode(keyCode: number): number;
