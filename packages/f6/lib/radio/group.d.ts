import { FC } from "react";
import { RadioValue } from "./radio";
export interface RadioGroupProps {
    defaultValue?: RadioValue | null;
    onChange?: (val: RadioValue) => void;
}
declare const Group: FC<RadioGroupProps>;
export default Group;
