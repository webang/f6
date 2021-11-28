"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var name_1 = require("../utils/name");
require("./index.less");
var itemHeight = 36;
var maxY = itemHeight * 2;
var longTouch = 300;
var DURATION = 300;
var prefix = (0, name_1.defineName)('picker-column')[0];
var PickerColumn = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(PickerColumn, _super);
    function PickerColumn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentIndex: _this.props.defaultIndex || 0,
            offset: -((_this.props.defaultIndex || 0) - 2) * itemHeight,
            columns: []
        };
        _this.ref = react_1["default"].createRef();
        _this.startY = undefined; // 鼠标按下时 屏幕所在位置
        _this.startTime = undefined; // 鼠标按下时 时间戳
        _this.currentY = undefined; // 鼠标按下时 state.offset 的快照值
        _this.duration = 0; // 动画持续时间
        _this.diffY = 0; // touchstart - touchend 之间移动距离
        _this.formatDistance = function (offset, divider) {
            if (divider === void 0) { divider = false; }
            var minY = (108 - _this.state.columns.length * itemHeight);
            if (offset > maxY)
                offset = maxY;
            if (offset < minY)
                offset = minY;
            // TODO 这里需要判断方向
            if (divider)
                return offset - offset % itemHeight;
            return offset;
        };
        _this.onTouchStart = function (e) {
            _this.startY = _this.getTouch(e);
            _this.startTime = Date.now();
            _this.currentY = _this.state.offset; // 记录快照
            _this.duration = 0; // 按下时而上一次的动画未处理完成, 会瞬间跳到新的位置，这个交互后续优化
        };
        _this.onTouchMove = function (e) {
            if (_this.startY === undefined)
                return;
            if (_this.currentY === undefined)
                return;
            var clientY = _this.getTouch(e);
            var startY = _this.startY;
            _this.diffY = clientY - startY;
            _this.setState({ offset: _this.formatDistance((_this.currentY) + _this.diffY) });
            e.preventDefault();
        };
        _this.onTouchEnd = function () {
            var diffTime = Date.now() - _this.startTime;
            var velocity = _this.diffY / diffTime;
            if (diffTime < longTouch && _this.diffY !== 0) {
                var direction = velocity / Math.abs(velocity);
                var dist = _this.formatDistance(_this.state.offset + direction * 30 * Math.pow(8, Math.abs(velocity)), true);
                _this.scrollTo(dist, true);
            }
            else {
                if (_this.state.offset % itemHeight !== 0) {
                    _this.scrollTo(_this.formatDistance(_this.state.offset, true), true);
                }
                else {
                    _this.changeIndex();
                }
            }
            _this.startY = undefined;
            _this.startTime = undefined;
            _this.currentY = undefined;
            _this.diffY = 0;
        };
        _this.changeIndex = function (shouldTriggerOnChange) {
            if (shouldTriggerOnChange === void 0) { shouldTriggerOnChange = true; }
            var index = 2 - _this.state.offset / itemHeight;
            if (_this.state.currentIndex !== index) {
                _this.setState({ currentIndex: index });
                if (shouldTriggerOnChange && _this.props.onChange) {
                    _this.props.onChange(_this.props.index, index, _this.state.columns, _this);
                }
            }
        };
        _this.slideTo = function (index, animation) {
            if (animation === void 0) { animation = true; }
            _this.scrollTo(-(index - 2) * itemHeight, animation);
        };
        _this.setOptions = function (options) {
            _this.setState({ columns: options });
        };
        _this.getOptions = function () {
            return _this.state.columns;
        };
        _this.getIndex = function () {
            return _this.state.currentIndex;
        };
        _this.getValue = function () {
            return _this.state.columns[_this.state.currentIndex];
        };
        return _this;
    }
    PickerColumn.prototype.getTouch = function (e) {
        var mouseEvents = ["mousedown", 'mouseup', 'mousemove'];
        var touchEvents = ['touchstart', 'touchmove', 'touchend'];
        if (mouseEvents.includes(e.type)) {
            return e.clientY;
        }
        if (touchEvents.includes(e.type)) {
            return e.changedTouches[0].clientY;
        }
        return 0;
    };
    PickerColumn.prototype.scrollTo = function (dest, animation) {
        var _this = this;
        if (animation === void 0) { animation = true; }
        if (animation) {
            this.duration = DURATION;
        }
        else {
            this.duration = 0;
        }
        this.setState({ offset: dest });
        var onFinish = function () {
            _this.duration = 0;
            _this.changeIndex();
        };
        setTimeout(onFinish, this.duration);
    };
    PickerColumn.prototype.componentDidMount = function () {
        var _a = this, onTouchStart = _a.onTouchStart, onTouchMove = _a.onTouchMove, onTouchEnd = _a.onTouchEnd;
        this.setState({ columns: this.props.columns });
        this.props.onMounted(this, this.props.index);
        var options = { passive: false };
        if (this.ref.current) {
            var wrapper = this.ref.current;
            if ('ontouchstart' in document.documentElement) {
                wrapper.addEventListener('touchstart', onTouchStart, options);
                wrapper.addEventListener('touchmove', onTouchMove, options);
                wrapper.addEventListener('touchend', onTouchEnd, options);
            }
            else {
                wrapper.addEventListener('mousedown', onTouchStart, options);
                wrapper.addEventListener('mousemove', onTouchMove, options);
                wrapper.addEventListener('mouseup', onTouchEnd, options);
                wrapper.addEventListener('mouseleave', onTouchEnd, options);
            }
        }
    };
    PickerColumn.prototype.componentWillUnmount = function () {
        this.props.onDestroyed(this, this.props.index);
    };
    PickerColumn.prototype.render = function () {
        var _this = this;
        var _a = this.state, offset = _a.offset, columns = _a.columns;
        var style = {
            transform: "translate3d(".concat(0, ", ").concat(offset, "px, 0)"),
            transitionDuration: "".concat(this.duration, "ms"),
            transitionProperty: 'transform',
            transitionTimingFunction: 'ease-out'
        };
        var renderList = function () {
            var optionRender = _this.props.optionRender;
            return columns.map(function (it, index) {
                return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ onClick: function () { return _this.slideTo(index); }, className: "wax-picker-option" }, { children: optionRender ? optionRender({
                        option: it,
                        selected: _this.state.currentIndex === index
                    }) : ((0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: "wax-picker-option--selected" }, { children: it.label }), void 0)) }), index));
            });
        };
        return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ ref: this.ref, className: prefix }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "".concat(prefix, "__mask") }, void 0), (0, jsx_runtime_1.jsx)("div", { className: "".concat(prefix, "__line") }, void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: style, className: "".concat(prefix, "__scroll") }, { children: renderList() }), void 0)] }), void 0));
    };
    return PickerColumn;
}(react_1["default"].Component));
exports["default"] = PickerColumn;
//# sourceMappingURL=PickerColumn.js.map