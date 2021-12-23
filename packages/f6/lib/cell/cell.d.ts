import React, { ReactNode } from "react";
import "./index.less";
export interface CellProps {
    className?: string;
    title: ReactNode;
    titleAlign?: "left" | "top";
    titleClass?: string;
    label?: ReactNode;
    value?: ReactNode;
    icon?: ReactNode;
    bodyStyle?: React.CSSProperties;
    border?: boolean;
    link?: boolean;
    onClick?: React.MouseEventHandler<Element>;
}
declare const Cell: React.FC<CellProps>;
export default Cell;
