"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var collapse_context_1 = require("./collapse-context");
var prefix = (0, name_1.defineName)('collapse')[0];
var Collapse = function (p) {
    var className = p.className, multiple = p.multiple, children = p.children, defaultOpenKeys = p.defaultOpenKeys;
    var mCls = (0, classnames_1["default"])([className, prefix]);
    var _a = (0, react_1.useState)(defaultOpenKeys ? defaultOpenKeys : []), openKeys = _a[0], setOpenKeys = _a[1];
    var check = function (val) {
        if (multiple) {
            setOpenKeys(function (prev) { return (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], prev, true), [val], false); });
        }
        else {
            setOpenKeys([val]);
        }
    };
    var uncheck = function (val) {
        if (multiple) {
            setOpenKeys(function (prev) { return prev.filter(function (it) { return it !== val; }); });
        }
        else {
            setOpenKeys([]);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: mCls }, { children: (0, jsx_runtime_1.jsx)(collapse_context_1.CollapseContext.Provider, (0, tslib_1.__assign)({ value: {
                openKeys: openKeys,
                check: check,
                uncheck: uncheck
            } }, { children: children }), void 0) }), void 0));
};
exports["default"] = Collapse;
//# sourceMappingURL=collapse.js.map