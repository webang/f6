"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _flow = _interopRequireDefault(require("./flow"));

var _flowItem = _interopRequireDefault(require("./flow-item"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_flow["default"].Item = _flowItem["default"];
var _default = _flow["default"];
exports["default"] = _default;