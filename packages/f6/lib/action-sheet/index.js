"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
require("./index.less");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var popup_1 = (0, tslib_1.__importDefault)(require("../popup"));
var prefix = (0, name_1.defineName)("action-sheet")[0];
var ActionSheet = function (_a) {
    var className = _a.className, actions = _a.actions, visible = _a.visible, callback = _a.callback, title = _a.title, _b = _a.borderRadiusSize, borderRadiusSize = _b === void 0 ? 12 : _b, onClose = _a.onClose, _c = _a.cancelText, cancelText = _c === void 0 ? "cancel" : _c;
    var renderAction = function (it, index) {
        var content = typeof it.render === "function" ? (it.render()) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-item-name") }, { children: it.title }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-item-desc") }, { children: it.desc }), void 0)] }, void 0));
        return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ onClick: function () { return callback === null || callback === void 0 ? void 0 : callback(index); }, className: (0, classnames_1["default"])([
                "".concat(prefix, "-item"),
                "hairline-bottom",
                "".concat(prefix, "-action"),
            ]) }, { children: content }), index));
    };
    return ((0, jsx_runtime_1.jsx)(popup_1["default"], (0, tslib_1.__assign)({ style: {
            borderTopLeftRadius: borderRadiusSize,
            borderTopRightRadius: borderRadiusSize
        }, visible: visible, position: "bottom" }, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: (0, classnames_1["default"])([className, prefix]) }, { children: [title && ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: (0, classnames_1["default"])(["".concat(prefix, "-title"), "hairline-bottom"]) }, { children: title }), void 0)), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-items") }, { children: actions === null || actions === void 0 ? void 0 : actions.map(renderAction) }), void 0), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1["default"])(["".concat(prefix, "-gap")]) }, void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: (0, classnames_1["default"])(["".concat(prefix, "-item"), "".concat(prefix, "-action")]), onClick: function () { return onClose === null || onClose === void 0 ? void 0 : onClose(); } }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-item-name") }, { children: cancelText }), void 0) }), void 0)] }), void 0) }), void 0));
};
exports["default"] = ActionSheet;
//# sourceMappingURL=index.js.map