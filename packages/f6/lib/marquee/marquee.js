import _extends from "@babel/runtime/helpers/extends";
import { defineName } from "../utils/name";
import React, { useState, useEffect } from "react";
import { MarqueeContext } from "./context";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";

var _defineName = defineName("marquee"),
    prefix = _defineName[0];

var Marquee = function Marquee(_ref) {
  var children = _ref.children,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 2000 : _ref$interval,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 300 : _ref$duration,
      _ref$itemHeight = _ref.itemHeight,
      itemHeight = _ref$itemHeight === void 0 ? 30 : _ref$itemHeight;

  var _useState = useState({
    translate: 0,
    current: 0,
    useAnimate: false
  }),
      state = _useState[0],
      setState = _useState[1];

  useEffect(function () {
    var id = setTimeout(function () {
      setState(function (prev) {
        var next = prev.current === mList.length ? 0 : prev.current + 1;
        return _extends({}, prev, {
          current: next,
          useAnimate: prev.current !== mList.length
        });
      });
    }, interval);
    return function () {
      clearTimeout(id);
    };
  });
  var mList = React.Children.toArray(children);
  var style = {
    transform: "translateY(" + state.current * -itemHeight + "px)",
    transition: "transform " + (state.useAnimate ? duration : 0) + "ms"
  };
  return /*#__PURE__*/_jsx("div", {
    className: prefix,
    style: {
      height: itemHeight + "px"
    },
    children: /*#__PURE__*/_jsx("div", {
      className: prefix + "__inner",
      style: style,
      children: /*#__PURE__*/_jsxs(MarqueeContext.Provider, {
        value: {
          itemHeight: itemHeight
        },
        children: [children, children]
      })
    })
  });
};

export default Marquee;