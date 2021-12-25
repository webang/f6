import React, { FC, useRef, useState } from "react";
import { CheckboxValue } from "./checkbox";
import { CheckboxGroupContext } from "./checkbox-context";

export interface CheckboxGroupProps {
  defaultValue?: CheckboxValue[];
  onChange?: (val: CheckboxValue[]) => void;
}

const Group: FC<CheckboxGroupProps> = (props) => {
  const { children, defaultValue, onChange } = props;
  const [value, setValue] = useState(
    defaultValue
      ? Array.isArray(defaultValue)
        ? defaultValue
        : [defaultValue]
      : []
  );

  const check = (val: CheckboxValue) => {
    setValue((prev) => {
      const nVal = [...prev, val];
      onChange?.(nVal);
      return nVal;
    });
  };

  const uncheck = (val: CheckboxValue) => {
    setValue((value) => {
      const nVal = value.filter((item) => item !== val);
      onChange?.(nVal);
      return nVal;
    });
  };

  return (
    <CheckboxGroupContext.Provider
      value={{
        value: value,
        check: check,
        uncheck: uncheck,
      }}
    >
      {children}
    </CheckboxGroupContext.Provider>
  );
};

export default Group;