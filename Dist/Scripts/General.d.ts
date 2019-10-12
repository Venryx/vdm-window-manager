import { WindowPlacement } from "../General/Windows";
import { VRect } from "js-vextensions";
export declare class WindowState {
    constructor(initialData: Partial<WindowState>);
    rect: VRect;
    text: string;
    placement: WindowPlacement;
}
