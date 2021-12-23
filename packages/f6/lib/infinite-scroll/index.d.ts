import { ReactNode } from "react";
import "./index.less";
export interface InfiniteScrollProps {
    disabled?: boolean;
    loading?: boolean;
    onLoad?: (finish?: () => void) => void;
    footer?: (params: {
        loading: boolean;
        disabled: boolean;
    }) => ReactNode;
}
export interface InfiniteScrollMethods {
    finish: () => void;
}
declare const _default: import("react").ForwardRefExoticComponent<InfiniteScrollProps & import("react").RefAttributes<InfiniteScrollMethods>>;
export default _default;
