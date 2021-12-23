import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["size", "color", "shape", "fill", "block", "loading", "disabled", "className", "children", "title", "onClick"];
import React, { useState } from "react";
import "./index.css";
import classNames from "classnames";
import { defineName } from "../utils/name";
import Spinner from "../spinner";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("button"),
    prefix = _defineName[0];

var Button = function Button(_ref) {
  var _ref2;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "middle" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "default" : _ref$color,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? "default" : _ref$shape,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'solid' : _ref$fill,
      _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      onClick = _ref.onClick,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      active = _useState[0],
      setActive = _useState[1];

  var cls = classNames([prefix, className, prefix + "--" + size, prefix + "--" + color, prefix + "--shape-" + shape, prefix + "--fill-" + fill, (_ref2 = {}, _ref2[prefix + "--block"] = block, _ref2[prefix + "--active"] = active, _ref2[prefix + "--loading"] = loading, _ref2[prefix + "--disabled"] = disabled, _ref2)]);

  var onMouseDown = function onMouseDown(event) {
    if (disabled || loading) return;
    setActive(true);
    restProps.onMouseDown && restProps.onMouseDown(event);
  };

  var onMouseUp = function onMouseUp(event) {
    if (disabled || loading) return;
    setActive(false);
    restProps.onMouseUp && restProps.onMouseUp(event);
  };

  return /*#__PURE__*/_jsxs("button", _extends({
    onClick: onClick,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    className: cls
  }, restProps, {
    children: [loading && /*#__PURE__*/_jsx(Spinner, {
      style: {
        width: '18px',
        height: '18px',
        marginRight: '4px'
      }
    }), /*#__PURE__*/_jsx("div", {
      children: children || title
    })]
  }));
};

export default Button;