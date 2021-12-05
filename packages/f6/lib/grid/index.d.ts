import { CSSProperties, FC, ReactNode } from "react";
import './index.less';
export interface GridProps {
    className?: string;
    style?: CSSProperties;
    columnNum: number;
    border?: boolean;
}
export interface GridItemProps {
    className?: string;
    icon?: ReactNode;
    text?: ReactNode;
    style?: CSSProperties;
}
declare const Grid: FC<GridProps>;
declare const GridItem: FC<GridItemProps>;
declare type IGrid = (typeof Grid) & {
    Item: typeof GridItem;
};
declare const _default: IGrid;
export default _default;
