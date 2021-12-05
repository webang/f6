"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var prefix = (0, name_1.defineName)("affix")[0];
var getRectY = function (element) {
    return element.getBoundingClientRect().top;
};
var getWindowScrollTop = function () {
    return document.documentElement.scrollTop;
};
var addEvent = function (target, type, cb) {
    target.addEventListener(type, cb);
};
var removeEvent = function (target, type, cb) {
    target.removeEventListener(type, cb);
};
var Affix = function (_a) {
    var top = _a.top, children = _a.children, wrapperStyle = _a.wrapperStyle, _b = _a.container, container = _b === void 0 ? window : _b;
    var _c = (0, react_1.useState)({
        fixed: false,
        offsetTop: 0,
        pOffsetTop: 0,
        distance: 0
    }), state = _c[0], setState = _c[1];
    var ref = (0, react_1.useRef)(null);
    var target = container;
    var isWindow = target === window;
    (0, react_1.useEffect)(function () {
        var pOffsetTop = 0;
        var offsetTop = getRectY(ref.current);
        if (typeof container === "function") {
            target = container();
            pOffsetTop = getRectY(target);
        }
        if (isWindow) {
            offsetTop = offsetTop + getWindowScrollTop();
        }
        setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { offsetTop: offsetTop, pOffsetTop: pOffsetTop, distance: offsetTop - pOffsetTop })); });
        var handleScroll = function () {
            if (target === window) {
                var scrollTop_1 = getWindowScrollTop();
                setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { fixed: scrollTop_1 + (top || 0) >= offsetTop })); });
            }
            else {
                target = target;
                var scrollTop_2 = target.scrollTop;
                pOffsetTop = getRectY(target);
                setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { pOffsetTop: pOffsetTop, fixed: scrollTop_2 + (top || 0) >= prev.distance })); });
            }
        };
        handleScroll();
        // 当页面滚动时，需要更新 target 的 offsetTop
        var onWindowScroll = function () {
            target = target;
            var scrollTop = target.scrollTop;
            pOffsetTop = getRectY(target);
            setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { pOffsetTop: pOffsetTop, fixed: scrollTop + (top || 0) >= prev.distance })); });
        };
        if (!isWindow)
            addEvent(window, "scroll", onWindowScroll);
        addEvent(target, "scroll", handleScroll);
        return function () {
            removeEvent(target, "scroll", handleScroll);
            if (!isWindow)
                removeEvent(window, "scroll", onWindowScroll);
        };
    }, []);
    var style = state.fixed
        ? {
            position: "fixed",
            top: isWindow ? top : state.pOffsetTop + (top || 0)
        }
        : {};
    if (wrapperStyle) {
        Object.assign(style, wrapperStyle({ fixed: state.fixed }));
    }
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix, ref: ref, style: style }, { children: children }), void 0));
};
exports["default"] = Affix;
//# sourceMappingURL=index.js.map