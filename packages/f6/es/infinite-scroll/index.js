"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dom = require("../utils/dom");

var _react = require("react");

var _loading = _interopRequireDefault(require("../loading"));

var _name = require("../utils/name");

require("./index.css");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _defineName = (0, _name.defineName)("infinite-scroll"),
    prefix = _defineName[0];

var InfiniteScroll = function InfiniteScroll(props, ref) {
  var lockRef = (0, _react.useRef)({
    isLocked: false
  });
  var wrapperRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(null);
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

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      finish: finish
    };
  });
  (0, _react.useEffect)(function () {
    var target = (0, _dom.getScrollTarget)(wrapperRef.current);

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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          lineHeight: "40px",
          textAlign: "center"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_loading["default"], {})
      });
    } else {
      if (disabled) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            lineHeight: "40px",
            textAlign: "center"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
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

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: wrapperRef,
    className: prefix + "-wrapper",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: prefix + "-container",
      ref: containerRef,
      children: [children, mFooter()]
    })
  });
};

var _default = /*#__PURE__*/(0, _react.forwardRef)(InfiniteScroll);

exports["default"] = _default;