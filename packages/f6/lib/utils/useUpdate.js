"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var useUpdate = function useUpdate() {
  var _useState = (0, _react.useState)({}),
      setState = _useState[1];

  return function () {
    return setState({});
  };
};

var _default = useUpdate;
exports["default"] = _default;