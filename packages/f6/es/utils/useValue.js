import React from "react";
import useUpdate from "./useUpdate";
export function usePropsValue(p) {
  var value = p.value,
      defaultValue = p.defaultValue,
      onChange = p.onChange;
  var stateRef = React.useRef(value !== undefined ? value : defaultValue);
  var update = useUpdate();

  if (value !== undefined) {
    stateRef.current = value;
  }

  var setState = function setState(v) {
    // const isChanged = stateRef.current !== v;
    if (value === undefined) {
      stateRef.current = v;
      update();
    }

    onChange == null ? void 0 : onChange(v);
  };

  return [stateRef.current, setState];
}