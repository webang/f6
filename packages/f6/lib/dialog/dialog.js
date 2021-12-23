"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var overlay_1 = (0, tslib_1.__importDefault)(require("../overlay"));
var button_1 = (0, tslib_1.__importDefault)(require("../button"));
var name_1 = require("../utils/name");
require("./index.less");
var transition_1 = (0, tslib_1.__importDefault)(require("../transition"));
var prefix = (0, name_1.defineName)("dialog")[0];
var Dialog = function (_a) {
    var title = _a.title, content = _a.content, visible = _a.visible, _b = _a.showCancelButton, showCancelButton = _b === void 0 ? true : _b, _c = _a.showConfirmButton, showConfirmButton = _c === void 0 ? true : _c, _d = _a.animationDuration, animationDuration = _d === void 0 ? 250 : _d, _e = _a.okText, okText = _e === void 0 ? "ok" : _e, _f = _a.cancelText, cancelText = _f === void 0 ? "cancel" : _f, _g = _a.appear, appear = _g === void 0 ? false : _g, _h = _a.onOk, onOk = _h === void 0 ? function () { return false; } : _h, _j = _a.onCancel, onCancel = _j === void 0 ? function () { return false; } : _j, _k = _a.onClose, onClose = _k === void 0 ? function () { return true; } : _k, onClosed = _a.onClosed;
    var initRef = (0, react_1.useRef)({ state: false });
    (0, react_1.useEffect)(function () {
        if (initRef.current.state === false) {
            initRef.current.state = true;
            return;
        }
        var id = null;
        if (!visible) {
            id = setTimeout(function () {
                onClosed === null || onClosed === void 0 ? void 0 : onClosed();
            }, animationDuration);
        }
        return function () {
            if (id !== null)
                clearTimeout(id);
        };
    }, [visible]);
    var okHandler = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onOk()];
                case 1:
                    _a.sent();
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                    return [2 /*return*/];
            }
        });
    }); };
    var cancelHandler = function () { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onCancel()];
                case 1:
                    _a.sent();
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                    return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(overlay_1["default"], { visible: visible, timeout: animationDuration + 100 }, void 0), (0, jsx_runtime_1.jsx)(transition_1["default"], (0, tslib_1.__assign)({ type: "f6-scale-fade", appear: appear, "in": visible, timeout: animationDuration }, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: prefix, style: { transitionDuration: "".concat(animationDuration, "ms") } }, { children: [title && (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix + "__header" }, { children: title }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix + "__content" }, { children: content }), void 0), (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: (0, classnames_1["default"])([prefix + "__footer", "hairline"]) }, { children: [showCancelButton && ((0, jsx_runtime_1.jsx)(button_1["default"], (0, tslib_1.__assign)({ onClick: cancelHandler }, { children: cancelText }), void 0)), showConfirmButton && (0, jsx_runtime_1.jsx)(button_1["default"], (0, tslib_1.__assign)({ onClick: okHandler }, { children: okText }), void 0)] }), void 0)] }), void 0) }), void 0)] }, void 0));
};
exports["default"] = Dialog;
//# sourceMappingURL=dialog.js.map