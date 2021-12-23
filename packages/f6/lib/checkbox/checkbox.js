"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = require("react");

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _name = require("../utils/name");

var _checkboxContext = require("./checkbox-context");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children", "defaultChecked", "disabled", "onChange", "icon", "value"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _defineName = (0, _name.defineName)("checkbox"),
    prefix = _defineName[0];

var Checkbox = function Checkbox(props) {
  var _classNames;

  var children = props.children,
      _props$defaultChecked = props.defaultChecked,
      defaultChecked = _props$defaultChecked === void 0 ? false : _props$defaultChecked,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      onChange = props.onChange,
      icon = props.icon,
      value = props.value,
      restProps = _objectWithoutPropertiesLoose(props, _excluded);

  var _useState = (0, _react.useState)(defaultChecked),
      checked = _useState[0],
      setChecked = _useState[1];

  var context = (0, _react.useContext)(_checkboxContext.CheckboxGroupContext);

  if (context && value !== undefined) {
    checked = context.value.includes(value);
  }

  var handleClick = function handleClick() {
    if (disabled) return;

    if (context && value !== undefined) {
      checked = context.value.includes(value);

      if (!checked) {
        context.check(value);
      } else {
        context.uncheck(value);
      }
    } else {
      setChecked(!checked);
      onChange && onChange(!checked);
    }
  };

  var renderIcon = function renderIcon() {
    if (icon) {
      return typeof icon === "function" ? icon(checked) : icon;
    } else {
      return checked ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        name: "checkbox"
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        name: "checkbox_rect_outline"
      });
    }
  };

  var mCls = (0, _classnames["default"])([prefix], (_classNames = {}, _classNames[prefix + "--checked"] = checked, _classNames[prefix + "--disabled"] = disabled, _classNames));
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

var _default = Checkbox;
exports["default"] = _default;