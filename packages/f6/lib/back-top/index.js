"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var dom_1 = require("../utils/dom");
var react_1 = require("react");
var name_1 = require("../utils/name");
require("./index.less");
var prefix = (0, name_1.defineName)('back-top')[0];
var BackTop = function (_a, ref) {
    var children = _a.children, _b = _a.distance, distance = _b === void 0 ? 10 : _b;
    var _c = (0, react_1.useState)(false), visible = _c[0], setVisible = _c[1];
    var updateVisible = function () {
        setVisible(function () { return (0, dom_1.getScrollTop)(window) > distance; });
    };
    var toTop = function () {
        document.documentElement.scrollTop = 0;
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('scroll', updateVisible);
        return function () {
            window.removeEventListener('scroll', updateVisible);
        };
    }, []);
    if (!visible)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix), onClick: toTop }, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__inner") }, { children: [(0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "arrow-up", className: "".concat(prefix, "__icon") }, void 0), children] }), void 0) }), void 0));
};
exports["default"] = (0, react_1.forwardRef)(BackTop);
//# sourceMappingURL=index.js.map