import _extends from "@babel/runtime/helpers/extends";
import { jsx as _jsx } from "react/jsx-runtime";

var SpinnerLines = function SpinnerLines(_ref) {
  var restProps = _extends({}, _ref);

  var delays = [-1000, -916.667, -833.333, -750, -666.667, -583.333, -500, -416.667, -333.333, -250, -166.667, -83.3333];
  var list = [180, 210, 240, 270, 300, 330, 0, 30, 60, 90, 120, 150];
  return /*#__PURE__*/_jsx("div", _extends({}, restProps, {
    children: list.map(function (it, index) {
      return /*#__PURE__*/_jsx("svg", {
        className: "item",
        viewBox: "0 0 64 64",
        style: {
          transform: "rotate(" + it + "deg)",
          opacity: "" + index / 12,
          animationDelay: delays[index] + "ms",
          animationDuration: "1000ms"
        },
        children: /*#__PURE__*/_jsx("line", {
          className: "line",
          transform: "translate(32,32)",
          y1: "17",
          y2: "29"
        })
      });
    })
  }));
};

export default SpinnerLines;