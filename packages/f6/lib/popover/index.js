"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./index.less");
var react_dom_1 = (0, tslib_1.__importDefault)(require("react-dom"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var name_1 = require("../utils/name");
var prefix = (0, name_1.defineName)("popover")[0];
var Popover = function (_a) {
    var reference = _a.reference, children = _a.children, _b = _a.placement, placement = _b === void 0 ? "bottom" : _b, _c = _a.verticalDistance, verticalDistance = _c === void 0 ? 8 : _c, _d = _a.horizontalDistance, horizontalDistance = _d === void 0 ? 8 : _d, onClickTrigger = _a.onClickTrigger;
    var _e = (0, react_1.useState)(false), visible = _e[0], setVisible = _e[1];
    var _f = (0, react_1.useState)({ width: 0, height: 0, x: 0, y: 0 }), rect = _f[0], setRect = _f[1];
    var _g = (0, react_1.useState)({ width: 0, height: 0 }), contentSize = _g[0], setContentSize = _g[1];
    var triggerRef = (0, react_1.useRef)(null);
    var contentRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var findParent = function (node, target) {
            if (node === target) {
                return true;
            }
            while (node = node === null || node === void 0 ? void 0 : node.parentNode) {
                if (node === target) {
                    return true;
                }
            }
            return false;
        };
        function onClick(event) {
            if (!findParent(event.target, triggerRef.current)) {
                setVisible(function () { return false; });
            }
        }
        window.addEventListener('click', onClick);
        return function () {
            window.removeEventListener('click', onClick);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        if (triggerRef.current) {
            var rect_1 = triggerRef.current.getBoundingClientRect();
            setRect({
                width: rect_1.width,
                height: rect_1.height,
                y: rect_1.y + document.documentElement.scrollTop || 0,
                x: rect_1.x + document.documentElement.scrollLeft || 0
            });
            if (contentRef.current) {
                var rect_2 = contentRef.current.getBoundingClientRect();
                setContentSize({
                    width: rect_2.width,
                    height: rect_2.height
                });
            }
        }
    }, [visible]);
    var getContainer = function () {
        return document.body;
    };
    var getX = function (placement) {
        switch (placement) {
            case "bottom":
            case 'top':
                return "".concat(rect.x + (rect.width - contentSize.width) / 2, "px");
            case 'bottom-start':
            case 'top-start':
                return "".concat(rect.x, "px");
            case 'bottom-end':
            case 'top-end':
                return "".concat(rect.x - contentSize.width + rect.width, "px");
            case 'right':
            case 'right-end':
            case 'right-start':
                return "".concat(rect.x + rect.width + horizontalDistance, "px");
            case 'left':
            case 'left-end':
            case 'left-start':
                return "".concat(rect.x - contentSize.width - horizontalDistance, "px");
        }
    };
    var getY = function (placement) {
        switch (placement) {
            case 'bottom':
            case 'bottom-end':
            case 'bottom-start':
                return "".concat(rect.y + rect.height + verticalDistance, "px");
            case 'top':
            case 'top-end':
            case 'top-start':
                return "".concat(rect.y - contentSize.height - verticalDistance, "px");
            case 'left':
            case 'right':
                return "".concat(rect.y - (contentSize.height - rect.height) / 2, "px");
            case 'left-start':
            case 'right-start':
                return "".concat(rect.y, "px");
            case 'left-end':
            case 'right-end':
                return "".concat(rect.y - contentSize.height + rect.height, "px");
        }
    };
    var style = { left: getX(placement), top: getY(placement) };
    var portal = react_dom_1["default"].createPortal((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ ref: contentRef, className: (0, classnames_1["default"])([
            prefix + "__content",
            prefix + "--" + placement
        ]), style: style }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "wax-popover__arrow" }, void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "wax-popover__body" }, { children: children }), void 0)] }), void 0), getContainer());
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ ref: triggerRef, onClick: function () {
                    setVisible(function (prev) { return !prev; });
                }, className: prefix + "__trigger" }, { children: reference }), void 0), visible && portal] }, void 0));
};
exports["default"] = Popover;
//# sourceMappingURL=index.js.map