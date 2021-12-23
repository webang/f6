import { FC } from "react";
import { RadioValue } from "./radio";
export interface RadioGroupProps {
    defaultValue?: RadioValue | null;
    value?: RadioValue | null;
    disabled?: boolean;
    onChange?: (val: RadioValue | null) => void;
}
declare const Group: FC<RadioGroupProps>;
export default Group;
