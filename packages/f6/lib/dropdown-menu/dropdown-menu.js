"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var react_2 = require("react");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var name_1 = require("../utils/name");
var check_list_1 = (0, tslib_1.__importDefault)(require("../check-list"));
var prefix = (0, name_1.defineName)("dropdown-menu")[0];
var DropdownMenu = function (_a) {
    var onClickItem = _a.onClickItem, className = _a.className, onClose = _a.onClose, children = _a.children;
    var _b = (0, react_2.useState)({
        top: 0,
        current: undefined
    }), state = _b[0], setState = _b[1];
    var barRef = (0, react_2.useRef)(null);
    var mChildren = react_1["default"].Children.toArray(children);
    var updatePosition = function () {
        if (barRef.current) {
            var rect_1 = barRef.current.getBoundingClientRect();
            setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { top: rect_1.top + rect_1.height })); });
        }
    };
    (0, react_2.useEffect)(function () {
        updatePosition();
    }, []);
    (0, react_2.useEffect)(function () {
        window.addEventListener('scroll', updatePosition);
        return function () {
            window.removeEventListener('scroll', updatePosition);
        };
    }, [updatePosition]);
    var mCls = (0, classnames_1["default"])([className, prefix]);
    var maskStl = { top: state.top };
    var handleClick = function (i) {
        if (i === state.current) {
            setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { current: undefined })); });
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }
        else {
            setState(function (prev) { return ((0, tslib_1.__assign)((0, tslib_1.__assign)({}, prev), { current: i })); });
        }
    };
    var menus = mChildren.map(function (it, index) {
        var element = it;
        var style = {
            transform: "rotate(".concat(state.current == index ? 180 : 0, "deg)")
        };
        return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-item"), onClick: function () { return handleClick(index); } }, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-item-name") }, { children: element.props.title }), void 0), (0, jsx_runtime_1.jsx)(f6_icons_1["default"], { style: style, className: "".concat(prefix, "__icon"), name: "arrow-down" }, void 0)] }), void 0));
    });
    var renderAction = function () {
        return mChildren.map(function (it, index) {
            if (index !== state.current)
                return null;
            var element = it;
            return (element.props.actions || []).map(function (action) {
                return ((0, jsx_runtime_1.jsx)(check_list_1["default"].Item, (0, tslib_1.__assign)({ onClick: function () {
                        onClickItem === null || onClickItem === void 0 ? void 0 : onClickItem({
                            index: index,
                            action: action
                        });
                    }, value: action.value }, { children: action.name }), void 0));
            });
        });
    };
    var renderMask = function () {
        if (state.current === undefined)
            return null;
        return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__mask"), style: maskStl }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__content") }, { children: (0, jsx_runtime_1.jsx)(check_list_1["default"], { children: renderAction() }, void 0) }), void 0) }), void 0));
    };
    return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: mCls }, { children: [(0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ ref: barRef, className: "".concat(prefix, "-items") }, { children: menus }), void 0), renderMask()] }), void 0));
};
exports["default"] = DropdownMenu;
//# sourceMappingURL=dropdown-menu.js.map