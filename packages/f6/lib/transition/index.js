"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_transition_group_1 = require("react-transition-group");
require("./index.less");
var Transition = function (_a) {
    var type = _a.type, _in = _a["in"], timeout = _a.timeout, children = _a.children, _b = _a.appear, appear = _b === void 0 ? false : _b;
    return ((0, jsx_runtime_1.jsx)(react_transition_group_1.CSSTransition, (0, tslib_1.__assign)({ classNames: type, "in": _in, unmountOnExit: true, appear: appear, timeout: timeout }, { children: children }), void 0));
};
exports["default"] = Transition;
//# sourceMappingURL=index.js.map