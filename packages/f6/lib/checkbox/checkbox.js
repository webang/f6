import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "defaultChecked", "disabled", "onChange", "icon", "value"];
import classNames from "classnames";
import { useContext, useState } from "react";
import Icon from "f6-icons";
import { defineName } from "../utils/name";
import { CheckboxGroupContext } from "./checkbox-context";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("checkbox"),
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

  var _useState = useState(defaultChecked),
      checked = _useState[0],
      setChecked = _useState[1];

  var context = useContext(CheckboxGroupContext);

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
      return checked ? /*#__PURE__*/_jsx(Icon, {
        name: "checkbox"
      }) : /*#__PURE__*/_jsx(Icon, {
        name: "checkbox_rect_outline"
      });
    }
  };

  var mCls = classNames([prefix], (_classNames = {}, _classNames[prefix + "--checked"] = checked, _classNames[prefix + "--disabled"] = disabled, _classNames));
  return /*#__PURE__*/_jsxs("label", _extends({
    className: mCls
  }, restProps, {
    onClick: handleClick,
    children: [/*#__PURE__*/_jsx("span", {
      className: prefix + "__icon",
      children: renderIcon()
    }), /*#__PURE__*/_jsx("span", {
      className: prefix + "__text",
      children: children
    })]
  }));
};

export default Checkbox;