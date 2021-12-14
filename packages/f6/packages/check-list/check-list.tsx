import { usePropsValue } from "../utils/useValue";
import { FC, ReactNode } from "react";
import { CheckListContext } from "./context";
import { defineName } from "../utils/name";

export interface CheckListProps {
  value?: string[];
  defaultValue?: string[];
  multiple?: boolean;
  activeIcon?: ReactNode;
  onChange?: (value: string[]) => void;
}

const defaultProps = {
  multiple: false,
  defaultValue: [],
}

const [prefix] = defineName('check-list');

const CheckList: FC<CheckListProps> = (p) => {
  const props = { ...defaultProps, ...p };
  const { children, multiple } = props;
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
          uncheck
        }}
      >
        {children}
      </CheckListContext.Provider>
    </div>
  );
};

export default CheckList;
