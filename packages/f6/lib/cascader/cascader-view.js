"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var prefix = (0, name_1.defineName)("cascader-view")[0];
var CascaderView = function (props) {
    var _a = props.options, options = _a === void 0 ? [] : _a, onClick = props.onClick, _b = props.style, style = _b === void 0 ? {} : _b;
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix, style: style }, { children: options.map(function (it) {
            return (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(it); }, className: "".concat(prefix, "-option") }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-label") }, { children: it.label }), void 0) }), void 0);
        }) }), void 0));
};
exports["default"] = CascaderView;
//# sourceMappingURL=cascader-view.js.map