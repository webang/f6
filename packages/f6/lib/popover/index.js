"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = (0, tslib_1.__importStar)(require("react"));
require("./index.less");
var react_dom_1 = (0, tslib_1.__importDefault)(require("react-dom"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var name_1 = require("../utils/name");
var useValue_1 = require("../utils/useValue");
var trigger_1 = (0, tslib_1.__importDefault)(require("./trigger"));
var prefix = (0, name_1.defineName)("popover")[0];
var defaultProps = {
    trigger: "click",
    placement: "bottom",
    defaultVisible: false
};
var Popover = function (p, ref) {
    var props = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, defaultProps), p);
    var content = props.content, children = props.children, placement = props.placement, _a = props.verticalDistance, verticalDistance = _a === void 0 ? 8 : _a, _b = props.horizontalDistance, horizontalDistance = _b === void 0 ? 8 : _b;
    var _c = (0, useValue_1.usePropsValue)({
        value: props.visible,
        defaultValue: props.defaultVisible,
        onChange: props.onVisibleChange
    }), visible = _c[0], setVisible = _c[1];
    var _d = (0, react_1.useState)({ width: 0, height: 0, x: 0, y: 0 }), rect = _d[0], setRect = _d[1];
    var _e = (0, react_1.useState)({ width: 0, height: 0 }), contentSize = _e[0], setContentSize = _e[1];
    var contentRef = (0, react_1.useRef)(null);
    var triggerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var isParent = function (node, target) {
            if (node === target) {
                return true;
            }
            while ((node = node === null || node === void 0 ? void 0 : node.parentNode)) {
                if (node === target) {
                    return true;
                }
            }
            return false;
        };
        function onClick(event) {
            var triggerInstance = triggerRef.current;
            var element = react_dom_1["default"].findDOMNode(triggerInstance);
            if (element) {
                if (!isParent(event.target, element)) {
                    setVisible(false);
                }
            }
        }
        window.addEventListener("click", onClick);
        return function () {
            window.removeEventListener("click", onClick);
        };
    }, []);
    var initRect = function () {
        if (!triggerRef.current)
            return;
        var triggerInstance = triggerRef.current;
        var element = react_dom_1["default"].findDOMNode(triggerInstance);
        if (!element)
            return;
        var rect = element.getBoundingClientRect();
        setRect({
            width: rect.width,
            height: rect.height,
            y: rect.y + document.documentElement.scrollTop || 0,
            x: rect.x + document.documentElement.scrollLeft || 0
        });
        if (contentRef.current) {
            var rect_1 = contentRef.current.getBoundingClientRect();
            setContentSize({
                width: rect_1.width,
                height: rect_1.height
            });
        }
    };
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        resetPosition: initRect
    }); });
    (0, react_1.useEffect)(initRect, [visible]);
    var getContainer = function () {
        return document.body;
    };
    var getX = function (placement) {
        switch (placement) {
            case "bottom":
            case "top":
                return "".concat(rect.x + (rect.width - contentSize.width) / 2, "px");
            case "bottom-start":
            case "top-start":
                return "".concat(rect.x, "px");
            case "bottom-end":
            case "top-end":
                return "".concat(rect.x - contentSize.width + rect.width, "px");
            case "right":
            case "right-end":
            case "right-start":
                return "".concat(rect.x + rect.width + horizontalDistance, "px");
            case "left":
            case "left-end":
            case "left-start":
                return "".concat(rect.x - contentSize.width - horizontalDistance, "px");
        }
    };
    var getY = function (placement) {
        switch (placement) {
            case "bottom":
            case "bottom-end":
            case "bottom-start":
                return "".concat(rect.y + rect.height + verticalDistance, "px");
            case "top":
            case "top-end":
            case "top-start":
                return "".concat(rect.y - contentSize.height - verticalDistance, "px");
            case "left":
            case "right":
                return "".concat(rect.y - (contentSize.height - rect.height) / 2, "px");
            case "left-start":
            case "right-start":
                return "".concat(rect.y, "px");
            case "left-end":
            case "right-end":
                return "".concat(rect.y - contentSize.height + rect.height, "px");
        }
    };
    var style = { left: getX(placement), top: getY(placement) };
    var portal = react_dom_1["default"].createPortal((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: (0, classnames_1["default"])([prefix]), ref: contentRef, style: style }, { children: (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ style: p.contentStyle, className: (0, classnames_1["default"])([
                prefix + "__content",
                prefix + "--" + placement,
            ]) }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "wax-popover__arrow" }, void 0), (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "wax-popover__body" }, { children: content }), void 0)] }), void 0) }), void 0), getContainer());
    var clonedReference = react_1["default"].cloneElement(children, {
        onClick: function () {
            setVisible(!visible);
        }
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(trigger_1["default"], (0, tslib_1.__assign)({ ref: triggerRef }, { children: clonedReference }), void 0), visible && portal] }, void 0));
};
exports["default"] = (0, react_1.forwardRef)(Popover);
//# sourceMappingURL=index.js.map