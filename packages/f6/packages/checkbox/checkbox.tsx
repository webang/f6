import classNames from "classnames";
import React, { FC, ReactNode, useContext, useState } from "react";
import Icon from "f6-icons";
import { defineName } from "../utils/name";
import { CheckboxGroupContext } from "./checkbox-context";

export type CheckboxValue = string | number;

export interface CheckboxProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  icon: ReactNode | ((checked: boolean) => ReactNode);
  value?: CheckboxValue;
}

const [prefix] = defineName("checkbox");

const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    children,
    defaultChecked = false,
    disabled = false,
    onChange,
    icon,
    value,
    ...restProps
  } = props;

  let [checked, setChecked] = useState(defaultChecked);
  const context = useContext(CheckboxGroupContext);

  if (context && value !== undefined) {
    checked = context.value.includes(value);
  }

  const handleClick = () => {
    if (disabled) return;
    if (context && value !== undefined) {
      checked = context.value.includes(value);
      if (!checked) {
        context.check(value);
      } else {
        context.uncheck(value);
      }
    } else {
      setChecked(!checked);
      onChange && onChange(!checked);
    }
  };

  const renderIcon = () => {
    if (icon) {
      return typeof icon === "function" ? icon(checked) : icon;
    } else {
      return checked ? (
        <Icon name="checkbox" />
      ) : (
        <Icon name="checkbox_rect_outline" />
      );
    }
  };

  const mCls = classNames([prefix], {
    [`${prefix}--checked`]: checked,
    [`${prefix}--disabled`]: disabled,
  });

  return (
    <label className={mCls} {...restProps} onClick={handleClick}>
      <span className={`${prefix}__icon`}>{renderIcon()}</span>
      <span className={`${prefix}__text`}>{children}</span>
    </label>
  );
};

export default Checkbox;