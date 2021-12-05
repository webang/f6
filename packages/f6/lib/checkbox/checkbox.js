"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var react_1 = require("react");
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var name_1 = require("../utils/name");
var checkbox_context_1 = require("./checkbox-context");
var prefix = (0, name_1.defineName)('checkbox')[0];
var Checkbox = function (props) {
    var _a;
    var children = props.children, _b = props.defaultChecked, defaultChecked = _b === void 0 ? false : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, onChange = props.onChange, icon = props.icon, value = props.value, restProps = (0, tslib_1.__rest)(props, ["children", "defaultChecked", "disabled", "onChange", "icon", "value"]);
    var _d = (0, react_1.useState)(defaultChecked), checked = _d[0], setChecked = _d[1];
    var context = (0, react_1.useContext)(checkbox_context_1.CheckboxGroupContext);
    if (context && value !== undefined) {
        checked = context.value.includes(value);
    }
    var handleClick = function () {
        if (disabled)
            return;
        if (context && value !== undefined) {
            checked = context.value.includes(value);
            if (!checked) {
                context.check(value);
            }
            else {
                context.uncheck(value);
            }
        }
        else {
            setChecked(!checked);
            onChange && onChange(!checked);
        }
    };
    var renderIcon = function () {
        if (icon) {
            return typeof icon === 'function' ? icon(checked) : icon;
        }
        else {
            return checked ? (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "checkbox" }, void 0) : (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "checkbox_rect_outline", style: { color: '#666' } }, void 0);
        }
    };
    var mCls = (0, classnames_1["default"])([prefix], (_a = {},
        _a["".concat(prefix, "--checked")] = checked,
        _a["".concat(prefix, "--disabled")] = disabled,
        _a));
    return ((0, jsx_runtime_1.jsxs)("label", (0, tslib_1.__assign)({ className: mCls }, restProps, { onClick: handleClick }, { children: [(0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: "".concat(prefix, "__icon") }, { children: renderIcon() }), void 0), (0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ className: "".concat(prefix, "__text") }, { children: children }), void 0)] }), void 0));
};
exports["default"] = Checkbox;
//# sourceMappingURL=checkbox.js.map