import _extends from "@babel/runtime/helpers/extends";
import { defineName } from "../utils/name";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import "./index.css";
import { getPosition, isMobile, isParent } from "../utils/dom";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("swipe-cell"),
    prefix = _defineName[0];

var SwipeCell = function SwipeCell(p) {
  var className = p.className,
      children = p.children,
      right = p.right,
      left = p.left;
  var mCls = classNames([prefix, className]);
  var mRef = useRef(null);
  var rRef = useRef(null);
  var lRef = useRef(null);
  useEffect(function () {
    var handleClick = function handleClick(e) {
      if (mRef.current) {
        console.log(e.target, mRef.current);

        if (!isParent(e.target, mRef.current)) {
          setState(function (prev) {
            return _extends({}, prev, {
              translate: 0
            });
          });
        }
      }
    };

    var event = isMobile() ? 'touchstart' : 'mousedown';
    document.addEventListener(event, handleClick);
    return function () {
      document.removeEventListener(event, handleClick);
    };
  }, []);

  var _useState = useState({
    diff: 0,
    translate: 0,
    startScreen: 0,
    startTranslate: 0,
    touched: false,
    useAnimation: false
  }),
      state = _useState[0],
      setState = _useState[1];

  var startHandler = function startHandler(event) {
    var touch = getPosition(event.type, event);
    setState(function (prev) {
      return _extends({}, prev, {
        useAnimation: false,
        startScreen: touch.clientX,
        startTranslate: prev.translate,
        touched: true
      });
    });
  };

  var getMaxTranslate = function getMaxTranslate() {
    var _lRef$current, _rRef$current;

    return [((_lRef$current = lRef.current) == null ? void 0 : _lRef$current.offsetWidth) || 0, -(((_rRef$current = rRef.current) == null ? void 0 : _rRef$current.offsetWidth) || 0)];
  };

  var getValidTransform = function getValidTransform(val) {
    var _rRef$current2, _lRef$current2;

    var maxR = ((_rRef$current2 = rRef.current) == null ? void 0 : _rRef$current2.offsetWidth) || 0;
    var maxL = ((_lRef$current2 = lRef.current) == null ? void 0 : _lRef$current2.offsetWidth) || 0;
    if (val < -maxR) val = -maxR;
    if (val > maxL) val = maxL;
    return val;
  };

  var moveHandler = function moveHandler(event) {
    if (!state.touched) return;
    var touch = getPosition(event.type, event);
    var diff = touch.clientX - state.startScreen;
    var delta = diff * 1;
    setState(function (prev) {
      return _extends({}, prev, {
        diff: diff,
        useAnimation: false,
        translate: getValidTransform(prev.startTranslate + delta)
      });
    });
  };

  var endHandler = function endHandler() {
    setState(function (prev) {
      var range = getMaxTranslate();
      var translate = prev.translate;

      if (prev.diff < 0 && prev.diff < -10) {
        translate = range[1];
      } else if (prev.diff > 0 && prev.diff > 10) {
        translate = range[0];
      } else {
        translate = 0;
      }

      return _extends({}, prev, {
        diff: 0,
        translate: translate,
        useAnimation: true,
        touched: false
      });
    });
  };

  var events = isMobile() ? {
    onTouchStart: startHandler,
    onTouchMove: moveHandler,
    onTouchEnd: endHandler
  } : {
    onMouseDown: startHandler,
    onMouseMove: moveHandler,
    onMouseUp: endHandler
  };
  var style = {
    transform: "translate3d(" + state.translate + "px, 0, 0)",
    transitionDuration: state.useAnimation ? "300ms" : "0ms"
  };
  return /*#__PURE__*/_jsx("div", _extends({
    className: mCls,
    ref: mRef
  }, events, {
    children: /*#__PURE__*/_jsxs("div", {
      className: prefix + "-wrapper",
      style: style,
      children: [/*#__PURE__*/_jsx("div", {
        className: prefix + "__left",
        ref: lRef,
        children: left
      }), children, /*#__PURE__*/_jsx("div", {
        className: prefix + "__right",
        ref: rRef,
        children: right
      })]
    })
  }));
};

export default SwipeCell;