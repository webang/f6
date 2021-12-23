"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var cell_1 = (0, tslib_1.__importDefault)(require("../cell"));
var react_1 = require("react");
var name_1 = require("../utils/name");
var collapse_context_1 = require("./collapse-context");
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var prefix = (0, name_1.defineName)("collapse-item")[0];
var CollapseItem = function (p) {
    var name = p.name, title = p.title, className = p.className, children = p.children;
    var mCls = (0, classnames_1["default"])([className, prefix]);
    var context = (0, react_1.useContext)(collapse_context_1.CollapseContext);
    var contentRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)({ height: 0 }), state = _a[0], setState = _a[1];
    var isOpen = context === null || context === void 0 ? void 0 : context.openKeys.includes(name);
    var handleClick = function () {
        if (isOpen) {
            context === null || context === void 0 ? void 0 : context.uncheck(name);
        }
        else {
            context === null || context === void 0 ? void 0 : context.check(name);
        }
    };
    var bodyStyle = {
        height: isOpen ? state.height : 0,
        overflow: "hidden",
        transition: "all 300ms"
    };
    var iconStyle = {
        display: "inline-block",
        transform: "rotate(".concat(isOpen ? 180 : 0, "deg)"),
        transition: "all 300ms"
    };
    (0, react_1.useEffect)(function () {
        var _a;
        setState({
            height: ((_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: mCls }, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__head"), onClick: handleClick }, { children: (0, jsx_runtime_1.jsx)(cell_1["default"], { title: title, value: (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { className: "".concat(prefix, "__icon"), name: "arrow-down", style: iconStyle }, void 0) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__body"), style: bodyStyle }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__content"), ref: contentRef }, { children: children }), void 0) }), void 0)] }), void 0));
};
exports["default"] = CollapseItem;
//# sourceMappingURL=collapse-item.js.map