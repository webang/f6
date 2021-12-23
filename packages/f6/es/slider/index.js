"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _name = require("../utils/name");

var _react = _interopRequireWildcard(require("react"));

var _dom = require("../utils/dom");

require("./index.css");

var _popover = _interopRequireDefault(require("../popover"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _defineName = (0, _name.defineName)("slider"),
    prefix = _defineName[0];

var Slider = function Slider(_ref) {
  var _classNames;

  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      left = _ref.left,
      right = _ref.right,
      onChange = _ref.onChange;

  var _useState = (0, _react.useState)({
    diff: 0,
    translate: 0,
    startTranslate: 0,
    startScreen: 0,
    isTouched: false
  }),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = (0, _react.useState)([0, 0]),
      range = _useState2[0],
      setRange = _useState2[1];

  var innerRef = (0, _react.useRef)(null);
  var popoverRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _innerRef$current;

    setRange([0, ((_innerRef$current = innerRef.current) == null ? void 0 : _innerRef$current.offsetWidth) || 0]);
  }, []);
  (0, _react.useEffect)(function () {
    var _popoverRef$current;

    (_popoverRef$current = popoverRef.current) == null ? void 0 : _popoverRef$current.resetPosition(); // 将 move 事件挂载在 window 上
    // 避免快速拖动导致 move 元素失焦

    var move = (0, _dom.isMobile)() ? "touchmove" : "mousemove";
    var end = (0, _dom.isMobile)() ? "touchend" : "mouseup";
    window.addEventListener(move, moveHandler);
    window.addEventListener(end, endHandler);
    return function () {
      window.removeEventListener(move, moveHandler);
      window.removeEventListener(end, endHandler);
    };
  }); // 通过比率计算数值

  var getValue = function getValue() {
    var ratio = state.translate / range[1];
    var value = +(ratio * 100).toFixed(0);
    return Number.isNaN(value) ? 0 : value;
  }; // 获取有效值，避免超出范围


  var getValidTransform = function getValidTransform(val) {
    var min = range[0];
    var max = range[1];
    if (val < min) val = min;
    if (val > max) val = max;
    return val;
  };

  var startHandler = function startHandler(event) {
    var touch = (0, _dom.getPosition)(event.type, event);
    setState(function (prev) {
      return _extends({}, prev, {
        useAnimation: false,
        startScreen: touch.clientX,
        startTranslate: prev.translate,
        isTouched: true
      });
    });
  };

  var moveHandler = function moveHandler(event) {
    if (!state.isTouched) return;
    event.preventDefault();
    var touch = (0, _dom.getPosition)(event.type, event);
    var diff = touch.clientX - state.startScreen;
    setState(function (prev) {
      return _extends({}, prev, {
        diff: diff,
        translate: getValidTransform(prev.startTranslate + diff)
      });
    });
  };

  var endHandler = function endHandler() {
    if (state.startTranslate !== state.translate) {
      onChange == null ? void 0 : onChange(getValue());
    }

    setState(function (prev) {
      return _extends({}, prev, {
        isTouched: false
      });
    });
  };

  var mCls = (0, _classnames["default"])((_classNames = {
    className: className
  }, _classNames[prefix] = true, _classNames[prefix + "--disabled"] = disabled, _classNames));
  var events = {
    onTouchStart: startHandler,
    onMouseDown: startHandler
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: mCls,
    children: [left, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "__inner",
      ref: innerRef,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__runway"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__track",
        style: {
          width: state.translate
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_popover["default"], {
        ref: popoverRef,
        visible: state.isTouched,
        placement: "top",
        contentStyle: {
          padding: '4px 8px',
          minWidth: 36,
          textAlign: 'center',
          boxSizing: 'border-box'
        },
        content: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: getValue().toString()
        }),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: prefix + "__thumb",
          style: {
            left: state.translate
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _extends({}, events, {
            className: prefix + "__thumb-inner"
          }))
        })
      })]
    }), right]
  });
};

var _default = Slider;
exports["default"] = _default;