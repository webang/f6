"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var popup_1 = (0, tslib_1.__importDefault)(require("../popup"));
var cascader_view_1 = (0, tslib_1.__importDefault)(require("./cascader-view"));
require("./index.less");
var prefix = (0, name_1.defineName)("cascader")[0];
var Cascader = function (props) {
    var visible = props.visible, options = props.options;
    var _a = (0, react_1.useState)([options]), columns = _a[0], setColumns = _a[1];
    var _b = (0, react_1.useState)(0), current = _b[0], setCurrent = _b[1];
    var _c = (0, react_1.useState)([]), selected = _c[0], setSelected = _c[1];
    var onClick = function (option, index) {
        if (!selected[index]) {
            setSelected(function (prev) { return (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], prev, true), [option], false); });
            if (option.children && option.children.length) {
                setColumns(function (prev) { return (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], prev, true), [option.children || []], false); });
                setCurrent(index + 1);
            }
        }
        else {
            var list = selected.map(function (it, i) { return (i === index ? option : it); });
            list = list.filter(function (_, i) { return i <= index; });
            setSelected(list);
            {
                var list_1 = columns.filter(function (it, i) { return i <= index; });
                if (option.children && option.children.length) {
                    list_1.push(option.children || []);
                    setCurrent(index + 1);
                }
                setColumns(list_1);
            }
        }
    };
    var renderTabs = function () {
        var renderChoose = function () {
            var choose = ((0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ onClick: function () {
                    setCurrent(columns.length - 1);
                }, className: "".concat(prefix, "__tab-item") }, { children: "\u8BF7\u9009\u62E9" }), void 0));
            if (selected.length < columns.length) {
                return choose;
            }
            return null;
        };
        return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__tab") }, { children: [selected.map(function (it, index) {
                    return ((0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ onClick: function () {
                            setCurrent(index);
                        }, className: "".concat(prefix, "__tab-item") }, { children: it.label }), index));
                }), renderChoose()] }), void 0));
    };
    if (!visible)
        return null;
    return ((0, jsx_runtime_1.jsxs)(popup_1["default"], (0, tslib_1.__assign)({ position: "bottom", visible: visible }, { children: [renderTabs(), columns.map(function (it, index) { return ((0, jsx_runtime_1.jsx)(cascader_view_1["default"], { style: {
                    display: index === current ? "block" : "none"
                }, options: it, onClick: function (it) {
                    onClick(it, index);
                } }, index)); })] }), void 0));
};
exports["default"] = Cascader;
//# sourceMappingURL=index.js.map