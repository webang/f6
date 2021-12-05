import { CSSProperties, FC, ReactNode } from "react";
export interface CascaderViewOption {
    label: string;
    value: string;
    children?: CascaderViewOption[];
}
export interface CascaderViewProps {
    style?: CSSProperties;
    options?: CascaderViewOption[];
    onClick?: (option: CascaderViewOption) => void;
    optionRender?: (option: CascaderViewOption) => ReactNode;
}
declare const CascaderView: FC<CascaderViewProps>;
export default CascaderView;
