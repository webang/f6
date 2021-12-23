import { FC, ReactNode } from "react";
export interface DropdownMenuItemAction {
    name: ReactNode;
    value: string;
}
export interface DropdownMenuItemProps {
    title: string;
    className?: string;
    actions?: DropdownMenuItemAction[];
}
declare const DropdownMenuItem: FC<DropdownMenuItemProps>;
export default DropdownMenuItem;
