import React from "react";
import "./index.less";
export declare type PlacementType = "top" | "top-start" | "top-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end";
export interface PopoverProps {
    reference: React.ReactElement;
    placement?: PlacementType;
    verticalDistance?: number;
    horizontalDistance?: number;
    onClickTrigger?: () => void;
}
declare const Popover: React.FC<PopoverProps>;
export default Popover;
