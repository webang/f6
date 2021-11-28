import React, { ButtonHTMLAttributes, MouseEventHandler, ReactNode, useState } from "react";
import "./index.less";
import classNames from "classnames";
import { defineName } from "../utils/name";
import Spinner from "../spinner";

export type ButtonType = "primary" | "info" | "success" | "warning" | "danger";
export type ButtonSize = "large" | "small" | "mini" | "middle";
export type ButtonShape = 'round' | 'square';

interface BaseButtonProps {
  className?: string;
  title?: ReactNode;
  shape?: ButtonShape;
  type?: ButtonType; // 类型
  size?: ButtonSize; // 尺寸
  text?: string; // 按钮文字
  color?: string; // 按钮颜色
  block?: boolean; // 是否为块级元素
  plain?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

type NativeButtonProps =
  BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement>;

export type ButtonProps = BaseButtonProps & NativeButtonProps;

const [prefix] = defineName("button");

const Button: React.FC<ButtonProps> = ({
  size = "middle",
  type = "default",
  shape = "square",
  block = false,
  plain = false,
  loading = false,
  disabled = false,
  className,
  children,
  title,
  onClick,
  ...restProps
}) => {
  const [active, setActive] = useState(false);
  const cls = classNames([
    prefix,
    className,
    `${prefix}--${size}`,
    `${prefix}--${type}`,
    `${prefix}--${shape}`,
    {
      [`${prefix}--active`]: active,
      [`${prefix}--block`]: block,
      [`${prefix}--plain`]: plain,
      [`${prefix}--loading`]: loading,
      [`${prefix}--disabled`]: disabled,
    },
  ]);

  const onMouseDown: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (disabled || loading) return;
    setActive(true);
    restProps.onMouseDown && restProps.onMouseDown(event);
  };

  const onMouseUp: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (disabled || loading) return;
    setActive(false);
    restProps.onMouseUp && restProps.onMouseUp(event)
  };

  return (
    <button
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={cls}
      {...restProps}
    >
      {loading && <Spinner style={{ width: '18px', height: '18px', marginRight: '4px' }}/>}
      <div>{children || title}</div>
    </button>
  );
};

export default Button;