"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var name_1 = require("../utils/name");
var dom_1 = require("../utils/dom");
var button_1 = (0, tslib_1.__importDefault)(require("../button"));
var react_2 = (0, tslib_1.__importDefault)(require("react"));
var RATIO = 0.3;
var SHORT_TOUCH = 250;
var prefix = (0, name_1.defineName)("swipe")[0];
var Swipe = function (props) {
    var _a;
    var children = props.children, _b = props.spaceBetween, spaceBetween = _b === void 0 ? 0 : _b, _c = props.loop, loop = _c === void 0 ? true : _c, _d = props.duration, duration = _d === void 0 ? 300 : _d, _e = props.direction, direction = _e === void 0 ? "horizontal" : _e;
    var _children = react_1.Children.toArray(children).map(function (it, index) {
        return react_2["default"].cloneElement(it, {
            key: index
        });
    });
    var wrapperRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var _f = (0, react_1.useState)({
        translate: 0,
        current: 0,
        useAnimation: true,
        maxTranslate: 0,
        maxGridIndex: 0,
        minGridIndex: 0,
        minTranslate: 0
    }), state = _f[0], setState = _f[1];
    var mRef = (0, react_1.useRef)({
        size: 0,
        curWidth: 0,
        curHeight: 0,
        isScrolling: undefined,
        startX: 0,
        startY: 0,
        startTranslate: 0,
        startTime: 0,
        diffX: 0,
        diffY: 0,
        diff: 0,
        isTouched: false,
        gridIndex: 0,
        slidesGrid: [],
        rectProp: direction === "horizontal" ? "width" : "height",
        interval: null,
        realLength: _children.length || 0,
        virtualLen: _children.length + 2,
        initialized: false,
        isHorizontal: direction === "horizontal",
        isLoop: !!loop
    });
    var that = mRef.current;
    var play = function () {
        that.interval = setTimeout(function () {
            slideNext();
            play();
        }, 1000);
    };
    (0, react_1.useEffect)(function () {
        onMount();
        play();
    }, []);
    var onMount = function () {
        if (!wrapperRef.current)
            return;
        if (!containerRef.current)
            return;
        var wrapperEl = wrapperRef.current;
        var _a = wrapperEl.getBoundingClientRect(), width = _a.width, height = _a.height;
        that.curWidth = width;
        that.curHeight = height;
        that.size = that.isHorizontal ? +that.curWidth : +that.curHeight;
        var list = new Array(that.virtualLen).fill(0);
        that.slidesGrid = list.map(function (_, index) {
            return index * that.size;
        });
        if (that.isHorizontal) {
            wrapperEl.style.width = that.curWidth + "px";
        }
        else {
            wrapperEl.style.height = that.curHeight + "px";
        }
        that.initialized = true;
        setState(function (prev) {
            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { maxTranslate: that.slidesGrid[that.slidesGrid.length - 1] });
        });
    };
    var slideTo = function (index, useAnimation) {
        if (useAnimation === void 0) { useAnimation = true; }
        setState(function (prev) {
            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { current: index, useAnimation: useAnimation, translate: -that.slidesGrid[index] });
        });
        if (index === that.slidesGrid.length - 1) {
            setTimeout(function () {
                index = 1;
                setState(function (prev) {
                    return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { current: index, useAnimation: false, translate: -that.slidesGrid[index] });
                });
            }, duration);
        }
        if (index === 0) {
            setTimeout(function () {
                index = that.slidesGrid.length - 1;
                setState(function (prev) {
                    return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { current: index, useAnimation: false, translate: -that.slidesGrid[index] });
                });
            }, duration);
        }
    };
    var slideNext = function () {
        slideTo(state.current + 1);
    };
    var startHandler = function (event) {
        var touch = (0, dom_1.getPosition)(event.type, event);
        that.startX = touch.clientX;
        that.startY = touch.clientY;
        that.startTime = Date.now();
        that.startTranslate = state.translate;
        that.isTouched = true;
    };
    var moveHandler = function (event) {
        var touch = (0, dom_1.getPosition)(event.type, event);
        that.diffX = touch.clientX - that.startX;
        that.diffY = touch.clientY - that.startY;
        that.diff = that.isHorizontal ? that.diffX : that.diffY;
        setState(function (prev) {
            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { useAnimation: false, translate: that.startTranslate + (touch.clientX - that.startX) });
        });
    };
    var endHandler = function () {
        if (that.diff === 0)
            return;
        var deltaTime = Date.now() - that.startTime;
        if (that.diff < 0) {
            if (deltaTime < SHORT_TOUCH) {
                slideTo(state.current + 1);
            }
            else {
                if (that.diff < -100) {
                    slideTo(state.current + 1);
                }
                else {
                    slideTo(state.current);
                }
            }
        }
        else if (that.diff > 0) {
            if (deltaTime < SHORT_TOUCH) {
                slideTo(state.current - 1);
            }
            else {
                if (that.diff > 100) {
                    slideTo(state.current - 1);
                }
                else {
                    slideTo(state.current);
                }
            }
        }
        that.diff = 0;
        that.isTouched = false;
    };
    var containerStyle = (_a = {
            transitionDuration: "".concat(state.useAnimation ? duration : 0, "ms")
        },
        _a[that.rectProp] = "".concat(that.slidesGrid.length * that.size, "px"),
        _a.transform = that.isHorizontal
            ? "translate3d(".concat(state.translate, "px, 0, 0)")
            : "translate3d(0, ".concat(state.translate, "px, 0)"),
        _a);
    var renderChildren = function () {
        return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ ref: containerRef, style: containerStyle, className: "".concat(prefix, "-container") }, { children: loop
                ? (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([
                    react_2["default"].cloneElement(_children[_children.length - 1], {
                        key: "111"
                    })
                ], _children, true), [
                    react_2["default"].cloneElement(_children[0], {
                        key: "222"
                    }),
                ], false) : _children }), void 0));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(button_1["default"], { children: "next" }, void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ onTouchMove: moveHandler, onTouchStart: startHandler, onTouchEnd: endHandler, className: prefix, ref: wrapperRef }, { children: renderChildren() }), void 0)] }, void 0));
};
exports["default"] = Swipe;
//# sourceMappingURL=swipe%20copy%204.js.map