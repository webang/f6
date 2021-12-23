"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _marqueeItem = _interopRequireDefault(require("./marquee-item"));

var _marquee = _interopRequireDefault(require("./marquee"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_marquee["default"].Item = _marqueeItem["default"];
var _default = _marquee["default"];
exports["default"] = _default;