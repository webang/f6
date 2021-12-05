"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var prefix = (0, name_1.defineName)('keyboard')[0];
var Keyboard = function (_a) {
    var className = _a.className;
    var mCls = (0, classnames_1["default"])([className, prefix]);
    return ((0, jsx_runtime_1.jsx)("div", { className: mCls }, void 0));
};
exports["default"] = Keyboard;
//# sourceMappingURL=index.js.map