"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
require("./index.less");
var react_transition_group_1 = require("react-transition-group");
var name_1 = require("../utils/name");
var prefix = (0, name_1.defineName)("overlay")[0];
var Overlay = function (_a) {
    var _b = _a.visible, visible = _b === void 0 ? false : _b, _c = _a.timeout, timeout = _c === void 0 ? 300 : _c, _d = _a.transitionName, transitionName = _d === void 0 ? "fade" : _d, children = _a.children, onClick = _a.onClick;
    var style = {
        transitionDuration: "".concat(timeout, "ms")
    };
    return ((0, jsx_runtime_1.jsx)(react_transition_group_1.CSSTransition, (0, tslib_1.__assign)({ "in": visible, timeout: timeout, classNames: transitionName, unmountOnExit: true }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, className: prefix, style: style }, { children: children }), void 0) }), void 0));
};
exports["default"] = Overlay;
//# sourceMappingURL=index.js.map