"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var dom_1 = require("../utils/dom");
var react_1 = require("react");
var loading_1 = (0, tslib_1.__importDefault)(require("../loading"));
var name_1 = require("../utils/name");
require("./index.less");
var prefix = (0, name_1.defineName)("infinite-scroll")[0];
var InfiniteScroll = function (props, ref) {
    var lockRef = (0, react_1.useRef)({ isLocked: false });
    var wrapperRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var children = props.children, onLoad = props.onLoad, footer = props.footer, _a = props.loading, loading = _a === void 0 ? false : _a, _b = props.disabled, disabled = _b === void 0 ? true : _b;
    var finish = function () {
        lockRef.current.isLocked = false;
    };
    (0, react_1.useImperativeHandle)(ref, function () { return ({ finish: finish }); });
    (0, react_1.useEffect)(function () {
        var target = (0, dom_1.getScrollTarget)(wrapperRef.current);
        var handleScroll = function () {
            var isWin = target === window;
            var container = containerRef.current;
            var wrapperHeight = isWin
                ? target.innerHeight
                : target.offsetHeight;
            var scrollTop = isWin
                ? document.documentElement.scrollTop
                : target.scrollTop;
            var offsetHeight = isWin
                ? document.documentElement.offsetHeight
                : container.offsetHeight;
            // !TODO target 只能是当前容器 或者 window
            // 不然这里的 container 是错误的
            // console.log(offsetHeight, wrapperHeight, scrollTop);
            var bottomed = offsetHeight === wrapperHeight + scrollTop;
            if (!loading && !lockRef.current.isLocked && bottomed && !disabled) {
                onLoad && onLoad();
            }
        };
        target.addEventListener("scroll", handleScroll);
        return function () { return target.removeEventListener("scroll", handleScroll); };
    }, [props]);
    var mFooter = function () {
        if (footer)
            return footer({ loading: loading, disabled: disabled });
        if (loading) {
            return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { lineHeight: "40px", textAlign: "center" } }, { children: (0, jsx_runtime_1.jsx)(loading_1["default"], {}, void 0) }), void 0));
        }
        else {
            if (disabled) {
                return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { lineHeight: "40px", textAlign: "center" } }, { children: (0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ style: { color: "#ccc" } }, { children: "NO MORE" }), void 0) }), void 0));
            }
            else {
                return null;
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ ref: wrapperRef, className: "".concat(prefix, "-wrapper") }, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-container"), ref: containerRef }, { children: [children, mFooter()] }), void 0) }), void 0));
};
exports["default"] = (0, react_1.forwardRef)(InfiniteScroll);
//# sourceMappingURL=index.js.map