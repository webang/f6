"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var overlay_1 = (0, tslib_1.__importDefault)(require("../overlay"));
require("./index.less");
var button_1 = (0, tslib_1.__importDefault)(require("../button"));
var transition_1 = (0, tslib_1.__importDefault)(require("../transition"));
var name_1 = require("../utils/name");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var prefix = (0, name_1.defineName)("dialog")[0];
var _Dialog = function (_a, ref) {
    var title = _a.title, message = _a.message, _visible = _a.visible, _b = _a.showCancelButton, showCancelButton = _b === void 0 ? true : _b, _c = _a.showConfirmButton, showConfirmButton = _c === void 0 ? true : _c, _d = _a.animationDuration, animationDuration = _d === void 0 ? 250 : _d, _e = _a.okText, okText = _e === void 0 ? "确认" : _e, _f = _a.cancelText, cancelText = _f === void 0 ? "取消" : _f, _g = _a.appear, appear = _g === void 0 ? false : _g, onOk = _a.onOk, onCancel = _a.onCancel, afterClose = _a.afterClose;
    var _h = (0, react_1.useState)(_visible), visible = _h[0], setVisible = _h[1];
    (0, react_1.useEffect)(function () {
        if (!visible) {
            // 这个写法不够优雅
            var fn = function () { return afterClose && afterClose(); };
            setTimeout(fn, animationDuration);
        }
    }, [visible]);
    (0, react_1.useEffect)(function () {
        setVisible(_visible);
    }, [_visible]);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        show: function () { return setVisible(true); },
        close: function () { return setVisible(false); }
    }); });
    var handleClickOk = function () {
        if (onOk) {
            var res = onOk();
            if (res instanceof Promise) {
                res.then().then(function (res) {
                    setVisible(res);
                });
            }
            else {
                setVisible(res);
            }
        }
        else {
            setVisible(false);
        }
    };
    var handleClickCancel = function () {
        if (onCancel) {
            var res = onCancel();
            if (res instanceof Promise) {
                res.then().then(function (res) {
                    setVisible(res);
                });
            }
            else {
                setVisible(res);
            }
        }
        else {
            setVisible(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(overlay_1["default"], { visible: visible, timeout: animationDuration + 100 }, void 0), (0, jsx_runtime_1.jsx)(transition_1["default"], (0, tslib_1.__assign)({ type: "f6-scale-fade", appear: appear, "in": visible, timeout: animationDuration }, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: prefix, style: { transitionDuration: "".concat(animationDuration, "ms") } }, { children: [title && (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix + "__header" }, { children: title }), void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: prefix + "__content" }, { children: message }), void 0), (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: (0, classnames_1["default"])([prefix + "__footer", 'hairline']) }, { children: [showCancelButton && ((0, jsx_runtime_1.jsx)(button_1["default"], (0, tslib_1.__assign)({ onClick: handleClickCancel }, { children: cancelText }), void 0)), showConfirmButton && ((0, jsx_runtime_1.jsx)(button_1["default"], (0, tslib_1.__assign)({ onClick: handleClickOk }, { children: okText }), void 0))] }), void 0)] }), void 0) }), void 0)] }, void 0));
};
exports["default"] = (0, react_1.forwardRef)(_Dialog);
//# sourceMappingURL=dialog.js.map