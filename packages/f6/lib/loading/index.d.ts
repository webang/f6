import React, { FC, ReactNode } from "react";
import "./index.less";
import { SpinnerType } from '../spinner';
export interface LoadingProps {
    spinnerType?: SpinnerType;
    spinnerSize?: string | number;
    className?: string;
    style?: React.CSSProperties;
    vertical?: boolean;
    message?: ReactNode;
}
declare const Loading: FC<LoadingProps>;
export default Loading;
