"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = require("react");

require("./index.css");

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)("space"),
    prefix = _defineName[0];

var Space = function Space(_ref) {
  var _classNames;

  var children = _ref.children,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? true : _ref$wrap,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction;
  var mCls = (0, _classnames["default"])([prefix], (_classNames = {}, _classNames[prefix + "-" + direction] = true, _classNames[prefix + "-wrap"] = wrap, _classNames));

  var mChildren = _react.Children.toArray(children).map(function (it) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "-item",
      children: it
    });
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: mCls,
    children: mChildren
  });
};

var _default = Space;
exports["default"] = _default;