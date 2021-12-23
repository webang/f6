"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _name = require("../utils/name");

var _useValue = require("../utils/useValue");

var _trigger = _interopRequireDefault(require("./trigger"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _defineName = (0, _name.defineName)("popover"),
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

  var _usePropsValue = (0, _useValue.usePropsValue)({
    value: props.visible,
    defaultValue: props.defaultVisible,
    onChange: props.onVisibleChange
  }),
      visible = _usePropsValue[0],
      setVisible = _usePropsValue[1];

  var _useState = (0, _react.useState)({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }),
      rect = _useState[0],
      setRect = _useState[1];

  var _useState2 = (0, _react.useState)({
    width: 0,
    height: 0
  }),
      contentSize = _useState2[0],
      setContentSize = _useState2[1];

  var contentRef = (0, _react.useRef)(null);
  var triggerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
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

      var element = _reactDom["default"].findDOMNode(triggerInstance);

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

    var element = _reactDom["default"].findDOMNode(triggerInstance);

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

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      resetPosition: initRect
    };
  });
  (0, _react.useEffect)(initRect, [visible]);

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

  var portal = /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames["default"])([prefix]),
    ref: contentRef,
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: p.contentStyle,
      className: (0, _classnames["default"])([prefix + "__content", prefix + "--" + placement]),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "wax-popover__arrow"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "wax-popover__body",
        children: content
      })]
    })
  }), getContainer());

  var clonedReference = /*#__PURE__*/_react["default"].cloneElement(children, {
    onClick: function onClick() {
      setVisible(!visible);
    }
  });

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_trigger["default"], {
      ref: triggerRef,
      children: clonedReference
    }), visible && portal]
  });
};

var _default = /*#__PURE__*/(0, _react.forwardRef)(Popover);

exports["default"] = _default;