import React from "react";
import "./index.less";
export declare type PlacementType = "top" | "top-start" | "top-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end";
export interface PopoverProps {
    children: React.ReactElement;
    content?: React.ReactNode;
    placement?: PlacementType;
    verticalDistance?: number;
    horizontalDistance?: number;
    trigger?: "click";
    visible?: boolean;
    defaultVisible?: boolean;
    contentStyle: React.CSSProperties;
    onVisibleChange?: (visible: boolean) => void;
}
export interface PopoverRef {
    resetPosition: () => void;
}
declare const _default: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<PopoverRef>>;
export default _default;
