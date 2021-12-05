import { FC } from "react";
import "./index.less";
export interface Rule {
    test: (val: string) => boolean;
    message: string;
}
export interface FieldProps {
    label?: string;
    type?: string;
    value?: number | string;
    defaultValue?: number | string;
    disabled?: boolean;
    readOnly?: boolean;
    clearable?: boolean;
    placeholder?: string;
    rules?: Rule[];
    immediateCheck?: boolean;
    onChange?: (value?: number | string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
declare const Field: FC<FieldProps>;
export default Field;
