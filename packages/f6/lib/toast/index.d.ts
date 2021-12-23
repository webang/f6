import React from "react";
import "./index.less";
import { SpinnerType } from "../spinner";
export declare type ToastPosition = "top" | "bottom" | "middle";
export declare type ToastType = "text" | "loading" | "success" | "fail" | "warning";
export interface ToastProps {
    type?: ToastType;
    position?: ToastPosition;
    message: string;
    duration?: number;
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
    static config(option: {
        single: boolean;
    }): void;
    static hide(): void;
    static createSlot(): HTMLDivElement;
    renderIcon(): JSX.Element | undefined;
    render(): JSX.Element;
}
export default Toast;
