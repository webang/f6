"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

var _loading = _interopRequireDefault(require("../loading"));

var _dom = require("../utils/dom");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _defineName = (0, _name.defineName)("pull-refresh"),
    prefix = _defineName[0];

var _PullRefresh = function _PullRefresh(_ref, ref) {
  var onLoad = _ref.onLoad,
      children = _ref.children,
      _ref$topPullDistance = _ref.topPullDistance,
      topPullDistance = _ref$topPullDistance === void 0 ? 40 : _ref$topPullDistance,
      _ref$pullText = _ref.pullText,
      pullText = _ref$pullText === void 0 ? "下拉刷新" : _ref$pullText,
      _ref$looseText = _ref.looseText,
      looseText = _ref$looseText === void 0 ? "释放刷新" : _ref$looseText,
      _ref$loadingText = _ref.loadingText,
      loadingText = _ref$loadingText === void 0 ? "加载中" : _ref$loadingText,
      _ref$topMaxPullDistan = _ref.topMaxPullDistance,
      topMaxPullDistance = _ref$topMaxPullDistan === void 0 ? 60 : _ref$topMaxPullDistan;

  var _useState = (0, _react.useState)({
    loading: false,
    diff: 0,
    delta: 0,
    touches: [],
    translate: 0,
    useAnimation: false,
    touchStartScreenY: 0,
    touchStartTranslateY: 0,
    touched: false
  }),
      state = _useState[0],
      setState = _useState[1];

  var wrapRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      finish: function finish() {
        setState(function (prev) {
          return _extends({}, prev, {
            translate: 0,
            loading: false
          });
        });
      },
      refresh: function refresh() {
        setState(function (prev) {
          return _extends({}, prev, {
            touchStartTranslateY: 0,
            touchStartScreenY: 0,
            touched: false,
            useAnimation: true,
            loading: true,
            translate: topPullDistance + 10
          });
        });
        onLoad && onLoad();
      }
    };
  });

  var handleStart = function handleStart(event) {
    var touch = (0, _dom.getPosition)(event.type, event);
    setState(function (prev) {
      return _extends({}, prev, {
        useAnimation: false,
        touchStartScreenY: touch.clientY,
        touchStartTranslateY: prev.translate,
        touched: true
      });
    });
  };

  var handleMove = function handleMove(event) {
    if (!state.touched) return;
    var touch = (0, _dom.getPosition)(event.type, event);
    var diff = touch.clientY - state.touchStartScreenY;
    var delta = Math.min(Math.pow(diff, 0.85), topMaxPullDistance);
    var direction = delta > 0 ? 'down' : 'up';
    var scrollTop = (0, _dom.getScrollTop)((0, _dom.getScrollTarget)(wrapRef.current));

    if (direction === 'down' && scrollTop === 0) {
      setState(function (prev) {
        return _extends({}, prev, {
          useAnimation: false,
          translate: prev.touchStartTranslateY + delta
        });
      });
    }
  };

  var handleEnd = function handleEnd() {
    if (state.translate >= topPullDistance) {
      setState(function (prev) {
        return _extends({}, prev, {
          touchStartTranslateY: 0,
          touchStartScreenY: 0,
          touched: false,
          useAnimation: true,
          loading: true
        });
      });
      onLoad && onLoad();
    } else {
      setState(function (prev) {
        return _extends({}, prev, {
          translate: 0,
          touchStartTranslateY: 0,
          touchStartScreenY: 0,
          touched: false,
          useAnimation: true,
          loading: false
        });
      });
    }
  };

  var style = {
    transform: "translate3d(0, " + state.translate + "px, 0)",
    transitionDuration: state.useAnimation ? "300ms" : "0ms"
  };

  var topText = function topText() {
    if (state.loading) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {
        spinnerSize: 20,
        message: loadingText
      });
    } else if (state.translate >= topPullDistance) {
      return looseText;
    } else if (state.translate < topPullDistance) {
      return pullText;
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: prefix,
    onTouchStart: handleStart,
    onTouchEnd: handleEnd,
    onTouchMove: handleMove,
    onMouseDown: handleStart,
    onMouseMove: handleMove,
    onMouseUp: handleEnd,
    style: style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "-indictor",
      children: topText()
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "-container",
      ref: wrapRef,
      children: children
    })]
  });
};

var PullRefresh = /*#__PURE__*/(0, _react.forwardRef)(_PullRefresh);
var _default = PullRefresh;
exports["default"] = _default;