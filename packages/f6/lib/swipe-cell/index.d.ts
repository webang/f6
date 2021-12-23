import { FC } from "react";
import './index.less';
export interface SwipeCellProps {
    className?: string;
    right?: React.ReactNode;
    left?: React.ReactNode;
}
declare const SwipeCell: FC<SwipeCellProps>;
export default SwipeCell;
