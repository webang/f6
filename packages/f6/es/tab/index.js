import React, { useState } from "react";
import { defineName } from "../utils/name";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("tab"),
    prefix = _defineName[0];

var Tab = function Tab(_ref) {
  var children = _ref.children,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? 0 : _ref$defaultValue;

  var _useState = useState(defaultValue),
      current = _useState[0],
      setCurrent = _useState[1];

  var list = children;

  var renderContent = function renderContent() {};

  var renderTabs = function renderTabs() {
    return list.map(function (it, index) {
      return /*#__PURE__*/_jsx("div", {
        className: "wax-tab-item",
        onClick: function onClick() {
          setCurrent(index);
        },
        children: /*#__PURE__*/_jsx("span", {
          children: it.props.title
        })
      });
    });
  };

  return /*#__PURE__*/_jsx("div", {
    className: prefix,
    children: /*#__PURE__*/_jsxs("div", {
      className: "wax-tab__wrap",
      children: [/*#__PURE__*/_jsx("div", {
        className: "wax-tab__list",
        children: renderTabs()
      }), /*#__PURE__*/_jsx("div", {
        className: "wax-tab__line",
        style: {
          left: current / list.length * 100 + "%"
        }
      })]
    })
  });
};

var itemPrefix = prefix + "-item";

var TabItem = function TabItem(_ref2) {
  var _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? "" : _ref2$title;
  return /*#__PURE__*/_jsx("div", {
    className: itemPrefix,
    children: title
  });
};

Tab.TabItem = TabItem;
export default Tab;