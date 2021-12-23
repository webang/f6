"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
require("./index.less");
var react_transition_group_1 = require("react-transition-group");
var overlay_1 = (0, tslib_1.__importDefault)(require("../overlay"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var name_1 = require("../utils/name");
var prefix = (0, name_1.defineName)("popup");
var Popup = function (_a) {
    var children = _a.children, visible = _a.visible, _b = _a.animationDuration, animationDuration = _b === void 0 ? 300 : _b, _c = _a.position, position = _c === void 0 ? "bottom" : _c, _d = _a.style, style = _d === void 0 ? {} : _d, className = _a.className, onMaskClick = _a.onMaskClick;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(overlay_1["default"], { visible: visible, onClick: onMaskClick }, void 0), (0, jsx_runtime_1.jsx)(react_transition_group_1.CSSTransition, (0, tslib_1.__assign)({ classNames: "wax-slide-" + position, "in": visible, unmountOnExit: true, timeout: animationDuration }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ style: (0, tslib_1.__assign)((0, tslib_1.__assign)({}, style), { transitionDuration: "".concat(animationDuration, "ms") }), className: (0, classnames_1["default"])([prefix, className, prefix + "--" + position]) }, { children: children }), void 0) }), void 0)] }, void 0));
};
exports["default"] = Popup;
//# sourceMappingURL=index.js.map