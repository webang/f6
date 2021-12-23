"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = require("react");

require("./index.css");

var _jsxRuntime = require("react/jsx-runtime");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _defineName = (0, _name.defineName)("notice-bar"),
    prefix = _defineName[0];

var NoticeBar = function NoticeBar(_ref) {
  var text = _ref.text,
      _ref$start = _ref.start,
      start = _ref$start === void 0 ? 100 : _ref$start,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step;

  var _useState = (0, _react.useState)({
    offset: -start,
    running: true
  }),
      state = _useState[0],
      setState = _useState[1];

  var mRef = (0, _react.useRef)(null);
  var oRef = (0, _react.useRef)(null);

  var stop = function stop() {
    setState(function (prev) {
      return _extends({}, prev, {
        running: !prev.running
      });
    });
  };

  (0, _react.useEffect)(function () {
    if (!state.running) return;
    if (!mRef.current) return;
    if (!oRef.current) return;
    var id = setTimeout(function () {
      setState(function (prev) {
        // const oWidth = oRef.current!.offsetWidth;
        var iWidth = mRef.current.offsetWidth;
        var isFinished = iWidth <= prev.offset;
        var offset = isFinished ? -100 : prev.offset + step;
        return _extends({}, prev, {
          offset: offset
        });
      });
    }, 25);
    return function () {
      clearTimeout(id);
    };
  });
  var style = {
    left: -state.offset
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: prefix,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "__inner",
      ref: oRef,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__content",
        style: style,
        ref: mRef,
        children: text
      })
    })
  });
};

var _default = NoticeBar;
exports["default"] = _default;