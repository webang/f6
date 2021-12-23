"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _name = require("../utils/name");

require("./index.css");

var _spinnerLines = _interopRequireDefault(require("./spinner-lines"));

var _spinnerOval = _interopRequireDefault(require("./spinner-oval"));

var _spinnerCrescent = _interopRequireDefault(require("./spinner-crescent"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Spinner = function Spinner(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "crescent" : _ref$type,
      className = _ref.className,
      style = _ref.style,
      size = _ref.size;

  var _defineName = (0, _name.defineName)("spinner"),
      prefix = _defineName[0];

  var mCls = (0, _classnames["default"])([prefix, prefix + "--" + type, className], {});

  var mStyle = _extends({}, style || {});

  var unitValue = typeof size === "number" ? size + "px" : size;

  if (size) {
    _extends(mStyle, {
      width: unitValue,
      height: unitValue
    });
  }

  switch (type) {
    case "oval":
      {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_spinnerOval["default"], {
          style: mStyle,
          className: mCls
        });
      }

    case "lines":
      {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_spinnerLines["default"], {
          style: mStyle,
          className: mCls
        });
      }

    case "crescent":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_spinnerCrescent["default"], {
        style: mStyle,
        className: mCls
      });
  }
};

var _default = Spinner;
exports["default"] = _default;