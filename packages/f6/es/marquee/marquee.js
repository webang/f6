"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _defineName = (0, _name.defineName)("marquee"),
    prefix = _defineName[0];

var Marquee = function Marquee(_ref) {
  var children = _ref.children,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 2000 : _ref$interval,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 300 : _ref$duration,
      _ref$itemHeight = _ref.itemHeight,
      itemHeight = _ref$itemHeight === void 0 ? 30 : _ref$itemHeight;

  var _useState = (0, _react.useState)({
    translate: 0,
    current: 0,
    useAnimate: false
  }),
      state = _useState[0],
      setState = _useState[1];

  (0, _react.useEffect)(function () {
    var id = setTimeout(function () {
      setState(function (prev) {
        var next = prev.current === mList.length ? 0 : prev.current + 1;
        return _extends({}, prev, {
          current: next,
          useAnimate: prev.current !== mList.length
        });
      });
    }, interval);
    return function () {
      clearTimeout(id);
    };
  });

  var mList = _react["default"].Children.toArray(children);

  var style = {
    transform: "translateY(" + state.current * -itemHeight + "px)",
    transition: "transform " + (state.useAnimate ? duration : 0) + "ms"
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: prefix,
    style: {
      height: itemHeight + "px"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "__inner",
      style: style,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_context.MarqueeContext.Provider, {
        value: {
          itemHeight: itemHeight
        },
        children: [children, children]
      })
    })
  });
};

var _default = Marquee;
exports["default"] = _default;