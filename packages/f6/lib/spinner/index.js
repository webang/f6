"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var name_1 = require("../utils/name");
require("./index.less");
var spinner_lines_1 = (0, tslib_1.__importDefault)(require("./spinner-lines"));
var spinner_oval_1 = (0, tslib_1.__importDefault)(require("./spinner-oval"));
var spinner_crescent_1 = (0, tslib_1.__importDefault)(require("./spinner-crescent"));
var Spinner = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "crescent" : _b, className = _a.className, style = _a.style, size = _a.size;
    var prefix = (0, name_1.defineName)("spinner")[0];
    var mCls = (0, classnames_1["default"])([prefix, "".concat(prefix, "--").concat(type), className], {});
    var mStyle = (0, tslib_1.__assign)({}, (style || {}));
    var unitValue = typeof size === "number" ? "".concat(size, "px") : size;
    if (size) {
        Object.assign(mStyle, {
            width: unitValue,
            height: unitValue
        });
    }
    switch (type) {
        case "oval": {
            return (0, jsx_runtime_1.jsx)(spinner_oval_1["default"], { style: mStyle, className: mCls }, void 0);
        }
        case "lines": {
            return (0, jsx_runtime_1.jsx)(spinner_lines_1["default"], { style: mStyle, className: mCls }, void 0);
        }
        case "crescent":
            return (0, jsx_runtime_1.jsx)(spinner_crescent_1["default"], { style: mStyle, className: mCls }, void 0);
    }
};
exports["default"] = Spinner;
//# sourceMappingURL=index.js.map