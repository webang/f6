"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
require("./index.less");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var prefix = (0, name_1.defineName)("space")[0];
var Space = function (_a) {
    var _b;
    var children = _a.children, _c = _a.wrap, wrap = _c === void 0 ? true : _c, _d = _a.direction, direction = _d === void 0 ? 'horizontal' : _d;
    var mCls = (0, classnames_1["default"])([prefix], (_b = {},
        _b["".concat(prefix, "-").concat(direction)] = true,
        _b["".concat(prefix, "-wrap")] = wrap,
        _b));
    var mChildren = react_1.Children.toArray(children).map(function (it) {
        return (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-item") }, { children: it }), void 0);
    });
    return (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: mCls }, { children: mChildren }), void 0);
};
exports["default"] = Space;
//# sourceMappingURL=index.js.map