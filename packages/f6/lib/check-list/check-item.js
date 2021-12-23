"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var context_1 = require("./context");
var prefix = (0, name_1.defineName)('check-list-item')[0];
var CheckListItem = function (p) {
    var _a;
    var children = p.children, value = p.value, disabled = p.disabled, onClick = p.onClick, renderIcon = p.renderIcon;
    var context = (0, react_1.useContext)(context_1.CheckListContext);
    if (!context)
        return null;
    var isChecked = (context === null || context === void 0 ? void 0 : context.value.includes(value)) || false;
    var handleClick = function () {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick();
        if (isChecked) {
            context.uncheck(value);
        }
        else {
            context.check(value);
        }
    };
    var mRenderIcon = function () {
        if (renderIcon) {
            return renderIcon(isChecked);
        }
        if (context.renderIcon) {
            return context.renderIcon(isChecked);
        }
        if (isChecked) {
            return (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "success3", style: { fontSize: 14 } }, void 0);
        }
    };
    var mCls = (0, classnames_1["default"])([prefix, 'hairline-bottom'], (_a = {},
        _a["".concat(prefix, "--disabled")] = disabled,
        _a["".concat(prefix, "--label-").concat(context.labelPosition)] = true,
        _a));
    return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: mCls, onClick: handleClick }, { children: [(0, jsx_runtime_1.jsx)("div", { children: children }, void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__icon") }, { children: mRenderIcon() }), void 0)] }), void 0));
};
exports["default"] = CheckListItem;
//# sourceMappingURL=check-item.js.map