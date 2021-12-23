"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _show = require("./show");

var _alert = require("./alert");

var _confirm = require("./confirm");

var _dialog = _interopRequireDefault(require("./dialog"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Dialog = _dialog["default"];
Dialog.show = _show.show;
Dialog.alert = _alert.alert;
Dialog.confirm = _confirm.confirm;
var _default = Dialog;
exports["default"] = _default;