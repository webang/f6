"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var react_1 = require("react");
var name_1 = require("../utils/name");
require("./index.less");
var prefix = (0, name_1.defineName)("switch")[0];
var Switch = function (_a) {
    var _b, _c;
    var _d = _a.defaultValue, defaultValue = _d === void 0 ? false : _d, onChange = _a.onChange;
    var _e = (0, react_1.useState)(defaultValue), checked = _e[0], setChecked = _e[1];
    var handleClick = function () {
        setChecked(function (prev) {
            onChange && onChange(!prev);
            return !prev;
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: (0, classnames_1["default"])(prefix, (_b = {},
            _b["".concat(prefix, "--on")] = checked,
            _b)), onClick: handleClick }, { children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1["default"])("".concat(prefix, "-node"), (_c = {},
                _c["".concat(prefix, "-node--on")] = checked,
                _c)) }, void 0) }), void 0));
};
exports["default"] = Switch;
//# sourceMappingURL=index.js.map