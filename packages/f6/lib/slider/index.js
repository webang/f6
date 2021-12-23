"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var name_1 = require("../utils/name");
var react_1 = require("react");
var dom_1 = require("../utils/dom");
require("./index.less");
var popover_1 = (0, tslib_1.__importDefault)(require("../popover"));
var prefix = (0, name_1.defineName)("slider")[0];
var Slider = function (_a) {
    var _b;
    var _c = _a.disabled, disabled = _c === void 0 ? false : _c, className = _a.className, left = _a.left, right = _a.right, onChange = _a.onChange;
    var _d = (0, react_1.useState)({
        diff: 0,
        translate: 0,
        startTranslate: 0,
        startScreen: 0,
        isTouched: false
    }), state = _d[0], setState = _d[1];
    var _e = (0, react_1.useState)([0, 0]), range = _e[0], setRange = _e[1];
    var innerRef = (0, react_1.useRef)(null);
    var popoverRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        setRange([0, ((_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0]);
    }, []);
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = popoverRef.current) === null || _a === void 0 ? void 0 : _a.resetPosition();
        // 将 move 事件挂载在 window 上
        // 避免快速拖动导致 move 元素失焦
        var move = (0, dom_1.isMobile)() ? "touchmove" : "mousemove";
        var end = (0, dom_1.isMobile)() ? "touchend" : "mouseup";
        window.addEventListener(move, moveHandler);
        window.addEventListener(end, endHandler);
        return function () {
            window.removeEventListener(move, moveHandler);
            window.removeEventListener(end, endHandler);
        };
    });
    // 通过比率计算数值
    var getValue = function () {
        var ratio = state.translate / range[1];
        var value = +(ratio * 100).toFixed(0);
        return Number.isNaN(value) ? 0 : value;
    };
    // 获取有效值，避免超出范围
    var getValidTransform = function (val) {
        var min = range[0];
        var max = range[1];
        if (val < min)
            val = min;
        if (val > max)
            val = max;
        return val;
    };
    var startHandler = function (event) {
        var touch = (0, dom_1.getPosition)(event.type, event);
        setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { useAnimation: false, startScreen: touch.clientX, startTranslate: prev.translate, isTouched: true })); });
    };
    var moveHandler = function (event) {
        if (!state.isTouched)
            return;
        event.preventDefault();
        var touch = (0, dom_1.getPosition)(event.type, event);
        var diff = touch.clientX - state.startScreen;
        setState(function (prev) {
            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { diff: diff, translate: getValidTransform(prev.startTranslate + diff) });
        });
    };
    var endHandler = function () {
        if (state.startTranslate !== state.translate) {
            onChange === null || onChange === void 0 ? void 0 : onChange(getValue());
        }
        setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { isTouched: false })); });
    };
    var mCls = (0, classnames_1["default"])((_b = {
            className: className
        },
        _b[prefix] = true,
        _b["".concat(prefix, "--disabled")] = disabled,
        _b));
    var events = {
        onTouchStart: startHandler,
        onMouseDown: startHandler
    };
    return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: mCls }, { children: [left, (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__inner"), ref: innerRef }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "".concat(prefix, "__runway") }, void 0), (0, jsx_runtime_1.jsx)("div", { className: "".concat(prefix, "__track"), style: { width: state.translate } }, void 0), (0, jsx_runtime_1.jsx)(popover_1["default"], (0, tslib_1.__assign)({ ref: popoverRef, visible: state.isTouched, placement: "top", contentStyle: { padding: '4px 8px', minWidth: 36, textAlign: 'center', boxSizing: 'border-box' }, content: (0, jsx_runtime_1.jsx)("span", { children: getValue().toString() }, void 0) }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__thumb"), style: { left: state.translate } }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({}, events, { className: "".concat(prefix, "__thumb-inner") }), void 0) }), void 0) }), void 0)] }), void 0), right] }), void 0));
};
exports["default"] = Slider;
//# sourceMappingURL=index.js.map