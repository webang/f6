import { FC, useState } from "react";
import { RadioValue } from "./radio";
import { RadioGroupContext } from "./context";

export interface RadioGroupProps {
  defaultValue?: RadioValue|null;
  onChange?: (val: RadioValue) => void;
}

const Group: FC<RadioGroupProps> = props => {
  const { children, defaultValue, onChange } = props;
  const [ value, setValue ]= useState(defaultValue || null);

  const mSetValue = (v: RadioValue | null) => {
    setValue(v);
    if (v !== value) {
      onChange && onChange(v as RadioValue);
    }
  }

  return (
    <RadioGroupContext.Provider
      value={{
        value: value,
        setValue: mSetValue,
      }}
    >
      {children}
    </RadioGroupContext.Provider>
  )
}

export default Group;