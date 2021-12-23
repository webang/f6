"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = (0, tslib_1.__importStar)(require("react"));
var context_1 = require("./context");
var prefix = (0, name_1.defineName)("marquee")[0];
var Marquee = function (_a) {
    var children = _a.children, _b = _a.interval, interval = _b === void 0 ? 2000 : _b, _c = _a.duration, duration = _c === void 0 ? 300 : _c, _d = _a.itemHeight, itemHeight = _d === void 0 ? 30 : _d;
    var _e = (0, react_1.useState)({
        translate: 0,
        current: 0,
        useAnimate: false
    }), state = _e[0], setState = _e[1];
    (0, react_1.useEffect)(function () {
        var id = setTimeout(function () {
            setState(function (prev) {
                var next = prev.current === mList.length ? 0 : prev.current + 1;
                return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { current: next, useAnimate: prev.current !== mList.length });
            });
        }, interval);
        return function () {
            clearTimeout(id);
        };
    });
    var mList = react_1["default"].Children.toArray(children);
    var style = {
        transform: "translateY(".concat(state.current * -itemHeight, "px)"),
        transition: "transform ".concat(state.useAnimate ? duration : 0, "ms")
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix, style: { height: itemHeight + "px" } }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__inner"), style: style }, { children: (0, jsx_runtime_1.jsxs)(context_1.MarqueeContext.Provider, (0, tslib_1.__assign)({ value: {
                    itemHeight: itemHeight
                } }, { children: [children, children] }), void 0) }), void 0) }), void 0));
};
exports["default"] = Marquee;
//# sourceMappingURL=marquee.js.map