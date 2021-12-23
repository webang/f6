import _extends from "@babel/runtime/helpers/extends";
import React from "react";
import { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import Icon from "f6-icons";
import { defineName } from "../utils/name";
import CheckList from "../check-list";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("dropdown-menu"),
    prefix = _defineName[0];

var DropdownMenu = function DropdownMenu(_ref) {
  var onClickItem = _ref.onClickItem,
      className = _ref.className,
      onClose = _ref.onClose,
      children = _ref.children;

  var _useState = useState({
    top: 0,
    current: undefined
  }),
      state = _useState[0],
      setState = _useState[1];

  var barRef = useRef(null);
  var mChildren = React.Children.toArray(children);

  var updatePosition = function updatePosition() {
    if (barRef.current) {
      var rect = barRef.current.getBoundingClientRect();
      setState(function (prev) {
        return _extends({}, prev, {
          top: rect.top + rect.height
        });
      });
    }
  };

  useEffect(function () {
    updatePosition();
  }, []);
  useEffect(function () {
    window.addEventListener('scroll', updatePosition);
    return function () {
      window.removeEventListener('scroll', updatePosition);
    };
  }, [updatePosition]);
  var mCls = classNames([className, prefix]);
  var maskStl = {
    top: state.top
  };

  var handleClick = function handleClick(i) {
    if (i === state.current) {
      setState(function (prev) {
        return _extends({}, prev, {
          current: undefined
        });
      });
      onClose == null ? void 0 : onClose();
    } else {
      setState(function (prev) {
        return _extends({}, prev, {
          current: i
        });
      });
    }
  };

  var menus = mChildren.map(function (it, index) {
    var element = it;
    var style = {
      transform: "rotate(" + (state.current == index ? 180 : 0) + "deg)"
    };
    return /*#__PURE__*/_jsxs("div", {
      className: prefix + "-item",
      onClick: function onClick() {
        return handleClick(index);
      },
      children: [/*#__PURE__*/_jsx("div", {
        className: prefix + "-item-name",
        children: element.props.title
      }), /*#__PURE__*/_jsx(Icon, {
        style: style,
        className: prefix + "__icon",
        name: "arrow-down"
      })]
    });
  });

  var renderAction = function renderAction() {
    return mChildren.map(function (it, index) {
      if (index !== state.current) return null;
      var element = it;
      return (element.props.actions || []).map(function (action) {
        return /*#__PURE__*/_jsx(CheckList.Item, {
          onClick: function onClick() {
            onClickItem == null ? void 0 : onClickItem({
              index: index,
              action: action
            });
          },
          value: action.value,
          children: action.name
        });
      });
    });
  };

  var renderMask = function renderMask() {
    if (state.current === undefined) return null;
    return /*#__PURE__*/_jsx("div", {
      className: prefix + "__mask",
      style: maskStl,
      children: /*#__PURE__*/_jsx("div", {
        className: prefix + "__content",
        children: /*#__PURE__*/_jsx(CheckList, {
          children: renderAction()
        })
      })
    });
  };

  return /*#__PURE__*/_jsxs("div", {
    className: mCls,
    children: [/*#__PURE__*/_jsx("div", {
      ref: barRef,
      className: prefix + "-items",
      children: menus
    }), renderMask()]
  });
};

export default DropdownMenu;