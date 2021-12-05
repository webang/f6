"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var name_1 = require("../utils/name");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
require("./index.less");
var prefix = (0, name_1.defineName)("password-input")[0];
var PasswordInput = function (_a) {
    var className = _a.className, onChange = _a.onChange, _b = _a.count, count = _b === void 0 ? 6 : _b;
    var _c = (0, react_1.useState)(new Array(count).fill("")), state = _c[0], setValue = _c[1];
    var _d = (0, react_1.useState)(true), focus = _d[0], setFocus = _d[1];
    var _e = (0, react_1.useState)(0), cursorIndex = _e[0], setIndex = _e[1];
    var mRef = (0, react_1.useRef)(null);
    var mCls = (0, classnames_1["default"])([className, prefix, "hairline"]);
    var setCursorIndex = function (index) {
        if (index > state.length - 1 || index < -1) {
            setIndex(-1);
        }
        else {
            setIndex(index);
        }
    };
    var setState = function (val) {
        if (Array.isArray(val)) {
            setValue(val);
            onChange === null || onChange === void 0 ? void 0 : onChange(val);
        }
        if (typeof val === "function") {
            setValue(function (prev) {
                onChange === null || onChange === void 0 ? void 0 : onChange(val(prev));
                return val(prev);
            });
        }
    };
    var renderItem = function (index) {
        return ((0, jsx_runtime_1.jsxs)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__item hairline"), onClick: function () { return handleClick(index); } }, { children: [cursorIndex === index && (0, jsx_runtime_1.jsx)("span", { className: "".concat(prefix, "__cursor") }, void 0), state[index] && (0, jsx_runtime_1.jsx)("span", { className: "".concat(prefix, "__token") }, void 0), (0, jsx_runtime_1.jsx)("input", { type: "number", value: state[index], onChange: function (e) { return handleChange(index, e); }, className: "".concat(prefix, "__input"), maxLength: 1 }, void 0)] }), void 0));
    };
    (0, react_1.useEffect)(function () {
        doFocus(0);
    }, []);
    (0, react_1.useEffect)(function () {
        // 处理是否失焦
        var handleClick = function (e) {
            var p = e.target;
            while (p) {
                if (p === mRef.current) {
                    setFocus(true);
                    break;
                }
                p = p === null || p === void 0 ? void 0 : p.parentElement;
            }
            if (!p || p === document.body || p === document.documentElement) {
                setCursorIndex(-1);
                setFocus(false);
            }
        };
        // 处理 delete
        var callBack = function (e) {
            if (e.keyCode === 8) {
                if (!focus || cursorIndex === 0)
                    return;
                var index_1 = cursorIndex === -1 ? state.length - 1 : cursorIndex;
                index_1 = !state[index_1] ? index_1 - 1 : index_1;
                setState(function (prev) {
                    return prev.map(function (it, i) { return (i < index_1 ? it : ""); });
                });
                setCursorIndex(index_1);
                doFocus(index_1);
            }
        };
        window.addEventListener("click", handleClick);
        window.addEventListener("keyup", callBack);
        return function () {
            window.removeEventListener("click", handleClick);
            window.removeEventListener("keyup", callBack);
        };
    }, [setCursorIndex, cursorIndex, focus]);
    var handleClick = function (cur) {
        var index = getFirstIndex();
        if (index === -1) {
            startTo(cur);
        }
        else {
            if (cur <= index) {
                startTo(cur);
            }
            else {
                startTo(index);
            }
        }
    };
    var getInput = function (index) {
        return mRef.current
            ? mRef.current.querySelectorAll("input").item(index)
            : null;
    };
    var doFocus = function (index) {
        if (mRef.current) {
            var input = getInput(index);
            input === null || input === void 0 ? void 0 : input.focus();
        }
    };
    var startTo = function (index) {
        if (index === -1)
            return;
        setState(function (prev) {
            return prev.map(function (it, _index) {
                return _index >= index ? "" : it;
            });
        });
        setCursorIndex(index);
        doFocus(index);
    };
    // 获取第一个没有值的输入框索引
    var getFirstIndex = function () {
        return state.findIndex(function (it) { return !it; });
    };
    var handleChange = function (index, e) {
        var val = e.target.value.slice(0, 1);
        if (val) {
            setState(function (prev) {
                return prev.map(function (it, _index) {
                    return _index === index ? val : it;
                });
            });
            setCursorIndex(index + 1);
            doFocus(index + 1);
        }
        else {
            setState(function (prev) {
                return prev.map(function (it, _index) {
                    return _index === index ? val : it;
                });
            });
        }
    };
    var list = state.map(function (_, index) { return renderItem(index); });
    return ((0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: mCls, ref: mRef }, { children: (0, jsx_runtime_1.jsx)("div", (0, tslib_1.__assign)({ className: "".concat(prefix, "__list") }, { children: list }), void 0) }), void 0));
};
exports["default"] = PasswordInput;
//# sourceMappingURL=index.js.map