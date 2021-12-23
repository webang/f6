"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
require("./index.less");
var loading_1 = (0, tslib_1.__importDefault)(require("../loading"));
var dom_1 = require("../utils/dom");
var prefix = (0, name_1.defineName)("pull-refresh")[0];
var _PullRefresh = function (_a, ref) {
    var onLoad = _a.onLoad, children = _a.children, _b = _a.topPullDistance, topPullDistance = _b === void 0 ? 40 : _b, _c = _a.pullText, pullText = _c === void 0 ? "下拉刷新" : _c, _d = _a.looseText, looseText = _d === void 0 ? "释放刷新" : _d, _e = _a.loadingText, loadingText = _e === void 0 ? "加载中" : _e, _f = _a.topMaxPullDistance, topMaxPullDistance = _f === void 0 ? 60 : _f;
    var _g = (0, react_1.useState)({
        loading: false,
        diff: 0,
        delta: 0,
        touches: [],
        translate: 0,
        useAnimation: false,
        touchStartScreenY: 0,
        touchStartTranslateY: 0,
        touched: false
    }), state = _g[0], setState = _g[1];
    var wrapRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        finish: function () {
            setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { translate: 0, loading: false })); });
        },
        refresh: function () {
            setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { touchStartTranslateY: 0, touchStartScreenY: 0, touched: false, useAnimation: true, loading: true, translate: topPullDistance + 10 })); });
            onLoad && onLoad();
        }
    }); });
    var handleStart = function (event) {
        var touch = (0, dom_1.getPosition)(event.type, event);
        setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { useAnimation: false, touchStartScreenY: touch.clientY, touchStartTranslateY: prev.translate, touched: true })); });
    };
    var handleMove = function (event) {
        if (!state.touched)
            return;
        var touch = (0, dom_1.getPosition)(event.type, event);
        var diff = touch.clientY - state.touchStartScreenY;
        var delta = Math.min(Math.pow(diff, 0.85), topMaxPullDistance);
        var direction = delta > 0 ? 'down' : 'up';
        var scrollTop = (0, dom_1.getScrollTop)((0, dom_1.getScrollTarget)(wrapRef.current));
        if (direction === 'down' && scrollTop === 0) {
            setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { useAnimation: false, translate: prev.touchStartTranslateY + delta })); });
        }
    };
    var handleEnd = function () {
        if (state.translate >= topPullDistance) {
            setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { touchStartTranslateY: 0, touchStartScreenY: 0, touched: false, useAnimation: true, loading: true })); });
            onLoad && onLoad();
        }
        else {
            setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { translate: 0, touchStartTranslateY: 0, touchStartScreenY: 0, touched: false, useAnimation: true, loading: false })); });
        }
    };
    var style = {
        transform: "translate3d(0, ".concat(state.translate, "px, 0)"),
        transitionDuration: state.useAnimation ? "300ms" : "0ms"
    };
    var topText = function () {
        if (state.loading) {
            return (0, jsx_runtime_1.jsx)(loading_1["default"], { spinnerSize: 20, message: loadingText }, void 0);
        }
        else if (state.translate >= topPullDistance) {
            return looseText;
        }
        else if (state.translate < topPullDistance) {
            return pullText;
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: prefix, onTouchStart: handleStart, onTouchEnd: handleEnd, onTouchMove: handleMove, onMouseDown: handleStart, onMouseMove: handleMove, onMouseUp: handleEnd, style: style }, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-indictor") }, { children: topText() }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-container"), ref: wrapRef }, { children: children }), void 0)] }), void 0));
};
var PullRefresh = (0, react_1.forwardRef)(_PullRefresh);
exports["default"] = PullRefresh;
//# sourceMappingURL=index.js.map