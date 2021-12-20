import { FC, ReactNode, useContext } from "react";
import classNames from "classnames";
import Icon from "f6-icons";

import { defineName } from "../utils/name";
import { RadioGroupContext } from "./context";
import './index.less';
import { usePropsValue } from "../utils/useValue";

export type RadioValue = string|number;

export interface RadioProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  value?: RadioValue;
  onChange: (checked: boolean) => void;
  icon: (checked: boolean) => ReactNode;
  block?: boolean;
}

const [prefix] = defineName('radio');

const defaultProps = {
  disabled: false,
  defaultChecked: false,
  block: false,
}

const Radio: FC<RadioProps> = p=> {
  const props = {...defaultProps, ...p };
  const {
    children,
    onChange,
    value,
    icon,
    block,
    ...restProps
  } = props;

  const context = useContext(RadioGroupContext);

  let [checked, setChecked] = usePropsValue({
    defaultValue: props.defaultChecked,
    value: props.checked,
    onChange: props.onChange
  });
  let disabled = props.disabled

  if (context && value !== undefined) {
    checked = context.value === props.value;
    if (context.disabled !== undefined) {
      disabled = disabled || context.disabled;
    }
  }

  const renderIcon = () => {
    if (icon) {
      return icon(checked);
    } else {
      return checked ? <Icon name="success" /> : <Icon name="circle" />;
    }
  };

  const handleClick = () => {
    if (disabled) return;
    if (context) {
      context.setValue(props.value || null);
    } else {
      setChecked(!checked);
    }
  };

  const mCls = classNames([prefix], {
    [`${prefix}--checked`]: checked,
    [`${prefix}--disabled`]: disabled,
    [`${prefix}--block`]: block
  });

  return (
    <label className={mCls} {...restProps} onClick={handleClick}>
      <span className={`${prefix}__icon`}>{renderIcon()}</span>
      <span className={`${prefix}__text`}>{children}</span>
    </label>
  );
};

export default Radio;