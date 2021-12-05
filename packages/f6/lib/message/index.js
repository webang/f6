"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
require("./index.less");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var prefix = (0, name_1.defineName)('message')[0];
var Message = function (_a) {
    var _b;
    var className = _a.className, _c = _a.type, type = _c === void 0 ? 'primary' : _c, children = _a.children, icon = _a.icon, _d = _a.link, link = _d === void 0 ? false : _d, restProps = (0, tslib_1.__rest)(_a, ["className", "type", "children", "icon", "link"]);
    var mCls = (0, classnames_1["default"])([
        prefix,
        "".concat(prefix, "--").concat(type),
        className
    ], (_b = {},
        _b["".concat(prefix, "--").concat(link)] = link,
        _b));
    var renderIcon = function () {
        if (icon)
            return icon;
        switch (type) {
            case "success":
                return (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "success", style: { fontSize: '18px' } }, void 0);
            case "danger":
            case "primary":
            case "warning":
                return (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "error" }, void 0);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: mCls }, restProps, { children: [(0, jsx_runtime_1.jsxs)("span", (0, tslib_1.__assign)({ className: "".concat(prefix, "__icon") }, { children: [" ", renderIcon(), " "] }), void 0), (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__body") }, { children: [(0, jsx_runtime_1.jsx)("div", { children: children }, void 0), link && ((0, jsx_runtime_1.jsx)(f6_icons_1["default"], { className: "".concat(prefix, "__link"), name: "arrow-right" }, void 0))] }), void 0)] }), void 0));
};
exports["default"] = Message;
//# sourceMappingURL=index.js.map