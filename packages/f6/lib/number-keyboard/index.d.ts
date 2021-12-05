import { FC } from "react";
import "./index.less";
export declare type NumberKeyboardType = '';
export interface NumberKeyboardProps {
    visible?: boolean;
    onInput?: (type: string, value?: number) => void;
}
declare const NumberKeyboard: FC<NumberKeyboardProps>;
export default NumberKeyboard;
