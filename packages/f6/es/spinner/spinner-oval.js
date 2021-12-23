import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["className", "style"];
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var OvalSpinner = function OvalSpinner(_ref) {
  var className = _ref.className,
      style = _ref.style,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_jsx("div", _extends({
    className: className
  }, restProps, {
    children: /*#__PURE__*/_jsx("svg", {
      viewBox: "0 0 38 38",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        stroke: "currentcolor"
      },
      children: /*#__PURE__*/_jsx("g", {
        fill: "none",
        "fill-rule": "evenodd",
        children: /*#__PURE__*/_jsxs("g", {
          transform: "translate(1 1)",
          "stroke-width": "3",
          children: [/*#__PURE__*/_jsx("circle", {
            "stroke-opacity": ".3",
            cx: "18",
            cy: "18",
            r: "17.5",
            style: {
              stroke: "currentcolor"
            }
          }), /*#__PURE__*/_jsx("path", {
            d: "M17.5,0 a17.5,17.5 0 0 1 17.5 17.5",
            style: {
              stroke: "currentcolor"
            },
            children: /*#__PURE__*/_jsx("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "1s",
              repeatCount: "indefinite"
            })
          })]
        })
      })
    })
  }));
};

export default OvalSpinner;