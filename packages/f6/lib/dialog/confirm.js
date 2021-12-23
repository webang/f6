"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirm = confirm;

var _show = require("./show");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function confirm(props) {
  return new Promise(function (resolve, _) {
    return (0, _show.show)(_extends({}, props, {
      showCancelButton: true,
      showConfirmButton: true,
      appear: true,
      onCancel: function onCancel() {
        resolve((props.onCancel == null ? void 0 : props.onCancel()) || 'cancel');
      },
      onOk: function onOk() {
        resolve((props.onOk == null ? void 0 : props.onOk()) || 'ok');
      }
    }));
  });
}