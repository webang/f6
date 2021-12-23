import _extends from "@babel/runtime/helpers/esm/extends";
import { RadioGroupContext } from "./context";
import { usePropsValue } from "../utils/useValue";
import { jsx as _jsx } from "react/jsx-runtime";
var defaultProps = {
  disabled: false,
  defaultValue: null
};

var Group = function Group(p) {
  var props = _extends({}, defaultProps, p);

  var children = props.children,
      disabled = props.disabled;

  var _usePropsValue = usePropsValue(props),
      value = _usePropsValue[0],
      setValue = _usePropsValue[1];

  return /*#__PURE__*/_jsx(RadioGroupContext.Provider, {
    value: {
      value: value,
      setValue: setValue,
      disabled: disabled
    },
    children: children
  });
};

export default Group;