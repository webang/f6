"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var OvalSpinner = function (_a) {
    var className = _a.className, style = _a.style, restProps = (0, tslib_1.__rest)(_a, ["className", "style"]);
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: className }, restProps, { children: (0, jsx_runtime_1.jsx)("svg", (0, tslib_1.__assign)({ viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", style: { stroke: "currentcolor" } }, { children: (0, jsx_runtime_1.jsx)("g", (0, tslib_1.__assign)({ fill: "none", "fill-rule": "evenodd" }, { children: (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ transform: "translate(1 1)", "stroke-width": "3" }, { children: [(0, jsx_runtime_1.jsx)("circle", { "stroke-opacity": ".3", cx: "18", cy: "18", r: "17.5", style: { stroke: "currentcolor" } }, void 0), (0, jsx_runtime_1.jsx)("path", (0, tslib_1.__assign)({ d: "M17.5,0 a17.5,17.5 0 0 1 17.5 17.5", style: { stroke: "currentcolor" } }, { children: (0, jsx_runtime_1.jsx)("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" }, void 0) }), void 0)] }), void 0) }), void 0) }), void 0) }), void 0));
};
exports["default"] = OvalSpinner;
//# sourceMappingURL=spinner-oval.js.map