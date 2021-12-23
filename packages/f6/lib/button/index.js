"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./index.less");
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
var name_1 = require("../utils/name");
var spinner_1 = (0, tslib_1.__importDefault)(require("../spinner"));
var prefix = (0, name_1.defineName)("button")[0];
var Button = function (_a) {
    var _b;
    var _c = _a.size, size = _c === void 0 ? "middle" : _c, _d = _a.color, color = _d === void 0 ? "default" : _d, _e = _a.shape, shape = _e === void 0 ? "default" : _e, _f = _a.fill, fill = _f === void 0 ? 'solid' : _f, _g = _a.block, block = _g === void 0 ? false : _g, _h = _a.loading, loading = _h === void 0 ? false : _h, _j = _a.disabled, disabled = _j === void 0 ? false : _j, className = _a.className, children = _a.children, title = _a.title, onClick = _a.onClick, restProps = (0, tslib_1.__rest)(_a, ["size", "color", "shape", "fill", "block", "loading", "disabled", "className", "children", "title", "onClick"]);
    var _k = (0, react_1.useState)(false), active = _k[0], setActive = _k[1];
    var cls = (0, classnames_1["default"])([
        prefix,
        className,
        "".concat(prefix, "--").concat(size),
        "".concat(prefix, "--").concat(color),
        "".concat(prefix, "--shape-").concat(shape),
        "".concat(prefix, "--fill-").concat(fill),
        (_b = {},
            _b["".concat(prefix, "--block")] = block,
            _b["".concat(prefix, "--active")] = active,
            _b["".concat(prefix, "--loading")] = loading,
            _b["".concat(prefix, "--disabled")] = disabled,
            _b),
    ]);
    var onMouseDown = function (event) {
        if (disabled || loading)
            return;
        setActive(true);
        restProps.onMouseDown && restProps.onMouseDown(event);
    };
    var onMouseUp = function (event) {
        if (disabled || loading)
            return;
        setActive(false);
        restProps.onMouseUp && restProps.onMouseUp(event);
    };
    return ((0, jsx_runtime_1.jsxs)("button", (0, tslib_1.__assign)({ onClick: onClick, onMouseDown: onMouseDown, onMouseUp: onMouseUp, className: cls }, restProps, { children: [loading && (0, jsx_runtime_1.jsx)(spinner_1["default"], { style: { width: '18px', height: '18px', marginRight: '4px' } }, void 0), (0, jsx_runtime_1.jsx)("div", { children: children || title }, void 0)] }), void 0));
};
exports["default"] = Button;
//# sourceMappingURL=index.js.map