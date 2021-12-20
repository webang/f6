import React from "react";
import useUpdate from "./useUpdate";

type UseValueParams<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (val: T) => void;
}

export function usePropsValue<T>(p: UseValueParams<T>) {
  const { value, defaultValue, onChange } = p;
  const stateRef = React.useRef(value !== undefined ? value : defaultValue);
  const update = useUpdate();

  if (value !== undefined) {
    stateRef.current = value;
  }

  const setState = (v: T) => {
    // const isChanged = stateRef.current !== v;
    if (value === undefined) {
      stateRef.current = v;
      update();
    }
    onChange?.(v);
  }

  return [stateRef.current, setState] as const;
}