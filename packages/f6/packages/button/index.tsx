import React from "react";
import classNames from "classnames";
import { defineName } from "../utils/name";
import Spinner from "../spinner";
import "./index.less";

export type ButtonColor = "primary" | "info" | "success" | "warning" | "danger";
export type ButtonSize = "large" | "small" | "mini" | "middle";
export type ButtonShape = "round" | "square" | "default";
export type ButtonFill = "solid" | "outline" | "none";

interface BaseButtonProps {
  className?: string;
  title?: React.ReactNode; // 按钮内容
  shape?: ButtonShape; // 按钮形状
  color?: ButtonColor; // 按钮颜色
  size?: ButtonSize; // 尺寸
  fill?: ButtonFill; // 填充模式
  block?: boolean; // 是否为块级元素
  loading?: boolean;
  disabled?: boolean;
  spinnerStyle?: React.CSSProperties;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement>;

export type ButtonProps = BaseButtonProps & NativeButtonProps;

const [prefix] = defineName("button");

const defaultProps = {
  size: "middle",
  color: "default",
  shape: "default",
  fill: "solid",
  block: false,
  loading: false,
  disabled: false,
  spinnerStyle: {
    width: "18px",
    height: "18px",
    marginRight: "4px" 
  }
};

const Button: React.FC<ButtonProps> = (p) => {
  const props = { ...defaultProps, ...p };
  const {
    size,
    color,
    shape,
    fill,
    block,
    loading,
    disabled,
    className,
    children,
    title,
    onClick,
    spinnerStyle,
    ...restProps
  } = props;

  const [active, setActive] = React.useState(false);
  const cls = classNames([
    prefix,
    className,
    `${prefix}--${size}`,
    `${prefix}--${color}`,
    `${prefix}--shape-${shape}`,
    `${prefix}--fill-${fill}`,
    {
      [`${prefix}--block`]: block,
      [`${prefix}--active`]: active,
      [`${prefix}--loading`]: loading,
      [`${prefix}--disabled`]: disabled,
    },
  ]);

  const onMouseDown: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (disabled || loading) return;
    setActive(true);
    restProps.onMouseDown?.(event);
  };

  const onMouseUp: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (disabled || loading) return;
    setActive(false);
    restProps.onMouseUp?.(event);
  };

  return (
    <button
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={cls}
      {...restProps}
    >
      {loading && <Spinner style={spinnerStyle} /> }
      <div>{children || title}</div>
    </button>
  );
};

export default Button;
