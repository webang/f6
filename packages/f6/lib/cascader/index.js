"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var popup_1 = (0, tslib_1.__importDefault)(require("../popup"));
var cascader_view_1 = (0, tslib_1.__importDefault)(require("./cascader-view"));
require("./index.less");
var button_1 = (0, tslib_1.__importDefault)(require("../button"));
var prefix = (0, name_1.defineName)("cascader")[0];
var getInitData = function (options, value) {
    if (value === void 0) { value = []; }
    var rValue = [];
    var columns = [options];
    var _loop_1 = function (i) {
        var val = value[i];
        var item = columns[i].find(function (it) { return it.value === val; });
        if (item) {
            rValue.push(item);
            if (i < value.length - 1) {
                columns.push(item.children || []);
            }
        }
        else {
            return { value: {
                    columns: [options],
                    value: []
                } };
        }
    };
    for (var i = 0; i < value.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return {
        columns: columns,
        value: rValue
    };
};
var Cascader = function (props) {
    var visible = props.visible, options = props.options, onClose = props.onClose, onConfirm = props.onConfirm;
    var _a = (0, react_1.useState)(0), current = _a[0], setCurrent = _a[1];
    var _b = (0, react_1.useState)([]), columns = _b[0], setColumns = _b[1];
    var _c = (0, react_1.useState)([]), selected = _c[0], setSelected = _c[1];
    (0, react_1.useEffect)(function () {
        var _a = getInitData(options, props.defaultValue), columns = _a.columns, value = _a.value;
        setColumns(columns);
        setSelected(value);
        setCurrent(columns.length - 1);
    }, []);
    var onClick = function (option, index) {
        var hasChild = option.children && option.children.length;
        if (!selected[index]) {
            setSelected(function (prev) { return (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], prev, true), [option], false); });
            if (hasChild) {
                setColumns(function (prev) { return (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], prev, true), [option.children], false); });
                setCurrent(index + 1);
            }
        }
        else {
            var mSelected = selected.map(function (it, i) { return (i === index ? option : it); }).filter(function (_, i) { return i <= index; });
            var mColumns = columns.filter(function (_, i) { return i <= index; });
            setSelected(mSelected);
            setCurrent(hasChild ? index + 1 : index);
            setColumns(hasChild ? (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], mColumns, true), [option.children], false) : mColumns);
        }
    };
    var renderChoose = function () {
        var choose = ((0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ onClick: function () { return setCurrent(columns.length - 1); }, className: "".concat(prefix, "__tab-item") }, { children: "\u8BF7\u9009\u62E9" }), void 0));
        return selected.length < columns.length ? choose : null;
    };
    var renderTabs = function () {
        var list = selected.map(function (it, index) {
            return ((0, jsx_runtime_1.jsx)("span", (0, tslib_1.__assign)({ onClick: function () { return setCurrent(index); }, className: "".concat(prefix, "__tab-item") }, { children: it.label }), index));
        });
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "-header") }, { children: [(0, jsx_runtime_1.jsx)(button_1["default"], (0, tslib_1.__assign)({ fill: "none", onClick: function () { return onClose === null || onClose === void 0 ? void 0 : onClose(); } }, { children: "\u53D6\u6D88" }), void 0), (0, jsx_runtime_1.jsx)(button_1["default"], (0, tslib_1.__assign)({ fill: "none", onClick: function () { return onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(selected); } }, { children: "\u786E\u8BA4" }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__tab") }, { children: [list, renderChoose()] }), void 0)] }, void 0));
    };
    var views = columns.map(function (it, index) { return ((0, jsx_runtime_1.jsx)(cascader_view_1["default"], { style: { display: index === current ? "block" : "none" }, options: it, onClick: function (it) { return onClick(it, index); }, value: selected[index] }, index)); });
    return ((0, jsx_runtime_1.jsxs)(popup_1["default"], (0, tslib_1.__assign)({ position: "bottom", visible: visible }, { children: [renderTabs(), views] }), void 0));
};
exports["default"] = Cascader;
//# sourceMappingURL=index.js.map