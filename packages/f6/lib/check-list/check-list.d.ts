import { FC, ReactNode } from "react";
export interface CheckListProps {
    value?: string[];
    defaultValue?: string[];
    multiple?: boolean;
    renderIcon?: (checked: boolean) => ReactNode;
    onChange?: (value: string[]) => void;
    labelPosition?: 'left' | 'right';
}
declare const CheckList: FC<CheckListProps>;
export default CheckList;
