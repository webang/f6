import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/extends";
var _excluded = ["children", "onChange", "value", "icon", "block"];
import { useContext } from "react";
import classNames from "classnames";
import Icon from "f6-icons";
import { defineName } from "../utils/name";
import { RadioGroupContext } from "./context";
import "./index.css";
import { usePropsValue } from "../utils/useValue";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName('radio'),
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

  var context = useContext(RadioGroupContext);

  var _usePropsValue = usePropsValue({
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
      return checked ? /*#__PURE__*/_jsx(Icon, {
        name: "success"
      }) : /*#__PURE__*/_jsx(Icon, {
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

  var mCls = classNames([prefix], (_classNames = {}, _classNames[prefix + "--checked"] = checked, _classNames[prefix + "--disabled"] = disabled, _classNames[prefix + "--block"] = block, _classNames));
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

export default Radio;