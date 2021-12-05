import { FC, ReactNode } from "react";
import './index.less';
export declare type RadioValue = string | number;
export interface RadioProps {
    defaultChecked?: boolean;
    disabled?: boolean;
    value?: RadioValue;
    onChange: (checked: boolean) => void;
    icon: ReactNode | ((checked: boolean) => ReactNode);
}
declare const Radio: FC<RadioProps>;
export default Radio;
