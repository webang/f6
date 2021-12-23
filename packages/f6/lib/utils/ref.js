"use strict";
exports.__esModule = true;
exports.supportRef = void 0;
var supportRef = function (c) {
    if ("$$typeof" in c) {
        return c["$$typeof"] === "Symbol(react.forward_ref)";
    }
    return false;
};
exports.supportRef = supportRef;
//# sourceMappingURL=ref.js.map