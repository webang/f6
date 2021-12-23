import { FC } from "react";
import "./index.less";
export declare type InputType = "text" | "number" | "password";
export declare type InputTitlePosition = "top" | "left";
export interface InputRule {
    test: (val: string) => boolean;
    message: string;
}
export interface InputProps {
    type?: InputType;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    readOnly?: boolean;
    clearable?: boolean;
    placeholder?: string;
    rules?: InputRule[];
    immediateCheck?: boolean;
    resetErrorOnClear?: boolean;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
    onChange?: (value?: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
declare const Input: FC<InputProps>;
export default Input;
