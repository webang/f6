import { FC, useState } from "react";
import { RadioValue } from "./radio";
import { RadioGroupContext } from "./context";
import { usePropsValue } from "../utils/useValue";

export interface RadioGroupProps {
  defaultValue?: RadioValue|null;
  value?: RadioValue|null;
  disabled?: boolean;
  onChange?: (val: RadioValue|null) => void;
}

const defaultProps = {
  disabled: false,
  defaultValue: null
}

const Group: FC<RadioGroupProps> = p => {
  const props = { ...defaultProps, ...p };
  const { children, disabled } = props;
  const [value, setValue]= usePropsValue(props);

  return (
    <RadioGroupContext.Provider
      value={{
        value,
        setValue,
        disabled
      }}
    >
      {children}
    </RadioGroupContext.Provider>
  )
}

export default Group;