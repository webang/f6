/// <reference types="react" />
import './index.less';
export interface BackTopRef {
    show: () => void;
    close: () => void;
}
export interface BackTopProps {
    distance?: number;
}
declare const _default: import("react").ForwardRefExoticComponent<BackTopProps & import("react").RefAttributes<BackTopRef>>;
export default _default;
