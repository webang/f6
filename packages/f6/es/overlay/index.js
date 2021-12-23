"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

var _reactTransitionGroup = require("react-transition-group");

var _name = require("../utils/name");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)("overlay"),
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.CSSTransition, {
    "in": visible,
    timeout: timeout,
    classNames: transitionName,
    unmountOnExit: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: function onClick() {
        return _onClick == null ? void 0 : _onClick();
      },
      className: prefix,
      style: style,
      children: children
    })
  });
};

var _default = Overlay;
exports["default"] = _default;