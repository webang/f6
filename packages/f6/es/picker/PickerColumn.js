import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from "react";
import { defineName } from "../utils/name";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var itemHeight = 36;
var maxY = itemHeight * 2;
var longTouch = 300;
var DURATION = 300;

var _defineName = defineName('picker-column'),
    prefix = _defineName[0];

var PickerColumn = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PickerColumn, _React$Component);

  function PickerColumn() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      currentIndex: _this.props.defaultIndex || 0,
      offset: -((_this.props.defaultIndex || 0) - 2) * itemHeight,
      columns: []
    };
    _this.ref = /*#__PURE__*/React.createRef();
    _this.startY = undefined;
    _this.startTime = undefined;
    _this.currentY = undefined;
    _this.duration = 0;
    _this.diffY = 0;

    _this.formatDistance = function (offset, divider) {
      if (divider === void 0) {
        divider = false;
      }

      var minY = 108 - _this.state.columns.length * itemHeight;
      if (offset > maxY) offset = maxY;
      if (offset < minY) offset = minY; // TODO 这里需要判断方向

      if (divider) return offset - offset % itemHeight;
      return offset;
    };

    _this.onTouchStart = function (e) {
      _this.startY = _this.getTouch(e);
      _this.startTime = Date.now();
      _this.currentY = _this.state.offset; // 记录快照

      _this.duration = 0; // 按下时而上一次的动画未处理完成, 会瞬间跳到新的位置，这个交互后续优化
    };

    _this.onTouchMove = function (e) {
      if (_this.startY === undefined) return;
      if (_this.currentY === undefined) return;

      var clientY = _this.getTouch(e);

      var startY = _this.startY;
      _this.diffY = clientY - startY;

      _this.setState({
        offset: _this.formatDistance(_this.currentY + _this.diffY)
      });

      e.preventDefault();
    };

    _this.onTouchEnd = function () {
      var diffTime = Date.now() - _this.startTime;

      var velocity = _this.diffY / diffTime;

      if (diffTime < longTouch && _this.diffY !== 0) {
        var direction = velocity / Math.abs(velocity);

        var dist = _this.formatDistance(_this.state.offset + direction * 30 * Math.pow(8, Math.abs(velocity)), true);

        _this.scrollTo(dist, true);
      } else {
        if (_this.state.offset % itemHeight !== 0) {
          _this.scrollTo(_this.formatDistance(_this.state.offset, true), true);
        } else {
          _this.changeIndex();
        }
      }

      _this.startY = undefined;
      _this.startTime = undefined;
      _this.currentY = undefined;
      _this.diffY = 0;
    };

    _this.changeIndex = function (shouldTriggerOnChange) {
      if (shouldTriggerOnChange === void 0) {
        shouldTriggerOnChange = true;
      }

      var index = 2 - _this.state.offset / itemHeight;

      if (_this.state.currentIndex !== index) {
        _this.setState({
          currentIndex: index
        });

        if (shouldTriggerOnChange && _this.props.onChange) {
          _this.props.onChange(_this.props.index, index, _this.state.columns, _assertThisInitialized(_this));
        }
      }
    };

    _this.slideTo = function (index, animation) {
      if (animation === void 0) {
        animation = true;
      }

      _this.scrollTo(-(index - 2) * itemHeight, animation);
    };

    _this.setOptions = function (options) {
      _this.setState({
        columns: options
      });
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

  var _proto = PickerColumn.prototype;

  // touchstart - touchend 之间移动距离
  _proto.getTouch = function getTouch(e) {
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

  _proto.scrollTo = function scrollTo(dest, animation) {
    var _this2 = this;

    if (animation === void 0) {
      animation = true;
    }

    if (animation) {
      this.duration = DURATION;
    } else {
      this.duration = 0;
    }

    this.setState({
      offset: dest
    });

    var onFinish = function onFinish() {
      _this2.duration = 0;

      _this2.changeIndex();
    };

    setTimeout(onFinish, this.duration);
  };

  _proto.componentDidMount = function componentDidMount() {
    var onTouchStart = this.onTouchStart,
        onTouchMove = this.onTouchMove,
        onTouchEnd = this.onTouchEnd;
    this.setState({
      columns: this.props.columns
    });
    this.props.onMounted(this, this.props.index);
    var options = {
      passive: false
    };

    if (this.ref.current) {
      var wrapper = this.ref.current;

      if ('ontouchstart' in document.documentElement) {
        wrapper.addEventListener('touchstart', onTouchStart, options);
        wrapper.addEventListener('touchmove', onTouchMove, options);
        wrapper.addEventListener('touchend', onTouchEnd, options);
      } else {
        wrapper.addEventListener('mousedown', onTouchStart, options);
        wrapper.addEventListener('mousemove', onTouchMove, options);
        wrapper.addEventListener('mouseup', onTouchEnd, options);
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.onDestroyed(this, this.props.index);
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$state = this.state,
        offset = _this$state.offset,
        columns = _this$state.columns;
    var style = {
      transform: "translate3d(" + 0 + ", " + offset + "px, 0)",
      transitionDuration: this.duration + "ms",
      transitionProperty: 'transform',
      transitionTimingFunction: 'ease-out'
    };

    var renderList = function renderList() {
      var optionRender = _this3.props.optionRender;
      return columns.map(function (it, index) {
        return /*#__PURE__*/_jsx("div", {
          onClick: function onClick() {
            return _this3.slideTo(index);
          },
          className: "wax-picker-option",
          children: optionRender ? optionRender({
            option: it,
            selected: _this3.state.currentIndex === index
          }) : /*#__PURE__*/_jsx("span", {
            className: "wax-picker-option--selected",
            children: it.label
          })
        }, index);
      });
    };

    return /*#__PURE__*/_jsxs("div", {
      ref: this.ref,
      className: prefix,
      children: [/*#__PURE__*/_jsx("div", {
        className: prefix + "__mask"
      }), /*#__PURE__*/_jsx("div", {
        className: prefix + "__line"
      }), /*#__PURE__*/_jsx("div", {
        style: style,
        className: prefix + "__scroll",
        children: renderList()
      })]
    });
  };

  return PickerColumn;
}(React.Component);

export default PickerColumn;