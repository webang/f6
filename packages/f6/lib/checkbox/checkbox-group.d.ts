import { FC } from "react";
import { CheckboxValue } from "./checkbox";
export interface CheckboxGroupProps {
    defaultValue?: CheckboxValue[];
    onChange?: (val: CheckboxValue[]) => void;
}
declare const Group: FC<CheckboxGroupProps>;
export default Group;
