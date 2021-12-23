"use strict";
exports.__esModule = true;
exports.show = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var mountTo_1 = require("../utils/mountTo");
var _1 = (0, tslib_1.__importDefault)(require("."));
function show(props) {
    var _this = this;
    var instanceRef = (0, react_1.createRef)();
    var methods = {
        unmount: function () { },
        close: function () {
            var _a;
            (_a = instanceRef.current) === null || _a === void 0 ? void 0 : _a.close();
        },
        forceClose: function () {
            var _a;
            (_a = instanceRef.current) === null || _a === void 0 ? void 0 : _a.forceClose();
        }
    };
    var Wrapper = (0, react_1.forwardRef)(function (_, ref) {
        var _a = (0, react_1.useState)(false), visible = _a[0], setVisible = _a[1];
        (0, react_1.useEffect)(function () { return setVisible(true); }, []);
        function closeHandler() {
            if (props.onClose) {
                setVisible(!Boolean(props.onClose()));
                ;
            }
            else {
                setVisible(false);
            }
        }
        function forceClose() {
            setVisible(false);
        }
        (0, react_1.useImperativeHandle)(ref, function () { return ({
            close: closeHandler,
            forceClose: forceClose
        }); });
        return ((0, jsx_runtime_1.jsx)(_1["default"], (0, tslib_1.__assign)({}, props, { visible: visible, onCancel: function () { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
                var _a;
                return (0, tslib_1.__generator)(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, ((_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props))];
                        case 1:
                            _b.sent();
                            methods.close();
                            return [2 /*return*/];
                    }
                });
            }); }, onOk: function () { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
                var _a;
                return (0, tslib_1.__generator)(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, ((_a = props.onOk) === null || _a === void 0 ? void 0 : _a.call(props))];
                        case 1:
                            _b.sent();
                            methods.close();
                            return [2 /*return*/];
                    }
                });
            }); }, onClosed: function () {
                methods.unmount();
            } }), void 0));
    });
    methods.unmount = (0, mountTo_1.mountTo)((0, jsx_runtime_1.jsx)(Wrapper, { ref: instanceRef }, void 0));
    return {
        close: methods.close,
        forceClose: methods.forceClose
    };
}
exports.show = show;
//# sourceMappingURL=show.js.map