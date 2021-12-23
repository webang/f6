"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var name_1 = require("../utils/name");
var context_1 = require("./context");
require("./index.less");
var useValue_1 = require("../utils/useValue");
var prefix = (0, name_1.defineName)('radio')[0];
var defaultProps = {
    disabled: false,
    defaultChecked: false,
    block: false
};
var Radio = function (p) {
    var _a;
    var props = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, defaultProps), p);
    var children = props.children, onChange = props.onChange, value = props.value, icon = props.icon, block = props.block, restProps = (0, tslib_1.__rest)(props, ["children", "onChange", "value", "icon", "block"]);
    var context = (0, react_1.useContext)(context_1.RadioGroupContext);
    var _b = (0, useValue_1.usePropsValue)({
        defaultValue: props.defaultChecked,
        value: props.checked,
        onChange: props.onChange
    }), checked = _b[0], setChecked = _b[1];
    var disabled = props.disabled;
    if (context && value !== undefined) {
        checked = context.value === props.value;
        if (context.disabled !== undefined) {
            disabled = disabled || context.disabled;
        }
    }
    var renderIcon = function () {
        if (icon) {
            return icon(checked);
        }
        else {
            return checked ? (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "success" }, void 0) : (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "circle" }, void 0);
        }
    };
    var handleClick = function () {
        if (disabled)
            return;
        if (context) {
            context.setValue(props.value || null);
        }
        else {
            setChecked(!checked);
        }
    };
    var mCls = (0, classnames_1["default"])([prefix], (_a = {},
        _a["".concat(prefix, "--checked")] = checked,
        _a["".concat(prefix, "--disabled")] = disabled,
        _a["".concat(prefix, "--block")] = block,
        _a));
    return ((0, jsx_runtime_1.jsxs)("label", (0, tslib_1.__assign)({ className: mCls }, restProps, { onClick: handleClick }, { children: [(0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: "".concat(prefix, "__icon") }, { children: renderIcon() }), void 0), (0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: "".concat(prefix, "__text") }, { children: children }), void 0)] }), void 0));
};
exports["default"] = Radio;
//# sourceMappingURL=radio.js.map