import { FC } from "react";
import { DropdownMenuItemAction } from "./dropdown-menu-item";
export interface DropdownMenuProps {
    className?: string;
    onClose?: () => void;
    onClickItem?: (o: {
        index: number;
        action: DropdownMenuItemAction;
    }) => void;
}
declare const DropdownMenu: FC<DropdownMenuProps>;
export default DropdownMenu;
