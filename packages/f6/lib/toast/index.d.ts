import React from "react";
import "./index.less";
import { SpinnerType } from "../spinner";
export interface ToastProps {
    message: string;
    duration?: number;
    position?: "top" | "bottom" | "middle";
    type?: "text" | "loading" | "success" | "fail" | "warning";
    spinner?: SpinnerType;
}
declare class Toast extends React.Component<ToastProps> {
    static formatParams(params: ToastProps | string): {
        duration: any;
        position: any;
        message: any;
        type: any;
        spinner: any;
    };
    /**
     * @description 创建 toast
     */
    static show(params: ToastProps | string): {
        mountNode: HTMLDivElement | null;
        close(force?: boolean | undefined): void;
        setContent(content: string): void;
    };
    private static forceClear;
    static clear(): void;
    static hide(): void;
    static createSlot(): HTMLDivElement;
    renderIcon(): JSX.Element | undefined;
    render(): JSX.Element;
}
export default Toast;
