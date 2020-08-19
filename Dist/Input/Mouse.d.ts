import { MouseButton } from "./ExtraKeys";
import { Vector2 } from "js-vextensions";
export declare function GetForegroundWindowText(): any;
export declare function GetMousePos(): Vector2;
export declare function MoveMouse(x: number, y: number): void;
export declare function ClickMouse(mouseButton?: MouseButton, position?: Vector2, ctrlModifierAllowed?: boolean, shiftModifierAllowed?: boolean, altModifierAllowed?: boolean): void;
export declare function MouseDown(mouseButton?: MouseButton, position?: Vector2, ctrlModifierAllowed?: boolean, shiftModifierAllowed?: boolean, altModifierAllowed?: boolean): void;
export declare function MouseUp(mouseButton?: MouseButton, position?: Vector2, ctrlModifierAllowed?: boolean, shiftModifierAllowed?: boolean, altModifierAllowed?: boolean): void;
