"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var useValue_1 = require("../utils/useValue");
var context_1 = require("./context");
var name_1 = require("../utils/name");
var defaultProps = {
    multiple: false,
    defaultValue: [],
    labelPosition: 'left'
};
var prefix = (0, name_1.defineName)('check-list')[0];
var CheckList = function (p) {
    var props = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, defaultProps), p);
    var children = props.children, multiple = props.multiple, renderIcon = props.renderIcon, labelPosition = props.labelPosition;
    var _a = (0, useValue_1.usePropsValue)(props), value = _a[0], setValue = _a[1];
    var check = function (val) {
        if (multiple) {
            setValue((0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], value, true), [val], false));
        }
        else {
            setValue([val]);
        }
    };
    var uncheck = function (val) {
        if (multiple) {
            setValue(value.filter(function (it) { return it !== val; }));
        }
        else {
            setValue([]);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix }, { children: (0, jsx_runtime_1.jsx)(context_1.CheckListContext.Provider, (0, tslib_1.__assign)({ value: {
                value: value,
                check: check,
                uncheck: uncheck,
                renderIcon: renderIcon,
                labelPosition: labelPosition
            } }, { children: children }), void 0) }), void 0));
};
exports["default"] = CheckList;
//# sourceMappingURL=check-list.js.map