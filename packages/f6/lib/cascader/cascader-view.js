"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var prefix = (0, name_1.defineName)("cascader-view")[0];
var CascaderView = function (props) {
    var _a = props.options, options = _a === void 0 ? [] : _a, onClick = props.onClick, _b = props.style, style = _b === void 0 ? {} : _b, value = props.value;
    var renderItem = function (it, index) {
        var _a, _b;
        var isChecked = value === it;
        var itemCls = (0, classnames_1["default"])((_a = {},
            _a['hairline'] = true,
            _a['border-b'] = true,
            _a["".concat(prefix, "-option")] = true,
            _a["".concat(prefix, "-selected")] = isChecked,
            _a));
        var labelCls = (0, classnames_1["default"])((_b = {},
            _b["".concat(prefix, "-label")] = true,
            _b["".concat(prefix, "-label-selected")] = isChecked,
            _b));
        return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(it); }, className: itemCls }, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: labelCls }, { children: it.label }), void 0), isChecked && (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { className: "".concat(prefix, "-option-icon"), name: "success3" }, void 0)] }), index));
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix, style: style }, { children: options.map(function (it, index) { return renderItem(it, index); }) }), void 0));
};
exports["default"] = CascaderView;
//# sourceMappingURL=cascader-view.js.map