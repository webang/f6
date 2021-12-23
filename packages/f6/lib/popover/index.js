import _extends from "@babel/runtime/helpers/extends";
import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "./index.css";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { defineName } from "../utils/name";
import { usePropsValue } from "../utils/useValue";
import Trigger from "./trigger";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

var _defineName = defineName("popover"),
    prefix = _defineName[0];

var defaultProps = {
  trigger: "click",
  placement: "bottom",
  defaultVisible: false
};

var Popover = function Popover(p, ref) {
  var props = _extends({}, defaultProps, p);

  var content = props.content,
      children = props.children,
      placement = props.placement,
      _props$verticalDistan = props.verticalDistance,
      verticalDistance = _props$verticalDistan === void 0 ? 8 : _props$verticalDistan,
      _props$horizontalDist = props.horizontalDistance,
      horizontalDistance = _props$horizontalDist === void 0 ? 8 : _props$horizontalDist;

  var _usePropsValue = usePropsValue({
    value: props.visible,
    defaultValue: props.defaultVisible,
    onChange: props.onVisibleChange
  }),
      visible = _usePropsValue[0],
      setVisible = _usePropsValue[1];

  var _useState = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }),
      rect = _useState[0],
      setRect = _useState[1];

  var _useState2 = useState({
    width: 0,
    height: 0
  }),
      contentSize = _useState2[0],
      setContentSize = _useState2[1];

  var contentRef = useRef(null);
  var triggerRef = useRef(null);
  useEffect(function () {
    var isParent = function isParent(node, target) {
      if (node === target) {
        return true;
      }

      while (node = (_node = node) == null ? void 0 : _node.parentNode) {
        var _node;

        if (node === target) {
          return true;
        }
      }

      return false;
    };

    function onClick(event) {
      var triggerInstance = triggerRef.current;
      var element = ReactDOM.findDOMNode(triggerInstance);

      if (element) {
        if (!isParent(event.target, element)) {
          setVisible(false);
        }
      }
    }

    window.addEventListener("click", onClick);
    return function () {
      window.removeEventListener("click", onClick);
    };
  }, []);

  var initRect = function initRect() {
    if (!triggerRef.current) return;
    var triggerInstance = triggerRef.current;
    var element = ReactDOM.findDOMNode(triggerInstance);
    if (!element) return;
    var rect = element.getBoundingClientRect();
    setRect({
      width: rect.width,
      height: rect.height,
      y: rect.y + document.documentElement.scrollTop || 0,
      x: rect.x + document.documentElement.scrollLeft || 0
    });

    if (contentRef.current) {
      var _rect = contentRef.current.getBoundingClientRect();

      setContentSize({
        width: _rect.width,
        height: _rect.height
      });
    }
  };

  useImperativeHandle(ref, function () {
    return {
      resetPosition: initRect
    };
  });
  useEffect(initRect, [visible]);

  var getContainer = function getContainer() {
    return document.body;
  };

  var getX = function getX(placement) {
    switch (placement) {
      case "bottom":
      case "top":
        return rect.x + (rect.width - contentSize.width) / 2 + "px";

      case "bottom-start":
      case "top-start":
        return rect.x + "px";

      case "bottom-end":
      case "top-end":
        return rect.x - contentSize.width + rect.width + "px";

      case "right":
      case "right-end":
      case "right-start":
        return rect.x + rect.width + horizontalDistance + "px";

      case "left":
      case "left-end":
      case "left-start":
        return rect.x - contentSize.width - horizontalDistance + "px";
    }
  };

  var getY = function getY(placement) {
    switch (placement) {
      case "bottom":
      case "bottom-end":
      case "bottom-start":
        return rect.y + rect.height + verticalDistance + "px";

      case "top":
      case "top-end":
      case "top-start":
        return rect.y - contentSize.height - verticalDistance + "px";

      case "left":
      case "right":
        return rect.y - (contentSize.height - rect.height) / 2 + "px";

      case "left-start":
      case "right-start":
        return rect.y + "px";

      case "left-end":
      case "right-end":
        return rect.y - contentSize.height + rect.height + "px";
    }
  };

  var style = {
    left: getX(placement),
    top: getY(placement)
  };
  var portal = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/_jsx("div", {
    className: classNames([prefix]),
    ref: contentRef,
    style: style,
    children: /*#__PURE__*/_jsxs("div", {
      style: p.contentStyle,
      className: classNames([prefix + "__content", prefix + "--" + placement]),
      children: [/*#__PURE__*/_jsx("div", {
        className: "wax-popover__arrow"
      }), /*#__PURE__*/_jsx("div", {
        className: "wax-popover__body",
        children: content
      })]
    })
  }), getContainer());
  var clonedReference = /*#__PURE__*/React.cloneElement(children, {
    onClick: function onClick() {
      setVisible(!visible);
    }
  });
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Trigger, {
      ref: triggerRef,
      children: clonedReference
    }), visible && portal]
  });
};

export default /*#__PURE__*/forwardRef(Popover);