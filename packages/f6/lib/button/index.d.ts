import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./index.less";
export declare type ButtonColor = "primary" | "info" | "success" | "warning" | "danger";
export declare type ButtonSize = "large" | "small" | "mini" | "middle";
export declare type ButtonShape = 'round' | 'square' | 'default';
export declare type ButtonFill = 'solid' | 'outline' | 'none';
interface BaseButtonProps {
    className?: string;
    title?: ReactNode;
    shape?: ButtonShape;
    color?: ButtonColor;
    size?: ButtonSize;
    fill?: ButtonFill;
    block?: boolean;
    loading?: boolean;
    disabled?: boolean;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
export declare type ButtonProps = BaseButtonProps & NativeButtonProps;
declare const Button: React.FC<ButtonProps>;
export default Button;
