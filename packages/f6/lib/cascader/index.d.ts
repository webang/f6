import { FC } from "react";
import { CascaderViewOption } from "./cascader-view";
import "./index.less";
export interface CascaderProps {
    options: CascaderViewOption[];
    visible?: boolean;
    defaultValue?: string[];
    onClose?: () => void;
    onConfirm?: (val: CascaderViewOption[]) => void;
}
declare const Cascader: FC<CascaderProps>;
export default Cascader;
