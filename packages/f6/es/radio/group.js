"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _context = require("./context");

var _useValue = require("../utils/useValue");

var _jsxRuntime = require("react/jsx-runtime");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultProps = {
  disabled: false,
  defaultValue: null
};

var Group = function Group(p) {
  var props = _extends({}, defaultProps, p);

  var children = props.children,
      disabled = props.disabled;

  var _usePropsValue = (0, _useValue.usePropsValue)(props),
      value = _usePropsValue[0],
      setValue = _usePropsValue[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_context.RadioGroupContext.Provider, {
    value: {
      value: value,
      setValue: setValue,
      disabled: disabled
    },
    children: children
  });
};

var _default = Group;
exports["default"] = _default;