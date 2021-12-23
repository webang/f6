/// <reference types="react" />
import "./index.less";
export interface SwitchProps {
    defaultValue?: boolean;
    value?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
