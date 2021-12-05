"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var context_1 = require("./context");
var Group = function (props) {
    var children = props.children, defaultValue = props.defaultValue, onChange = props.onChange;
    var _a = (0, react_1.useState)(defaultValue || null), value = _a[0], setValue = _a[1];
    var mSetValue = function (v) {
        setValue(v);
        if (v !== value) {
            onChange && onChange(v);
        }
    };
    return ((0, jsx_runtime_1.jsx)(context_1.RadioGroupContext.Provider, (0, tslib_1.__assign)({ value: {
            value: value,
            setValue: mSetValue
        } }, { children: children }), void 0));
};
exports["default"] = Group;
//# sourceMappingURL=group.js.map