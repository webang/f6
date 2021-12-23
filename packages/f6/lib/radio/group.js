"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var context_1 = require("./context");
var useValue_1 = require("../utils/useValue");
var defaultProps = {
    disabled: false,
    defaultValue: null
};
var Group = function (p) {
    var props = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, defaultProps), p);
    var children = props.children, disabled = props.disabled;
    var _a = (0, useValue_1.usePropsValue)(props), value = _a[0], setValue = _a[1];
    return ((0, jsx_runtime_1.jsx)(context_1.RadioGroupContext.Provider, (0, tslib_1.__assign)({ value: {
            value: value,
            setValue: setValue,
            disabled: disabled
        } }, { children: children }), void 0));
};
exports["default"] = Group;
//# sourceMappingURL=group.js.map