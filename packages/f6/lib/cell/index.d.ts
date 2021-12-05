import React, { ReactNode } from "react";
import "./index.less";
export interface CellProps {
    className?: string;
    title: ReactNode;
    label?: ReactNode;
    value?: ReactNode;
    icon?: ReactNode;
    bodyStyle?: React.CSSProperties;
    border?: boolean;
    link?: boolean;
    url?: string;
    onClick?: React.MouseEventHandler<Element>;
}
declare const Cell: React.FC<CellProps>;
export declare const CellGroup: React.FC;
declare type ICell = typeof Cell & {
    Group: typeof CellGroup;
};
declare const _default: ICell;
export default _default;
