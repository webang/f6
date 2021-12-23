"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactTransitionGroup = require("react-transition-group");

require("./index.css");

var _jsxRuntime = require("react/jsx-runtime");

var Transition = function Transition(_ref) {
  var type = _ref.type,
      _in = _ref["in"],
      timeout = _ref.timeout,
      children = _ref.children,
      _ref$appear = _ref.appear,
      appear = _ref$appear === void 0 ? false : _ref$appear;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
    classNames: type,
    "in": _in,
    unmountOnExit: true,
    appear: appear,
    timeout: timeout,
    children: children
  });
};

var _default = Transition;
exports["default"] = _default;