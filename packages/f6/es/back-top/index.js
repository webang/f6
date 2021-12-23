import Icon from "f6-icons";
import { getScrollTop } from "../utils/dom";
import { forwardRef, useEffect, useState } from "react";
import { defineName } from "../utils/name";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName('back-top'),
    prefix = _defineName[0];

var BackTop = function BackTop(_ref, ref) {
  var children = _ref.children,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? 10 : _ref$distance;

  var _useState = useState(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var updateVisible = function updateVisible() {
    setVisible(function () {
      return getScrollTop(window) > distance;
    });
  };

  var toTop = function toTop() {
    document.documentElement.scrollTop = 0;
  };

  useEffect(function () {
    window.addEventListener('scroll', updateVisible);
    return function () {
      window.removeEventListener('scroll', updateVisible);
    };
  }, []);
  if (!visible) return null;
  return /*#__PURE__*/_jsx("div", {
    className: "" + prefix,
    onClick: toTop,
    children: /*#__PURE__*/_jsxs("div", {
      className: prefix + "__inner",
      children: [/*#__PURE__*/_jsx(Icon, {
        name: "arrow-up",
        className: prefix + "__icon"
      }), children]
    })
  });
};

export default /*#__PURE__*/forwardRef(BackTop);