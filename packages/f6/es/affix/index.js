"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _defineName = (0, _name.defineName)("affix"),
    prefix = _defineName[0];

var getRectY = function getRectY(element) {
  return element.getBoundingClientRect().top;
};

var getWindowScrollTop = function getWindowScrollTop() {
  return document.documentElement.scrollTop;
};

var addEvent = function addEvent(target, type, cb) {
  target.addEventListener(type, cb);
};

var removeEvent = function removeEvent(target, type, cb) {
  target.removeEventListener(type, cb);
};

var Affix = function Affix(_ref) {
  var top = _ref.top,
      children = _ref.children,
      wrapperStyle = _ref.wrapperStyle,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? window : _ref$container;

  var _useState = (0, _react.useState)({
    fixed: false,
    offsetTop: 0,
    pOffsetTop: 0,
    distance: 0
  }),
      state = _useState[0],
      setState = _useState[1];

  var ref = (0, _react.useRef)(null);
  var target = container;
  var isWindow = target === window;
  (0, _react.useEffect)(function () {
    var pOffsetTop = 0;
    var offsetTop = getRectY(ref.current);

    if (typeof container === "function") {
      target = container();
      pOffsetTop = getRectY(target);
    }

    if (isWindow) {
      offsetTop = offsetTop + getWindowScrollTop();
    }

    setState(function (prev) {
      return _extends({}, prev, {
        offsetTop: offsetTop,
        pOffsetTop: pOffsetTop,
        distance: offsetTop - pOffsetTop
      });
    });

    var handleScroll = function handleScroll() {
      if (target === window) {
        var scrollTop = getWindowScrollTop();
        setState(function (prev) {
          return _extends({}, prev, {
            fixed: scrollTop + (top || 0) >= offsetTop
          });
        });
      } else {
        target = target;
        var _scrollTop = target.scrollTop;
        pOffsetTop = getRectY(target);
        setState(function (prev) {
          return _extends({}, prev, {
            pOffsetTop: pOffsetTop,
            fixed: _scrollTop + (top || 0) >= prev.distance
          });
        });
      }
    };

    handleScroll(); // 当页面滚动时，需要更新 target 的 offsetTop

    var onWindowScroll = function onWindowScroll() {
      target = target;
      var scrollTop = target.scrollTop;
      pOffsetTop = getRectY(target);
      setState(function (prev) {
        return _extends({}, prev, {
          pOffsetTop: pOffsetTop,
          fixed: scrollTop + (top || 0) >= prev.distance
        });
      });
    };

    if (!isWindow) addEvent(window, "scroll", onWindowScroll);
    addEvent(target, "scroll", handleScroll);
    return function () {
      removeEvent(target, "scroll", handleScroll);
      if (!isWindow) removeEvent(window, "scroll", onWindowScroll);
    };
  }, []);
  var style = state.fixed ? {
    position: "fixed",
    top: isWindow ? top : state.pOffsetTop + (top || 0)
  } : {};

  if (wrapperStyle) {
    _extends(style, wrapperStyle({
      fixed: state.fixed
    }));
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: prefix,
    ref: ref,
    style: style,
    children: children
  });
};

var _default = Affix;
exports["default"] = _default;