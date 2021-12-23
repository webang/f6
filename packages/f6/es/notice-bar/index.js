import _extends from "@babel/runtime/helpers/esm/extends";
import { defineName } from "../utils/name";
import { useRef, useState, useEffect } from "react";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName("notice-bar"),
    prefix = _defineName[0];

var NoticeBar = function NoticeBar(_ref) {
  var text = _ref.text,
      _ref$start = _ref.start,
      start = _ref$start === void 0 ? 100 : _ref$start,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step;

  var _useState = useState({
    offset: -start,
    running: true
  }),
      state = _useState[0],
      setState = _useState[1];

  var mRef = useRef(null);
  var oRef = useRef(null);

  var stop = function stop() {
    setState(function (prev) {
      return _extends({}, prev, {
        running: !prev.running
      });
    });
  };

  useEffect(function () {
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
  return /*#__PURE__*/_jsx("div", {
    className: prefix,
    children: /*#__PURE__*/_jsx("div", {
      className: prefix + "__inner",
      ref: oRef,
      children: /*#__PURE__*/_jsx("div", {
        className: prefix + "__content",
        style: style,
        ref: mRef,
        children: text
      })
    })
  });
};

export default NoticeBar;