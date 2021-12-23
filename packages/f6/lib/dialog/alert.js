"use strict";
exports.__esModule = true;
exports.alert = void 0;
var tslib_1 = require("tslib");
var show_1 = require("./show");
function alert(props) {
    var _this = this;
    return new Promise(function (resolve, _) {
        return (0, show_1.show)((0, tslib_1.__assign)((0, tslib_1.__assign)({}, props), { showCancelButton: false, showConfirmButton: true, appear: true, onOk: function () { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
                var result;
                var _a;
                return (0, tslib_1.__generator)(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, ((_a = props.onOk) === null || _a === void 0 ? void 0 : _a.call(props))];
                        case 1:
                            result = (_b.sent()) || "ok";
                            resolve(result);
                            return [2 /*return*/];
                    }
                });
            }); } }));
    });
}
exports.alert = alert;
//# sourceMappingURL=alert.js.map