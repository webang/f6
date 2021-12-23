import _extends from "@babel/runtime/helpers/esm/extends";
import { defineName } from "../utils/name";
import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import "./index.css";
import Loading from "../loading";
import { getPosition, getScrollTarget, getScrollTop } from "../utils/dom";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("pull-refresh"),
    prefix = _defineName[0];

var _PullRefresh = function _PullRefresh(_ref, ref) {
  var onLoad = _ref.onLoad,
      children = _ref.children,
      _ref$topPullDistance = _ref.topPullDistance,
      topPullDistance = _ref$topPullDistance === void 0 ? 40 : _ref$topPullDistance,
      _ref$pullText = _ref.pullText,
      pullText = _ref$pullText === void 0 ? "下拉刷新" : _ref$pullText,
      _ref$looseText = _ref.looseText,
      looseText = _ref$looseText === void 0 ? "释放刷新" : _ref$looseText,
      _ref$loadingText = _ref.loadingText,
      loadingText = _ref$loadingText === void 0 ? "加载中" : _ref$loadingText,
      _ref$topMaxPullDistan = _ref.topMaxPullDistance,
      topMaxPullDistance = _ref$topMaxPullDistan === void 0 ? 60 : _ref$topMaxPullDistan;

  var _useState = useState({
    loading: false,
    diff: 0,
    delta: 0,
    touches: [],
    translate: 0,
    useAnimation: false,
    touchStartScreenY: 0,
    touchStartTranslateY: 0,
    touched: false
  }),
      state = _useState[0],
      setState = _useState[1];

  var wrapRef = useRef(null);
  useImperativeHandle(ref, function () {
    return {
      finish: function finish() {
        setState(function (prev) {
          return _extends({}, prev, {
            translate: 0,
            loading: false
          });
        });
      },
      refresh: function refresh() {
        setState(function (prev) {
          return _extends({}, prev, {
            touchStartTranslateY: 0,
            touchStartScreenY: 0,
            touched: false,
            useAnimation: true,
            loading: true,
            translate: topPullDistance + 10
          });
        });
        onLoad && onLoad();
      }
    };
  });

  var handleStart = function handleStart(event) {
    var touch = getPosition(event.type, event);
    setState(function (prev) {
      return _extends({}, prev, {
        useAnimation: false,
        touchStartScreenY: touch.clientY,
        touchStartTranslateY: prev.translate,
        touched: true
      });
    });
  };

  var handleMove = function handleMove(event) {
    if (!state.touched) return;
    var touch = getPosition(event.type, event);
    var diff = touch.clientY - state.touchStartScreenY;
    var delta = Math.min(Math.pow(diff, 0.85), topMaxPullDistance);
    var direction = delta > 0 ? 'down' : 'up';
    var scrollTop = getScrollTop(getScrollTarget(wrapRef.current));

    if (direction === 'down' && scrollTop === 0) {
      setState(function (prev) {
        return _extends({}, prev, {
          useAnimation: false,
          translate: prev.touchStartTranslateY + delta
        });
      });
    }
  };

  var handleEnd = function handleEnd() {
    if (state.translate >= topPullDistance) {
      setState(function (prev) {
        return _extends({}, prev, {
          touchStartTranslateY: 0,
          touchStartScreenY: 0,
          touched: false,
          useAnimation: true,
          loading: true
        });
      });
      onLoad && onLoad();
    } else {
      setState(function (prev) {
        return _extends({}, prev, {
          translate: 0,
          touchStartTranslateY: 0,
          touchStartScreenY: 0,
          touched: false,
          useAnimation: true,
          loading: false
        });
      });
    }
  };

  var style = {
    transform: "translate3d(0, " + state.translate + "px, 0)",
    transitionDuration: state.useAnimation ? "300ms" : "0ms"
  };

  var topText = function topText() {
    if (state.loading) {
      return /*#__PURE__*/_jsx(Loading, {
        spinnerSize: 20,
        message: loadingText
      });
    } else if (state.translate >= topPullDistance) {
      return looseText;
    } else if (state.translate < topPullDistance) {
      return pullText;
    }
  };

  return /*#__PURE__*/_jsxs("div", {
    className: prefix,
    onTouchStart: handleStart,
    onTouchEnd: handleEnd,
    onTouchMove: handleMove,
    onMouseDown: handleStart,
    onMouseMove: handleMove,
    onMouseUp: handleEnd,
    style: style,
    children: [/*#__PURE__*/_jsx("div", {
      className: prefix + "-indictor",
      children: topText()
    }), /*#__PURE__*/_jsx("div", {
      className: prefix + "-container",
      ref: wrapRef,
      children: children
    })]
  });
};

var PullRefresh = /*#__PURE__*/forwardRef(_PullRefresh);
export default PullRefresh;