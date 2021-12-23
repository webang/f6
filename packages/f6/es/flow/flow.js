"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _name = require("../utils/name");

var _flowContext = require("./flow-context");

var _classnames = _interopRequireDefault(require("classnames"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _defineName = (0, _name.defineName)("flow"),
    prefix = _defineName[0];

var defaultProps = {
  direction: 'horizontal',
  current: 0
};

var Flow = function Flow(_ref) {
  var _classNames;

  var children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var p = _extends({}, defaultProps, restProps);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames["default"])([prefix], (_classNames = {}, _classNames[prefix + "--" + p.direction] = true, _classNames)),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_flowContext.FlowContext.Provider, {
      value: p,
      children: children
    })
  });
};

var _default = Flow;
exports["default"] = _default;