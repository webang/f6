"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CheckList", {
  enumerable: true,
  get: function get() {
    return _checkList["default"];
  }
});
Object.defineProperty(exports, "CheckListItem", {
  enumerable: true,
  get: function get() {
    return _checkItem["default"];
  }
});
exports["default"] = void 0;

var _checkList = _interopRequireDefault(require("./check-list"));

var _checkItem = _interopRequireDefault(require("./check-item"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_checkList["default"].Item = _checkItem["default"];
var _default = _checkList["default"];
exports["default"] = _default;