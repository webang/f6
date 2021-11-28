/// <reference types="react" />
import { DialogProps } from './dialog';
import "./index.less";
export declare type DialogType = 'alert' | 'confirm';
export type { DialogProps };
declare const Dialog: import("react").ForwardRefExoticComponent<DialogProps & import("react").RefAttributes<import("./dialog").DialogRef>> & {
    alert: (params: DialogProps) => void;
    confirm: (params: DialogProps) => void;
};
export default Dialog;
