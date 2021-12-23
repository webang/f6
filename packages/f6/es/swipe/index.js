"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _swipeItem = _interopRequireDefault(require("./swipe-item"));

var _swipe = _interopRequireDefault(require("./swipe"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_swipe["default"].Item = _swipeItem["default"];
var _default = _swipe["default"];
exports["default"] = _default;