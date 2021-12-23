"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SpinnerCrescent = function SpinnerCrescent(_ref) {
  var className = _ref.className,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _extends({
    className: className
  }, restProps, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      viewBox: "0 0 38 38",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        stroke: "currentcolor"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        fill: "none",
        "fill-rule": "evenodd",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
          transform: "translate(1 1)",
          "stroke-width": "3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
            d: "M17.5,0 a17.5,17.5 0 0 1 17.5 17.5",
            style: {
              stroke: "currentcolor"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "1s",
              repeatCount: "indefinite"
            })
          })
        })
      })
    })
  }));
};

var _default = SpinnerCrescent;
exports["default"] = _default;