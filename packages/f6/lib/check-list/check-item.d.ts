import { FC } from 'react';
export interface CheckListItemProps {
    value: string;
    disabled?: boolean;
    onClick?: () => void;
    renderIcon?: (checked: boolean) => React.ReactNode;
}
declare const CheckListItem: FC<CheckListItemProps>;
export default CheckListItem;
