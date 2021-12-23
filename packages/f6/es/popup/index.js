import _extends from "@babel/runtime/helpers/esm/extends";
import React from "react";
import "./index.css";
import { CSSTransition } from "react-transition-group";
import Overlay from "../overlay";
import classNames from "classnames";
import { defineName } from "../utils/name";
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var prefix = defineName("popup");

var Popup = function Popup(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      _ref$animationDuratio = _ref.animationDuration,
      animationDuration = _ref$animationDuratio === void 0 ? 300 : _ref$animationDuratio,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? "bottom" : _ref$position,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      className = _ref.className,
      onMaskClick = _ref.onMaskClick;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Overlay, {
      visible: visible,
      onClick: onMaskClick
    }), /*#__PURE__*/_jsx(CSSTransition, {
      classNames: "wax-slide-" + position,
      "in": visible,
      unmountOnExit: true,
      timeout: animationDuration,
      children: /*#__PURE__*/_jsx("div", {
        style: _extends({}, style, {
          transitionDuration: animationDuration + "ms"
        }),
        className: classNames([prefix, className, prefix + "--" + position]),
        children: children
      })
    })]
  });
};

export default Popup;