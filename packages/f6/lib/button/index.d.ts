import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./index.less";
export declare type ButtonType = "primary" | "info" | "success" | "warning" | "danger";
export declare type ButtonSize = "large" | "small" | "mini" | "middle";
export declare type ButtonShape = 'round' | 'square';
interface BaseButtonProps {
    className?: string;
    title?: ReactNode;
    shape?: ButtonShape;
    type?: ButtonType;
    size?: ButtonSize;
    text?: string;
    color?: string;
    block?: boolean;
    plain?: boolean;
    loading?: boolean;
    disabled?: boolean;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
export declare type ButtonProps = BaseButtonProps & NativeButtonProps;
declare const Button: React.FC<ButtonProps>;
export default Button;
