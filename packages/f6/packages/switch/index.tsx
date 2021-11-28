import classNames from "classnames";
import { FC, useState } from "react";
import { defineName } from "../utils/name";
import "./index.less";

const [prefix] = defineName("switch");

export interface SwitchProps {
  defaultValue: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: FC<SwitchProps> = ({ defaultValue = false, onChange }) => {
  const [checked, setChecked] = useState(defaultValue);

  const handleClick = () => {
    setChecked((prev) => {
      onChange && onChange(!prev);
      return !prev;
    });
  };

  return (
    <div
      className={classNames(prefix, {
        [`${prefix}--on`]: checked,
      })}
      onClick={handleClick}
    >
      <div
        className={classNames(`${prefix}-node`, {
          [`${prefix}-node--on`]: checked,
        })}
      ></div>
    </div>
  );
};

export default Switch;
