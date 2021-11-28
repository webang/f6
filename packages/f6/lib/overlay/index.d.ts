import React from "react";
import "./index.less";
export interface OverlayProps {
    visible?: boolean;
    timeout?: number;
    transitionName?: string;
    onClick?: () => void;
}
declare const Overlay: React.FC<OverlayProps>;
export default Overlay;
