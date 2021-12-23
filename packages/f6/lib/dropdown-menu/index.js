"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropdownMenu = _interopRequireDefault(require("./dropdown-menu"));

var _dropdownMenuItem = _interopRequireDefault(require("./dropdown-menu-item"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dropdownMenu["default"].Item = _dropdownMenuItem["default"];
var _default = _dropdownMenu["default"];
exports["default"] = _default;