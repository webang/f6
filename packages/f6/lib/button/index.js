"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

var _classnames = _interopRequireDefault(require("classnames"));

var _name = require("../utils/name");

var _spinner = _interopRequireDefault(require("../spinner"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["size", "color", "shape", "fill", "block", "loading", "disabled", "className", "children", "title", "onClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _defineName = (0, _name.defineName)("button"),
    prefix = _defineName[0];

var Button = function Button(_ref) {
  var _ref2;

  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "middle" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "default" : _ref$color,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? "default" : _ref$shape,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'solid' : _ref$fill,
      _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      onClick = _ref.onClick,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      active = _useState[0],
      setActive = _useState[1];

  var cls = (0, _classnames["default"])([prefix, className, prefix + "--" + size, prefix + "--" + color, prefix + "--shape-" + shape, prefix + "--fill-" + fill, (_ref2 = {}, _ref2[prefix + "--block"] = block, _ref2[prefix + "--active"] = active, _ref2[prefix + "--loading"] = loading, _ref2[prefix + "--disabled"] = disabled, _ref2)]);

  var onMouseDown = function onMouseDown(event) {
    if (disabled || loading) return;
    setActive(true);
    restProps.onMouseDown && restProps.onMouseDown(event);
  };

  var onMouseUp = function onMouseUp(event) {
    if (disabled || loading) return;
    setActive(false);
    restProps.onMouseUp && restProps.onMouseUp(event);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", _extends({
    onClick: onClick,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    className: cls
  }, restProps, {
    children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_spinner["default"], {
      style: {
        width: '18px',
        height: '18px',
        marginRight: '4px'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: children || title
    })]
  }));
};

var _default = Button;
exports["default"] = _default;