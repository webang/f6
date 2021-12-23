"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var RATIO = 0.3;
var SHORT_TOUCH = 250;
var VERTICAL = "vertical";
var HORIZONTAL = "horizontal";
var prefix = (0, name_1.defineName)("swipe")[0];
// class Swipe extends React.Component {
//   render() {
//     const { children } = this.props;
//     const _children = Children.toArray(children);
//     return (
//       <div>
//         {_children[_children.length - 1]}
//         {children}
//         {_children[0]}
//       </div>
//     );
//   }
// }
var Swipe = function (props) {
    var _a;
    var children = props.children, _b = props.spaceBetween, spaceBetween = _b === void 0 ? 0 : _b, _c = props.loop, loop = _c === void 0 ? true : _c, _d = props.duration, duration = _d === void 0 ? 300 : _d, _e = props.direction, direction = _e === void 0 ? "horizontal" : _e;
    var _children = react_1.Children.toArray(children);
    var wrapperRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var _f = (0, react_1.useState)({
        translate: 0,
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
        slides: [],
        isScrolling: undefined,
        length: undefined,
        touches: {
            startX: undefined,
            startY: undefined,
            endX: undefined,
            endY: undefined,
            diff: undefined,
            diffX: undefined,
            currentX: undefined,
            currentY: undefined,
            startTranslate: undefined,
            time: undefined,
            isMoved: undefined,
            isTouched: undefined
        },
        gridIndex: 0,
        slidesGrid: [],
        transitionDuration: 0,
        rectProp: (direction === 'horizontal' ? "width" : "height"),
        interval: null,
        realLength: _children.length || 0,
        virtualLen: _children.length + 2,
        initialized: false,
        children: [],
        isHorizontal: direction === HORIZONTAL,
        isLoop: !!loop
    });
    var onMount = function () {
        if (!wrapperRef.current)
            return;
        if (!containerRef.current)
            return;
        var wrapperEl = wrapperRef.current;
        var containerEl = containerRef.current;
        var _a = wrapperEl.getBoundingClientRect(), width = _a.width, height = _a.height;
        var that = mRef.current;
        that.curWidth = width;
        that.curHeight = height;
        that.size = that.isHorizontal ? +that.curWidth : +that.curHeight;
        if (that.curWidth) {
            wrapperEl.style.width = that.curWidth + "px";
        }
        if (that.curHeight) {
            wrapperEl.style.height = that.curHeight + "px";
        }
        that.initialized = true;
        setState(function (prev) {
            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { maxTranslate: that.virtualLen * that.size });
        });
    };
    (0, react_1.useEffect)(function () {
        onMount();
    }, []);
    var that = mRef.current;
    var containerStyle = (_a = {
            transitionDuration: "".concat(state.useAnimation ? duration : 0, "ms")
        },
        _a[that.rectProp] = "".concat(state.maxTranslate, "px"),
        _a.transform = that.isHorizontal
            ? "translate3d(".concat(state.translate, "px, 0, 0)")
            : "translate3d(0, ".concat(state.translate, "px, 0)"),
        _a);
    var renderChildren = function () {
        return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ ref: containerRef, style: containerStyle, className: "".concat(prefix, "-container") }, { children: loop
                ? (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([_children[_children.length - 1]], _children, true), [_children[0]], false) : _children }), void 0));
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix, ref: wrapperRef }, { children: renderChildren() }), void 0));
};
exports["default"] = Swipe;
//# sourceMappingURL=swipe%20copy%202.js.map