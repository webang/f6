"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
require("./index.less");
var dom_1 = require("../utils/dom");
var prefix = (0, name_1.defineName)("swipe-cell")[0];
var SwipeCell = function (p) {
    var className = p.className, children = p.children, right = p.right, left = p.left;
    var mCls = (0, classnames_1["default"])([prefix, className]);
    var mRef = (0, react_1.useRef)(null);
    var rRef = (0, react_1.useRef)(null);
    var lRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var handleClick = function (e) {
            if (mRef.current) {
                console.log(e.target, mRef.current);
                if (!(0, dom_1.isParent)(e.target, mRef.current)) {
                    setState(function (prev) {
                        return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { translate: 0 });
                    });
                }
            }
        };
        var event = (0, dom_1.isMobile)() ? 'touchstart' : 'mousedown';
        document.addEventListener(event, handleClick);
        return function () {
            document.removeEventListener(event, handleClick);
        };
    }, []);
    var _a = (0, react_1.useState)({
        diff: 0,
        translate: 0,
        startScreen: 0,
        startTranslate: 0,
        touched: false,
        useAnimation: false
    }), state = _a[0], setState = _a[1];
    var startHandler = function (event) {
        var touch = (0, dom_1.getPosition)(event.type, event);
        setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { useAnimation: false, startScreen: touch.clientX, startTranslate: prev.translate, touched: true })); });
    };
    var getMaxTranslate = function () {
        var _a, _b;
        return [
            ((_a = lRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0,
            -(((_b = rRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth) || 0)
        ];
    };
    var getValidTransform = function (val) {
        var _a, _b;
        var maxR = ((_a = rRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
        var maxL = ((_b = lRef.current) === null || _b === void 0 ? void 0 : _b.offsetWidth) || 0;
        if (val < -maxR)
            val = -maxR;
        if (val > maxL)
            val = maxL;
        return val;
    };
    var moveHandler = function (event) {
        if (!state.touched)
            return;
        var touch = (0, dom_1.getPosition)(event.type, event);
        var diff = touch.clientX - state.startScreen;
        var delta = diff * 1;
        setState(function (prev) {
            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { diff: diff, useAnimation: false, translate: getValidTransform(prev.startTranslate + delta) });
        });
    };
    var endHandler = function () {
        setState(function (prev) {
            var range = getMaxTranslate();
            var translate = prev.translate;
            if (prev.diff < 0 && prev.diff < -10) {
                translate = range[1];
            }
            else if (prev.diff > 0 && prev.diff > 10) {
                translate = range[0];
            }
            else {
                translate = 0;
            }
            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { diff: 0, translate: translate, useAnimation: true, touched: false });
        });
    };
    var events = (0, dom_1.isMobile)() ? {
        onTouchStart: startHandler,
        onTouchMove: moveHandler,
        onTouchEnd: endHandler
    } : {
        onMouseDown: startHandler,
        onMouseMove: moveHandler,
        onMouseUp: endHandler
    };
    var style = {
        transform: "translate3d(".concat(state.translate, "px, 0, 0)"),
        transitionDuration: state.useAnimation ? "300ms" : "0ms"
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: mCls, ref: mRef }, events, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-wrapper"), style: style }, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__left"), ref: lRef }, { children: left }), void 0), children, (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__right"), ref: rRef }, { children: right }), void 0)] }), void 0) }), void 0));
};
exports["default"] = SwipeCell;
//# sourceMappingURL=index.js.map