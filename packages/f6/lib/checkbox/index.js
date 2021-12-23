"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _checkbox = _interopRequireDefault(require("./checkbox"));

var _checkboxGroup = _interopRequireDefault(require("./checkbox-group"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_checkbox["default"].Group = _checkboxGroup["default"];
var _default = _checkbox["default"];
exports["default"] = _default;