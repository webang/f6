"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var flow_context_1 = require("./flow-context");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var prefix = (0, name_1.defineName)("flow")[0];
var defaultProps = {
    direction: 'horizontal',
    current: 0
};
var Flow = function (_a) {
    var _b;
    var children = _a.children, restProps = (0, tslib_1.__rest)(_a, ["children"]);
    var p = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, defaultProps), restProps);
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: (0, classnames_1["default"])([prefix], (_b = {},
            _b["".concat(prefix, "--").concat(p.direction)] = true,
            _b)) }, { children: (0, jsx_runtime_1.jsx)(flow_context_1.FlowContext.Provider, (0, tslib_1.__assign)({ value: p }, { children: children }), void 0) }), void 0));
};
exports["default"] = Flow;
//# sourceMappingURL=flow.js.map