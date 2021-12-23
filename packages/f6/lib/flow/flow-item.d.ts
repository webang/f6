import { FC, ReactNode } from "react";
export interface FlowItemProps {
    index: number;
    title: ReactNode;
    description: ReactNode;
}
declare const FlowItem: FC<FlowItemProps>;
export default FlowItem;
