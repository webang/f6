import { FC, ReactNode, useContext, useState } from "react";
import classNames from "classnames";
import Icon from "f6-icons";

import { defineName } from "../utils/name";
import { RadioGroupContext } from "./context";
import './index.less';

export type RadioValue = string|number;

export interface RadioProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  value?: RadioValue;
  onChange: (checked: boolean) => void;
  icon: ReactNode | ((checked: boolean) => ReactNode);
}

const [prefix] = defineName('radio');

const Radio: FC<RadioProps> = (props) => {
  const {
    children,
    defaultChecked = false,
    disabled = false,
    onChange,
    icon,
    ...restProps
  } = props;

  const context = useContext(RadioGroupContext);
  let [checked, setChecked] = useState(defaultChecked);

  const renderIcon = () => {
    if (icon) {
      return typeof icon === 'function' ? icon(checked): icon;
    } else {
      return checked ? <Icon name="success" /> : <Icon name="circle" />;
    }
  };

  if (context) {
    checked = context.value === props.value;
  }

  const handleClick = () => {
    if (disabled) return;
    if (context) {
      context.setValue(props.value || null);
    } else {
      setChecked(!checked);
      onChange && onChange(!checked);
    }
  };

  const mCls = classNames([prefix], {
    [`${prefix}--checked`]: checked,
    [`${prefix}--disabled`]: disabled
  });

  return (
    <label className={mCls} {...restProps} onClick={handleClick}>
      <span className={`${prefix}__icon`}>{renderIcon()}</span>
      <span className={`${prefix}__text`}>{children}</span>
    </label>
  );
};

export default Radio;