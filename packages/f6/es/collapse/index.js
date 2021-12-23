"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _collapse = _interopRequireDefault(require("./collapse"));

var _collapseItem = _interopRequireDefault(require("./collapse-item"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_collapse["default"].Item = _collapseItem["default"];
var _default = _collapse["default"];
exports["default"] = _default;