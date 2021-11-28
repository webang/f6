"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var name_1 = require("../utils/name");
require("./index.less");
var spinner_1 = (0, tslib_1.__importDefault)(require("../spinner"));
var Loading = function (_a) {
    var _b;
    var _c = _a.vertical, vertical = _c === void 0 ? false : _c, _d = _a.spinnerType, spinnerType = _d === void 0 ? 'crescent' : _d, _e = _a.spinnerSize, spinnerSize = _e === void 0 ? '24' : _e, className = _a.className, children = _a.children, _f = _a.message, message = _f === void 0 ? 'Loading' : _f, restProps = (0, tslib_1.__rest)(_a, ["vertical", "spinnerType", "spinnerSize", "className", "children", "message"]);
    var prefix = (0, name_1.defineName)("loading")[0];
    var mCls = (0, classnames_1["default"])([prefix, className], (_b = {},
        _b["".concat(prefix, "--vertical")] = vertical,
        _b));
    return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: mCls }, restProps, { children: [(0, jsx_runtime_1.jsx)(spinner_1["default"], { className: "".concat(prefix, "__icon"), type: spinnerType, size: spinnerSize }, void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__text") }, { children: children || message }), void 0)] }), void 0));
};
exports["default"] = Loading;
//# sourceMappingURL=index.js.map