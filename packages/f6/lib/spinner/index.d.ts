import { FC, CSSProperties } from "react";
import "./index.less";
export declare type SpinnerType = "lines" | "crescent" | "oval";
export interface SpinnerProps {
    size?: number | string;
    type?: SpinnerType;
    className?: string;
    style?: CSSProperties;
}
declare const Spinner: FC<SpinnerProps>;
export default Spinner;
