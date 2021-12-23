"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var RATIO = 0.3;
var SHORT_TOUCH = 250;
var VERTICAL = 'vertical';
var HORIZONTAL = 'horizontal';
var prefix = (0, name_1.defineName)('swipe')[0];
var Swipe = function (_a) {
    var children = _a.children, _b = _a.spaceBetween, spaceBetween = _b === void 0 ? 0 : _b;
    var _children = react_1.Children.toArray(children);
    var wrapperRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var onMount = function () {
        if (!wrapperRef.current)
            return;
        if (!containerRef.current)
            return;
        var wrapperEl = wrapperRef.current;
        var containerEl = containerRef.current;
        var _a = wrapperEl.getBoundingClientRect(), width = _a.width, height = _a.height;
    };
    (0, react_1.useEffect)(function () {
        onMount();
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: prefix }, { children: [_children[_children.length - 1], children, _children[0]] }), void 0));
};
exports["default"] = Swipe;
//# sourceMappingURL=swipe%20copy.js.map