import { FC, ReactNode } from "react";
export declare type CheckboxValue = string | number;
export interface CheckboxProps {
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    icon: ReactNode | ((checked: boolean) => ReactNode);
    value?: CheckboxValue;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
