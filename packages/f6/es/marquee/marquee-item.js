"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = require("react");

var _context = require("./context");

var _jsxRuntime = require("react/jsx-runtime");

var _defineName = (0, _name.defineName)("marquee-item"),
    prefix = _defineName[0];

var MarqueeItem = function MarqueeItem(_ref) {
  var children = _ref.children;
  var context = (0, _react.useContext)(_context.MarqueeContext);
  var height = (context == null ? void 0 : context.itemHeight) || 0;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: prefix,
    style: {
      height: height
    },
    children: children
  });
};

var _default = MarqueeItem;
exports["default"] = _default;