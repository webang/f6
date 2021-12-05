import { FC } from "react";
import "./index.less";
export interface PasswordInputProps {
    className?: string;
    count?: number;
    onChange?: (val: string[]) => void;
}
declare const PasswordInput: FC<PasswordInputProps>;
export default PasswordInput;
