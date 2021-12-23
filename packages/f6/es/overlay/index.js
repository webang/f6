import React from "react";
import "./index.css";
import { CSSTransition } from "react-transition-group";
import { defineName } from "../utils/name";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName("overlay"),
    prefix = _defineName[0];

var Overlay = function Overlay(_ref) {
  var _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      _ref$transitionName = _ref.transitionName,
      transitionName = _ref$transitionName === void 0 ? "fade" : _ref$transitionName,
      children = _ref.children,
      _onClick = _ref.onClick;
  var style = {
    transitionDuration: timeout + "ms"
  };
  return /*#__PURE__*/_jsx(CSSTransition, {
    "in": visible,
    timeout: timeout,
    classNames: transitionName,
    unmountOnExit: true,
    children: /*#__PURE__*/_jsx("div", {
      onClick: function onClick() {
        return _onClick == null ? void 0 : _onClick();
      },
      className: prefix,
      style: style,
      children: children
    })
  });
};

export default Overlay;