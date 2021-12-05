import { FC } from "react";
import { CascaderViewOption } from "./cascader-view";
import "./index.less";
export interface CascaderProps {
    options: CascaderViewOption[];
    visible: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    value?: string[];
}
declare const Cascader: FC<CascaderProps>;
export default Cascader;
