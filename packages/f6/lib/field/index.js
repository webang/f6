"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var cell_1 = (0, tslib_1.__importDefault)(require("../cell"));
require("./index.less");
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var prefix = (0, name_1.defineName)("field")[0];
var Field = function (props) {
    var label = props.label, placeholder = props.placeholder, defaultValue = props.defaultValue, _a = props.clearable, clearable = _a === void 0 ? true : _a, _b = props.rules, rules = _b === void 0 ? [] : _b, immediateCheck = props.immediateCheck, _c = props.type, type = _c === void 0 ? "text" : _c, onFocus = props.onFocus;
    var _d = (0, react_1.useState)(defaultValue ? "".concat(defaultValue) : ""), value = _d[0], setValue = _d[1];
    var _e = (0, react_1.useState)(""), error = _e[0], setError = _e[1];
    (0, react_1.useEffect)(function () {
        if (immediateCheck) {
            doCheck(value);
        }
    }, [immediateCheck]);
    var handleChange = function (e) {
        var nVal = e.target.value;
        setValue(nVal);
        doCheck(nVal);
    };
    var handleFocus = function (e) {
        onFocus === null || onFocus === void 0 ? void 0 : onFocus();
    };
    var doCheck = function (val) {
        var rule = rules.find(function (it) { return it.test(val); });
        setError(rule ? rule.message : "");
    };
    var clearVal = function () { return setValue(""); };
    var renderIcon = function () {
        return clearable && value.length ? ((0, jsx_runtime_1.jsx)(f6_icons_1["default"], { name: "close-circle-o", onClick: clearVal }, void 0)) : null;
    };
    var input = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__body") }, { children: [(0, jsx_runtime_1.jsx)("input", { onFocus: handleFocus, value: value, onChange: handleChange, className: "".concat(prefix, "__input"), type: type, placeholder: placeholder }, void 0), renderIcon()] }), void 0), error && (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__error") }, { children: error }), void 0)] }, void 0));
    return (0, jsx_runtime_1.jsx)(cell_1["default"], { className: prefix, title: label, value: input }, void 0);
};
exports["default"] = Field;
//# sourceMappingURL=index.js.map