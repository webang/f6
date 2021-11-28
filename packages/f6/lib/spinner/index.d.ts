import { FC, CSSProperties } from "react";
import "./index.less";
export declare type SpinnerType = "lines" | "crescent" | "oval";
export interface SpinnerProps {
    className?: string;
    size?: number | string;
    style?: CSSProperties;
}
declare const Spinner: FC<SpinnerProps & {
    type?: SpinnerType;
}>;
export default Spinner;
