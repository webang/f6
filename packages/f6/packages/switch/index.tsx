import classNames from "classnames";
import { usePropsValue } from "../utils/useValue";
import { defineName } from "../utils/name";
import "./index.less";
import React from 'react';

const [prefix] = defineName("switch");

export interface SwitchProps {
  defaultValue?: boolean;
  value?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  value,
  defaultValue = false,
  disabled,
  onChange,
}) => {
  const [checked, setChecked] = usePropsValue({
    value,
    defaultValue,
    onChange,
  });

  const handleClick = () => {
    if (!disabled) {
      setChecked(!checked);
    }
  };

  return (
    <div
      className={classNames(prefix, {
        [`${prefix}--on`]: checked,
        [`${prefix}--disabled`]: disabled,
      })}
      onClick={handleClick}
    >
      <div
        className={classNames(`${prefix}-node`, {
          [`${prefix}-node--on`]: checked,
        })}
      />
    </div>
  );
};

export default Switch;