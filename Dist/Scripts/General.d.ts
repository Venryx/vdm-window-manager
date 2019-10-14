import { WindowPlacement } from "../General/Windows";
import { VRect } from "js-vextensions";
export declare class WindowState {
    constructor(initialData: Partial<WindowState>);
    rect: VRect;
    text: string;
    placement: WindowPlacement;
}
export declare function StoreStates(): void;
export declare function ShowStoredStates(): void;
export declare function RestoreStates(): void;
