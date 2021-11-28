"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var loading_1 = (0, tslib_1.__importDefault)(require("../loading"));
var name_1 = require("../utils/name");
require("./index.less");
var prefix = (0, name_1.defineName)('infinite-scroll')[0];
var _InfiniteScroll = function (_a, ref) {
    var children = _a.children, onLoad = _a.onLoad, footer = _a.footer, _b = _a.hasMore, hasMore = _b === void 0 ? true : _b;
    var wrapperRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        finish: function () {
            setLoading(false);
        }
    }); });
    (0, react_1.useEffect)(function () {
        var target = getScrollTarget(wrapperRef.current);
        var handleScroll = function () {
            var container = containerRef.current;
            var wrapperHeight = target === window
                ? target.innerHeight
                : target.offsetHeight;
            var scrollTop = target === window
                ? document.documentElement.scrollTop
                : target.scrollTop;
            var bottomed = container.offsetHeight === wrapperHeight + scrollTop;
            if (!loading && bottomed && hasMore) {
                setLoading(true);
                onLoad && onLoad();
            }
        };
        target.addEventListener('scroll', handleScroll);
        return function () {
            target.removeEventListener('scroll', handleScroll);
        };
    }, [loading, hasMore]);
    var getScrollTarget = function (element) {
        var currentElement = element;
        while (currentElement && ['HTML', 'BODY'].indexOf(currentElement.tagName) === -1) {
            var overflow = document.defaultView.getComputedStyle(currentElement).overflowY;
            if (['scroll', 'auto'].indexOf(overflow) !== -1) {
                return currentElement;
            }
            currentElement = currentElement.parentNode;
        }
        return window;
    };
    var mFooter = function () {
        if (footer)
            return footer({ loading: loading, hasMore: hasMore });
        if (loading) {
            return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { lineHeight: '40px', textAlign: 'center' } }, { children: (0, jsx_runtime_1.jsx)(loading_1["default"], {}, void 0) }), void 0));
        }
        else {
            if (hasMore) {
                return null;
            }
            else {
                return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: { lineHeight: '40px', textAlign: 'center' } }, { children: (0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ style: { color: '#ccc' } }, { children: "NO MORE" }), void 0) }), void 0));
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ ref: wrapperRef, className: "".concat(prefix, "-wrapper") }, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-container"), ref: containerRef }, { children: [children, mFooter()] }), void 0) }), void 0));
};
var InfiniteScroll = (0, react_1.forwardRef)(_InfiniteScroll);
exports["default"] = InfiniteScroll;
//# sourceMappingURL=index.js.map