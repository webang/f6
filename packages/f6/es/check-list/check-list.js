"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useValue = require("../utils/useValue");

var _context = require("./context");

var _name = require("../utils/name");

var _jsxRuntime = require("react/jsx-runtime");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultProps = {
  multiple: false,
  defaultValue: [],
  labelPosition: 'left'
};

var _defineName = (0, _name.defineName)('check-list'),
    prefix = _defineName[0];

var CheckList = function CheckList(p) {
  var props = _extends({}, defaultProps, p);

  var children = props.children,
      multiple = props.multiple,
      renderIcon = props.renderIcon,
      labelPosition = props.labelPosition;

  var _usePropsValue = (0, _useValue.usePropsValue)(props),
      value = _usePropsValue[0],
      setValue = _usePropsValue[1];

  var check = function check(val) {
    if (multiple) {
      setValue([].concat(value, [val]));
    } else {
      setValue([val]);
    }
  };

  var uncheck = function uncheck(val) {
    if (multiple) {
      setValue(value.filter(function (it) {
        return it !== val;
      }));
    } else {
      setValue([]);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: prefix,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_context.CheckListContext.Provider, {
      value: {
        value: value,
        check: check,
        uncheck: uncheck,
        renderIcon: renderIcon,
        labelPosition: labelPosition
      },
      children: children
    })
  });
};

var _default = CheckList;
exports["default"] = _default;