import classNames from "classnames";
import Cell from "../cell";
import { useContext, useEffect, useRef, useState } from "react";
import { defineName } from "../utils/name";
import { CollapseContext } from "./collapse-context";
import Icon from "f6-icons";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("collapse-item"),
    prefix = _defineName[0];

var CollapseItem = function CollapseItem(p) {
  var name = p.name,
      title = p.title,
      className = p.className,
      children = p.children;
  var mCls = classNames([className, prefix]);
  var context = useContext(CollapseContext);
  var contentRef = useRef(null);

  var _useState = useState({
    height: 0
  }),
      state = _useState[0],
      setState = _useState[1];

  var isOpen = context == null ? void 0 : context.openKeys.includes(name);

  var handleClick = function handleClick() {
    if (isOpen) {
      context == null ? void 0 : context.uncheck(name);
    } else {
      context == null ? void 0 : context.check(name);
    }
  };

  var bodyStyle = {
    height: isOpen ? state.height : 0,
    overflow: "hidden",
    transition: "all 300ms"
  };
  var iconStyle = {
    display: "inline-block",
    transform: "rotate(" + (isOpen ? 180 : 0) + "deg)",
    transition: "all 300ms"
  };
  useEffect(function () {
    var _contentRef$current;

    setState({
      height: ((_contentRef$current = contentRef.current) == null ? void 0 : _contentRef$current.offsetHeight) || 0
    });
  }, []);
  return /*#__PURE__*/_jsxs("div", {
    className: mCls,
    children: [/*#__PURE__*/_jsx("div", {
      className: prefix + "__head",
      onClick: handleClick,
      children: /*#__PURE__*/_jsx(Cell, {
        title: title,
        value: /*#__PURE__*/_jsx(Icon, {
          className: prefix + "__icon",
          name: "arrow-down",
          style: iconStyle
        })
      })
    }), /*#__PURE__*/_jsx("div", {
      className: prefix + "__body",
      style: bodyStyle,
      children: /*#__PURE__*/_jsx("div", {
        className: prefix + "__content",
        ref: contentRef,
        children: children
      })
    })]
  });
};

export default CollapseItem;