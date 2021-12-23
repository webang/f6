import _extends from "@babel/runtime/helpers/esm/extends";
import classNames from "classnames";
import { defineName } from "../utils/name";
import React, { useState, useRef, useEffect } from "react";
import { getPosition, isMobile } from "../utils/dom";
import "./index.css";
import Popover from "../popover";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("slider"),
    prefix = _defineName[0];

var Slider = function Slider(_ref) {
  var _classNames;

  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      left = _ref.left,
      right = _ref.right,
      onChange = _ref.onChange;

  var _useState = useState({
    diff: 0,
    translate: 0,
    startTranslate: 0,
    startScreen: 0,
    isTouched: false
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = useState([0, 0]),
      range = _useState2[0],
      setRange = _useState2[1];

  var innerRef = useRef(null);
  var popoverRef = useRef(null);
  useEffect(function () {
    var _innerRef$current;

    setRange([0, ((_innerRef$current = innerRef.current) == null ? void 0 : _innerRef$current.offsetWidth) || 0]);
  }, []);
  useEffect(function () {
    var _popoverRef$current;

    (_popoverRef$current = popoverRef.current) == null ? void 0 : _popoverRef$current.resetPosition(); // 将 move 事件挂载在 window 上
    // 避免快速拖动导致 move 元素失焦

    var move = isMobile() ? "touchmove" : "mousemove";
    var end = isMobile() ? "touchend" : "mouseup";
    window.addEventListener(move, moveHandler);
    window.addEventListener(end, endHandler);
    return function () {
      window.removeEventListener(move, moveHandler);
      window.removeEventListener(end, endHandler);
    };
  }); // 通过比率计算数值

  var getValue = function getValue() {
    var ratio = state.translate / range[1];
    var value = +(ratio * 100).toFixed(0);
    return Number.isNaN(value) ? 0 : value;
  }; // 获取有效值，避免超出范围


  var getValidTransform = function getValidTransform(val) {
    var min = range[0];
    var max = range[1];
    if (val < min) val = min;
    if (val > max) val = max;
    return val;
  };

  var startHandler = function startHandler(event) {
    var touch = getPosition(event.type, event);
    setState(function (prev) {
      return _extends({}, prev, {
        useAnimation: false,
        startScreen: touch.clientX,
        startTranslate: prev.translate,
        isTouched: true
      });
    });
  };

  var moveHandler = function moveHandler(event) {
    if (!state.isTouched) return;
    event.preventDefault();
    var touch = getPosition(event.type, event);
    var diff = touch.clientX - state.startScreen;
    setState(function (prev) {
      return _extends({}, prev, {
        diff: diff,
        translate: getValidTransform(prev.startTranslate + diff)
      });
    });
  };

  var endHandler = function endHandler() {
    if (state.startTranslate !== state.translate) {
      onChange == null ? void 0 : onChange(getValue());
    }

    setState(function (prev) {
      return _extends({}, prev, {
        isTouched: false
      });
    });
  };

  var mCls = classNames((_classNames = {
    className: className
  }, _classNames[prefix] = true, _classNames[prefix + "--disabled"] = disabled, _classNames));
  var events = {
    onTouchStart: startHandler,
    onMouseDown: startHandler
  };
  return /*#__PURE__*/_jsxs("div", {
    className: mCls,
    children: [left, /*#__PURE__*/_jsxs("div", {
      className: prefix + "__inner",
      ref: innerRef,
      children: [/*#__PURE__*/_jsx("div", {
        className: prefix + "__runway"
      }), /*#__PURE__*/_jsx("div", {
        className: prefix + "__track",
        style: {
          width: state.translate
        }
      }), /*#__PURE__*/_jsx(Popover, {
        ref: popoverRef,
        visible: state.isTouched,
        placement: "top",
        contentStyle: {
          padding: '4px 8px',
          minWidth: 36,
          textAlign: 'center',
          boxSizing: 'border-box'
        },
        content: /*#__PURE__*/_jsx("span", {
          children: getValue().toString()
        }),
        children: /*#__PURE__*/_jsx("div", {
          className: prefix + "__thumb",
          style: {
            left: state.translate
          },
          children: /*#__PURE__*/_jsx("div", _extends({}, events, {
            className: prefix + "__thumb-inner"
          }))
        })
      })]
    }), right]
  });
};

export default Slider;