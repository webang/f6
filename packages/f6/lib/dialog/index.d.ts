/// <reference types="react" />
import { show } from './show';
import { alert } from "./alert";
import { confirm } from "./confirm";
import { DialogProps } from './dialog';
import "./index.less";
export declare type DialogType = 'alert' | 'confirm';
export type { DialogProps };
declare const Dialog: import("react").FC<DialogProps> & {
    show: typeof show;
    alert: typeof alert;
    confirm: typeof confirm;
};
export default Dialog;
