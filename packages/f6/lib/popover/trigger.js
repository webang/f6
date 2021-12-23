"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var Trigger = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(Trigger, _super);
    function Trigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trigger.prototype.render = function () {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: this.props.children }, void 0));
    };
    return Trigger;
}(react_1["default"].Component));
exports["default"] = Trigger;
//# sourceMappingURL=trigger.js.map