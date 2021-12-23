"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cell = _interopRequireDefault(require("./cell"));

var _group = _interopRequireDefault(require("./group"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_cell["default"].Group = _group["default"];
var _default = _cell["default"];
exports["default"] = _default;