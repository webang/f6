"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CellGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _name = require("../utils/name");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CellGroup = function CellGroup(_ref) {
  var children = _ref.children;

  var _defineName = (0, _name.defineName)("cell-group"),
      prefix = _defineName[0];

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: prefix,
    children: children
  });
};

exports.CellGroup = CellGroup;
var _default = CellGroup;
exports["default"] = _default;