import { FC, ReactNode } from "react";
import './index.less';
export declare type RadioValue = string | number;
export interface RadioProps {
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    value?: RadioValue;
    onChange: (checked: boolean) => void;
    icon: (checked: boolean) => ReactNode;
    block?: boolean;
}
declare const Radio: FC<RadioProps>;
export default Radio;
