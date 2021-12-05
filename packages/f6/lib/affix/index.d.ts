import React from "react";
export interface AffixProps {
    top?: number;
    container?: (() => HTMLElement) | Window;
    wrapperStyle?: (params: {
        fixed: boolean;
    }) => React.CSSProperties;
}
declare const Affix: React.FC<AffixProps>;
export default Affix;
