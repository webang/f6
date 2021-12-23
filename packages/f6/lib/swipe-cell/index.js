"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = require("react");

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var _dom = require("../utils/dom");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _defineName = (0, _name.defineName)("swipe-cell"),
    prefix = _defineName[0];

var SwipeCell = function SwipeCell(p) {
  var className = p.className,
      children = p.children,
      right = p.right,
      left = p.left;
  var mCls = (0, _classnames["default"])([prefix, className]);
  var mRef = (0, _react.useRef)(null);
  var rRef = (0, _react.useRef)(null);
  var lRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var handleClick = function handleClick(e) {
      if (mRef.current) {
        console.log(e.target, mRef.current);

        if (!(0, _dom.isParent)(e.target, mRef.current)) {
          setState(function (prev) {
            return _extends({}, prev, {
              translate: 0
            });
          });
        }
      }
    };

    var event = (0, _dom.isMobile)() ? 'touchstart' : 'mousedown';
    document.addEventListener(event, handleClick);
    return function () {
      document.removeEventListener(event, handleClick);
    };
  }, []);

  var _useState = (0, _react.useState)({
    diff: 0,
    translate: 0,
    startScreen: 0,
    startTranslate: 0,
    touched: false,
    useAnimation: false
  }),
      state = _useState[0],
      setState = _useState[1];

  var startHandler = function startHandler(event) {
    var touch = (0, _dom.getPosition)(event.type, event);
    setState(function (prev) {
      return _extends({}, prev, {
        useAnimation: false,
        startScreen: touch.clientX,
        startTranslate: prev.translate,
        touched: true
      });
    });
  };

  var getMaxTranslate = function getMaxTranslate() {
    var _lRef$current, _rRef$current;

    return [((_lRef$current = lRef.current) == null ? void 0 : _lRef$current.offsetWidth) || 0, -(((_rRef$current = rRef.current) == null ? void 0 : _rRef$current.offsetWidth) || 0)];
  };

  var getValidTransform = function getValidTransform(val) {
    var _rRef$current2, _lRef$current2;

    var maxR = ((_rRef$current2 = rRef.current) == null ? void 0 : _rRef$current2.offsetWidth) || 0;
    var maxL = ((_lRef$current2 = lRef.current) == null ? void 0 : _lRef$current2.offsetWidth) || 0;
    if (val < -maxR) val = -maxR;
    if (val > maxL) val = maxL;
    return val;
  };

  var moveHandler = function moveHandler(event) {
    if (!state.touched) return;
    var touch = (0, _dom.getPosition)(event.type, event);
    var diff = touch.clientX - state.startScreen;
    var delta = diff * 1;
    setState(function (prev) {
      return _extends({}, prev, {
        diff: diff,
        useAnimation: false,
        translate: getValidTransform(prev.startTranslate + delta)
      });
    });
  };

  var endHandler = function endHandler() {
    setState(function (prev) {
      var range = getMaxTranslate();
      var translate = prev.translate;

      if (prev.diff < 0 && prev.diff < -10) {
        translate = range[1];
      } else if (prev.diff > 0 && prev.diff > 10) {
        translate = range[0];
      } else {
        translate = 0;
      }

      return _extends({}, prev, {
        diff: 0,
        translate: translate,
        useAnimation: true,
        touched: false
      });
    });
  };

  var events = (0, _dom.isMobile)() ? {
    onTouchStart: startHandler,
    onTouchMove: moveHandler,
    onTouchEnd: endHandler
  } : {
    onMouseDown: startHandler,
    onMouseMove: moveHandler,
    onMouseUp: endHandler
  };
  var style = {
    transform: "translate3d(" + state.translate + "px, 0, 0)",
    transitionDuration: state.useAnimation ? "300ms" : "0ms"
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _extends({
    className: mCls,
    ref: mRef
  }, events, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "-wrapper",
      style: style,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__left",
        ref: lRef,
        children: left
      }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: prefix + "__right",
        ref: rRef,
        children: right
      })]
    })
  }));
};

var _default = SwipeCell;
exports["default"] = _default;