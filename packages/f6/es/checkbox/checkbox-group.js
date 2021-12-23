"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _checkboxContext = require("./checkbox-context");

var _jsxRuntime = require("react/jsx-runtime");

var Group = function Group(props) {
  var children = props.children,
      defaultValue = props.defaultValue,
      onChange = props.onChange;

  var _useState = (0, _react.useState)(defaultValue ? Array.isArray(defaultValue) ? defaultValue : [defaultValue] : []),
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

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_checkboxContext.CheckboxGroupContext.Provider, {
    value: {
      value: value,
      check: check,
      uncheck: uncheck
    },
    children: children
  });
};

var _default = Group;
exports["default"] = _default;