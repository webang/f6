"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _f6Icons = _interopRequireDefault(require("f6-icons"));

var _dom = require("../utils/dom");

var _react = require("react");

var _name = require("../utils/name");

require("./index.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)('back-top'),
    prefix = _defineName[0];

var BackTop = function BackTop(_ref, ref) {
  var children = _ref.children,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? 10 : _ref$distance;

  var _useState = (0, _react.useState)(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var updateVisible = function updateVisible() {
    setVisible(function () {
      return (0, _dom.getScrollTop)(window) > distance;
    });
  };

  var toTop = function toTop() {
    document.documentElement.scrollTop = 0;
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', updateVisible);
    return function () {
      window.removeEventListener('scroll', updateVisible);
    };
  }, []);
  if (!visible) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "" + prefix,
    onClick: toTop,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "__inner",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_f6Icons["default"], {
        name: "arrow-up",
        className: prefix + "__icon"
      }), children]
    })
  });
};

var _default = /*#__PURE__*/(0, _react.forwardRef)(BackTop);

exports["default"] = _default;