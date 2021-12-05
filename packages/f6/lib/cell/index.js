"use strict";
exports.__esModule = true;
exports.CellGroup = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var name_1 = require("../utils/name");
require("./index.less");
var prefix = (0, name_1.defineName)("cell")[0];
var Cell = function (_a) {
    var _b;
    var className = _a.className, title = _a.title, label = _a.label, value = _a.value, link = _a.link, onClick = _a.onClick, icon = _a.icon, _c = _a.border, border = _c === void 0 ? true : _c, _d = _a.bodyStyle, bodyStyle = _d === void 0 ? {} : _d;
    var mCls = (0, classnames_1["default"])([prefix, className], (_b = {},
        _b["".concat(prefix, "--border")] = border,
        _b["hairline"] = border,
        _b));
    var handleClick = function (event) {
        onClick && onClick(event);
    };
    var renderIcon = function () {
        if (!icon)
            return null;
        return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__icon") }, { children: icon }), void 0));
    };
    var renderTitle = function () {
        if (!title && !icon)
            return null;
        return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: prefix + "__title" }, { children: [renderIcon(), (0, jsx_runtime_1.jsx)("span", { children: title }, void 0)] }), void 0));
    };
    return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: mCls, onClick: handleClick }, { children: [(0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__head") }, { children: [renderTitle(), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix + "__value" }, { children: value }), void 0), link && ((0, jsx_runtime_1.jsx)("img", { className: prefix + "__arrow", src: require("../svg/arrow_right.svg")["default"], alt: "" }, void 0))] }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__body"), style: bodyStyle }, { children: label && (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix + "__label" }, { children: label }), void 0) }), void 0)] }), void 0));
};
var CellGroup = function (_a) {
    var children = _a.children;
    var prefix = (0, name_1.defineName)("cell-group")[0];
    return (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix }, { children: children }), void 0);
};
exports.CellGroup = CellGroup;
Cell.Group = exports.CellGroup;
exports["default"] = Cell;
//# sourceMappingURL=index.js.map