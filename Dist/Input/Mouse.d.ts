import { MouseButton } from "./ExtraKeys";
import { Vector2i } from "js-vextensions";
export declare function GetForegroundWindowText(): any;
export declare function GetMousePos(): Vector2i;
export declare function MoveMouse(x: number, y: number): void;
export declare function ClickMouse(mouseButton?: MouseButton, position?: Vector2i, ctrlModifierAllowed?: boolean, shiftModifierAllowed?: boolean, altModifierAllowed?: boolean): void;
export declare function MouseDown(mouseButton?: MouseButton, position?: Vector2i, ctrlModifierAllowed?: boolean, shiftModifierAllowed?: boolean, altModifierAllowed?: boolean): void;
export declare function MouseUp(mouseButton?: MouseButton, position?: Vector2i, ctrlModifierAllowed?: boolean, shiftModifierAllowed?: boolean, altModifierAllowed?: boolean): void;
