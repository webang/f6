"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _name = require("../utils/name");

require("./index.css");

var _spinner = _interopRequireDefault(require("../spinner"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["vertical", "spinnerType", "spinnerSize", "className", "children", "message"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Loading = function Loading(_ref) {
  var _classNames;

  var _ref$vertical = _ref.vertical,
      vertical = _ref$vertical === void 0 ? false : _ref$vertical,
      _ref$spinnerType = _ref.spinnerType,
      spinnerType = _ref$spinnerType === void 0 ? 'crescent' : _ref$spinnerType,
      _ref$spinnerSize = _ref.spinnerSize,
      spinnerSize = _ref$spinnerSize === void 0 ? '24' : _ref$spinnerSize,
      className = _ref.className,
      children = _ref.children,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Loading' : _ref$message,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _defineName = (0, _name.defineName)("loading"),
      prefix = _defineName[0];

  var mCls = (0, _classnames["default"])([prefix, className], (_classNames = {}, _classNames[prefix + "--vertical"] = vertical, _classNames));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _extends({
    className: mCls
  }, restProps, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_spinner["default"], {
      className: prefix + "__icon",
      type: spinnerType,
      size: spinnerSize
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: prefix + "__text",
      children: children || message
    })]
  }));
};

var _default = Loading;
exports["default"] = _default;