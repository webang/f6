import _extends from "@babel/runtime/helpers/extends";
import { defineName } from "../utils/name";
import React, { useEffect, useState, useRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName("affix"),
    prefix = _defineName[0];

var getRectY = function getRectY(element) {
  return element.getBoundingClientRect().top;
};

var getWindowScrollTop = function getWindowScrollTop() {
  return document.documentElement.scrollTop;
};

var addEvent = function addEvent(target, type, cb) {
  target.addEventListener(type, cb);
};

var removeEvent = function removeEvent(target, type, cb) {
  target.removeEventListener(type, cb);
};

var Affix = function Affix(_ref) {
  var top = _ref.top,
      children = _ref.children,
      wrapperStyle = _ref.wrapperStyle,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? window : _ref$container;

  var _useState = useState({
    fixed: false,
    offsetTop: 0,
    pOffsetTop: 0,
    distance: 0
  }),
      state = _useState[0],
      setState = _useState[1];

  var ref = useRef(null);
  var target = container;
  var isWindow = target === window;
  useEffect(function () {
    var pOffsetTop = 0;
    var offsetTop = getRectY(ref.current);

    if (typeof container === "function") {
      target = container();
      pOffsetTop = getRectY(target);
    }

    if (isWindow) {
      offsetTop = offsetTop + getWindowScrollTop();
    }

    setState(function (prev) {
      return _extends({}, prev, {
        offsetTop: offsetTop,
        pOffsetTop: pOffsetTop,
        distance: offsetTop - pOffsetTop
      });
    });

    var handleScroll = function handleScroll() {
      if (target === window) {
        var scrollTop = getWindowScrollTop();
        setState(function (prev) {
          return _extends({}, prev, {
            fixed: scrollTop + (top || 0) >= offsetTop
          });
        });
      } else {
        target = target;
        var _scrollTop = target.scrollTop;
        pOffsetTop = getRectY(target);
        setState(function (prev) {
          return _extends({}, prev, {
            pOffsetTop: pOffsetTop,
            fixed: _scrollTop + (top || 0) >= prev.distance
          });
        });
      }
    };

    handleScroll(); // 当页面滚动时，需要更新 target 的 offsetTop

    var onWindowScroll = function onWindowScroll() {
      target = target;
      var scrollTop = target.scrollTop;
      pOffsetTop = getRectY(target);
      setState(function (prev) {
        return _extends({}, prev, {
          pOffsetTop: pOffsetTop,
          fixed: scrollTop + (top || 0) >= prev.distance
        });
      });
    };

    if (!isWindow) addEvent(window, "scroll", onWindowScroll);
    addEvent(target, "scroll", handleScroll);
    return function () {
      removeEvent(target, "scroll", handleScroll);
      if (!isWindow) removeEvent(window, "scroll", onWindowScroll);
    };
  }, []);
  var style = state.fixed ? {
    position: "fixed",
    top: isWindow ? top : state.pOffsetTop + (top || 0)
  } : {};

  if (wrapperStyle) {
    _extends(style, wrapperStyle({
      fixed: state.fixed
    }));
  }

  return /*#__PURE__*/_jsx("div", {
    className: prefix,
    ref: ref,
    style: style,
    children: children
  });
};

export default Affix;