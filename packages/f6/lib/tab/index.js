"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var name_1 = require("../utils/name");
require("./index.less");
var prefix = (0, name_1.defineName)("tab")[0];
var Tab = function (_a) {
    var children = _a.children, _b = _a.defaultValue, defaultValue = _b === void 0 ? 0 : _b;
    var _c = (0, react_1.useState)(defaultValue), current = _c[0], setCurrent = _c[1];
    var list = children;
    var renderContent = function () {
    };
    var renderTabs = function () {
        return list.map(function (it, index) {
            return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "wax-tab-item", onClick: function () {
                    setCurrent(index);
                } }, { children: (0, jsx_runtime_1.jsx)("span", { children: (it.props).title }, void 0) }), void 0));
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix }, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "wax-tab__wrap" }, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "wax-tab__list" }, { children: renderTabs() }), void 0), (0, jsx_runtime_1.jsx)("div", { className: "wax-tab__line", style: {
                        left: "".concat((current / list.length * 100), "%")
                    } }, void 0)] }), void 0) }), void 0));
};
var itemPrefix = "".concat(prefix, "-item");
var TabItem = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "" : _b;
    return (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: itemPrefix }, { children: title }), void 0);
};
Tab.TabItem = TabItem;
exports["default"] = Tab;
//# sourceMappingURL=index.js.map