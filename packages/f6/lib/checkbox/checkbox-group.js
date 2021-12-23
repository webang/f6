"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var checkbox_context_1 = require("./checkbox-context");
var Group = function (props) {
    var children = props.children, defaultValue = props.defaultValue, onChange = props.onChange;
    var _a = (0, react_1.useState)(defaultValue
        ? Array.isArray(defaultValue)
            ? defaultValue
            : [defaultValue]
        : []), value = _a[0], setValue = _a[1];
    var check = function (val) {
        setValue(function (prev) {
            var nVal = (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], prev, true), [val], false);
            onChange === null || onChange === void 0 ? void 0 : onChange(nVal);
            return nVal;
        });
    };
    var uncheck = function (val) {
        setValue(function (value) {
            var nVal = value.filter(function (item) { return item !== val; });
            onChange === null || onChange === void 0 ? void 0 : onChange(nVal);
            return nVal;
        });
    };
    return ((0, jsx_runtime_1.jsx)(checkbox_context_1.CheckboxGroupContext.Provider, (0, tslib_1.__assign)({ value: {
            value: value,
            check: check,
            uncheck: uncheck
        } }, { children: children }), void 0));
};
exports["default"] = Group;
//# sourceMappingURL=checkbox-group.js.map