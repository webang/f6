import { useState } from "react";
import { CheckboxGroupContext } from "./checkbox-context";
import { jsx as _jsx } from "react/jsx-runtime";

var Group = function Group(props) {
  var children = props.children,
      defaultValue = props.defaultValue,
      onChange = props.onChange;

  var _useState = useState(defaultValue ? Array.isArray(defaultValue) ? defaultValue : [defaultValue] : []),
      value = _useState[0],
      setValue = _useState[1];

  var check = function check(val) {
    setValue(function (prev) {
      var nVal = [].concat(prev, [val]);
      onChange == null ? void 0 : onChange(nVal);
      return nVal;
    });
  };

  var uncheck = function uncheck(val) {
    setValue(function (value) {
      var nVal = value.filter(function (item) {
        return item !== val;
      });
      onChange == null ? void 0 : onChange(nVal);
      return nVal;
    });
  };

  return /*#__PURE__*/_jsx(CheckboxGroupContext.Provider, {
    value: {
      value: value,
      check: check,
      uncheck: uncheck
    },
    children: children
  });
};

export default Group;