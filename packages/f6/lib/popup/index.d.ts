import React, { CSSProperties } from "react";
import "./index.less";
export interface PopupProps {
    style?: CSSProperties;
    visible?: boolean;
    position?: Direction;
    className?: string;
    animationDuration?: number;
    onMaskClick: () => void;
}
export declare type Direction = "top" | "bottom" | "left" | "right" | "middle";
declare const Popup: React.FC<PopupProps>;
export default Popup;
