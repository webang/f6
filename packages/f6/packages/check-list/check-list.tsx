import { usePropsValue } from "../utils/useValue";
import React, { FC, ReactNode } from "react";
import { CheckListContext } from "./context";
import { defineName } from "../utils/name";

export interface CheckListProps {
  value?: string[];
  defaultValue?: string[];
  multiple?: boolean;
  renderIcon?: (checked: boolean) => ReactNode;
  onChange?: (value: string[]) => void;
  labelPosition?: 'left' | 'right'
}

const defaultProps = {
  multiple: false,
  defaultValue: [],
  labelPosition: 'left' as 'left' | 'right'
}

const [prefix] = defineName('check-list');

const CheckList: FC<CheckListProps> = (p) => {
  const props = { ...defaultProps, ...p };
  const { children, multiple, renderIcon, labelPosition  } = props;
  const [value, setValue] = usePropsValue<string[]>(props);

  const check: CheckListContext["check"] = (val) => {
    if (multiple) {
      setValue([...value, val]);
    } else {
      setValue([val]);
    }
  };

  const uncheck: CheckListContext['uncheck'] = (val) => {
    if (multiple) {
      setValue(value.filter((it) => it !== val))
    } else {
      setValue([])
    }
  };

  return (
    <div className={prefix}>
      <CheckListContext.Provider
        value={{
          value,
          check,
          uncheck,
          renderIcon,
          labelPosition
        }}
      >
        {children}
      </CheckListContext.Provider>
    </div>
  );
};

export default CheckList;
