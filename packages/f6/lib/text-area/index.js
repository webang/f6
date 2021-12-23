"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var name_1 = require("../utils/name");
var react_1 = require("react");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var f6_icons_1 = (0, tslib_1.__importDefault)(require("f6-icons"));
var useValue_1 = require("../utils/useValue");
require("./index.less");
var prefix = (0, name_1.defineName)("textarea")[0];
var TextArea = function (props) {
    var placeholder = props.placeholder, _a = props.clearable, clearable = _a === void 0 ? true : _a, _b = props.rules, rules = _b === void 0 ? [] : _b, immediateCheck = props.immediateCheck, onFocus = props.onFocus, onChange = props.onChange, onBlur = props.onBlur, _c = props.validateOnBlur, validateOnBlur = _c === void 0 ? true : _c, _d = props.validateOnChange, validateOnChange = _d === void 0 ? true : _d, _e = props.resetErrorOnClear, resetErrorOnClear = _e === void 0 ? true : _e, _f = props.showCount, showCount = _f === void 0 ? true : _f, _g = props.autoSize, autoSize = _g === void 0 ? false : _g, restProps = (0, tslib_1.__rest)(props, ["placeholder", "clearable", "rules", "immediateCheck", "onFocus", "onChange", "onBlur", "validateOnBlur", "validateOnChange", "resetErrorOnClear", "showCount", "autoSize"]);
    var _h = (0, useValue_1.usePropsValue)({
        value: props.value,
        defaultValue: props.defaultValue || ""
    }), value = _h[0], setValue = _h[1];
    var _j = (0, react_1.useState)(""), error = _j[0], setError = _j[1];
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (immediateCheck) {
            doCheck(value);
        }
    }, [immediateCheck]);
    var mSetValue = function (val) {
        setValue(val);
        onChange === null || onChange === void 0 ? void 0 : onChange(val);
        if (validateOnChange) {
            doCheck(val);
        }
        if (resetErrorOnClear && val.length === 0) {
            setError("");
        }
    };
    (0, react_1.useEffect)(function () {
        if (!ref.current)
            return;
        if (!autoSize)
            return;
        var textArea = ref.current;
        textArea.style.height = "auto";
        var height = textArea.scrollHeight;
        textArea.style.height = "".concat(height, "px");
    }, [value]);
    var handleChange = function (e) {
        var nVal = e.target.value;
        mSetValue(nVal);
    };
    var handleFocus = function (e) {
        onFocus === null || onFocus === void 0 ? void 0 : onFocus();
    };
    var blurHandle = function () {
        onBlur === null || onBlur === void 0 ? void 0 : onBlur();
        if (validateOnBlur) {
            doCheck(value);
        }
    };
    var doCheck = function (val) {
        var rule = rules.find(function (it) { return it.test(val); });
        setError(rule ? rule.message : "");
    };
    var clearVal = function () {
        var _a;
        mSetValue("");
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var renderIcon = function () {
        return clearable &&
            !restProps.disabled &&
            !restProps.readOnly &&
            value.length ? ((0, jsx_runtime_1.jsx)(f6_icons_1["default"], { className: "".concat(prefix, "__clear"), name: "close-circle-o", onClick: clearVal }, void 0)) : null;
    };
    var renderInput = function () { return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: (0, classnames_1["default"])([prefix]) }, { children: [(0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__body") }, { children: [(0, jsx_runtime_1.jsx)("textarea", (0, tslib_1.__assign)({}, restProps, { ref: ref, className: "".concat(prefix, "__input"), value: value, placeholder: placeholder, onFocus: handleFocus, onBlur: blurHandle, onChange: handleChange }), void 0), renderIcon()] }), void 0), error && (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__error") }, { children: error }), void 0), value.length ? ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__count") }, { children: value.length }), void 0)) : null] }), void 0)); };
    return renderInput();
};
exports["default"] = TextArea;
//# sourceMappingURL=index.js.map