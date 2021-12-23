"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var name_1 = require("../utils/name");
var dom_1 = require("../utils/dom");
var button_1 = (0, tslib_1.__importDefault)(require("../button"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var SHORT_TOUCH = 250;
var prefix = (0, name_1.defineName)("swipe")[0];
var Swipe = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Swipe, _super);
    function Swipe(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            translate: 0
        };
        _this.store = {
            width: 0,
            height: 0,
            size: 0,
            startX: 0,
            startY: 0,
            startTranslate: 0,
            startTime: 0,
            diffX: 0,
            diffY: 0,
            diff: 0,
            isTouched: false,
            gridIndex: 0,
            maxTranslate: 0,
            maxGridIndex: 0,
            minGridIndex: 0,
            minTranslate: 0,
            initialized: false,
            slides: [],
            slidesGrid: [],
            isLoop: !!_this.props.loop,
            useAnimate: false,
            timeId: null,
            isHorizontal: _this.props.direction === "horizontal",
            rectProp: (_this.props.direction === 'horizontal' ? "width" : "height")
        };
        _this.wrapperRef = react_1["default"].createRef();
        _this.containerRef = react_1["default"].createRef();
        _this.moveHandler = function (event) {
            var touch = (0, dom_1.getPosition)(event.type, event);
            var store = _this.store;
            if (!store.isTouched)
                return;
            event.preventDefault();
            store.diffX = touch.clientX - store.startX;
            store.diffY = touch.clientY - store.startY;
            store.diff = store.isHorizontal ? store.diffX : store.diffY;
            store.useAnimate = false;
            _this.setState(function (prev) {
                return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { translate: store.startTranslate + (touch.clientX - store.startX) });
            });
        };
        _this.startHandler = function (event) {
            var touch = (0, dom_1.getPosition)(event.type, event);
            var store = _this.store;
            var state = _this.state;
            store.startX = touch.clientX;
            store.startY = touch.clientY;
            store.startTime = Date.now();
            store.startTranslate = state.translate;
            store.isTouched = true;
        };
        _this.endHandler = function () {
            var _a = _this, store = _a.store, slideTo = _a.slideTo;
            if (store.diff !== 0) {
                var deltaTime = Date.now() - store.startTime;
                if (store.diff < 0) {
                    if (deltaTime < SHORT_TOUCH) {
                        _this.slideNext();
                    }
                    else {
                        if (store.diff < -100) {
                            _this.slideNext();
                        }
                        else {
                            slideTo(store.gridIndex);
                        }
                    }
                }
                else if (store.diff > 0) {
                    if (deltaTime < SHORT_TOUCH) {
                        _this.slidePrev();
                    }
                    else {
                        if (store.diff > 100) {
                            _this.slidePrev();
                        }
                        else {
                            slideTo(store.gridIndex);
                        }
                    }
                }
            }
            store.diff = 0;
            store.isTouched = false;
        };
        _this.onMount = function () {
            var _a = _this, store = _a.store, wrapperRef = _a.wrapperRef;
            if (!wrapperRef.current)
                return;
            var wrapperEl = wrapperRef.current;
            var _b = wrapperEl.getBoundingClientRect(), width = _b.width, height = _b.height;
            store.size = store.isHorizontal ? width : height;
            if (store.isHorizontal) {
                wrapperEl.style.width = width + "px";
            }
            else {
                wrapperEl.style.height = height + "px";
            }
            store.isLoop && _this.createLoopEl();
            _this.initSlides();
            _this.forceUpdate();
            store.initialized = true;
        };
        _this.initSlides = function () {
            var _a = _this, store = _a.store, containerRef = _a.containerRef;
            if (!containerRef.current)
                return;
            var containerEl = containerRef.current;
            var spaceBetween = _this.props.spaceBetween;
            var children = containerEl.children;
            var list = new Array(children.length).fill(0);
            store.slides = list.map(function (_, index) { return children.item(index); });
            store.slidesGrid = new Array(children.length);
            store.slides.forEach(function (element, index) {
                element.style[store.rectProp] = store.size + "px";
                if (index !== children.length - 1) {
                    if (store.isHorizontal) {
                        element.style.marginRight = spaceBetween + "px";
                    }
                    else {
                        element.style.marginBottom = spaceBetween + "px";
                    }
                }
                store.slidesGrid[index] = index * store.size + index * (spaceBetween || 0);
            });
            store.minGridIndex = 0;
            store.maxGridIndex = store.slides.length - 1;
            store.minTranslate = store.slidesGrid[store.minGridIndex];
            store.maxTranslate = store.slidesGrid[store.maxGridIndex];
        };
        _this.slideTo = function (index, animate) {
            if (animate === void 0) { animate = true; }
            _this.store.gridIndex = index;
            _this.store.useAnimate = animate;
            _this.setTranslate(-_this.store.slidesGrid[index]);
            var duration = _this.props.duration;
            var maxGridIndex = _this.store.maxGridIndex;
            if (_this.store.isLoop) {
                if (index === maxGridIndex) {
                    setTimeout(function () { return _this.slideTo(1, false); }, duration);
                }
                if (index === 0) {
                    setTimeout(function () { return _this.slideTo(maxGridIndex - 1, false); }, duration);
                }
            }
            _this.store.slides.forEach(function (it, index) {
                var cls = it.className.replace(' swipe-item-active', '');
                it.style.transitionDuration = animate ? '300ms' : '0ms';
                if (index === _this.store.gridIndex) {
                    it.className = cls + ' swipe-item-active';
                }
                else {
                    it.className = cls;
                }
            });
        };
        _this.slideNext = function () {
            _this.slideTo(_this.store.gridIndex + 1);
        };
        _this.slidePrev = function () {
            _this.slideTo(_this.store.gridIndex - 1);
        };
        _this.setTranslate = function (dest) {
            _this.setState({
                translate: dest
            });
        };
        _this.stop = function () {
            clearInterval(_this.store.timeId);
        };
        _this.play = function () {
            _this.stop();
            _this.store.timeId = setInterval(function () {
                _this.slideNext();
            }, 1000);
        };
        _this.initEvents = function () {
            var _a = _this, moveHandler = _a.moveHandler, startHandler = _a.startHandler, endHandler = _a.endHandler;
            if (_this.wrapperRef.current) {
                var el = _this.wrapperRef.current;
                var options = {
                    passive: false
                };
                if ((0, dom_1.isMobile)()) {
                    el.addEventListener('touchstart', startHandler, options);
                    el.addEventListener('touchmove', moveHandler, options);
                    el.addEventListener('touchend', endHandler, options);
                }
                else {
                    el.addEventListener('mousedown', startHandler, options);
                    el.addEventListener('mousemove', moveHandler, options);
                    el.addEventListener('mouseup', endHandler, options);
                }
            }
        };
        return _this;
    }
    Swipe.prototype.createLoopEl = function () {
        if (!this.containerRef.current)
            return;
        var innerEl = this.containerRef.current;
        var first = innerEl.getElementsByClassName("is-first")[0];
        var last = innerEl.getElementsByClassName("is-last")[0];
        if (first)
            innerEl.removeChild(first);
        if (last)
            innerEl.removeChild(last);
        var firstEl = innerEl.firstElementChild.cloneNode(true);
        firstEl.setAttribute("data-index", "0");
        firstEl.className = firstEl.className + " is-first";
        var lastEl = innerEl.lastElementChild.cloneNode(true);
        lastEl.setAttribute("data-index", "".concat(innerEl.children.length - 1));
        lastEl.className = lastEl.className + " is-last";
        [].forEach.call(innerEl.children, function (element, index) {
            element.setAttribute("data-index", "".concat(index));
        });
        innerEl.insertBefore(lastEl, innerEl.firstElementChild);
        innerEl.appendChild(firstEl);
    };
    Swipe.prototype.componentDidMount = function () {
        this.onMount();
        this.initEvents();
        if (this.props.loop) {
            this.slideTo(this.props.activeIndex || 0 + 1, false);
        }
        else {
            this.slideTo(0, false);
        }
    };
    Swipe.prototype.render = function () {
        var _a, _b;
        var _this = this;
        var children = this.props.children;
        var _c = this, props = _c.props, state = _c.state, store = _c.store, wrapperRef = _c.wrapperRef, containerRef = _c.containerRef;
        var containerStl = (_a = {
                transitionDuration: "".concat(store.useAnimate ? props.duration : 0, "ms")
            },
            _a[store.rectProp] = "".concat(store.maxTranslate + store.size, "px"),
            _a.transform = store.isHorizontal
                ? "translate3d(".concat(state.translate, "px, 0, 0)")
                : "translate3d(0, ".concat(state.translate, "px, 0)"),
            _a);
        var wrapperCls = (0, classnames_1["default"])((_b = {},
            _b[prefix] = true,
            _b['effect-' + this.props.effect] = true,
            _b["is-".concat(this.props.direction)] = true,
            _b));
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(button_1["default"], (0, tslib_1.__assign)({ onClick: function () { return _this.slideNext(); } }, { children: "next" }), void 0), (0, jsx_runtime_1.jsx)(button_1["default"], (0, tslib_1.__assign)({ onClick: function () { return _this.slidePrev(); } }, { children: "prev" }), void 0), (0, jsx_runtime_1.jsx)(button_1["default"], (0, tslib_1.__assign)({ onClick: function () { return _this.stop(); } }, { children: "stop" }), void 0), (0, jsx_runtime_1.jsx)(button_1["default"], (0, tslib_1.__assign)({ onClick: function () { return _this.play(); } }, { children: "play" }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: wrapperCls, ref: wrapperRef }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: containerStl, className: "".concat(prefix, "-container"), ref: containerRef }, { children: children }), void 0) }), void 0)] }, void 0));
    };
    Swipe.defaultProps = {
        direction: "horizontal",
        spaceBetween: 0,
        loop: true,
        duration: 300
    };
    return Swipe;
}(react_1["default"].Component));
exports["default"] = Swipe;
//# sourceMappingURL=swipe.js.map