import React from "react";
import "./index.less";
export interface PopupProps {
    visible?: boolean;
    position?: Direction;
    animationDuration?: number;
}
export declare type Direction = "top" | "bottom" | "left" | "right" | "middle";
declare const Popup: React.FC<PopupProps>;
export default Popup;
