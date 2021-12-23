import React from "react";
import classNames from "classnames";
import { defineName } from "../utils/name";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("cell"),
    prefix = _defineName[0];

var Cell = function Cell(_ref) {
  var _classNames;

  var className = _ref.className,
      title = _ref.title,
      titleClass = _ref.titleClass,
      label = _ref.label,
      value = _ref.value,
      link = _ref.link,
      onClick = _ref.onClick,
      icon = _ref.icon,
      _ref$border = _ref.border,
      border = _ref$border === void 0 ? true : _ref$border,
      _ref$bodyStyle = _ref.bodyStyle,
      bodyStyle = _ref$bodyStyle === void 0 ? {} : _ref$bodyStyle,
      children = _ref.children,
      _ref$titleAlign = _ref.titleAlign,
      titleAlign = _ref$titleAlign === void 0 ? "left" : _ref$titleAlign;
  var mCls = classNames([className], (_classNames = {}, _classNames[prefix] = true, _classNames[prefix + "--link"] = link, _classNames["hairline-bottom"] = border, _classNames[prefix + "--title-" + titleAlign] = true, _classNames));

  var handleClick = function handleClick(event) {
    onClick && onClick(event);
  };

  var renderIcon = function renderIcon() {
    if (!icon) return null;
    return /*#__PURE__*/_jsx("div", {
      className: prefix + "__icon",
      children: icon
    });
  };

  var renderMain = function renderMain() {
    var cls = classNames([titleClass, prefix + "__main"]);
    return /*#__PURE__*/_jsxs("div", {
      className: cls,
      children: [/*#__PURE__*/_jsxs("div", {
        className: prefix + "__title",
        children: [renderIcon(), /*#__PURE__*/_jsx("span", {
          children: title
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: prefix + "__content",
        children: children
      })]
    });
  };

  return /*#__PURE__*/_jsxs("div", {
    className: mCls,
    onClick: handleClick,
    children: [/*#__PURE__*/_jsxs("div", {
      className: prefix + "__head",
      children: [renderMain(), /*#__PURE__*/_jsx("div", {
        className: prefix + "__value",
        children: value
      }), link && /*#__PURE__*/_jsx("img", {
        className: prefix + "__arrow",
        src: require("../svg/arrow_right.svg")["default"],
        alt: ""
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: prefix + "__body",
      style: bodyStyle,
      children: label && /*#__PURE__*/_jsx("div", {
        className: prefix + "__label",
        children: label
      })
    })]
  });
};

export default Cell;