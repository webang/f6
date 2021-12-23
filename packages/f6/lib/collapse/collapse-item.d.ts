import { FC } from "react";
export interface CollapseItemProps {
    className?: string;
    name: string;
    title: React.ReactNode;
}
declare const CollapseItem: FC<CollapseItemProps>;
export default CollapseItem;
