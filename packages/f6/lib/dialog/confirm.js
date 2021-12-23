"use strict";
exports.__esModule = true;
exports.confirm = void 0;
var tslib_1 = require("tslib");
var show_1 = require("./show");
function confirm(props) {
    return new Promise(function (resolve, _) {
        return (0, show_1.show)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, props), { showCancelButton: true, showConfirmButton: true, appear: true, onCancel: function () {
                var _a;
                resolve(((_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props)) || 'cancel');
            }, onOk: function () {
                var _a;
                resolve(((_a = props.onOk) === null || _a === void 0 ? void 0 : _a.call(props)) || 'ok');
            } }));
    });
}
exports.confirm = confirm;
//# sourceMappingURL=confirm.js.map