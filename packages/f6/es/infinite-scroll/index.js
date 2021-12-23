import { getScrollTarget } from "../utils/dom";
import { forwardRef, useEffect, useRef, useImperativeHandle } from "react";
import Loading from "../loading";
import { defineName } from "../utils/name";
import "./index.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var _defineName = defineName("infinite-scroll"),
    prefix = _defineName[0];

var InfiniteScroll = function InfiniteScroll(props, ref) {
  var lockRef = useRef({
    isLocked: false
  });
  var wrapperRef = useRef(null);
  var containerRef = useRef(null);
  var children = props.children,
      onLoad = props.onLoad,
      footer = props.footer,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? true : _props$disabled;

  var finish = function finish() {
    lockRef.current.isLocked = false;
  };

  useImperativeHandle(ref, function () {
    return {
      finish: finish
    };
  });
  useEffect(function () {
    var target = getScrollTarget(wrapperRef.current);

    var handleScroll = function handleScroll() {
      var isWin = target === window;
      var container = containerRef.current;
      var wrapperHeight = isWin ? target.innerHeight : target.offsetHeight;
      var scrollTop = isWin ? document.documentElement.scrollTop : target.scrollTop;
      var offsetHeight = isWin ? document.documentElement.offsetHeight : container.offsetHeight; // !TODO target 只能是当前容器 或者 window
      // 不然这里的 container 是错误的
      // console.log(offsetHeight, wrapperHeight, scrollTop);

      var bottomed = offsetHeight === wrapperHeight + scrollTop;

      if (!loading && !lockRef.current.isLocked && bottomed && !disabled) {
        onLoad && onLoad();
      }
    };

    target.addEventListener("scroll", handleScroll);
    return function () {
      return target.removeEventListener("scroll", handleScroll);
    };
  }, [props]);

  var mFooter = function mFooter() {
    if (footer) return footer({
      loading: loading,
      disabled: disabled
    });

    if (loading) {
      return /*#__PURE__*/_jsx("div", {
        style: {
          lineHeight: "40px",
          textAlign: "center"
        },
        children: /*#__PURE__*/_jsx(Loading, {})
      });
    } else {
      if (disabled) {
        return /*#__PURE__*/_jsx("div", {
          style: {
            lineHeight: "40px",
            textAlign: "center"
          },
          children: /*#__PURE__*/_jsx("span", {
            style: {
              color: "#ccc"
            },
            children: "NO MORE"
          })
        });
      } else {
        return null;
      }
    }
  };

  return /*#__PURE__*/_jsx("div", {
    ref: wrapperRef,
    className: prefix + "-wrapper",
    children: /*#__PURE__*/_jsxs("div", {
      className: prefix + "-container",
      ref: containerRef,
      children: [children, mFooter()]
    })
  });
};

export default /*#__PURE__*/forwardRef(InfiniteScroll);