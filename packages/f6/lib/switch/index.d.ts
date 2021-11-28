import { FC } from "react";
import "./index.less";
export interface SwitchProps {
    defaultValue: boolean;
    onChange?: (checked: boolean) => void;
}
declare const Switch: FC<SwitchProps>;
export default Switch;
