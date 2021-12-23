"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

var _reactTransitionGroup = require("react-transition-group");

var _overlay = _interopRequireDefault(require("../overlay"));

var _classnames = _interopRequireDefault(require("classnames"));

var _name = require("../utils/name");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var prefix = (0, _name.defineName)("popup");

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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_overlay["default"], {
      visible: visible,
      onClick: onMaskClick
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
      classNames: "wax-slide-" + position,
      "in": visible,
      unmountOnExit: true,
      timeout: animationDuration,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: _extends({}, style, {
          transitionDuration: animationDuration + "ms"
        }),
        className: (0, _classnames["default"])([prefix, className, prefix + "--" + position]),
        children: children
      })
    })]
  });
};

var _default = Popup;
exports["default"] = _default;