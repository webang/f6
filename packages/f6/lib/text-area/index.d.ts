import { FC } from "react";
import "./index.less";
export interface FieldRule {
    test: (val: string) => boolean;
    message: string;
}
export interface TextAreaProps {
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    readOnly?: boolean;
    clearable?: boolean;
    placeholder?: string;
    rules?: FieldRule[];
    immediateCheck?: boolean;
    resetErrorOnClear?: boolean;
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
    onChange?: (value?: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    showCount?: boolean;
    autoSize?: {
        minRows: number;
        maxRows: number;
    } | boolean;
}
declare const TextArea: FC<TextAreaProps>;
export default TextArea;
