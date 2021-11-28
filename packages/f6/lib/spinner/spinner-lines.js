"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var SpinnerLines = function (_a) {
    var restProps = (0, tslib_1.__rest)(_a, []);
    var delays = [
        -1000, -916.667, -833.333, -750, -666.667, -583.333, -500, -416.667,
        -333.333, -250, -166.667, -83.3333,
    ];
    var list = [180, 210, 240, 270, 300, 330, 0, 30, 60, 90, 120, 150];
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({}, restProps, { children: list.map(function (it, index) {
            return ((0, jsx_runtime_1.jsx)("svg", (0, tslib_1.__assign)({ className: "item", viewBox: "0 0 64 64", style: {
                    transform: "rotate(".concat(it, "deg)"),
                    opacity: "".concat(index / 12),
                    animationDelay: "".concat(delays[index], "ms"),
                    animationDuration: "1000ms"
                } }, { children: (0, jsx_runtime_1.jsx)("line", { className: "line", transform: "translate(32,32)", y1: "17", y2: "29" }, void 0) }), void 0));
        }) }), void 0));
};
exports["default"] = SpinnerLines;
//# sourceMappingURL=spinner-lines.js.map