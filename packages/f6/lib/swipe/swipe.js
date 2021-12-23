import _extends from "@babel/runtime/helpers/extends";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from "react";
import { defineName } from "../utils/name";
import { getPosition, isMobile } from "../utils/dom";
import Button from "../button";
import classNames from "classnames";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var SHORT_TOUCH = 250;

var _defineName = defineName("swipe"),
    prefix = _defineName[0];

var Swipe = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Swipe, _React$Component);

  function Swipe(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
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
      rectProp: _this.props.direction === 'horizontal' ? "width" : "height"
    };
    _this.wrapperRef = /*#__PURE__*/React.createRef();
    _this.containerRef = /*#__PURE__*/React.createRef();

    _this.moveHandler = function (event) {
      var touch = getPosition(event.type, event);
      var store = _this.store;
      if (!store.isTouched) return;
      event.preventDefault();
      store.diffX = touch.clientX - store.startX;
      store.diffY = touch.clientY - store.startY;
      store.diff = store.isHorizontal ? store.diffX : store.diffY;
      store.useAnimate = false;

      _this.setState(function (prev) {
        return _extends({}, prev, {
          translate: store.startTranslate + (touch.clientX - store.startX)
        });
      });
    };

    _this.startHandler = function (event) {
      var touch = getPosition(event.type, event);
      var store = _this.store;
      var state = _this.state;
      store.startX = touch.clientX;
      store.startY = touch.clientY;
      store.startTime = Date.now();
      store.startTranslate = state.translate;
      store.isTouched = true;
    };

    _this.endHandler = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          store = _assertThisInitialize.store,
          slideTo = _assertThisInitialize.slideTo;

      if (store.diff !== 0) {
        var deltaTime = Date.now() - store.startTime;

        if (store.diff < 0) {
          if (deltaTime < SHORT_TOUCH) {
            _this.slideNext();
          } else {
            if (store.diff < -100) {
              _this.slideNext();
            } else {
              slideTo(store.gridIndex);
            }
          }
        } else if (store.diff > 0) {
          if (deltaTime < SHORT_TOUCH) {
            _this.slidePrev();
          } else {
            if (store.diff > 100) {
              _this.slidePrev();
            } else {
              slideTo(store.gridIndex);
            }
          }
        }
      }

      store.diff = 0;
      store.isTouched = false;
    };

    _this.onMount = function () {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          store = _assertThisInitialize2.store,
          wrapperRef = _assertThisInitialize2.wrapperRef;

      if (!wrapperRef.current) return;
      var wrapperEl = wrapperRef.current;

      var _wrapperEl$getBoundin = wrapperEl.getBoundingClientRect(),
          width = _wrapperEl$getBoundin.width,
          height = _wrapperEl$getBoundin.height;

      store.size = store.isHorizontal ? width : height;

      if (store.isHorizontal) {
        wrapperEl.style.width = width + "px";
      } else {
        wrapperEl.style.height = height + "px";
      }

      store.isLoop && _this.createLoopEl();

      _this.initSlides();

      _this.forceUpdate();

      store.initialized = true;
    };

    _this.initSlides = function () {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          store = _assertThisInitialize3.store,
          containerRef = _assertThisInitialize3.containerRef;

      if (!containerRef.current) return;
      var containerEl = containerRef.current;
      var spaceBetween = _this.props.spaceBetween;
      var children = containerEl.children;
      var list = new Array(children.length).fill(0);
      store.slides = list.map(function (_, index) {
        return children.item(index);
      });
      store.slidesGrid = new Array(children.length);
      store.slides.forEach(function (element, index) {
        element.style[store.rectProp] = store.size + "px";

        if (index !== children.length - 1) {
          if (store.isHorizontal) {
            element.style.marginRight = spaceBetween + "px";
          } else {
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
      if (animate === void 0) {
        animate = true;
      }

      _this.store.gridIndex = index;
      _this.store.useAnimate = animate;

      _this.setTranslate(-_this.store.slidesGrid[index]);

      var duration = _this.props.duration;
      var maxGridIndex = _this.store.maxGridIndex;

      if (_this.store.isLoop) {
        if (index === maxGridIndex) {
          setTimeout(function () {
            return _this.slideTo(1, false);
          }, duration);
        }

        if (index === 0) {
          setTimeout(function () {
            return _this.slideTo(maxGridIndex - 1, false);
          }, duration);
        }
      }

      _this.store.slides.forEach(function (it, index) {
        var cls = it.className.replace(' swipe-item-active', '');
        it.style.transitionDuration = animate ? '300ms' : '0ms';

        if (index === _this.store.gridIndex) {
          it.className = cls + ' swipe-item-active';
        } else {
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
      var _assertThisInitialize4 = _assertThisInitialized(_this),
          moveHandler = _assertThisInitialize4.moveHandler,
          startHandler = _assertThisInitialize4.startHandler,
          endHandler = _assertThisInitialize4.endHandler;

      if (_this.wrapperRef.current) {
        var el = _this.wrapperRef.current;
        var options = {
          passive: false
        };

        if (isMobile()) {
          el.addEventListener('touchstart', startHandler, options);
          el.addEventListener('touchmove', moveHandler, options);
          el.addEventListener('touchend', endHandler, options);
        } else {
          el.addEventListener('mousedown', startHandler, options);
          el.addEventListener('mousemove', moveHandler, options);
          el.addEventListener('mouseup', endHandler, options);
        }
      }
    };

    return _this;
  }

  var _proto = Swipe.prototype;

  _proto.createLoopEl = function createLoopEl() {
    if (!this.containerRef.current) return;
    var innerEl = this.containerRef.current;
    var first = innerEl.getElementsByClassName("is-first")[0];
    var last = innerEl.getElementsByClassName("is-last")[0];
    if (first) innerEl.removeChild(first);
    if (last) innerEl.removeChild(last);
    var firstEl = innerEl.firstElementChild.cloneNode(true);
    firstEl.setAttribute("data-index", "0");
    firstEl.className = firstEl.className + " is-first";
    var lastEl = innerEl.lastElementChild.cloneNode(true);
    lastEl.setAttribute("data-index", "" + (innerEl.children.length - 1));
    lastEl.className = lastEl.className + " is-last";
    [].forEach.call(innerEl.children, function (element, index) {
      element.setAttribute("data-index", "" + index);
    });
    innerEl.insertBefore(lastEl, innerEl.firstElementChild);
    innerEl.appendChild(firstEl);
  };

  _proto.componentDidMount = function componentDidMount() {
    this.onMount();
    this.initEvents();

    if (this.props.loop) {
      this.slideTo(this.props.activeIndex || 0 + 1, false);
    } else {
      this.slideTo(0, false);
    }
  };

  _proto.render = function render() {
    var _containerStl,
        _classNames,
        _this2 = this;

    var children = this.props.children;
    var props = this.props,
        state = this.state,
        store = this.store,
        wrapperRef = this.wrapperRef,
        containerRef = this.containerRef;
    var containerStl = (_containerStl = {
      transitionDuration: (store.useAnimate ? props.duration : 0) + "ms"
    }, _containerStl[store.rectProp] = store.maxTranslate + store.size + "px", _containerStl.transform = store.isHorizontal ? "translate3d(" + state.translate + "px, 0, 0)" : "translate3d(0, " + state.translate + "px, 0)", _containerStl);
    var wrapperCls = classNames((_classNames = {}, _classNames[prefix] = true, _classNames['effect-' + this.props.effect] = true, _classNames["is-" + this.props.direction] = true, _classNames));
    return /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return _this2.slideNext();
        },
        children: "next"
      }), /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return _this2.slidePrev();
        },
        children: "prev"
      }), /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return _this2.stop();
        },
        children: "stop"
      }), /*#__PURE__*/_jsx(Button, {
        onClick: function onClick() {
          return _this2.play();
        },
        children: "play"
      }), /*#__PURE__*/_jsx("div", {
        className: wrapperCls,
        ref: wrapperRef,
        children: /*#__PURE__*/_jsx("div", {
          style: containerStl,
          className: prefix + "-container",
          ref: containerRef,
          children: children
        })
      })]
    });
  };

  return Swipe;
}(React.Component);

Swipe.defaultProps = {
  direction: "horizontal",
  spaceBetween: 0,
  loop: true,
  duration: 300
};
export default Swipe;