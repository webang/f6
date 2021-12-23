"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _classnames = _interopRequireDefault(require("classnames"));

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _name = require("../utils/name");

var _context = require("./context");

require("./index.css");

var _useValue = require("../utils/useValue");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "onChange", "value", "icon", "block"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _defineName = (0, _name.defineName)('radio'),
    prefix = _defineName[0];

var defaultProps = {
  disabled: false,
  defaultChecked: false,
  block: false
};

var Radio = function Radio(p) {
  var _classNames;

  var props = _extends({}, defaultProps, p);

  var children = props.children,
      onChange = props.onChange,
      value = props.value,
      icon = props.icon,
      block = props.block,
      restProps = _objectWithoutPropertiesLoose(props, _excluded);

  var context = (0, _react.useContext)(_context.RadioGroupContext);

  var _usePropsValue = (0, _useValue.usePropsValue)({
    defaultValue: props.defaultChecked,
    value: props.checked,
    onChange: props.onChange
  }),
      checked = _usePropsValue[0],
      setChecked = _usePropsValue[1];

  var disabled = props.disabled;

  if (context && value !== undefined) {
    checked = context.value === props.value;

    if (context.disabled !== undefined) {
      disabled = disabled || context.disabled;
    }
  }

  var renderIcon = function renderIcon() {
    if (icon) {
      return icon(checked);
    } else {
      return checked ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        name: "success"
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        name: "circle"
      });
    }
  };

  var handleClick = function handleClick() {
    if (disabled) return;

    if (context) {
      context.setValue(props.value || null);
    } else {
      setChecked(!checked);
    }
  };

  var mCls = (0, _classnames["default"])([prefix], (_classNames = {}, _classNames[prefix + "--checked"] = checked, _classNames[prefix + "--disabled"] = disabled, _classNames[prefix + "--block"] = block, _classNames));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", _extends({
    className: mCls
  }, restProps, {
    onClick: handleClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: prefix + "__icon",
      children: renderIcon()
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: prefix + "__text",
      children: children
    })]
  }));
};

var _default = Radio;
exports["default"] = _default;